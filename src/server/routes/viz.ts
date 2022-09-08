import { Blob } from "buffer";
import { prisma } from "./../server";
import {
  PlotObj,
  DynamicFormEntry,
  ProcessedData,
  YearTaxonWorkFreqMap,
  YearWorkFreqMap,
  NormalisedWorkFreqMap,
  FlattenedData,
} from "./../../../types/types.d";
import { deserialize } from "../utils/utils";

export const getViz = async (req, res) => {
  let plotOccurrencePromises = [];
  let plotConfigs: Map<string, PlotObj> = deserialize(req.body.config);
  let authorTableFormPairs = new Map();
  let workTableFormPairs = new Map();
  let selectedAuthors = [];

  let labels = new Map();

  //assign uniqueLabel to configuration cache so we can use it later to fine-tune queries
  plotConfigs.forEach((plotConfig) => {
    // check for duplicate labels
    if (labels.has(plotConfig.label)) {
      // assign each object with a duplicate label, a unique label that has a concatinated count as an ID
      let uniqueLabel =
        plotConfig.label + "-" + (labels.get(plotConfig.label) + 1);

      plotConfig.uniqueLabel = uniqueLabel;
      labels.set(plotConfig.label, labels.get(plotConfig.label) + 1);
    } else {
      labels.set(plotConfig.label, 1);
    }
  });

  plotConfigs.forEach((plotConfig) => {
    authorTableFormPairs = new Map(
      Array.from(plotConfig.Author).map(
        (tableKey: [string, DynamicFormEntry]) => [
          tableKey[1].label,
          tableKey[1].value,
        ]
      )
    );
    workTableFormPairs = new Map(
      Array.from(plotConfig.Work).map(
        (tableKey: [string, DynamicFormEntry]) => [
          tableKey[1].label,
          tableKey[1].value,
        ]
      )
    );

    selectedAuthors =
      plotConfig.authors?.length > 0 ?? undefined
        ? Array.from(plotConfig.authors).map((authorObj) => authorObj?.label)
        : undefined;

    console.log(
      { plotConfigsSize: plotConfigs.size },
      plotConfig.label,
      { selectedAuthors },
      plotConfig.range,
      Array.from(authorTableFormPairs),
      Array.from(workTableFormPairs)
    );

    //TODO: find the reason why sometimes Dy is lower than dfty
    plotOccurrencePromises.push(
      // gets all occurrences for a plot label
      prisma.occurrence.findMany({
        where: {
          occId: plotConfig.label ?? undefined,
          work: {
            // object keys are guarded by returning undefined if the dynamic form value has not
            // -been selected.
            year: (plotConfig.range ?? undefined) && {
              gte: plotConfig.range[0] ?? undefined,
              lte: plotConfig.range[1] ?? undefined,
            },
            agePublication: (workTableFormPairs.get("agePublication") ??
              undefined) && {
              gte: workTableFormPairs.get("agePublication")?.[0] ?? undefined,
              lte: workTableFormPairs.get("agePublication")?.[1] ?? undefined,
            },
            literatureForm: (workTableFormPairs.get("literatureForm") ??
              undefined) && {
              has: workTableFormPairs.get("literatureForm"),
            },
            genreX: (workTableFormPairs.get("genreX") ?? undefined) && {
              has: workTableFormPairs.get("genreX"),
            },
            authors: {
              every: {
                gender: (authorTableFormPairs.get("gender") ?? undefined) && {
                  not: null,
                  equals: authorTableFormPairs.get("gender"),
                },
                mainRegion: (authorTableFormPairs.get("mainRegion") ??
                  undefined) && {
                  not: null,
                  equals: authorTableFormPairs.get("mainRegion"),
                },
                mainResidence: (authorTableFormPairs.get("mainResidence") ??
                  undefined) && {
                  not: null,
                  equals: authorTableFormPairs.get("mainResidence"),
                },
                authorY: {
                  in: selectedAuthors,
                },
              },
            },
          },
        },
        select: {
          occId: true,
          work: {
            select: {
              year: true,
              fileId: true,
            },
          },
        },
      })
    );
  });

  Promise.all(plotOccurrencePromises).then(async (dataPlotConfigs) => {
    //apply unique label to database responses incase defined
    let labels = new Map();
    dataPlotConfigs.forEach((dataPlotConfig) => {
      if (dataPlotConfig.length === 0) return res.status(500);

      let occId = dataPlotConfig[0]?.occId;

      // check for duplicate labels
      if (labels.has(occId)) {
        // assign each object with a duplicate label, a unique label that has a concatinated count as an ID
        let uniqueLabel = occId + "-" + (labels.get(occId) + 1);
        dataPlotConfig.map((data) => (data.occId = uniqueLabel));
        labels.set(occId, labels.get(occId) + 1);
      } else {
        labels.set(occId, 1);
      }
    });

    let flattenedData = dataPlotConfigs
      .flat(1)
      .map(({ work, ...allFlatConfigsOmittedWork }: any) => ({
        ...allFlatConfigsOmittedWork,
        year: work.year,
        fileId: work.fileId,
      }));

    let yearTaxonWorkFreqMap = new Map() as YearTaxonWorkFreqMap;
    let yearWorkFreqMap = new Map() as YearWorkFreqMap;
    let normalisedWorkFreqMap = new Map() as NormalisedWorkFreqMap;

    flattenedData.map((data: FlattenedData) => {
      if (data.year !== null) {
        // Here I create a custom key which can be rereferenced.
        // Using an object as a key here suffers from object referentiality
        let keyStringIKnowItsHacky = `${data.year} ${data.occId}`;
        yearTaxonWorkFreqMap.set(keyStringIKnowItsHacky, {
          year: new Date(Date.UTC(data.year, 1)),
          occId: data.occId,
          works: yearTaxonWorkFreqMap.get(keyStringIKnowItsHacky)?.works
            ? yearTaxonWorkFreqMap
                .get(keyStringIKnowItsHacky)
                .works.add(data.fileId)
            : new Set().add(data.fileId) as Set<string>
        });
      }
    });

    // get a list of all filtered works, not associated with a specific taxon
    const allWorks = await prisma.work.findMany({
      select: {
        year: true,
        fileId: true,
      },
    });

    allWorks.map((filteredWork) => {
      yearWorkFreqMap.set(
        filteredWork.year,
        yearWorkFreqMap.get(filteredWork.year)
          ? yearWorkFreqMap.get(filteredWork.year).add(filteredWork.fileId)
          : new Set().add(filteredWork.fileId) as Set<string>
      );
    });

    //normalise the tempMap
    yearTaxonWorkFreqMap.forEach(async (occurrencesInYearValue, key) => {
      let dfty = occurrencesInYearValue.works.size;
      let Dy = yearWorkFreqMap.get(
        occurrencesInYearValue.year.getFullYear()
      ).size;
      
      let formula = (Dy !== 0 ? (dfty / Dy) : 0);

      normalisedWorkFreqMap.set(key, {
        year: occurrencesInYearValue.year,
        occId: occurrencesInYearValue.occId,
        relativeLiteraryImportance: formula,
      });
    });

    let processedData: Array<ProcessedData> = Array.from(
      normalisedWorkFreqMap.values()
    ).sort((a, b) => a.year.getFullYear() - b.year.getFullYear());

    console.log("ProcessedData number of elements:", processedData.length);
    console.log(
      "ProcessedData size in KB:",
      new Blob(processedData as any).size / 1000
    );

    if (processedData.length === 0) {
      return;
    }

    return res.status(200).send(processedData);
  });
};

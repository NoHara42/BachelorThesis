import { Blob } from 'buffer';
import { prisma } from "./../server";
import {
  PlotObj,
  DynamicFormEntry,
  ProcessedData,
} from "./../../../types/types.d";
import { deserialize } from "../utils/utils";

export const getViz = async (req, res) => {
  let plotOccurrencePromises = [];
  let plotConfigs: Map<string, PlotObj> = deserialize(req.body.config);

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
    let authorTableFormPairs = new Map(
      Array.from(plotConfig.Author).map(
        (tableKey: [string, DynamicFormEntry]) => [
          tableKey[1].label,
          tableKey[1].value,
        ]
      )
    );
    let workTableFormPairs = new Map(
      Array.from(plotConfig.Work).map(
        (tableKey: [string, DynamicFormEntry]) => [
          tableKey[1].label,
          tableKey[1].value,
        ]
      )
    );

    let selectedAuthors =
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
                gender: authorTableFormPairs.get("gender") ?? undefined,
                mainRegion: authorTableFormPairs.get("mainRegion") ?? undefined,
                mainResidence:
                  authorTableFormPairs.get("mainResidence") ?? undefined,
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

  Promise.all(plotOccurrencePromises).then((dataPlotConfigs) => {
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

    type FlattenedData = {
      occId: string;
      year: number;
      fileId: string,
    };

    let tempMap = new Map();
    
    flattenedData.map((data: FlattenedData) => {
      if (data.year !== null) {
        // Here I create a custom key which can be rereferenced.
        // Using an object as a key here suffers from object referentiality
        let keyStringIKnowItsHacky = `${data.year} ${data.occId}`;
        tempMap.set(keyStringIKnowItsHacky, {
          year: new Date(Date.UTC(data.year, 1)),
          occId: data.occId,
          count: (tempMap.get(keyStringIKnowItsHacky)?.count ?? 0) + 1,
          works: (tempMap.get(keyStringIKnowItsHacky)?.works ? tempMap.get(keyStringIKnowItsHacky).works.add(data.fileId) : new Set()),
        });
      }
    });

    //normalise the tempMap
    tempMap.forEach(async (occurrencesInYearValue, key) => {
      tempMap.set(key, {
        year: occurrencesInYearValue.year,
        occId: occurrencesInYearValue.occId,
        relativeCount: ((occurrencesInYearValue.count) ** -1) * occurrencesInYearValue.works.size,
      })
    });

    let processedData: Array<ProcessedData> = Array.from(tempMap.values()).sort(
      (a, b) => a.year - b.year
    );

    console.log("ProcessedData number of elements:", processedData.length);
    console.log(
      "ProcessedData size in KB:",
      new Blob(processedData as any).size / 1000
    );

    if(processedData.length === 0) {
      return;
    }

    return res.status(200).send(processedData);
  });
};
import { prisma } from './../server';
import { PlotObj, DynamicFormEntry } from './../../../types/types.d';
import { deserialize } from "../utils/utils";

export type AllWorkFreqParams = {
  allConfigs: Map<any,any>,
  workFreqParams: WorkFreqParams,
}

export type WorkFreqParams = {
  year: number;
  label: string;
  isSortedAscending?: boolean;
};

export const getWorkFreq = async (req, res) => {
  let allParams: AllWorkFreqParams = deserialize(req.body.config) as AllWorkFreqParams;
  let {workFreqParams, allConfigs} = allParams;
  
  console.log(workFreqParams);
  

  // incase empty graph is clicked
  if (!workFreqParams.year || !workFreqParams.label) {
    return res.sendStatus(400);
  }

  type OccurrencesOfAWorkObj = {
    title: string;
    occurrences: [];
  };

  type ProcessedOccurrencesOfAWorkObj = {
    title: string;
    count: number;
  };

  let bookFreqData: Array<any>;

  // finds a plotConfig that contains the label provided when clicking on the graph
  // - grabs the uniquelabel if available
  let associatedPlotConfig: PlotObj = Array.from(allConfigs).find(
    (cachedPlotConfig) =>
      ((cachedPlotConfig && cachedPlotConfig[1]?.uniqueLabel) ??
        cachedPlotConfig[1]?.label) === workFreqParams.label
  )?.[1];

  if (associatedPlotConfig === undefined) {
    return res.sendStatus(500);
  }

  let authorTableFormPairs;
  if (associatedPlotConfig?.Author !== undefined) {
    authorTableFormPairs = new Map(
      Array.from(associatedPlotConfig.Author).map(
        (tableKey: [string, DynamicFormEntry]) => [
          tableKey[1].label,
          tableKey[1].value,
        ]
      )
    );
  } else authorTableFormPairs = new Map();

  let workTableFormPairs;
  if (associatedPlotConfig?.Work !== undefined) {
    workTableFormPairs = new Map(
      Array.from(associatedPlotConfig.Work).map(
        (tableKey: [string, DynamicFormEntry]) => [
          tableKey[1].label,
          tableKey[1].value,
        ]
      )
    );
  } else workTableFormPairs = new Map();
  
  let selectedAuthors;
  if(associatedPlotConfig?.authors !== undefined) {
      selectedAuthors = associatedPlotConfig.authors?.length > 0 ?? undefined
        ? Array.from(associatedPlotConfig.authors).map(
            (authorObj) => authorObj?.label
          )
        : undefined;
  } else selectedAuthors = undefined;
  

  const selectedOccurrencesOfWorks: Array<any> = await prisma.work.findMany({
    where: {
      year: Number(workFreqParams.year),
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
          mainResidence: (authorTableFormPairs.get("mainResidence") ?? undefined) && {
            not: null,
            equals: authorTableFormPairs.get("mainResidence"),
          },
          mainRegion: (authorTableFormPairs.get("mainRegion") ?? undefined) && {
            not: null,
            equals: authorTableFormPairs.get("mainRegion"),
          },
          gender: (authorTableFormPairs.get("gender") ?? undefined) && {
            not: null,
            equals: authorTableFormPairs.get("gender"),
          },
          authorY: {
            in: selectedAuthors,
          },
        },
      },
    },
    select: {
      title: true,
      occurrences: {
        where: {
          occId: associatedPlotConfig.label,
        },
      },
    },
  });
  
  bookFreqData = selectedOccurrencesOfWorks.map(
    (occurrencesOfAWorkObj: OccurrencesOfAWorkObj) =>
      occurrencesOfAWorkObj.occurrences.length === 0
        ? undefined
        : ({
            title: occurrencesOfAWorkObj.title,
            count: occurrencesOfAWorkObj.occurrences.length,
            year: workFreqParams.year,
            label: workFreqParams.label,
          } as ProcessedOccurrencesOfAWorkObj)
  );

  bookFreqData = bookFreqData.sort();

  bookFreqData =
    workFreqParams.isSortedAscending ?? false
      ? bookFreqData.sort((objA, objB) => objA.count - objB.count)
      : bookFreqData.sort((objA, objB) => objB.count - objA.count);
    
  return res.send(bookFreqData ?? null);
}
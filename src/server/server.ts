import { PrismaClient } from "../../prisma/generated/client/index";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Blob } from "buffer";

const expressApp = express();
const port = 3000;

const prisma = new PrismaClient({
  // log: ["query", "info", "warn", "error"],
});

expressApp.use(bodyParser.urlencoded({ extended: false }));
expressApp.use(bodyParser.json());

expressApp.use(express.static("dist"));

expressApp.use(
  cors({
    origin: [process.env.VITE_CLIENT_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["*"],
  })
);

expressApp.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function deserialize(serializedJavascript) {
  return eval("(" + serializedJavascript + ")");
}

type ProcessedData = {
  occId: string;
  year: Date;
  count: number;
};

type Author = {
  id: string;
  value: string;
  label: string;
};

type PlotObj = {
  label: string;
  authors: Array<Author>;
  range: Array<number>;
  Author: Map<string, DynamicFormEntry>;
  Work: Map<string, DynamicFormEntry>;
  uniqueLabel?: string;
};

type DynamicFormEntry = {
  label: string;
  type: string;
  value: string | [any] | any;
};

let configurationCache: Map<string, PlotObj>;

// Get the plots, find all occurrences by year
expressApp.post("/viz", (req, res) => {
  let plotOccurrencePromises = [];
  let plotConfigs: Map<string, PlotObj> = deserialize(req.body.config);
  configurationCache = plotConfigs;

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
      if (dataPlotConfig.length === 0) return;

      let occId = dataPlotConfig[0]?.occId;
      console.log(dataPlotConfig[0], occId);
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
      }));

    type FlattenedData = {
      occId: string;
      year: number;
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
        });
      }
    });

    let processedData: Array<ProcessedData> = Array.from(tempMap.values()).sort(
      (a, b) => a.year - b.year
    );

    console.log("ProcessedData number of elements:", processedData.length);
    console.log(
      "ProcessedData size in KB:",
      new Blob(processedData as any).size / 1000
    );

    res.send(processedData);
  });
});

type WorkFreqParams = {
  year: number;
  label: string;
  isSortedAscending?: boolean;
};

expressApp.post("/workfreq", async (req, res) => {
  let params: WorkFreqParams = deserialize(req.body.config) as WorkFreqParams;
  console.log(params);

  // incase empty graph is clicked
  if (!params.year || !params.label) {
    res.sendStatus(400);
    return;
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
  let associatedPlotConfig: PlotObj = Array.from(configurationCache).find(
    (cachedPlotConfig) =>
      ((cachedPlotConfig && cachedPlotConfig[1]?.uniqueLabel) ??
        cachedPlotConfig[1]?.label) === params.label
  )?.[1];

  let authorTableFormPairs;
  if (associatedPlotConfig.Author) {
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
  if (associatedPlotConfig.Work) {
    workTableFormPairs = new Map(
      Array.from(associatedPlotConfig.Work).map(
        (tableKey: [string, DynamicFormEntry]) => [
          tableKey[1].label,
          tableKey[1].value,
        ]
      )
    );
  } else workTableFormPairs = new Map();

  let selectedAuthors =
    associatedPlotConfig.authors?.length > 0 ?? undefined
      ? Array.from(associatedPlotConfig.authors).map(
          (authorObj) => authorObj?.label
        )
      : undefined;

  const selectedOccurrencesOfWorks: Array<any> = await prisma.work.findMany({
    where: {
      year: Number(params.year),
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
          mainResidence: authorTableFormPairs.get("mainResidence") ?? undefined,
          mainRegion: authorTableFormPairs.get("mainRegion") ?? undefined,
          gender: authorTableFormPairs.get("gender") ?? undefined,
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
            year: params.year,
            label: params.label,
          } as ProcessedOccurrencesOfAWorkObj)
  );

  bookFreqData = bookFreqData.sort();

  bookFreqData =
    params.isSortedAscending ?? false
      ? bookFreqData.sort((objA, objB) => objA.count - objB.count)
      : bookFreqData.sort((objA, objB) => objB.count - objA.count);

  bookFreqData.splice(100);

  res.send(bookFreqData ?? null);
});

type AssociatedMetadataParams = {
  year: number;
  title: string;
  label: string;
};
expressApp.post("/associatedmetadata", async (req, res) => {
  let params: AssociatedMetadataParams = deserialize(
    req.body.config
  ) as AssociatedMetadataParams;

  let relatedOccurrences = await prisma.occurrence.findMany({
    where: {
      occId: params.label,
      work: {
        is: {
          title: params.title,
          year: Number(params.year),
        },
      },
    },
    select: {
      sentence: true,
    },
  });
  relatedOccurrences = relatedOccurrences.splice(0, 100);

  let authorsOfRelatedWorks = await prisma.author.findMany({
    where: {
      works: {
        every: {
          title: params.title,
          year: Number(params.year),
        },
      },
    },
    distinct: ["author", "authorX", "authorY"],
  });

  let relatedWork = await prisma.work.findFirst({
    where: {
      title: params.title,
      year: Number(params.year),
    },
  });
  let relatedAuthors = authorsOfRelatedWorks.splice(0, 100);

  res.send({ relatedOccurrences, relatedAuthors, relatedWork });
});

expressApp.get("/taxons", async (req, res) => {
  const allTaxons = await prisma.taxon.findMany();

  // // dummy data for demo without local db
  // const allTaxons = [{
  //     occId: "dog",
  //     term: "Dog",
  //     scientificName: "Dogicus Maximus"
  //   },
  //   {
  //     occId: "cat",
  //     term: "Cat",
  //     scientificName: "Caticus Minimae"
  //   }
  // ]
  res.send(allTaxons);
});

expressApp.get("/authors", async (req, res) => {
  const allAuthors = await prisma.author.findMany({
    distinct: ["author", "authorX", "authorY"],
  });

  // // dummy data for demo without local db
  // const allAuthors = [
  //   {
  //     authorY: "Charles Dickens",
  //   },
  //   {
  //     authorY: "Goethe",
  //   }
  // ]
  res.send(allAuthors);
});

expressApp.get("/headers", async (req: any, res: any) => {
  //@ts-ignore
  let headers = await prisma._baseDmmf.typeAndModelMap[req.query.tableName]
    .fields;
  // let headers;

  // // dummy data
  // headers = [{
  //   name: "birth",
  //   type: "Int",
  //   isId: false,
  // },
  // {
  //   name: "death",
  //   type: "Int",
  //   isId: false,
  // },
  // {
  //   name: "religion",
  //   type: "String",
  //   isId: false,
  // }]
  res.send(headers);
});

expressApp.post("/distinct-column-values", async (req: any, res: any) => {
  let params: { columnName: string; tableName: string } = deserialize(
    req.body.config
  );
  const distinctColumnValues = await prisma[params.tableName]
    .findMany({
      select: {
        [params.columnName]: true,
      },
      distinct: [params.columnName],
    })
    ?.then((arr) => arr?.flatMap((obj) => obj[params.columnName]))
    .then((arr) => Array.from(new Set(arr)))
    .then((uniqueProcessedArray) => res.send(uniqueProcessedArray));
});

expressApp.post("/range-column-number-values", async (req: any, res: any) => {
  let params: { columnName: string; tableName: string } = deserialize(
    req.body.config
  );
  const rangeValues = await prisma[params.tableName].aggregate({
    _min: { [params.columnName]: true },
    _max: { [params.columnName]: true },
  });
  res.send(Object.values(rangeValues).map((key) => key[params.columnName]));
});

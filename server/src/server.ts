import { PrismaClient } from "../../prisma/generated/client";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Blob } from "buffer";
import fs from "fs";

const expressApp = express();
const port = 3000;

const prisma = new PrismaClient();

expressApp.use(bodyParser.urlencoded({ extended: false }));
expressApp.use(bodyParser.json());

expressApp.use(express.static("dist"));

expressApp.use(
  cors({
    origin: [process.env.CLIENT_URL],
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
};

type DynamicFormEntry = {
  label: string;
  type: string;
  value: string | [any] | any;
};

expressApp.post("/viz", (req, res) => {
  let plotOccurrencePromises = [];
  let plotConfigs: Map<string, PlotObj> = deserialize(req.body.config);
  // Get the plots, find all occurrences by year

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
    let selectedAuthors = !plotConfig.authors
      ? undefined
      : Array.from(plotConfig.authors).map((authorObj) => authorObj?.label);

    console.log(
      { plotConfigsSize: plotConfigs.size },
      plotConfig.label,
      { selectedAuthors },
      plotConfig.range,
      Array.from(authorTableFormPairs),
      Array.from(workTableFormPairs)
    );

    plotOccurrencePromises.push(
      // prisma.author.findMany({
      //   where: {
      //     gender: {
      //       equals: authorTableFormPairs.get("gender") ?? undefined,
      //     },
      //     mainRegion: {
      //       equals: authorTableFormPairs.get("mainRegion") ?? undefined,
      //     },
      //     mainResidence: {
      //       equals:
      //         authorTableFormPairs.get("mainResidence") ?? undefined,
      //     },
      //     authorY: {
      //       in: selectedAuthors,
      //     },
      //     works: {
      //       every: {
      //         year: plotConfig?.range
      //           ? {
      //               gte: plotConfig?.range[0] ?? undefined,
      //               lte: plotConfig?.range[1] ?? undefined,
      //             }
      //           : undefined,
      //         agePublication: workTableFormPairs.get("agePublication") && {
      //           gte: workTableFormPairs.get("agePublication")?.[0] ?? undefined,
      //           lte: workTableFormPairs.get("agePublication")?.[1] ?? undefined,
      //         },
      //         literatureForm: {
      //           equals: workTableFormPairs.get("literatureForm") ?? undefined,
      //         },
      //         genreX: {
      //           equals: workTableFormPairs.get("genreX") ?? undefined,
      //         },
      //         occurrences: {
      //           every: {
      //             occId: {
      //               equals: plotConfig?.label ?? undefined,
      //             }
      //           }
      //         }
      //       }
      //     },
      //   },
      //   select: {
      //     works: {
      //       select: {
      //         occurrences: {
      //           select: {
      //             occId: true
      //           },
      //         },
      //         year: true
      //       },
      //     },
      //   }
      // })

      // prisma.work.findMany({
      //   where: {
      //     year: plotConfig?.range
      //       ? {
      //           gte: plotConfig?.range[0] ?? undefined,
      //           lte: plotConfig?.range[1] ?? undefined,
      //         }
      //       : undefined,
      //     agePublication: workTableFormPairs.get("agePublication") && {
      //       gte: workTableFormPairs.get("agePublication")?.[0] ?? undefined,
      //       lte: workTableFormPairs.get("agePublication")?.[1] ?? undefined,
      //     },
      //     literatureForm: {
      //       equals: workTableFormPairs.get("literatureForm") ?? undefined,
      //     },
      //     genreX: {
      //       equals: workTableFormPairs.get("genreX") ?? undefined,
      //     },
      //     occurrences: {
      //       every: {
      //         occId: {
      //           equals: plotConfig?.label ?? undefined,
      //         }
      //       }
      //     },
      //     authors: {
      //       every: {
      //         gender: {
      //           equals: authorTableFormPairs.get("gender") ?? undefined,
      //         },
      //         mainRegion: {
      //           equals: authorTableFormPairs.get("mainRegion") ?? undefined,
      //         },
      //         mainResidence: {
      //           equals:
      //             authorTableFormPairs.get("mainResidence") ?? undefined,
      //         },
      //         authorY: {
      //           in: selectedAuthors,
      //         },
      //       },
      //     }
      //   },
      //   select: {
      //     occurrences: {
      //       select: {
      //         occId: true
      //       },
      //     },
      //     year: true
      //   }
      // })

      // gets all occurrences for a plot label
      prisma.occurrence.findMany({
        where: {
          occId: {
            equals: plotConfig?.label ?? undefined,
          },
          work: {
            year: plotConfig?.range
              ? {
                  gte: plotConfig?.range[0] ?? undefined,
                  lte: plotConfig?.range[1] ?? undefined,
                }
              : undefined,
            agePublication: workTableFormPairs.get("agePublication") && {
              gte: workTableFormPairs.get("agePublication")?.[0] ?? undefined,
              lte: workTableFormPairs.get("agePublication")?.[1] ?? undefined,
            },
            literatureForm: {
              equals: workTableFormPairs.get("literatureForm") ?? undefined,
            },
            genreX: {
              equals: workTableFormPairs.get("genreX") ?? undefined,
            },
            authors: {
              every: {
                gender: {
                  equals: authorTableFormPairs.get("gender") ?? undefined,
                },
                mainRegion: {
                  equals: authorTableFormPairs.get("mainRegion") ?? undefined,
                },
                mainResidence: {
                  equals:
                    authorTableFormPairs.get("mainResidence") ?? undefined,
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
            },
          },
        },
      })
    );
  });

  Promise.all(plotOccurrencePromises).then((dataPlotConfigs) => {
    
    // let flattenedData = dataPlotConfigs
    // .flat(2);
    
    // let flattenedData = dataPlotConfigs
    //   .flat(1)
    //   .map(({ occurrences, ...allFlatConfigsOmittedOccurrences }: any) => ({
    //     ...allFlatConfigsOmittedWork,
    //     occId: occurrences.occId,
    //   }));
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

  type OccurrencesOfAWorkObj = {
    title: string;
    occurrences: [];
  };

  type ProcessedOccurrencesOfAWorkObj = {
    title: string;
    count: number;
  };

  let bookFreqData: Array<any>;

    const selectedOccurrencesOfWorks: Array<any> = await prisma.work.findMany({
      where: {
        year: Number(params.year),
      },
      select: {
        title: true,
        occurrences: {
          where: {
            occId: params.label,
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

  let authorsOfRelatedWorks = await prisma.work.findMany({
    where: {
      title: params.title,
      year: Number(params.year),
    },
    include: {
      authors: true,
    },
  });
  let relatedAuthors = [
    ...authorsOfRelatedWorks.splice(0, 100).flatMap((value) => value.authors),
  ];

  res.send({ relatedOccurrences, relatedAuthors });
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
  const allAuthors = await prisma.author.findMany();

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
  const distinctColumnValues = await prisma[params.tableName].findMany({
    select: {
      [params.columnName]: true,
    },
    distinct: [params.columnName],
  });
  res.send(distinctColumnValues);
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

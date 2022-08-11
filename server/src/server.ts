import { PrismaClient } from "../../prisma/generated/client";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Blob } from "buffer";

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

expressApp.post("/viz", (req, res) => {
  let plotOccurrencePromises = [];
  let plotConfigs = deserialize(req.body.config);

  // Get the plots, find all occurrences by year

  plotConfigs.forEach((plotConfig) => {
    plotOccurrencePromises.push(
      //gets all occurrences for a plot label
      prisma.occurrence.findMany({
        where: { occId: plotConfig.label },
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
  }

  let bookFreqData : Array<any>;
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
      (occurrencesOfAWorkObj.occurrences.length === 0) ? undefined : {
        title: occurrencesOfAWorkObj.title,
        count: occurrencesOfAWorkObj.occurrences.length,
        year: params.year,
        label: params.label,
      } as ProcessedOccurrencesOfAWorkObj
  );

  bookFreqData = bookFreqData.sort()

  bookFreqData = (params.isSortedAscending ?? false)
  ? bookFreqData.sort((objA, objB) => objA.count - objB.count)
  : bookFreqData.sort((objA, objB) => objB.count - objA.count);

  bookFreqData.splice(100);

  res.send(bookFreqData);
});

type AssociatedMetadataParams = {
  year: number,
  title: string,
  label: string,
}
expressApp.post("/associatedmetadata", async (req, res) => {
  let params: AssociatedMetadataParams = deserialize(req.body.config) as AssociatedMetadataParams;

  let relatedOccurrences = await prisma.occurrence.findMany({
    where: {
      occId: params.label,
      work: {
        is: {
          title: params.title,
          year: Number(params.year)
        }
      }
    },
    select: {
      sentence: true
    }
  });

  relatedOccurrences = relatedOccurrences.splice(0, 100);

  let authorsOfRelatedWorks = await prisma.work.findMany({
    where: {
      title: params.title,
      year: Number(params.year),
    },
    include: {
      authors: true
    }
  });
  let relatedAuthors = [...authorsOfRelatedWorks.splice(0, 100).flatMap(value => value.authors)];

  res.send({relatedOccurrences, relatedAuthors});
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

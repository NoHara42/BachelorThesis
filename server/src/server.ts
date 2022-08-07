import { PrismaClient } from "../../prisma/generated/client";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import LineChart from "./LineChart";

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
    let processedData = Array.from(tempMap.values()).sort((a, b) => a.year - b.year);

    // let maxCount = processedData.reduce((acc = 0, current) => {
    //   console.log(acc, current.count);
      
    //   return Math.max(acc.count ?? acc, current.count) 
    // });
    // console.log(maxCount);
    
    // processedData = processedData.map(({count, ...data}) => ({...data, count: count / maxCount}));


    type ProcessedData = {
      occId: string;
      year: number;
      count: number;
    };
    
    import("d3").then((d3) => {
    return LineChart(d3, processedData, {
      width: req.body.viewport.width,
      height: req.body.viewport.height,
      x: (d: ProcessedData) => d.year,
      y: (d: ProcessedData) => d.count,
      z: (d: ProcessedData) => d.occId,
      yLabel: "Absolute no. of Occurrences",
    })}).then((chart) => {      
      res.send(chart);
    });
  });
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
  let headers = await prisma._baseDmmf.typeAndModelMap[req.query.tableName].fields;
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

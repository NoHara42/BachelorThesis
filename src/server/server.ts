import { PrismaClient } from './../../prisma/generated/client/index';
import { getRangeColumnNumberValues } from './routes/range-column-number-values';
import { getDistinctColumnValues } from './routes/distinct-column-values';
import { getHeaders } from './routes/headers';
import { getAuthors } from './routes/authors';
import { getTaxons } from './routes/taxons';
import { getAssociatedMetadata } from './routes/associated-metadata';
import { getWorkFreq } from './routes/work-freq';
import { getViz } from './routes/viz';
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const expressApp = express();
const port = 8080;


export const prisma = new PrismaClient({
  // log: ["query", "info", "warn", "error"],
});

expressApp.use(bodyParser.urlencoded({ extended: false }));
expressApp.use(bodyParser.json());


expressApp.use(cors());

expressApp.use("/bil-explorer", express.static("dist"));
expressApp.use("/bil-explorer", express.static("dist/assets"));

expressApp.listen(port, () => {
  console.log(`App Server listening on port ${port}`);
});

// Get the plots, find all occurrences by year
expressApp.post("/bil-explorer/api/viz", getViz);
expressApp.post("/bil-explorer/api/work-freq", getWorkFreq);
expressApp.post("/bil-explorer/api/associated-metadata", getAssociatedMetadata);
expressApp.get("/bil-explorer/api/taxons", getTaxons);
expressApp.get("/bil-explorer/api/authors", getAuthors);
expressApp.get("/bil-explorer/api/headers", getHeaders);
expressApp.post("/bil-explorer/api/distinct-column-values", getDistinctColumnValues);
expressApp.post("/bil-explorer/api/range-column-number-values", getRangeColumnNumberValues);

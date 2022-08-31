import { PrismaClient } from './../../prisma/generated/client/index';
import { getRangeColumnNumberValues } from './routes/range-column-number-values';
import { getDistinctColumnValues } from './routes/distinct-column-values';
import { getHeaders } from './routes/headers';
import { getAuthors } from './routes/authors';
import { getTaxons } from './routes/taxons';
import { getAssociatedMetadata } from './routes/associated-metadata';
import { getWorkFreq } from './routes/work-freq';
import { getViz } from './routes/viz';
import { PlotObj } from './../../types/types.d';
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const expressApp = express();
const port = 3000;


export const prisma = new PrismaClient({
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

// Get the plots, find all occurrences by year
expressApp.post("/viz", getViz);
expressApp.post("/work-freq", getWorkFreq);
expressApp.post("/associated-metadata", getAssociatedMetadata);
expressApp.get("/taxons", getTaxons);
expressApp.get("/authors", getAuthors);
expressApp.get("/headers", getHeaders);
expressApp.post("/distinct-column-values", getDistinctColumnValues);
expressApp.post("/range-column-number-values", getRangeColumnNumberValues);

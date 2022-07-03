import { PrismaClient } from '@prisma/client';
import Papa from 'papaparse';
import processWork from "./utils/processWork";
import processOccurrence from './utils/processOccurrence';
import { extractedAuthor } from './utils/types/authorType';
import { extractedWork } from './utils/types/workType';
import { occurrenceType } from './utils/types/occurrenceType';

const fs = require("fs");


const occurrencesFileName = '/home/nohaha/Git/Bachelor/data/validCorpus.csv';
const worksFileName = '/home/nohaha/Git/Bachelor/data/extCompDB.csv';
const sizeWorks = 13519;
const sizeOccurrences = 5733516;

const prisma = new PrismaClient();
const errorBuffer = [];
let countWorks = 0;
let countAuthors = 0;
let countOccurrence = 0;
let countTaxon = 0;

function processData(papaParseOptions, csvFileName) {
  
  let readableStream = fs.createReadStream(csvFileName);
  
  Papa.parse(readableStream, {
    ...papaParseOptions,
    complete: (result, file) => {
      console.log("Finished processing", csvFileName);
      if(errorBuffer.length > 0) {
        console.log("Errors:", file);
        console.log(errorBuffer);
      } else {
        console.log("No errors while processing.")
      }
    },
    error: (err, file) => {
      errorBuffer.push(err);
      console.error(err, file);
    }
  });
}


async function main() {
  //Insert all unique Taxons
  processData({
      encoding: "utf8",
      delimiter: ";",
      newline: '\n',
      quoteChar: "",
      escapeChar: "",
      header: true,
      transformHeader: (header, index) => {
        switch (index) {
          case 0:
            return "id";
          case 1:
            return "occId";
          case 2:
            return "term";
          case 3:
            return "scientificName";
          case 4:
            return "fileId"
          case 5:
            return "frameId";
          case 6:
            return "sentence";
          case 7:
            return "column";
          case 8:
            return "spalte";
          default:
            return header; 
        }
      },
      step: async (result, parser) => {
        let occurrenceData = occurrenceType(processOccurrence(result.data));
        let op = await prisma.taxon.createMany({
          data: {
            occId: occurrenceData.occId,
            term: occurrenceData.term,
            scientificName: occurrenceData.scientificName
          },
          skipDuplicates: true
        });
        countTaxon++;
        console.log(`Taxon insert percentage complete: ${(countTaxon / sizeOccurrences) * 100}`);
      },
      dynamicTyping: true,
      }, occurrencesFileName);

  // Insert all Occurrences
  processData({
    encoding: "utf8",
    delimiter: ";",
    newline: '\n',
    quoteChar: "",
    escapeChar: "",
    header: true,
    transformHeader: (header, index) => {
      switch (index) {
        case 0:
          return "id";
        case 1:
          return "occId";
        case 2:
          return "term";
        case 3:
          return "scientificName";
        case 4:
          return "fileId"
        case 5:
          return "frameId";
        case 6:
          return "sentence";
        case 7:
          return "column";
        case 8:
          return "spalte";
        default:
          return header; 
      }
    },
    step: async (result, parser) => {
      let op = await prisma.occurrence.create({
        data: occurrenceType(processOccurrence(result.data))
      });
      countOccurrence++;
      console.log(`Occurrence insert percentage complete: ${(countOccurrence / sizeOccurrences) * 100}`);
    },
    dynamicTyping: true,
    }, occurrencesFileName);

  // Insert all Works
  processData({
    step: async (result, parser) => {
      let processedData = processWork(result.data);
      let workData = extractedWork(processedData);
      
      let createWorks = await prisma.work.create({data: workData});

      countWorks++;
      console.log(`Total work insert percentage complete: ${(countWorks / sizeWorks) * 100}`);
    },
    transformHeader: (header, index) => {
      switch (index) {
        case 0:
          return "Author_y";
        case 1:
          return "fileId";
        case 13:
          return "Author_x";
        case 29:
          return "Region_x";
        case 32:
          return "Genre_x";
        case 38:
          return "completeFlag_x";
        case 39:
          return "Literary_period_x";
        case 54:
          return "Region_y";
        case 55:
          return "Literary_period_y";
        case 63:
          return "Genre_y";
        case 81:
          return "completeFlag_y";
        default:
          return header; 
      }
    },
    encoding: "utf8",
    delimiter: ",",
    header: true,
    dynamicTyping: true,
  }, worksFileName);
  
  // Insert all unique Authors
  processData({
    step: async (result, parser) => {
      let processedData = processWork(result.data);
      let authorData = extractedAuthor(processedData);
      
      let createAuthor = await prisma.author.createMany({
        data: authorData,
        skipDuplicates: true
      });

      countAuthors++;
      console.log(`Total author insert percentage complete: ${(countAuthors / sizeWorks) * 100}`);
    },
    transformHeader: (header, index) => {
      switch (index) {
        case 0:
          return "Author_y";
        case 1:
          return "fileId";
        case 13:
          return "Author_x";
        case 29:
          return "Region_x";
        case 32:
          return "Genre_x";
        case 38:
          return "completeFlag_x";
        case 39:
          return "Literary_period_x";
        case 54:
          return "Region_y";
        case 55:
          return "Literary_period_y";
        case 63:
          return "Genre_y";
        case 81:
          return "completeFlag_y";
        default:
          return header; 
      }
    },
    encoding: "utf8",
    delimiter: ",",
    header: true,
    dynamicTyping: true,
  }, worksFileName);
}

main()
.catch((e) => {
  console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);

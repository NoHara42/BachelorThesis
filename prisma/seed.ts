import { PrismaClient } from '@prisma/client';
import Papa from 'papaparse';
import processAuthor from "./utils/processAuthor";
import processOccurrence from './utils/processOccurrence';

const fs = require("fs");


let occurrencesFileName = '/home/nohaha/Git/Bachelor/data/validCorpus.csv';
let authorsFileName = '/home/nohaha/Git/Bachelor/data/extCompDB.csv';

const prisma = new PrismaClient();

const errorBuffer = [];

const sizeAuthor = 13519;

const sizeOccurrences = 5733516;


function processData(papaParseOptions, csvFileName) {
  
  let readableStream = fs.createReadStream(csvFileName);
  
  Papa.parse(readableStream, {
    ...papaParseOptions,
    complete: (result, file) => {
      console.log("Finished processing", file);
      if(errorBuffer.length != 0) {
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
  let occurenceLabel = "occurrence";
  let authorLabel = "author";
  let countOccurrence = 0;

  processData({
    encoding: "utf8",
    delimiter: ";",
    newline: "\n",
    header: true,
    transformHeader: (header, index) => {
      console.log(header,index);
      switch (index) {
        case 0:
          return "id";
        case 3:
          return "Scientific_Name";
        case 5:
          return "FrameId";
        case 7:
          return "Column";
        case 8:
          return "Spalte";
        default:
          return header; 
      }
    },
    step: async (result, parser) => {
      let op = await prisma[occurenceLabel].create({
        data: processOccurrence(result.data)
      });
      countOccurrence++;
      console.log(`Occurrence insert percentage complete: ${(countOccurrence / sizeOccurrences) * 100}`);
    },
    dynamicTyping: true,
    }, occurrencesFileName);

  let countAuthor = 0;
  
  processData({
    step: async (result, parser) => {
      let op = await prisma[authorLabel].create({
        data: processAuthor(result.data)
      });
      countAuthor++;
      console.log(`Author insert percentage complete: ${(countAuthor / sizeAuthor) * 100}`);
    },
    transformHeader: (header, index) => {
      console.log(header,index);
      switch (index) {
        case 0:
          return "Author_y";
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
    newline: "\n",
    header: true,
    dynamicTyping: true,
  }, authorsFileName);
  
}

main()
.catch((e) => {
  console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);

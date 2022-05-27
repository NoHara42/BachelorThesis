import { PrismaClient } from '@prisma/client';
import Papa from 'papaparse';
import processAuthor from './processAuthor';
import processOccurrence from './processOccurrence';

const fs = require("fs");
const async = require('async');

let occurrencesFileName = '/home/nohaha/Git/Bachelor/data/validCorpus.csv';
let authorsFileName = '/home/nohaha/Git/Bachelor/data/extCompDB.csv';

const prisma = new PrismaClient();

function processData(papaParseOptions, csvFileName, prismaModelName, useBuffering) {
  
  
  let dataStream = fs.createReadStream(csvFileName);
  const parseStream = Papa.parse(Papa.NODE_STREAM_INPUT, papaParseOptions);
  
  dataStream.pipe(parseStream);
  
  function preProcess(chunk) {
    if (prismaModelName == "author") return processAuthor(chunk);
    if (prismaModelName == "occurrence") return processOccurrence(chunk);
    console.error("There is no predefined preprocessing pipeline for this model");
  }

  let buffer = [];
  let errorBuffer = [];


  parseStream.on("data", async (chunk) => {
    console.count(`Processed ${prismaModelName}`);
    try {
      if(useBuffering) {
        buffer.push(preProcess(chunk));
        
        if(buffer.length >= 500) {        
          await prisma[prismaModelName].createMany({
            data: buffer
          }, true);
          console.count("Processed buffer");
          buffer = [];
        }
      } else {
        let preProcessedChunk = preProcess(chunk);
        await prisma[prismaModelName].create({
          data: preProcessedChunk
        });      
      }
    } catch (error) {
      errorBuffer.push(error);
    }
  });

  parseStream.on("error", (error) => {
    console.log(error);
  });

  parseStream.on("finish", () => {
    console.log("Finished processing", csvFileName);
    if(errorBuffer.length != 0) {
      console.log("Errors:", csvFileName);
      console.log(errorBuffer);
    } else {
      console.log("No errors while processing.")
    }
      
  });
}

async function main() {
  await processData({
    delimiter: ";",
    newline: "\n",
    header: true,
    dynamicTyping: true,
    }, occurrencesFileName, "occurrence", false);

  await processData({
    delimiter: ",",
    newline: "\n",
    header: true,
    dynamicTyping: true,
  }, authorsFileName, "author", false);
  
  
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);

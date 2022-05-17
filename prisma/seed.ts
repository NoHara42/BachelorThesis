import { PrismaClient } from '@prisma/client';
import Papa from 'papaparse';
const fs = require("fs");

let occurrencesFileName = '/home/nohaha/Git/Bachelor/data/validCorpus.csv';
let authorsFileName = '/home/nohaha/Git/Bachelor/data/extCompDB.csv';

const prisma = new PrismaClient();


function processData(papaParseOptions, csvFileName, prismaModelName) {
  let dataStream = fs.createReadStream(csvFileName);

  const parseStream = Papa.parse(Papa.NODE_STREAM_INPUT, papaParseOptions);
  
  dataStream.pipe(parseStream);

  parseStream.on("data", (chunk) => {
    console.log(chunk);
    prisma[prismaModelName].create({
      data: chunk
    });  
  });

  parseStream.on("finish", () => {
      console.log("Finished processing", csvFileName);
  });
}

async function main() {
  processData({
    delimiter: ";",
    newline: "\n",
    header: true,
    dynamicTyping: true,
    }, occurrencesFileName, "occurrence");

  processData({
    delimiter: ",",
    newline: "\n",
    header: true,
    dynamicTyping: true,
  }, authorsFileName, "author");
  
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);

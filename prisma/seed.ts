import { PrismaClient } from '@prisma/client';
const csvToJson = require('csvtojson');

const prisma = new PrismaClient();

let fileInputName = '../data/occurrences.csv';

async function main() {
  // csvToJson()
  // .fromFile(fileInputName)
  // .then(async (authorsJson)=>{
  //     await prisma.author.createMany({
  //       data: authorsJson,
  //     });
  // })


  const allAuthors = await prisma.author.findMany();
  const allOccurrences = await prisma.occurrence.findMany();
  
  console.dir(allAuthors, { depth: null });
  console.dir(allOccurrences, { depth: null });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);

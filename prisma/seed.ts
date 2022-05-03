import { PrismaClient } from '@prisma/client';
import occurrencesJson from '../lib/processOccurrences';
import authorsJson from '../lib/processAuthors';

const prisma = new PrismaClient();


async function main() {
  console.log(occurrencesJson);
  // await prisma.occurrence.createMany({
  //   data: {occurrencesJson}
  // });

  // const allAuthors = await prisma.author.findMany();
  // const allOccurrences = await prisma.occurrence.findMany();
  
  // console.dir(allAuthors, { depth: null });
  // console.dir(allOccurrences, { depth: null });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);

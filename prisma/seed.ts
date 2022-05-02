import { PrismaClient } from '@prisma/client';
import { authors } from '../data/authors';
import { occurrences } from '../data/occurrences';

const prisma = new PrismaClient();

async function main() {
  const allAuthors = await prisma.author.createMany({
    data: authors,
  });

  const allOccurrences = await prisma.occurrence.createMany({
    data: occurrences,
  });

  console.dir(allAuthors, { depth: null });
  console.dir(allOccurrences, { depth: null });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);

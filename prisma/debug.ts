import { PrismaClient } from "./generated/client";

const prisma = new PrismaClient();

async function main() {
  const debugAssociatedAuthors = await prisma.occurrence.findMany({
    select: {
      work: {
        select: {
          authors: true,
        }
      }
    }
  });

  const debugAssociatedWorks = await prisma.occurrence.findMany({
    select: {
      work: true
    }
  });

  console.log(debugAssociatedAuthors);
  console.log(debugAssociatedWorks);
  
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);

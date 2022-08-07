import { PrismaClient } from '../src/generated/client';

const prisma = new PrismaClient();

async function main() {
  const allOccurrences = await prisma.occurrence.updateMany({
    data: {
      
    }
  });
}

main()
.catch((e) => {
  console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);

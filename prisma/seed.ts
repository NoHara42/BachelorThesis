import { PrismaClient } from "./generated/client";
import Papa from "papaparse";
import processAuthorsAndWorks from "./utils/processAuthorsAndWork";
import processOccurrence from "./utils/processOccurrence";
import { extractedAuthor } from "./utils/types/authorType";
import { extractedWork } from "./utils/types/workType";
import { occurrenceType } from "./utils/types/occurrenceType";
import fs from "fs";

const occurrencesFileName = "/home/nohaha/Git/Bachelor/data/validCorpus.csv";
const worksFileName = "/home/nohaha/Git/Bachelor/data/extCompDB.csv";
const sizeWorks = 13519;
const sizeOccurrences = 5733516;

const prisma = new PrismaClient();
const errorBuffer = [];
let countWorks = 0;
let countAuthors = 0;
let countOccurrence = 0;

function processData(papaParseOptions, csvFileName) {
  return new Promise((resolve) => {
    let readableStream = fs.createReadStream(csvFileName);

    Papa.parse(readableStream, {
      ...papaParseOptions,
      complete: (result, file) => {
        console.log("Finished processing", csvFileName);
        if (errorBuffer.length > 0) {
          console.log("Errors:", file);
          console.log(errorBuffer);
        } else {
          console.log("No errors while processing.");
        }
        resolve(true);
      },
      error: (err, file) => {
        errorBuffer.push(err);
        console.error(err, file);
      },
    });
  });
}

async function main() {
  // Insert all Authors
  await processData(
    {
      step: (result, parser) => {
        parser.pause();
        let processedAuthorsAndWorks = processAuthorsAndWorks(result.data);
        let worksList = processedAuthorsAndWorks.Works;
        let authorData = extractedAuthor(processedAuthorsAndWorks);

        Promise.all(
          worksList.map(async (workId: string) => {
            return prisma.author.create({
              data: {
                ...authorData,
                works: {
                  connectOrCreate: {
                    where: {
                      fileId: workId,
                    },
                    create: {
                      fileId: workId,
                    },
                  },
                },
              },
            });
          })
        ).then(() => {
          if (countAuthors % 1000 == 0) {
            console.log(
              `Total author insert percentage complete: ${
                (countAuthors / sizeWorks) * 100
              }`
            );
          }
          countAuthors++;
          parser.resume();
        });
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
    },
    worksFileName
  );
  // get distinct authors
  const distinctAuthors = await prisma.author.findMany({
    distinct: ["author", "authorX", "authorY"]
  });

  const distinctIds = distinctAuthors.map((distinctAuthor) => distinctAuthor.id);

  //remove duplicate authors
  await prisma.author.deleteMany({
    where: {
      id: {
        notIn: distinctIds,
      }
    }
  });

  // update all Works with work Data
  await processData(
    {
      step: async (result, parser) => {
        parser.pause();
        let processedData = processAuthorsAndWorks(result.data);
        let workData = extractedWork(processedData);

        await prisma.work.update({
          where: {
            fileId: workData.fileId,
          },
          data: {
            ...workData
          }
        }).then(() => {
          if (countWorks % 1000 == 0) {
            console.log(
              `Total works insert percentage complete: ${
                (countWorks / sizeWorks) * 100
              }`
              );
            }
          countWorks++;
          parser.resume();
        });

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
    },
    worksFileName
  );

  // Insert all Occurrences
  await processData(
    {
      encoding: "utf8",
      delimiter: ";",
      newline: "\n",
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
            return "fileId";
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
        parser.pause();
        let occurrenceData = occurrenceType(processOccurrence(result.data));
        let { fileId, ...occurrenceDataOmitted } = occurrenceData;

        await prisma.occurrence
          .create({
            data: {
              ...occurrenceDataOmitted,
              work: {
                connectOrCreate: {
                  where: {
                    fileId: occurrenceData.fileId,
                  },
                  create: {
                    fileId: occurrenceData.fileId,
                  },
                },
              },
            },
          })
          .then(() => {
            if (countOccurrence % 1000 == 0) {
              console.log(
                `Occurrence insert percentage complete: ${
                  (countOccurrence / sizeOccurrences) * 100
                }`
              );
            }
            countOccurrence++;
            parser.resume();
          });
      },
      dynamicTyping: true,
    },
    occurrencesFileName
  );

  const distinctOccurrences = await prisma.occurrence.findMany({
    distinct: ["occId"],
  });

  const distinctTaxons = distinctOccurrences.map((distinctTaxon) => ({
    occId: distinctTaxon.occId,
    scientificName: distinctTaxon.scientificName,
    term: distinctTaxon.term,
  }));

  const uniqueTaxons = await prisma.taxon.createMany({
    data: distinctTaxons,
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);

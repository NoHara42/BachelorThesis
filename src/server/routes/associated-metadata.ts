import { deserialize } from '../utils/utils';
import { prisma } from './../server';
export type AssociatedMetadataParams = {
  year: number;
  title: string;
  label: string;
};

export const getAssociatedMetadata = async (req, res) => {
  let params: AssociatedMetadataParams = deserialize(
    req.body.config
  ) as AssociatedMetadataParams;

  let relatedOccurrences = await prisma.occurrence.findMany({
    where: {
      occId: params.label,
      work: {
        is: {
          title: params.title,
          year: Number(params.year),
        },
      },
    },
    select: {
      sentence: true,
    },
  });

  let relatedAuthors = await prisma.author.findMany({
    where: {
      works: {
        every: {
          title: params.title,
          year: Number(params.year),
        },
      },
    },
    distinct: ["author", "authorX", "authorY"],
  });

  let relatedWork = await prisma.work.findFirst({
    where: {
      title: params.title,
      year: Number(params.year),
    },
  });

  res.send({ relatedOccurrences, relatedAuthors, relatedWork });
}
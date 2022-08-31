import { prisma } from './../server';

export const getAuthors = async (req, res) => {
  const allAuthors = await prisma.author.findMany({
    distinct: ["author", "authorX", "authorY"],
  });
  
  res.send(allAuthors);
}
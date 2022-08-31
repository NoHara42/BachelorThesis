import fs from 'fs';
import { convertToCSV } from '../utils/utils';
import { prisma } from './../server';

export const getTaxons = async (req, res) => {
  const allTaxons = await prisma.taxon.findMany();

  // updates local file whenever this is run, so that the file that 
  // -includes metadata shared on github is alawys up-to-date
  fs.writeFile("unique-taxons.csv", convertToCSV(allTaxons), (err) => {
    if (err) {
      console.error(err);
    }
  });
  res.send(allTaxons);
}
// Reading the file using default
// fs npm package
let occurrencesFileName = '/home/nohaha/Git/Bachelor/data/occurrences.csv';
import Papa from 'papaparse';

const fs = require("fs");

const csvString = fs.readFileSync(occurrencesFileName, 'utf8');

let occurrencesJson = Papa.parse(csvString, {
  delimiter: ";",
  newline: "\n",
  header: true,
  dynamicTyping: true
}).data;

export default occurrencesJson;
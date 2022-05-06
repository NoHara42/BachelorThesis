import Papa from 'papaparse';
const fs = require('fs');

let authorsFileName = '/home/nohaha/Git/Bachelor/data/authorMetadata.csv';

const csvString = fs.readFileSync(authorsFileName, 'utf8');

let authorsJson = Papa.parse(csvString, {
  delimiter: ",",
  newline: "\n",
  header: true,
  dynamicTyping: true
}).data;

export default authorsJson;
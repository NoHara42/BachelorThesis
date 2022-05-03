// Reading the file using default
// fs npm package
let occurrencesFileName = '/home/nohaha/Git/Bachelor/data/occurrences.csv';

const fs = require("fs");

const csv = fs.readFileSync(occurrencesFileName);

const CSVToJSON = csv => {
  const lines = csv.split('\n');
  const keys = lines[0].split(';');
  keys[keys.indexOf('1000-Words-Frame')] = "FrameId";
  keys[keys.indexOf('Sentence\r')] = "Sentence";
  keys[keys.indexOf('Scientific Name')] = "Scientific_Name";

  return lines.slice(1).map(line => {
      return line.split(';').reduce((acc, cur, i) => {
          const toAdd = {};
          toAdd[keys[i]] = cur;
          return { ...acc, ...toAdd };
      }, {});
  });
};
const occurrencesJson = JSON.stringify(CSVToJSON(csv.toString()));

fs.writeFileSync('/home/nohaha/Git/Bachelor/data/occurrences.json', occurrencesJson);

export default occurrencesJson;
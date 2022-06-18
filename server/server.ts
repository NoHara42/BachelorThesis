const LineChart = require('./LineChart');
// import LineChart from './LineChart';
const dotenv = require('dotenv').config()
const express = require('express');
const expressApp = express();
const cors = require('cors');
const port = 3000;

expressApp.use(express.static('dist'));

let data = [
  { date: '2000-01-01', unemployment: 1.5, division: "bla" },
  { date: '2000-01-01', unemployment: 1.5, division: "asd" }
];

async function main() {
  expressApp.use(cors({
    origin: [
      process.env.CLIENT_URL,
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['*']
  }));

  expressApp.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  });

  expressApp.get('/viz', (req, res) => {
    let chart = new LineChart(data, {
      width: req.query.width,
      height: (req.query.height / 2),
      xFunc: d => d.date,
      yFunc: d => d.unemployment,
      zFunc: d => d.division,
      yLabel: "y axis",
      color: "teal",
    }).compute();
    res.send(chart);
  });
}

main();
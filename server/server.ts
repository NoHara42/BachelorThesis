const LineChart = require('./LineChart');
// import LineChart from './LineChart';
const expressApp = require('express')();
const cors = require('cors');
const port = 3000;

async function main() {

  expressApp.use(cors({
    origin: [
      'http://localhost:1234',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['*']
  }));

  expressApp.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })

  let data = [
    { date: '2000-01-01', unemployment: 1.5, division: "bla" },
    { date: '2000-01-01', unemployment: 1.5, division: "asd" }
  ];

  expressApp.get('/viz', (req, res) => {
    let chart = new LineChart(data, {
      width: req.query.width,
      xFunc: d => d.date,
      yFunc: d => d.unemployment,
      zFunc: d => d.division,
      yLabel: "y axis",
      height: 500,
      color: "teal",
    }).compute();
    res.send(chart);
  });
}

main();
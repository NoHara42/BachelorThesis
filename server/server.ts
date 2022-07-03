const { PrismaClient } = require("@prisma/client");
const LineChart = require('./LineChart');
const dotenv = require('dotenv').config()
const express = require('express');
const expressApp = express();
const cors = require('cors');
const port = 3000;

const prisma = new PrismaClient();

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

  expressApp.get('/taxons', async (req, res) => {
    const allTaxons = await prisma.taxon.findMany();
    res.send(allTaxons);
  });

  expressApp.get('/authors', async (req, res) => {
    const allAuthors = await prisma.author.findMany();
    res.send(allAuthors);
  });

  expressApp.get('/headers', async (req, res) => {
    let headers = await prisma._baseDmmf.typeAndModelMap[req.query.tableName].fields;    
    res.send(headers);
  });

}

main();
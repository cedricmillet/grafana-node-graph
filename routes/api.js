const express = require('express');
const router = express.Router();
const fs = require("fs");

//  GET /api/health
router.get('/health', (_, res) => res.status(200).json({status: "ok"}) );

//  GET /api/graph/fields
router.get('/graph/fields', function(_, res, next) {
  //  Read data from .json
  const fields = fs.readFileSync(`${__dirname}/../dataset/fields.json`).toString();
  //  Parse & return
  res.status(200).json(JSON.parse(fields));
});

//  GET /api/graph/data
router.get('/graph/data', function(_, res, next) {
  //  Read data from .json
  const data = fs.readFileSync(`${__dirname}/../dataset/data.json`).toString();
  //  Parse & return
  res.status(200).json(JSON.parse(data));
});

module.exports = router;

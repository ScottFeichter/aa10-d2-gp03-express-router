const express = require("express");

const colorsRouter = express.Router();

colorsRouter.get("/colors", (req, res) => {
  res.json(`GET / colors`);
});

colorsRouter.get("/colors/:name", (req, res) => {
  res.json(`GET /colors/:name`);
});

module.exports = colors;

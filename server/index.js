const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
const port = 3002;

const data = require("./api/data.json");

app.get("/", (req, res) => {
  res.json(data);
});

app.get("/:countryName", (req, res) => {
  const countryName = req.params.countryName;
  const country = data.find((country) => country.name === countryName);
  res.json(country);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

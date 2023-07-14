require("dotenv").config();
const express = require("express");
const cors = require("cors");
const volleyball = require("volleyball");
const app = express();
app.use(cors());
app.use(volleyball);
const db = require("./helpers/connection/connection");
const response = require("./helpers/response/response");
app.use(express.json());
const version = process.env.API_VERSION;

app.get(`/api/${version}/`, (req, res) => {
  response(res, 200, `API testing`, null);
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});

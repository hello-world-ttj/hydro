require("dotenv").config();
const express = require("express");
const cors = require("cors");
const volleyball = require("volleyball");
const app = express();
app.use(cors());
app.use(volleyball);
const response = require("./helpers/response/response");
const profile_controller = require("./controller/profile");
const banner_controller = require("./controller/banner");

app.use(express.json());
const version = process.env.API_VERSION;

app.get(`/api/${version}/`, (req, res) => {
  response(res, 200, `API testing`, null);
});

app.get(`/api/${version}/profile`, profile_controller);

app.get(`/api/${version}/banner`, banner_controller);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});

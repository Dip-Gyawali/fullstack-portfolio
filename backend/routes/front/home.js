const express = require("express");
const route = express.Router();
const {
  index,
  getPortfolio,
  getService,
  contactme,
} = require("../../controllers/homeController");

route.get("/", index);
route.get("/portfolio/:slug", getPortfolio);
route.get("/service/:slug", getService);
route.post("/send-message", contactme);

module.exports = route;

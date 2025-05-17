const express = require("express");
const route = express.Router();
const {
  index,
  show,
  create,
  destroy,
  edit,
} = require("../../controllers/portfolioCategoryController");

route.get("/", index);
route.get("/:id", show);
route.post("/", create);
route.delete("/:id", destroy);
route.put("/:id", edit);

module.exports = route;

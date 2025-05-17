const express = require("express");
const route = express.Router();
const { upload } = require("../../middleware/upload");
const {
  index,
  show,
  create,
  destroy,
  edit,
} = require("../../controllers/portfolioController");

route.get("/", index);
route.get("/:id", show);
route.post("/",upload.single("cover_img"), create);
route.delete("/:id", destroy);
route.put("/:id", upload.single("cover_img"), edit);

module.exports = route;

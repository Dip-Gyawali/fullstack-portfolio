const express = require("express");
const route = express.Router();
const { upload } = require("../../middleware/upload");
const {
  index,
  show,
  create,
  destroy,
  edit,
} = require("../../controllers/testimonialController");

route.get("/", index);
route.get("/:id", show);
route.post("/",upload.single("image"), create);
route.delete("/:id", destroy);
route.put("/:id",upload.single("image"),edit);

module.exports = route;

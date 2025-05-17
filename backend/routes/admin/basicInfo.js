const express = require("express");
const route = express.Router();
const path = require("path");
const { upload } = require("../../middleware/upload");
const {
  index,
  show,
  create,
  destroy,
  edit,
} = require("../../controllers/basicInfoController");

// Serve CV file
route.get("/cv/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, '..', 'uploads', filename);

  res.download(filePath, filename, err => {
    if (err) {
      console.error('Download error:', err);
      return res.status(404).json({ message: 'CV not found' });
    }
  });
});

route.get("/", index);
route.get("/:id", show);
route.post(
  "/",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "cover_image", maxCount: 1 },
    { name: "cv", maxCount: 1 }
  ]),
  create
);
route.delete("/:id", destroy);
route.put(
  "/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "cover_image", maxCount: 1 },
    { name: "cv", maxCount: 1 }
  ]),
  edit
);

module.exports = route;

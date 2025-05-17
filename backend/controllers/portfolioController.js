const fs = require("fs");
const path = require("path");
const Portfolio = require("../models/portfolioModel");
const mongoose = require("mongoose");

const index = async (req, res) => {
  const portfolio = await Portfolio.find({}).sort({ rank: 1 });
  res.status(200).json({ success: true, data: portfolio });
};

const show = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const portfolio = await Portfolio.findById(id);
  if (!portfolio) {
    return res
      .status(400)
      .json({ message: `Cannot Find Portfolio with ${id}` });
  }
  res.status(200).json(portfolio);
};

const create = async (req, res) => {
  const { title, category, client_name, link, desc,slug,rank } = req.body;
  const cover_img = req.file ? req.file.filename : null;

  try {
    let portfolio = await Portfolio.create({
      title,
      category,
      client_name,
      link,
      desc,
      slug,
      rank,
      cover_img,
    });
    res.status(201).json(portfolio);
  } catch (err) {
    res.status(400).json({ err: "Cannot Add New Portfolio" });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const portfolio = await Portfolio.findByIdAndDelete({ _id: id });
  if (!portfolio) {
    return res
      .status(400)
      .json({ message: `Cannot Find Portfolio with ${id}` });
  }
  res.status(200).json(portfolio);
};

const edit = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const existingPortfolio = await Portfolio.findById(id);
    if (!existingPortfolio) {
      return res
        .status(404)
        .json({ message: `Portfolio not found with ID ${id}` });
    }

    // Handle cover image update
    if (req.file) {
      const oldImage = existingPortfolio.cover_img;
      if (oldImage) {
        const imagePath = path.join(__dirname, "..", "uploads", oldImage);
        fs.unlink(imagePath, (err) => {
          if (err) console.error("Failed to delete old image:", err.message);
        });
      }
      req.body.cover_img = req.file.filename;
    }

    const updated = await Portfolio.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true, runValidators: true }
    );

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = {
  index,
  show,
  create,
  destroy,
  edit,
};

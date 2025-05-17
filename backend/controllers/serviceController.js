const fs = require("fs");
const path = require("path");
const Service = require("../models/serviceModel");
const mongoose = require("mongoose");

const index = async (req, res) => {
  const service = await Service.find({}).sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: service });
};

const show = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const service = await Service.findById(id);
  if (!service) {
    return res
      .status(400)
      .json({ message: `Cannot Find Service with ${id}` });
  }
  res.status(200).json(service);
};

const create = async (req, res) => {
  const { title, desc,excerpt,slug } = req.body;
  const cover_img = req.file ? req.file.filename : null;
  try {
    let service = await Service.create({ title, desc,excerpt,slug,cover_img  });
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({ err: "Cannot Add New Service" });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const service = await Service.findByIdAndDelete({ _id: id });
  if (!service) {
    return res
      .status(400)
      .json({ message: `Cannot Find Service with ${id}` });
  }
  res.status(200).json(service);
};

const edit = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const existingService = await Service.findById(id);
    if (!existingService) {
      return res
        .status(404)
        .json({ message: `Service not found with ID ${id}` });
    }

    if (req.file) {
      const oldImage = existingService.cover_img; 
      if (oldImage) {
        const imagePath = path.join(__dirname, "..", "uploads", oldImage);
        // Delete the old image
        fs.unlink(imagePath, (err) => {
          if (err) console.error("Failed to delete old image:", err.message);
        });
      }
      req.body.cover_img = req.file.filename; 
    }

    const updatedService = await Service.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json({message:"Service Updated",updatedService});
  } catch (err) {
    console.error("Error during edit:", err);
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

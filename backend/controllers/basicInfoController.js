const fs = require("fs");
const path = require("path");
const BasicInfo = require("../models/basicInfoModel");
const mongoose = require("mongoose");

const index = async (req, res) => {
  const basicInfo = await BasicInfo.find({}).sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: basicInfo });
};

const show = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const basicInfo = await BasicInfo.findById(id);
  if (!basicInfo) {
    return res
      .status(400)
      .json({ message: `Cannot Find BasicInfo with ${id}` });
  }
  res.status(200).json(basicInfo);
};

const create = async (req, res) => {
  const {
    name,
    facebook_link,
    linkedin_link,
    github_link,
    gitlab_link,
    insta_link,
    degree,
    phone_no,
    email,
    location,
    experience,
    summary,
    education,
    job_experience,
  } = req.body;
  const image = req.files?.image?.[0]?.filename || null;
  const cover_image = req.files?.cover_image?.[0]?.filename || null;
  const cv = req.files?.cv?.[0]?.filename || null;
  try {
    let basicInfo = await BasicInfo.create({
      name,
      facebook_link,
      linkedin_link,
      github_link,
      gitlab_link,
      insta_link,
      degree,
      phone_no,
      email,
      location,
      experience,
      summary,
      education,
      job_experience,
      image,
      cover_image,
      cv
    });
    res.status(201).json(basicInfo);
  } catch (err) {
    res.status(400).json({ err: "Cannot Add New BasicInfo" });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const basicInfo = await BasicInfo.findByIdAndDelete({ _id: id });
  if (!basicInfo) {
    return res
      .status(400)
      .json({ message: `Cannot Find BasicInfo with ${id}` });
  }
  res.status(200).json(basicInfo);
};

const edit = async (req, res) => {
  const { id } = req.params;
  
  // Validate Mongo ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    // Fetch the existing BasicInfo record
    const basicInfo = await BasicInfo.findById(id);
    if (!basicInfo) {
      return res.status(400).json({ message: `Cannot find BasicInfo with ID ${id}` });
    }

    const updates = { ...req.body };

    if (req.files?.image) {
      const oldImagePath = path.join(__dirname, "..", "uploads", basicInfo.image);
      if (basicInfo.image && fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath); 
      }
      updates.image = req.files.image[0].filename;
    }

    if (req.files?.cover_image) {
      const oldCoverImagePath = path.join(__dirname, "..", "uploads", basicInfo.cover_image);
      if (basicInfo.cover_image && fs.existsSync(oldCoverImagePath)) {
        fs.unlinkSync(oldCoverImagePath);
      }
      updates.cover_image = req.files.cover_image[0].filename;
    }

    if (req.files?.cv) {
      const oldCvPath = path.join(__dirname, "..", "uploads", basicInfo.cv);
      if (basicInfo.cv && fs.existsSync(oldCvPath)) {
        fs.unlinkSync(oldCvPath);
      }
      updates.cv = req.files.cv[0].filename;
    }

    const updatedBasicInfo = await BasicInfo.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedBasicInfo) {
      return res.status(404).json({ message: "BasicInfo not found" });
    }

    res.status(200).json(updatedBasicInfo);
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

const Category = require("../models/portfolioCatModel");
const mongoose = require("mongoose");

const index = async (req, res) => {
  const category = await Category.find({}).sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: category });
};

const show = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const category = await Category.findById(id);
  if (!category) {
    return res
      .status(400)
      .json({ message: `Cannot Find Category with ${id}` });
  }
  res.status(200).json(category);
};

const create = async (req, res) => {
  const { name} = req.body;
  try {
    let category = await Category.create({name});
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ err: "Cannot Add New Category" });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const category = await Category.findByIdAndDelete({ _id: id });
  if (!category) {
    return res
      .status(400)
      .json({ message: `Cannot Find Category with ${id}` });
  }
  res.status(200).json(category);
};

const edit = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const category = await Category.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!category) {
    return res.status(400).json({ message: `Cannot Find Category with ${id}` });
  }
  res.status(200).json(category);
};

module.exports = {
    index,
    show,
    create,
    destroy,
    edit,
};
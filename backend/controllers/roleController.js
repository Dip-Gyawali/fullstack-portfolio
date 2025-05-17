const Role = require("../models/roleModel");
const mongoose = require("mongoose");

const index = async (req, res) => {
  const role = await Role.find({}).sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: role });
};

const show = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const role = await Role.findById(id);
  if (!role) {
    return res
      .status(400)
      .json({ message: `Cannot Find Role with ${id}` });
  }
  res.status(200).json(role);
};

const create = async (req, res) => {
  const { name } = req.body;
  try {
    let role = await Role.create({ name });
    res.status(201).json(role);
  } catch (err) {
    res.status(400).json({ err: "Cannot Add New Role" });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const role = await Role.findByIdAndDelete({ _id: id });
  if (!role) {
    return res
      .status(400)
      .json({ message: `Cannot Find Role with ${id}` });
  }
  res.status(200).json(role);
};

const edit = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const role = await Role.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!role) {
    return res
      .status(400)
      .json({ message: `Cannot Find Role with ${id}` });
  }
  res.status(200).json(role);
};

module.exports = {
  index,
  show,
  create,
  destroy,
  edit,
};

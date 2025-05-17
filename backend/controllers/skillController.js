const Skill = require("../models/skillModel");
const mongoose = require("mongoose");

const index = async (req, res) => {
  const skill = await Skill.find({}).sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: skill });
};

const show = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const skill = await Skill.findById(id);
  if (!skill) {
    return res
      .status(400)
      .json({ message: `Cannot Find Skill with ${id}` });
  }
  res.status(200).json(skill);
};

const create = async (req, res) => {
  const { name, rating } = req.body;
  try {
    let skill = await Skill.create({ name, rating });
    res.status(201).json(skill);
  } catch (err) {
    res.status(400).json({ err: "Cannot Add New Skill" });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const skill = await Skill.findByIdAndDelete({ _id: id });
  if (!skill) {
    return res
      .status(400)
      .json({ message: `Cannot Find Skill with ${id}` });
  }
  res.status(200).json(skill);
};

const edit = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const skill = await Skill.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!skill) {
    return res
      .status(400)
      .json({ message: `Cannot Find Skill with ${id}` });
  }
  res.status(200).json(skill);
};

module.exports = {
  index,
  show,
  create,
  destroy,
  edit,
};

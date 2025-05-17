const Testimonial = require("../models/testimonialModel");
const mongoose = require("mongoose");

const index = async (req, res) => {
  try {
    const datas = await Testimonial.find({}).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: datas });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching testimonials", error: error.message });
  }
};

const show = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const datas = await Testimonial.findById(id);
  if (!datas) {
    return res
      .status(400)
      .json({ message: `Cannot Find Testimonial with ${id}` });
  }
  res.status(200).json(datas);
};

const create = async (req, res) => {
  const { testimonial_name, testimonial_designation, testimonial_message } =
    req.body;
  const image = req.file ? req.file.filename : null;
  try {
    let datas = await Testimonial.create({
      testimonial_name,
      testimonial_designation,
      testimonial_message,
      image,
    });
    res.status(201).json(datas);
  } catch (err) {
    res.status(400).json({ err: "Cannot Add New Testimonial" });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const datas = await Testimonial.findByIdAndDelete({ _id: id });
  if (!datas) {
    return res
      .status(400)
      .json({ message: `Cannot Find Testimonial with ${id}` });
  }
  res.status(200).json(datas);
};

const edit = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const existingTestimonial = await Testimonial.findById(id);
    if (!existingTestimonial) {
      return res
        .status(404)
        .json({ message: `Testimonial not found with ID ${id}` });
    }

    if (req.file) {
      const oldImage = existingTestimonial.image;
      if (oldImage) {
        const imagePath = path.join(__dirname, "..", "uploads", oldImage);
        fs.unlink(imagePath, (err) => {
          if (err) console.error("Failed to delete old image:", err.message);
        });
      }
      req.body.image = req.file.filename;
    }

    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true, runValidators: true }
    );

    res.status(200).json(updatedTestimonial);
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

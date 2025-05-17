const BasicInfo = require("../models/basicInfoModel");
const Role = require("../models/roleModel");
const Service = require("../models/serviceModel");
const Skill = require("../models/skillModel");
const Testimonial = require("../models/testimonialModel");
const Portfolio = require("../models/portfolioModel");
const Contact = require("../models/contactModel");
const mongoose = require("mongoose");

const index = async (req, res) => {
  try {
    const basicInfo = await BasicInfo.find({}).sort({ createdAt: -1 });
    const role = await Role.find({}).sort({ createdAt: -1 });
    const service = await Service.find({}).sort({ createdAt: -1 });
    const skill = await Skill.find({}).sort({ createdAt: 1 });
    const testimonial = await Testimonial.find({}).sort({ createdAt: -1 });
    const portfolio = await Portfolio.find({}).sort({ rank: 1 });

    const data = {
      basicInfo,
      role,
      service,
      skill,
      testimonial,
      portfolio,
    };
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getPortfolio = async (req, res) => {
  try {
    const { slug } = req.params;
    const portfolio = await Portfolio.findOne({ slug });
    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio Not Found" });
    }
    res.status(200).json(portfolio);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getService = async (req, res) => {
  try {
    const { slug } = req.params;
    const service = await Service.findOne({ slug });
    if (!service) {
      return res.status(404).json({ message: "Service Not Found" });
    }
    const allService = await Service.find({ slug: { $ne: slug } });
    res.status(200).json({ service, allService });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const contactme = async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;
    const contact = await Contact.create({ name, email, message,subject });
    res.status(201).json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  index,
  getPortfolio,
  getService,
  contactme,
};

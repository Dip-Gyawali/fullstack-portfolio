const Contact = require("../models/contactModel");
const mongoose = require("mongoose");

const index = async(req,res)=>{
    const contact = await Contact.find({}).sort({createdAt:-1});
    res.status(200).json({success:true, data:contact});
}

const show = async(req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "Invalid Id" });
    }
    const contact = await Contact.findById(id);
    if(!contact){
        return res.status(404).json({message:`Cannot Find Contact With id ${id}`})
    }
    res.status(200).json({success:true, message: contact})
}

const create = async(req,res)=>{
    const {name,email,message,subject,status} = req.body;
    try{
        const contact = await Contact.create({name,email,message,subject,status});
        res.status(201).json(contact);
    }
    catch(err){
        res.status(400).json({ err: "Cannot Add New Contact" });
    }
}

const destroy = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid Id" });
  }
  const contact = await BasicInfo.findByIdAndDelete({ _id: id });
  if (!contact) {
    return res
      .status(400)
      .json({ message: `Cannot Find Contact with ${id}` });
  }
  res.status(200).json(contact);
};

const edit = async(req,res)=>{
    const { id } = req.params;
    const { status } = req.body;

    try {
        const contact = await Contact.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );

        if (!contact) {
            return res.status(404).json({ err: "Contact not found" });
        }

        res.status(200).json(contact);
    } catch (err) {
        res.status(400).json({ err: "Failed to update status" });
    }
}

module.exports = {
    index,
    show,
    create,
    destroy,
    edit,
};
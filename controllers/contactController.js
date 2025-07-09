const asyncHandler = require("express-async-handler");
const Contact = require("./../models/contactModel");

// @desc Get all contacts
// @route GET /api/contacts
// @access Private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({user_id:req.user.id});
  res.status(200).json(contacts);
});

// @desc Get individual contact
// @route GET /api/contacts/:id
// @access Private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  res.status(200).json(contact);
});

// @desc Create contact
// @route POST /api/contacts
// @access Private
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  console.log("The request body is", req.body);

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All the fields are mandatory");
  }

  const contact = await Contact.create({ name, email, phone ,user_id:req.user.id});
  res.status(201).json({ message: "Created Successfully", created: contact });
});

// @desc Update contact
// @route PUT /api/contacts/:id
// @access Private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json({ message: "Updated Successfully", updated: updatedContact });
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access Private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }

  await contact.deleteOne();
  res.status(200).json({ message: "Contact deleted successfully", deleted: contact });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};

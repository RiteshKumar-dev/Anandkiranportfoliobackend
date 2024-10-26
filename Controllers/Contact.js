
const Contact = require("../Models/Contact");

const createContact = async (req, res) => {
  try {
    const { username, email, phone, message } = req.body;

    // Validate input fields
    if (!username || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new contact entry
    const newContact = new Contact({ username, email, phone, message });
    await newContact.save();

    res.status(201).json({ message: "Contact created successfully", newContact });
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ message: "Server error, please try again later" });
  }
};

// GET: Retrieve all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error retrieving contacts:", error);
    res.status(500).json({ message: "Server error, please try again later" });
  }
};

module.exports = { createContact, getContacts };

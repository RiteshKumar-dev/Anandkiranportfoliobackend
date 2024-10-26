const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'],
    },
    message: {
      type: String,
      required: true,
      maxlength: 700,
      trim: true
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Contact = model("Contact", contactSchema);
module.exports = Contact;


const express = require("express");
const router = express.Router();
const { createContact, getContacts } = require("../Controllers/Contact");

router.post("/contacts", createContact);
router.get("/contacts", getContacts);

module.exports = router;

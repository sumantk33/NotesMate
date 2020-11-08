const express = require("express");
const router = express.Router();

const Upload = require("../models/uploadNotes");
const Notes = require("../models/notes");

// @desc    Get all pending notes
// @route   GET /api/upload
// @access  Public
router.get("/", async (req, res) => {
  try {
    const data = await Upload.find();

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// @desc    Upload notes
// @route   POST /api/upload
// @access  Public
router.post("/", async (req, res) => {
  const { department, sem, name, subject, sub_code, link } = req.body;
  try {
    const newNotes = new Upload({
      department,
      sem,
      name,
      subject,
      sub_code,
      link,
    });

    const data = await newNotes.save();

    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// @desc    Approve notes
// @route   get /api/upload/approve/:id
// @access  Public
router.get("/approve/:id", async (req, res) => {
  try {
    const exists = await Upload.findById(req.params.id).select("-_id -__v");

    if (!exists) {
      return res.status(404).json({ message: "Doesn't exist" });
    }

    const department = exists.department;
    const sem = exists.sem;
    const name = exists.name;
    const subject = exists.subject;
    const sub_code = exists.sub_code;
    const link = exists.link;

    const newNotes = new Notes({
      department,
      sem,
      name,
      subject,
      sub_code,
      link,
    });
    const result = await newNotes.save();

    await Upload.findByIdAndRemove(req.params.id);

    // const result = await newNotes.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;

const express = require("express");
const { Mongoose } = require("mongoose");
const router = express.Router();

const Notes = require("../models/notes");

// @desc    Get all notes
// @route   GET /api/notes
// @access  Public
router.get("/", async (req, res) => {
  try {
    const notes = await Notes.find();

    res.json(notes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// @desc    Get Notes by Id
// @route   GET /api/notes/:id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const data = await Notes.findById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Notes dosen't exist" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Add notes
// @route   POST /api/notes
// @access  Private
router.post("/", async (req, res) => {
  const { department, sem, name, subject, link } = req.body;

  try {
    const newNotes = new Notes({
      department,
      sem,
      name,
      subject,
      link,
    });

    const data = await newNotes.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// @desc    Update notes
// @route   PUT /api/notes/:id
// @access  Private
router.put("/:id", async (req, res) => {
  try {
    const exists = await Notes.findById(req.params.id);

    if (!exists) {
      return res.status(404).json({ message: "Notes doesn't exists" });
    }

    const updatedNotes = {};

    const { department, sem, name, subject, link } = req.body;

    if (department) updatedNotes.department = department;
    if (sem) updatedNotes.sem = sem;
    if (name) updatedNotes.name = name;
    if (subject) updatedNotes.subject = subject;
    if (link) updatedNotes.link = link;

    const data = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: updatedNotes },
      { $new: true }
    );

    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// @desc    Delete Notes
// @route   DELETE /api/users/:id
// @access  Private
router.delete("/:id", async (req, res) => {
  try {
    const exists = await Notes.findById(req.params.id);

    if (!exists) {
      return res.status(404).json({ message: "Notes not found" });
    }

    await Notes.findByIdAndRemove(req.params.id);

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

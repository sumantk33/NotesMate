const express = require("express");
const router = express.Router();

const Notes = require("../models/notes");

// @desc    Get all notes
// @route   GET /api/notes
// @access  Public
router.get("/", async (req, res) => {
  try {
    const notes = await Notes.find(req.query);

    res.json(notes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// @desc    Get specific subjects
// @route   GET /api/notes/subjects
// @access  Public
router.get("/subjects", async (req, res) => {
  try {
    const notes = await Notes.find(req.query).select("sub_code subject sem");

    result = notes.filter(function (a) {
      var key = a.subject + "|" + a.sub_code + "|" + a.sem;
      if (!this[key]) {
        this[key] = true;
        return true;
      }
    }, Object.create(null));

    res.json(result);
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
// @access  Public
router.post("/", async (req, res) => {
  const { department, sem, name, subject, link, sub_code } = req.body;

  try {
    const newNotes = new Notes({
      department,
      sem,
      name,
      subject,
      link,
      sub_code,
    });

    const data = await newNotes.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// @desc    Update notes
// @route   PUT /api/notes/:id
// @access  Public
router.put("/:id", async (req, res) => {
  try {
    let exists = await Notes.findById(req.params.id);

    if (!exists) {
      return res.status(404).json({ message: "Notes doesn't exists" });
    }

    const updatedNotes = {};

    const { department, sem, name, subject, link, sub_code } = req.body;

    if (department) updatedNotes.department = department;
    if (sem) updatedNotes.sem = sem;
    if (name) updatedNotes.name = name;
    if (subject) updatedNotes.subject = subject;
    if (link) updatedNotes.link = link;
    if (sub_code) updatedNotes.sub_code = sub_code;

    exists = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: updatedNotes },
      { new: true }
    );

    res.status(201).json(exists);
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

const express = require("express");
const router = express.Router();

const Issues = require("../models/issues");

// @desc    Get all issues
// @route   GET /api/issues
// @access  Public
router.get("/", async (req, res) => {
  try {
    const data = await Issues.find();

    res.json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// @desc    Add an issue
// @route   POST /api/issues
// @access  Public
router.post("/", async (req, res) => {
  const { name, description, email_id, date } = req.body;

  try {
    const newIssue = new Issues({
      name,
      description,
      email_id,
      date,
    });

    const result = await newIssue.save();

    res.json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// @desc    Delete an issue
// @route   DELETE /api/issues/:id
// @access  Public
router.delete("/:id", async (req, res) => {
  try {
    const data = await Issues.findById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Couldn't find" });
    }

    await Issues.findByIdAndRemove(req.params.id);

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;

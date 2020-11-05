const express = require("express");
const router = express.Router();

const Branch = require("../models/branches");

// @desc    Get all the branches
// @route   GET /api/branches
// @access  Public
router.get("/", async (req, res) => {
  const branches = await Branch.find();

  res.status(200).json(branches);
});

// @desc    Add a branch
// @route   POST /api/branches
// @access  Public
router.post("/", async (req, res) => {
  const { name, image, description, code } = req.body;
  try {
    const newBranch = new Branch({
      name,
      image,
      description,
      code,
    });
    const conn = await newBranch.save();
    res.json(conn);
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Updating a branch
// @route   PUT /api/branches/:id
// @access  Public
router.put("/:id", async (req, res) => {
  const exists = await Branch.findById(req.params.id);

  if (!exists) {
    return res.status(404).json({ message: "Branch dosen't exist" });
  }

  const { name, image, description, code } = req.body;
  try {
    const newBranch = {};

    if (name) newBranch.name = name;
    if (image) newBranch.image = image;
    if (description) newBranch.description = description;
    if (code) newBranch.code = code;

    const updatedBranch = await Branch.findByIdAndUpdate(
      req.params.id,
      { $set: newBranch },
      { new: true }
    );

    res.json(updatedBranch);
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Delete a branch
// @route   DELETE /api/branches/:id
// @access  Public
router.delete("/:id", async (req, res) => {
  try {
    const exists = await Branch.findById(req.params.id);

    if (!exists) {
      return res.status(404).json({ message: "Branch dosen't exist" });
    }

    await Branch.findByIdAndRemove(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

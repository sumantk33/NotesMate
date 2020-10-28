const mongoose = require("mongoose");

const NotesSchema = mongoose.Schema({
  department: {
    type: String,
    required: true,
    enum: ["CSE", "ISE", "ECE", "CV", "MECH"],
  },
  sem: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Notes = mongoose.model("Notes", NotesSchema);

module.exports = Notes;

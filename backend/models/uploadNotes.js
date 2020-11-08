const mongoose = require("mongoose");

const uploadNotesSchema = mongoose.Schema({
  department: {
    type: String,
    required: true,
    enum: ["CSE", "ISE", "ECE", "CV", "MECH", "EEE"],
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
  sub_code: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Upload = mongoose.model("Upload", uploadNotesSchema);

module.exports = Upload;

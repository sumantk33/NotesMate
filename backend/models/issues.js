const mongoose = require("mongoose");

const issuesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  email_id: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Issues = mongoose.model("Issues", issuesSchema);

module.exports = Issues;

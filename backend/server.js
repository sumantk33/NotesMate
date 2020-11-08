const express = require("express");
const colors = require("colors");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();

const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

app.use("/api/notes", require("./routes/notesRoutes"));
app.use("/api/branches", require("./routes/branchRoutes"));
app.use("/api/upload", require("./routes/uploadNotesRoutes"));
app.use("/api/issues", require("./routes/issuesRouter"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server running on ${process.env.NODE_ENV} on port ${process.env.PORT}`
      .yellow
  )
);

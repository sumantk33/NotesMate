const express = require("express");
const colors = require("colors");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

connectDB();

const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

app.use("/api/notes", require("./routes/notesRoutes"));
app.use("/api/branches", require("./routes/branchRoutes"));
app.use("/api/upload", require("./routes/uploadNotesRoutes"));
app.use("/api/issues", require("./routes/issuesRouter"));
app.use("/api/discuss", require("./routes/discussRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

var __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server running on ${process.env.NODE_ENV} on port ${process.env.PORT}`
      .yellow
  )
);

const express = require("express");
const colors = require("colors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server running on ${process.env.NODE_ENV} on port ${process.env.PORT}`
      .yellow
  )
);

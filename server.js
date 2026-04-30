const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("DB Connected"));

app.use("/api/students", require("./routes/students"));

// app.use(express.static("public"));
app.listen(5000, () => console.log("Server running"));
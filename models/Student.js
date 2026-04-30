const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  rollNumber: { type: String, unique: true },
  branch: String,
  marks: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Student", StudentSchema);

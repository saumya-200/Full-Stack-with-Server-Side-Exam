const router = require("express").Router();
const Student = require("../models/Student");

router.get("/", async (req, res) => {
  res.json(await Student.find());
});

router.get("/:id", async (req, res) => {
  res.json(await Student.findById(req.params.id));
});

router.post("/", async (req, res) => {
  res.json(await Student.create(req.body));
});

router.put("/:id", async (req, res) => {
  res.json(await Student.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

module.exports = router;

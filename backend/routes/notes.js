const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });

  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const note = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    res.json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Deleting note with ID:", id);

  try {
    await Note.findByIdAndDelete(id);
    console.log("Note deleted successfully");
    res.json({ message: "Note deleted" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;

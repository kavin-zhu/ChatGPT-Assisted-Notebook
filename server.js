const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/notesdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const notesRouter = require("./backend/routes/notes");
app.use("/api/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const mongoose = require("mongoose");

const notesSchema = require("./notesSchema");

const NoteModel = new mongoose.model("Note", notesSchema);

module.exports = NoteModel;
const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.export = notesSchema;
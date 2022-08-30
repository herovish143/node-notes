const Note = require('./model/notesModel');

class NoteService {
    constructor() {
    }

    static async getAll() {
        return Note.find();
    }

    static async getOne(noteId) {
        return Note.findById(noteId);
    }

    static async create({ title, content }) {
        const note = new Note({
            title,
            content
        });

        return note.save();
    }

    static async update(noteId, { title, content }) {
        return Note.findByIdAndUpdate(noteId, {
            title, content
        }, { new: true });
    }

    static async delete(noteId) {
        return Note.findByIdAndDelete(noteId);
    }


}

module.exports = NoteService;
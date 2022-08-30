const NoteService = require("./notesService");

// create & save new Notes
module.exports.create = (req, res) => {
    console.log(req);
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    const createNoteData = {
        title: req.body.title || "Un-Title",
        content: req.body.content
    }

    // create note
    NoteService.create(createNoteData)
    .then( data => {
        res.send(data);
    })
    .catch( err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        })
    });

};

module.exports.findAll = (req, res) => {
    NoteService.getAll().then( notes => {
        res.send(notes);
    })
    .catch( err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    })
};

module.exports.findOne = (req, res) => {
    const noteId = req.params.noteId;
    NoteService.getOne(noteId)
    .then( note => {
        if(!note) {
            res.status(404).send({
               message: "Note not found with id " + noteId
            });
        }
        res.send(note);
    })
    .catch( err => {
        if(err.kind === "ObjectId") {
            return res.status(404).send({
                message: "Note not found with id " + noteId
            });
        }
        return res.status(404).send({
            message: "Error retrieving note with id " + noteId
        });
    });
};

module.exports.update = (req, res) => {
    const noteId = req.params.noteId;
    if (!req.body.content) {
        return res.status(500).send({
            message: "Note content can not be empty"
        });
    }

    NoteService.update(noteId, {
        title: req.body.title,
        content: req.body.content
    })
    .then( note => {
        if(!note) {
            res.status(404).send({
                message: "Note not found with id " + noteId
            });
        }
        res.send(note);
    })
    .catch( err => {
        if(err.kind === "ObjectId") {
            return res.status(404).send({
                message: "Note not found with id " + noteId
            });
        }
        return res.status(404).send({
            message: "Error retrieving note with id " + noteId
        });
    });
};

module.exports.delete = (req, res) => {
    const noteId = req.params.noteId;
    NoteService.delete(noteId).then( note => {
        if(!note) {
            res.status(404).send({
                message: "Note not found with id " + noteId
            });
        }
        res.send({message: "Note deleted successfully!"});
    })
    .catch( err => {
        if(err.kind === "ObjectId") {
            return res.status(404).send({
                message: "Note not found with id " + noteId
            });
        }
        return res.status(404).send({
            message: "Error retrieving note with id " + noteId
        });
    });
};


const express = require('express');
const bodyParser = require("body-parser");

const dbConnect = require("./config/dbConfig");
const notes = require("./components/Notes/notesRoute");

// created express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

dbConnect();
// notes module
notes(app);



app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

module.exports = app;


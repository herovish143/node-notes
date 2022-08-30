const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const connectionUrl = process.env.DB_CONNECTION_URL || "mongodb://localhost:27017/notes";

const dbConnect = () => {
    mongoose.connect(connectionUrl, {
        useNewUrlParser: true,
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    }).finally(() => {
        console.log("finally");
    });
};

module.exports = dbConnect;
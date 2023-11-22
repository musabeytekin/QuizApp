const mongoose = require("mongoose");

// const dotenv = require("dotenv");

// dotenv.config({
//     path: "../config/env/config.env"
// });

const connect = () => {
    mongoose.connect("mongodb+srv://musabeytekin1:UfvsuRAWbZ1PuI6J@cluster0.klwwk8j.mongodb.net/AysQuizDB")
    .then(() => {
        console.log("success");
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = {
    connect
}
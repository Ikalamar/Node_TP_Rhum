const mongoose = require("mongoose");

const Compte = mongoose.model('Compte', new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    adress: String,
}));

module.exports = Compte;
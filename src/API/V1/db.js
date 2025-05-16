require('dotenv').config();

const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

// Connexion à MongoDB
async function connect(){
    mongoose.connect(uri)
    .then(() => console.log('MongoDB connecté'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));
}

module.exports = { connect };
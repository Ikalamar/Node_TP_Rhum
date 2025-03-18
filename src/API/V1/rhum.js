const mongoose = require("mongoose");
const db = require("./db");

db.connect();

const Rhum = mongoose.model('Rhum', new mongoose.Schema({
    nom: String,
    origine: String,
    annee: Number
}));

async function getAllRhums(res) {
    try {
        const rhums = await Rhum.find();
        res.json(rhums);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
}

async function getRhumById(req, res) {
    try {
        const { nom, origine, annee } = req.body;

        const rhum = await Rhum.findOne( { nom });
        if (rhum) {
            res.json(rhum);
        } else {
            res.status(404).json({ message: 'Rhum non trouvé' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
}

module.exports = { getAllRhums, getRhumById };
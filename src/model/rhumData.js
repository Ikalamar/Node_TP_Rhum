const mongoose = require("mongoose");

const Rhum = mongoose.model('Rhum', new mongoose.Schema({
    _id: String,
    name: String,
    rxid_number: String,
    pays: String,
    distillerie: String,
    ABV: String,
    categorie: String,
    vintage: String,
    fabriqueAvec:String,
    distillation: String,
    age: String,
    type: String,
    degre: String,
    imagePath: String,
    visible: Boolean,
    createdAt: Date,
    updatedAt: Date,
    __v: String,
}));

module.exports = Rhum;
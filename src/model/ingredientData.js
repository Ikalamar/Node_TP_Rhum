const mongoose = require("mongoose");

const Ingredient = mongoose.model('eri_Ingredient', new mongoose.Schema({
    name: String,
    type: String,
    pays: String,
    adressMarcket: String,
    price: String,
}));

module.exports = Ingredient;
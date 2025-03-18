const mongoose = require("mongoose");

const Ingredient = mongoose.model('eri_Ingredient', new mongoose.Schema({
    _id: String,
    name: String,
    type: String,
    pays: String,
    adressMarcket: String,
    price: String,
    __v: String,
}));
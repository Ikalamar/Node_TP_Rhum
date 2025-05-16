const mongoose = require("mongoose");

const Recette = mongoose.model('eri_Recette', new mongoose.Schema({
    name: String,
    rhum : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'eri_Rhum'
    },
    ingredients : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'eri_Ingredient'
    }],
    instructions: String,
    isPublic: {
        type: Boolean,
        default: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'eri_User'
    },
}));

module.exports = Recette;
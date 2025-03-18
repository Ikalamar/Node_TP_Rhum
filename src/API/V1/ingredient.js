const mongoose = require("mongoose");
const db = require("./db");
const Ingredient = require("../model/ingredientData");

db.connect();

async function getAllIngredients(res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
    
        const startIndex = (page - 1) * limit;
        const total = await Ingredient.countDocuments();

        const ingredients = await Ingredient.find().skip(startIndex).limit(limit);
        res.json({
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
            data: ingredients,
        });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
}

async function getIngredientById(req, res) {
    try {
        let { name, type, pays, adressMarket } = req.body;

        const ingredient = await Ingredient.findOne( { name, type, pays, adressMarket } );
        if (ingredient) {
            res.json(ingredient);
        } else {
            res.status(404).json({ message: 'Ingredient non trouvé' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
}

module.exports = { getAllIngredients, getIngredientById };
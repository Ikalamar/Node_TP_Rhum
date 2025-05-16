const express = require('express');

// const jwt = require('jsonwebtoken');
// const JWT_SECRET = '';

const db = require("./API/V1/db");
const rhums = require("./API/V1/rhum.js");
const ingredients = require("./API/V1/ingredient.js");
const recettes = require("./API/V1/recette.js");
const comptes = require("./API/V1/compte.js");

const app = express();
const port = 3000;
db.connect();

app.use(express.json());


//RHUMS
app.get("/rhums", async (req, res) => {
    rhums.getAllRhums(req, res);
});

app.get("/rhum/", async (req, res) => {
    rhums.findRhum(req, res);
});


//INGREDIENTS
app.get("/ingredients", async (req, res) => {
    ingredients.getAllIngredients(req, res);
});

app.get("/ingredient/", async (req, res) => {
    ingredients.findIngredient(req, res);
});

app.post("/addIngredient", async (req, res) => {
    ingredients.addIngredient(req, res);
});


//RECETTES
app.get("/recettes", async (req, res) => {
    recettes.getAllRecettesPublic(req, res);
});

app.get("/recette/", async (req, res) => {
    recettes.findRecette(req, res);
});

app.post("/addRecette", async (req, res) => {
    recettes.addRecette(req, res);
});

app.put("/updateRecette/:id", async (req, res) => {
    recettes.updateRecette(req, res);
});


//COMPTE
app.get("/comptes", async (req, res) => {
    comptes.getAllComptes(req, res);
});

app.post("/addCompte", async (req, res) => {
    comptes.addCompte(req, res);
});

app.post("/login", async (req, res) => {
    comptes.login(req, res);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
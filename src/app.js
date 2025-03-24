const express = require('express');
const db = require("./API/V1/db");
const rhums = require("./API/V1/rhum.js");
const ingredients = require("./API/V1/ingredient.js");
const app = express();
const port = 3000;
db.connect();

app.use(express.json());

app.get("/rhums", async (req, res) => {
    rhums.getAllRhums(req, res);
});

app.get("/rhum/", async (req, res) => {
    rhums.findRhum(req, res);
});

app.get("/ingredients", async (req, res) => {
    ingredients.getAllIngredients(req, res);
});

app.get("/ingredient/", async (req, res) => {
    ingredients.findIngredient(req, res);
});

app.post("/addIngredient", async (req, res) => {
    ingredients.addIngredient(req, res);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
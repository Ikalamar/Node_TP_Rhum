const express = require('express');
const rhums = require("./API/V1/rhum.js");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/rhums", async (req, res) => {
    rhums.getAllRhums(res);
});

app.get("/rhum/:nom", async (req, res) => {
    rhums.getRhumById(req, res);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
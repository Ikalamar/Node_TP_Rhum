const express = require("express");
const app = express();
const PORT = 3000;

const { getAllRhums, findRhumById } = require("./API/V1/rhum.js");

app.get("/rhums", async (req, res) => {
    getAllRhums(res);
});

app.get("/rhum/:id", async (req, res) => {
    findRhumById(res, req.params.id);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

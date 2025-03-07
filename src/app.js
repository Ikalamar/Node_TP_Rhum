const express = require('express')
const app = express()
const port = 3000

const fs = require('fs');
const { getRhums } = require('./API/V1/rhum.js');


app.get('/rhums', (req, res) => {
    res.send();
});
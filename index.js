const express = require('express');
const asyncRead = require('./exercices/fs-promise');
const fsRD = require('./exercices/fs-data');
const stringConversor = require('./exercices/fs-stringConversor');
const app = express();
const cors = require('cors');

const articleRead = async (_req, res) => {
    const article = await asyncRead('./archives/article.txt')
    res.status(200).send(article);
}

const readData = async (_req, res) => {
    const data = await fsRD('./archives/data.json');
    res.status(200).send(data);
}

const convertTo64 = async (req, res) => {
    const { input, type } = req.params;
    const response = await stringConversor('./archives/converted.txt', input, type);
    const converted = await fsRD('./archives/converted.txt');
    res.status(200).send(`operation status: ${response};
    input: ${input}
    type: ${type}
    result: ${converted}`);
}

app.use(cors());    

app.get('/articleRead', articleRead);

app.get('/data', readData);
app.get('/convert/:type/:input', convertTo64);

app.listen(3000, () => console.log('We are running and ready to rock on 3000'));
const express = require('express');
const asyncRead = require('./exercices/fs-promise');
const fsRD = require('./exercices/fs-data');
const app = express();


const articleRead = async (_req, res) => {
    const article = await asyncRead('./archives/article.txt')
    res.status(200).send(article);
}

const readData = async (_req, res) => {
    const data = await fsRD('./archives/data.json');
    res.status(200).send(data);
}
app.get('/articleRead', articleRead);

app.get('/data', readData)

app.listen(3000, () => console.log('We are running and ready to rock on 3000'));
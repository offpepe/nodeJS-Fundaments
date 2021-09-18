const express = require('express');
const asyncRead = require('./exercices/fs-promise')
const app = express();


const articleRead = async (req, res) => {
    const article = await asyncRead('./archives/article.txt')
    res.status(200).send(article);
}
app.get('/articleRead', articleRead);

app.listen(3001, () => console.log('We are running and ready to roll on 3001'));

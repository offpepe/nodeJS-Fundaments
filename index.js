const express = require('express');
const bodyParser = require('body-parser');
const asyncRead = require('./exercices/fs-promise');
const fsRD = require('./exercices/fs-data');
const stringConversor = require('./exercices/fs-stringConversor');
const app = express();
const cors = require('cors');
const { pokemons } = require('./archives/pokedex');

app.use(bodyParser.json())

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

app.get('/pokemons', (_req, res) => {
    res.status(200).send(pokemons);
});

app.post('/pokemons/:pokemon', (req, res) => {
    const { pokemon } = req.params
    pokemons.push(pokemon);
    res.status(200).send(`${pokemon} adicionado com sucesso ^^`);
} );

app.get('/pokemons/search', (req, res) => {
    const { id, name, type } = req.query;
    const result = pokemons.filter((poke) => (poke.id === Number(id)) || (poke.name.english === name) || poke.type.some((t) => t  === type));
    if(result) { res.status(200).send(result) }
    else { res.status(404).send('Any poke founded w/ this params') }
})

app.listen(3000, () => console.log('We are running and ready to rock on 3000'));
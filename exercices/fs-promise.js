const fs = require('fs').promises;

const fsAsync = (file) => fs.readFile(file, 'utf8').then((res) => res).catch((err) => `erro: ${err.message}`);

module.exports = fsAsync;
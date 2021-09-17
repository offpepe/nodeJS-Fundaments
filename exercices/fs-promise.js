const fs = require('fs').promises;

const fsAsync = (file) => fs.readFile(file, 'base64').then((res) => console.log(res)).catch((err) => (console.log(`erro: ${err}`)));

module.exports = fsAsync;
const fs = require('fs').promises;

const fsAsync = (file) => fs.readFile(file, 'hex').then((res) => console.log(res)).catch((err) => (console.log(`erro: ${err.message}`)));

module.exports = fsAsync;
const fs = require('fs');

const asyncRead = (file) => {
  try {
      const readedArticle = fs.readFileSync(file, 'utf8');
      console.log(readedArticle);
  } catch (err) {
      console.error(`erro na leitura: ${err.path}
      ${err}`);
  }
}

module.exports = asyncRead;
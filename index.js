const readFileSimple = require('./exercices/try-fs');
const asyncRead = require('./exercices/fs-tryCatch');
const fsAsync = require('./exercices/fs-promise')

readFileSimple('sheetData.txt');
asyncRead('article.txt');
fsAsync('article.txt');
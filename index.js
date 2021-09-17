const readFileSimple = require('./exercices/try-fs');
const asyncRead = require('./exercices/fs-tryCatch');
const fsAsync = require('./exercices/fs-promise');
const stringConversor = require('./exercices/fs-stringConversor');

// readFileSimple('sheetData.txt');
// asyncRead('article.txt');
// fsAsync('article.txt');
stringConversor('./archives/converted.txt', './archives/article.txt', 'utf8');
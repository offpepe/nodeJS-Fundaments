const fs = require('fs');

fs.readFile('./sheetData.txt', (err, content) => {
    if(err) { console.error(`${err.message}`); return }
    console.log(content.toString('utf8'));
});
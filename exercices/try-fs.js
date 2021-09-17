const fs = require('fs');


const readFileSimple = (file) => fs.readFile(file, (err, content) => {
    if(err) { console.error(`${err.message}`); return }
    console.log(content.toString('utf8'));
});

module.exports = readFileSimple;
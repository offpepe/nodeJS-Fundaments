const fs = require('fs').promises;

const stringConversor = async (file, content, type) => {
    try {
    const readedContent = await fs.readFile(content, type);
    const operation = await fs.writeFile(file, readedContent);
    console.log(`Deu bom viu ^^
    result: SUCCESS`);
    }
    catch (error) {
        console.log(`Deu ruim ein, saca só: ${error}`);
    }
};

module.exports = stringConversor;
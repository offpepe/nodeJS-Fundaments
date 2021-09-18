const fs = require('fs').promises;

const stringConversor = async (file, content, type) => {
    try {
        const operation = await fs.writeFile(file, content);
        const readedContent = await fs.readFile(file, type);
        const convert = await fs.writeFile(file, readedContent);
    return(`SUCCESS`);
    }
    catch (error) {
        return(`Deu ruim ein, saca só: ${error}`);
    }
};

module.exports = stringConversor;
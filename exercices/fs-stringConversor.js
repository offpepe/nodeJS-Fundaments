const fs = require('fs').promises;

const stringConversor = async (file, content, type) => {
    try {
    const readedContent = await fs.readFile(content, 'utf-8');
    const operation = await fs.writeFile(file, readedContent, type);
    const operationResult = operation;
    console.log(operationResult);
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = stringConversor;
const fs = require('fs').promises;

const stringConversor = async (file, content, type) => {
    const readedContent = await fs.readFile(content, 'utf-8');
    const operation = await fs.writeFile(file, readedContent, type);
    const operationResult = operation;
    console.log(operationResult);
};

module.exports = stringConversor;
const fs = require('fs').promises;

const readData = async (file) => {
  try {
    const readed = await fs.readFile(file);
    return readed;  
  } catch (error) {
    return error;
  }
};

module.exports = readData;
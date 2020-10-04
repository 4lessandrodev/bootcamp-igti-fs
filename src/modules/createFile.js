const fileSystem = require('fs');
const fs = fileSystem.promises;
const path = require('path');
const FILE_PATH = require('./variables.js');

const createFile = async (filename) => {
 await fs.writeFile(path.join(FILE_PATH, filename), JSON.stringify({data:[]}));
}

module.exports = createFile;
const fileSystem = require('fs');
const FILE_PATH = require('./variables.js');
const path = require('path');

const checkFileExist = async (filename) => {
 return fileSystem.existsSync(path.join(FILE_PATH, filename));
}

module.exports = checkFileExist;
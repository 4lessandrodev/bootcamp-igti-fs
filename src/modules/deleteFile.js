const fileSystem = require('fs');
const fs = fileSystem.promises;
const path = require('path');
const checkFileExist = require('./checkFileExist');
const FILE_PATH = require('./variables');
const fileNotExistMessage = require('./error');

const deleteFile = async (filename) => {
 const exist = await checkFileExist(filename);
 if (exist) {
  return await fs.unlink(path.join(FILE_PATH, filename));
 }
 return fileNotExistMessage;
}

module.exports = deleteFile;
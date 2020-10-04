const checkFileExist = require('./checkFileExist');
const fileSystem = require('fs');
const fs = fileSystem.promises;
const path = require('path');
const FILE_PATH = require('./variables');
const fileNotExistMessage = require('./error');

const readFile = async (filename) => {
 try {
  const exist = await checkFileExist(filename);
  if (exist) {
   return JSON.parse(await fs.readFile(path.join(FILE_PATH, filename), 'utf-8'));
  } 
  throw new Error('O arquivo não existe');
 } catch (error) {
  return fileNotExistMessage;
 }
}

module.exports = readFile;


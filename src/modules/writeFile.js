const fileSystem = require('fs');
const fs = fileSystem.promises;
const readFile = require('./readFile');
const path = require('path');
const FILE_PATH = require('./variables');
const createFile = require('./createFile');
const checkFileExist = require('./checkFileExist');

const writeFile = async (filename, value) => {
 try {
  let file;
  const exist = checkFileExist(filename);
  if (!exist) {
   await createFile(filename);
   file = await readFile(filename);
  } else {
   file = await readFile(filename);
  }
  file.data.push(value);
  await fs.writeFile(path.join(FILE_PATH, filename), JSON.stringify(file));
  return await readFile(filename);
 } catch (error) {
  return error.message;
 }
}

module.exports = writeFile;
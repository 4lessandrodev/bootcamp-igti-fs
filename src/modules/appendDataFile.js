const readFile = require('./readFile');
const checkFileExist = require('./checkFileExist');
const writeFile = require('./writeFile');
const fileNotExistMessage = require('./error');


const appendDataFile = async (filename, value) => {
 const exist = await checkFileExist(filename);
 if (!exist) {
  return fileNotExistMessage;
 }
 const file = await readFile(filename);
 file.data.push(value);
 await writeFile(filename, file);
 return await readFile(filename);
}

module.exports = appendDataFile;
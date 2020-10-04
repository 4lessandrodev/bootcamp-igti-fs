const  checkFileExist = require('../src/modules/checkFileExist.js')
const createFile = require('../src/modules/createFile.js');
const deleteFile = require('../src/modules/deleteFile.js');
//import {readFile} from '../src/modules/read.js'
//import {FILE_PATH} from '../src/modules/variables.js'
//import {writeFile } from '../src/modules/write.js'

describe('CreateFile', () => {

 test('Deve conseguir checar que se um arquivo existe ou não', async () => {
  const indexExist = await checkFileExist('index.json');
  const notExist = await checkFileExist('not_exist_file.json');
  expect(indexExist).toBe(true);
  expect(notExist).toBe(false);
 });

 test('Deve criar um arquivo com o nome carros se o mesmo não existir', async () => {
  const existBefore = await checkFileExist('carros.json');
  await createFile('carros.json');
  const existAfter = await checkFileExist('carros.json');
  expect(existBefore).toBe(false);
  expect(existAfter).toBe(true);
 });
 
 test('Deve excluir o arquivo carros.json criado anteriormente', async () => {
  const fileExistBeforeDelete = await checkFileExist('carros.json');
  await deleteFile('carros.json');
  const existAfterDelete = await checkFileExist('carros.json');
  expect(fileExistBeforeDelete).toBe(true);
  expect(existAfterDelete).toBe(false);
 });
})
const  checkFileExist = require('../src/modules/checkFileExist')
const createFile = require('../src/modules/createFile');
const deleteFile = require('../src/modules/deleteFile');
const readFile = require('../src/modules/readFile');
//import {FILE_PATH} from '../src/modules/variables.js'
const writeFile = require('../src/modules/writeFile');

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

 test('Deve gerar erro [O arquivo não existe] ao tentar ler um arquivo inexistente', async () => {
  const result = await readFile('not_exist_file.json');
  expect(result).toBe('O arquivo não existe');
 })

 test('Deve escrever a frase [Deus é fiel] em um arquivo com o nome de frases.json', async () => {
  await createFile('frases.json');
  const result = await writeFile('frases.json', 'Deus é fiel');
  expect(result.data).toContain('Deus é fiel');
 });
})
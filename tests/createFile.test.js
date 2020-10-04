const  checkFileExist = require('../src/modules/checkFileExist')
const createFile = require('../src/modules/createFile');
const deleteFile = require('../src/modules/deleteFile');
const readFile = require('../src/modules/readFile');
const writeFile = require('../src/modules/writeFile');
const appendDataFile = require('../src/modules/appendDataFile');
const fileNotExistMessage = require('../src/modules/error');

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
  expect(result).toEqual(fileNotExistMessage);
 })

 test('Deve escrever a frase [Deus é fiel] em um arquivo com o nome de frases.json', async () => {
  const expected = ['Deus é fiel', 'Salmos 23'];
  await createFile('frases.json');
  await appendDataFile('frases.json', 'Deus é fiel');
  const result = await appendDataFile('frases.json', 'Salmos 23');
  await deleteFile('frases.json');
  expect(result.data).toEqual(expect.arrayContaining(expected));
 });

 test('Deve retornar um erro [O arquivo não existe] ao tentar adicionar valor em um arquivo inexistente', async () => {
  const result = await appendDataFile('not_exist_file.json', 'any_value');
  expect(result).toBe(fileNotExistMessage);
 });

 test('Deve retornar um erro [O arquivo não existe] ao tentar excluir um arquivo inexistente', async () => {
  const result = await deleteFile('not_exist_file.json');
  expect(result).toBe(fileNotExistMessage);
 });

 test('Deve criar um novo arquivo ao tentar editar um arquivo inexistente', async () => {
  const created = await writeFile('not_exist_file.json', 'nothing_important');
  const result = await readFile('not_exist_file.json');
  await deleteFile('not_exist_file.json');
  expect(result).toBe('nothing_important');
  expect(created).toBe('nothing_important');
 });

 test('Deve retornar um erro [O arquivo não existe] ao tentar editar um arquivo sem nome', async () => {
  const invalidValues = await writeFile();
  expect(invalidValues).toBe(fileNotExistMessage);
 });
})
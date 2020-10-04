import { promises as fs } from 'fs';
import { readFile } from './read.js';
import path from 'path';
import { FILE_PATH } from './variables.js';
import { createFile } from './createFile.js';

export const writeFile = async (filename, value) => {
 try {
  let file = await readFile(filename);
  if (!fileExist[0]) {
   await createFile(filename);
   file = await readFile(filename);
  }
  file[1].data.push(value);
  await fs.writeFile(path.join(FILE_PATH, filename), JSON.stringify(file));
  return await readFile(filename);
 } catch (error) {
  return error.message;
 }
}
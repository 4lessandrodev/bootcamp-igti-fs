import { promises as fs } from 'fs';
import { FILE_PATH } from './variables.js';
import path from 'path';

export const checkFileExist = async (filename) => {
 const exist = await fs.readFile(path.join(FILE_PATH, filename), 'utf-8');
 if (exist)
  return [true, exist];
 else
  return [false, null];
}
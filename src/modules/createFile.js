import { promises as fs } from 'fs';
import path from 'path';
import { FILE_PATH } from './variables.js';

export const createFile = async (filename) => {
 await fs.writeFile(path.join(FILE_PATH, filename), JSON.stringify({data:[]}));
}
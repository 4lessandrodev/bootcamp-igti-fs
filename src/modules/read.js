import {checkFileExist } from './checkFileExist.js';

export const readFile = async (filename) => {
 try {
  const fileExist = await checkFileExist(filename);
  if (fileExist[0]) {
   return JSON.parse(fileExist[1]);
  } 
  return fileExist.push('O arquivo não existe');
 } catch (error) {
  return error.message;
 }
}


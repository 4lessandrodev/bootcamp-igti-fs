import { readFile } from './src/modules/read.js'
import { writeFile } from './src/modules/write.js'

const read = async () => {
 console.log(await readFile('w.json'));
}

const write = async () => {
 console.log(await writeFile('index.json', 'Prisma'));
}

read();
//write();
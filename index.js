const CriarArquivo = require('./src/modules/createFile');
const ArquivoExiste = require('./src/modules/checkFileExist');
const SobrescreverDadosNoArquivo = require('./src/modules/writeFile');
const LerDadosDeUmArquivo = require('./src/modules/readFile');
const AdicionarValoresEmArquivo = require('./src/modules/appendDataFile');
const ExcluirArquivo = require('./src/modules/deleteFile');



const CriarUmArquivoEscreverHelloWorldNeleImprimirEExcluir = async (nomeDoArquivo) => {
 if (!(await ArquivoExiste(nomeDoArquivo))) {
  await CriarArquivo(nomeDoArquivo);
 } 
 await AdicionarValoresEmArquivo(nomeDoArquivo, 'Hello World');
 console.table(await LerDadosDeUmArquivo(nomeDoArquivo));
 await SobrescreverDadosNoArquivo(nomeDoArquivo, 'Deus é fiel');
 console.log(await LerDadosDeUmArquivo(nomeDoArquivo));
 await ExcluirArquivo(nomeDoArquivo);
}

CriarUmArquivoEscreverHelloWorldNeleImprimirEExcluir('teste.json');
  


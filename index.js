const CriarNovoArquivo = require('./src/modules/createFile');
const VerificarSeArquivoExiste = require('./src/modules/checkFileExist');
const EscreverArquivo = require('./src/modules/writeFile');
const LerArquivo = require('./src/modules/readFile');
const AdicionarValoresEmArquivo = require('./src/modules/appendDataFile');
const ExcluirUmArquivo = require('./src/modules/deleteFile');


const CriarArquivo = async (nomeArquivo) => await CriarNovoArquivo(nomeArquivo);
const ArquivoExiste = async (nomeArquivo) => await VerificarSeArquivoExiste(nomeArquivo);
const EscreverEmUmArquivo = async (nomeArquivo, dados) => await EscreverArquivo(nomeArquivo, dados);
const LerDadosDeUmArquivo = async (nomeArquivo) => await LerArquivo(nomeArquivo);
const AdicionarValores = async (nomeArquivo, dados) => await AdicionarValoresEmArquivo(nomeArquivo, dados);
const ExcluirArquivo = async (nomeArquivo) => await ExcluirUmArquivo(nomeArquivo);


const CriarUmArquivoEscreverHelloWorldNeleImprimirEExcluir = async (nomeDoArquivo) => {
 if (await ArquivoExiste(nomeDoArquivo)) {
  await AdicionarValores(nomeDoArquivo, 'Hello World');
 } else {
  await CriarArquivo(nomeDoArquivo);
 }
 await EscreverEmUmArquivo(nomeDoArquivo, 'Hello World');
 console.table(await LerDadosDeUmArquivo(nomeDoArquivo));
 await ExcluirArquivo(nomeDoArquivo);
}

CriarUmArquivoEscreverHelloWorldNeleImprimirEExcluir('teste.json');
  


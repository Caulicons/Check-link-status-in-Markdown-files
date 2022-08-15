import { tratandoErros } from './tratandoErros.js';
import fs from 'fs';
import { procurandoLinks } from './procurandoLink.js';

export const pesquisandoArquivo = async (caminhoDoArquivo) => {
  const enconding = 'utf8';

  try {

    const texto =  fs.readFileSync(caminhoDoArquivo, {
      encoding: enconding
    });
    return  procurandoLinks(texto);
  } catch (erro) {

    tratandoErros(erro);
  }
};

export default pesquisandoArquivo;
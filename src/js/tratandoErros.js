import chalk from 'chalk'

export const tratandoErros = (tipoErro) => {

  switch (tipoErro.message) {
    case 'Não foi possível encontra nenhum link':
      throw new Error(chalk.redBright('Não foi encontra nenhum link no formato MarkDown no arquivo. Verifique ser o formatos dos links seguem a seguinte estrutura: [Nome da página](url da página)'));
    default:
      throw new Error(chalk.redBright('Não foi possível encontra o arquivo, verifique o caminho indicado.'));
  };
};
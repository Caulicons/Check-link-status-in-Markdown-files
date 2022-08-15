#!/usr/bin/env node

import chalk from "chalk";
import pesquisandoArquivo from "./src/js/procurandoArquivo.js";

const caminho = process.argv[2];

 const rodando = async (caminho) => {

  try {

  const texto = await pesquisandoArquivo(caminho)
    console.log(texto)
  }catch(erro) {

    console.log(erro)
  } finally {

    console.log(chalk.bgGreen('Espero que tenha ajudado.'))
  }
}

rodando(caminho);  
#!/usr/bin/env node

import chalk from "chalk";
import searchFile from "./src/js/searchFile.js";
import { findLinks } from "./src/js/searchLinks.js";
import { handleError } from "./src/js/handleError.js";
import { checkingLinks } from "./src/js/checkingLinks.js";

const main = async () => {
  const path = process.argv[2];
  try {
    const file = await searchFile(path);
    const links = await findLinks(file);
    const result = await checkingLinks(links);
    console.log(result)
  } catch (erro) {
    handleError(erro);
    process.exit(1);
  }

  console.log(chalk.bgGreen('\n I hope this help you.'))
}

main();  
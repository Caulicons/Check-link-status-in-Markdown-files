import chalk from 'chalk'

export const handleError = (err) => {

  switch (err.message) {
    case 'Unable to find links':
      throw new Error(chalk.redBright('No MarkDown links were found in this file. Please check that the link formats following the structure: [Site Name](Site URL)'));
    default:
      throw new Error(chalk.redBright('Could not find the file, check the indicated path.'));
  };
};
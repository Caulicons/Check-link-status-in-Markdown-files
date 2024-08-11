import fs from 'fs';

export const searchFile = async (path) => {
  const encoding = 'utf8';
  const text = fs.readFileSync(path, {
    encoding
  });

  return text;
}

export default searchFile;
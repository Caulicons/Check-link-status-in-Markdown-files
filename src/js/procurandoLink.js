import { verificandoLinks } from "./verificandoLInks.js";

export const procurandoLinks = async (texto) => {
  const regex = /\[\<?([\w\s?]*)\>?\]\((https?:\/\/\w*.[^\s]*)\)/gm;
  const arrayDeLinks = [];
  let temp;

  while((temp = regex.exec(texto)) !== null) {
    arrayDeLinks.push({
      [temp[1]]: temp[2]
    });
  };

  if(arrayDeLinks.length === 0) throw new Error('Não foi possível encontra nenhum link');

  return await verificandoLinks(arrayDeLinks);
};

export const findLinks = async (text) => {
  const regex = /\[\<?([\w\s?]*)\>?\]\((https?:\/\/\w*.[^\s]*)\)/gm;
  if (!text.match(regex)) throw new Error('Unable to find links.');

  const links = [];
  let temp;

  while (temp = regex.exec(text))
    links.push({
      [temp[1]]: temp[2]
    });

  return links;
};
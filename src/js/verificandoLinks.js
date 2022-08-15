import axios from "axios";

export const verificandoLinks =  (arrayLinks) => {

  const res = Promise.all(arrayLinks.map(async (links) => {

    let status;
    await axios.get(Object.values(links).join())
      .then(res => status = `${res.status}, ${res.statusText}`)
      .catch( erro => {

       switch(erro.code) {
        case 'ENOTFOUND': 
          return status = `Não foi possível fazer uma requisição porquê o link está incompleto.`;

        case 'ERR_BAD_REQUEST':
          return status = `${erro.response.status}, ${erro.response.statusText}`;

        default : break;
       };
      });


    return { ...links, status: status };
  }));

  return res
};
import axios from "axios";

export const checkingLinks = (links) =>
  Promise.all(links.map(async (link) => {

    let status;
    await axios.get(Object.values(link).join())
      .then(res => status = `${res.status}, ${res.statusText}`)
      .catch(erro => {

        switch (erro.code) {

          case 'ENOTFOUND':
            return status = `Unable to make a request because the link is incomplete.`;

          default: status = `${erro.response.status}, ${erro.response.statusText}`;;
        };
      });

    return { ...link, status: status };
  }));

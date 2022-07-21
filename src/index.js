

import * as ReactDOMClient from 'react-dom/client';
import { App } from './app';

const axios = require("axios").default;

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

export const getAllTaxa = () => {
  let url = new URL("taxons", process.env.SERVER_URL).href;
  return new Promise((resolve) => {
    axios
      .get(url)
      .then((response) => {
        console.log("GET alltaxons");
        resolve(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

export const getAllAuthors = () => {
  let url = new URL("authors", process.env.SERVER_URL).href;
  return new Promise((resolve) => {
    axios
      .get(url)
      .then((response) => {
        console.log("GET allauthors");
        resolve(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
};


async function main() {
  await getAllAuthors().then(async (allAuthors) => {
    await getAllTaxa().then((allTaxa) => {
      root.render(<App allTaxa={allTaxa} allAuthors={allAuthors} />);
    });
  });
}
main();

window.addEventListener("resize", () => {
  console.log("Resized");
  getViz();
});

window.addEventListener("submit", () => {
  console.log("Submitted");
  getViz();
});

window.document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
});

export function getViz(params = null) {
  let url = new URL("viz", process.env.SERVER_URL).href;
  
  axios
    .get(url, {
      params: params || {
        viewport: window.visualViewport,
      },
    })
    .then((response) => {
      // handle success
      console.log(response);
      window.document.querySelector("#outlet").innerHTML = response.data;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .then(() => {
      // always executed
    });
}

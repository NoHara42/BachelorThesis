

import * as ReactDOMClient from 'react-dom/client';
import { App } from './app';

const axios = require("axios").default;

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<App />);

window.addEventListener("resize", () => {
  console.log("Resized");
  getViz(this);
});

window.addEventListener("submit", () => {
  console.log("Submitted");
  getViz(this);
});

window.document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
});

function getViz(self, params = null) {
  let url = new URL("viz", process.env.SERVER_URL).href;

  console.log("GET Viz", url);

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

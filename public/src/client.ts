import Alpine from 'alpinejs';
import "./routes";
import path from 'path';

const axios = require('axios').default;

window.Alpine = Alpine;

window.document.addEventListener('alpine:init', () => {
  Alpine.data("viz", () => ({
    init() {
      window.addEventListener("resize", () => {
        console.log("Resized");
        getViz(this);
      });
      window.document.addEventListener("DOMContentLoaded", () => {
        console.log("DOMContentLoaded");
        getViz(this);
      });
    }
  }));
});

function getViz(self, params = null) {
  let url = new URL('viz', process.env.SERVER_URL).href;
  
  console.log("GET Viz", url);
  
  axios.get(url, {
    params: params || {
      viewport: window.visualViewport
    }
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
Alpine.start();

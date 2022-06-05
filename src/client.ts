import Alpine from 'alpinejs';
const axios = require('axios').default;

window.Alpine = Alpine;


window.document.addEventListener('alpine:init', () => {
  Alpine.data("viz", () => ({
    init() {
      getViz(this);
      window.document.addEventListener("resize", () => {
        console.log("Resized");
        getViz(this);
      });      
    }
  }));
});

function getViz(self, params = null) {
  axios.get('http://localhost:3000/viz', {
    params: params || {
      width: window.visualViewport.width
    }
  })
  .then((response) => {
    // handle success
    console.log(response);
    self.$el.innerHTML = response.data;
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

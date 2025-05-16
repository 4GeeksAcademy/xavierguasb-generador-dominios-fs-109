import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  // console.log("Hello Rigo from the console!");

  let pronoun = ['el', 'la'];
  let adjetive = ['mejor', 'gran'];
  let noun = ['sitio', 'lugar', 'ciudad'];
  let extension = ['.es', '.com', '.org'];

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adjetive.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < extension.length; d++) {

          console.log(pronoun[a] + adjetive[b] + noun[c] + extension[d])

          // let domain = pronoun[a] + adjetive[b] + noun[c] + extension[d];

          // let finalDomains = document.getElementById("domains");
          //     finalDomains.innerHTML = domain;

        }
      }
    }
  }
};


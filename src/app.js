/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronoun = ["the", "our"];
  let adj = ["great", "fast"];
  let noun = ["jogger", "unicornio"];
  let ends = [".com", ".net", ".gov", ".co", ".info", ".eu", ".es", ".org"];

  let listaDeDominios = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ends.length; l++) {
          listaDeDominios.push(pronoun[i] + adj[j] + noun[k] + ends[l]);
        }
      }
    }
  }

  let dominios = document.getElementById("dominios");
  listaDeDominios.forEach(Element => {
    let li = document.createElement("li");
    li.innerText = Element;
    dominios.appendChild(li);
  });
  console.log(dominios);
};

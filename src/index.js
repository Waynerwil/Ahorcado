import { Keyboard } from "./Keyboard.js";
import { Panel } from "./Panel.js";
import { Bodyparts } from "./Bodyparts.js";

const App = new Keyboard();

const Panels = new Panel();

const Body = new Bodyparts();
console.log(Panels);

const vector = App.drawKeyboard();
const word = Panels.dibujarLineas();

let conta = 0;
let conta2 = 1;
let i = 0;
let counts = 7;

while (i < 0) {
  console.log(`Numero: ${i}`);
  i++;
}

console.log(word);

const container = document.querySelector("#container");
const parts = document.getElementById("parts");
const attempts = document.getElementById("attempts");

const div = document.createElement("div");
const h1 = document.createElement("h1");

const etiqueta = document.getElementById("etiqueta");
etiqueta.style.visibility="hidden";

h1.textContent = "GANASTE";
div.appendChild(h1);

console.log(parts);

vector.map((key) => {
  const button = document.createElement("button");
  button.textContent = key;
  button.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    const verifica = Panels.showCorrectV2(e.target.textContent, conta);
    //  
    console.log(verifica);
    if (verifica) {
      button.classList = "green";
      // index++;
    } else {
      button.classList = "red";
      if (attempts == 0) {
        alert('Perdiste')
        parts.src = Body.nextimage(6);
        counts = 0;
        conta2 = 0;
        // etiqueta.style.visibility="visible";
      } else {
        // Arreglar
        parts.src = Body.nextimage(conta2);
        counts--;
        conta2++;
        attempts.textContent = counts;
      }
    }
    console.log(Panels.showCorrect(e.target.textContent));
    guess.textContent = "";
    console.log(e.target.textContent);
    console.log(Panels.showCorrect(e.target.textContent));
 
    // if (conta == 0) {
    //   console.log("perdió");
    //   conta == 0
    // } else {
    //   conta --;
    // }
    // alert("PUTOOOOOOO")

    word.map((vectorAdivinanza) => {
      const h2 = document.createElement("h2");
      h2.textContent = vectorAdivinanza;
      h2.addEventListener("click", (e) => {
        console.log(e.target.textContent);
      });
      guess.appendChild(h2);
    });
  });
  container.appendChild(button);
});

const botonreinicia = document.getElementById("play_again");
botonreinicia.addEventListener("click", () => {
  console.log('reinicia');
  location.reload(true);
});

word.map((vectorAdivinanza) => {
  const h2 = document.createElement("h2");
  h2.textContent = vectorAdivinanza;
  h2.addEventListener("click", (e) => {
    console.log(e.target.textContent);
  });
  guess.appendChild(h2);
});

// Counter
// const verifica = Panels.showCorrect(btn.textContent, counts)
// if (verifica) {

// } else {
//     Image.src = Bodyparts.nextimage(counts);
//     counts++;
//     attempts --;
//     attempts.textContent = attempts
// }

document.addEventListener("DOMContentLoaded", () => {
  const board = new Keyboard();
  board.drawKeyboard();
});

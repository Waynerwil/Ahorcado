import { Keyboard } from "./components/Keyboard.js";
import { Panel } from "./components/Panel.js";
import { Bodyparts } from "./components/Bodyparts.js";
import { PokemonApi } from "./api/pokemon.api.js";

const App = new Keyboard();

const Panels = new Panel();

const Body = new Bodyparts();
console.log(Panels);

let conta = 0;
let conta2 = 1;
let counts = 7;

const container = document.querySelector("#container");
const parts = document.getElementById("parts");
const attempts = document.getElementById("attempts");

async function getP() {
  const pokemon = new PokemonApi();
  const dataPokemon = await pokemon.getRandomPokemon();
  console.log(dataPokemon.sprites.other["official-artwork"]["front_default"]);
  // const img = document.createElement('img')
  parts.src = dataPokemon.sprites.other["official-artwork"]["front_default"];

  console.log(Panels.dibujarPokemon(dataPokemon.name));
  console.log(dataPokemon.name);

  const vector = App.drawKeyboard();
  const word = Panels.dibujarLineas();

  const div = document.createElement("div");
  const h1 = document.createElement("h1");

  h1.textContent = "GANASTE";
  div.appendChild(h1);

  console.log(parts);

  vector.map((key) => {
    const button = document.createElement("button");
    button.textContent = key;
    button.addEventListener("click", (e) => {
      console.log(e.target.textContent);
      const verifica = Panels.showCorrectV2(e.target.textContent, conta);
      const win = Panels.isAWin();
      if(win){
        alert('ganaste')
      }

      if (verifica) {
        button.classList = "green";
        //   parts.src = Body.nextimage(6);
        counts = 0;
        conta2 = 0;
      } else {
        button.classList = "red";
        if (attempts == 0) {
          counts--;
          conta2++;
          attempts.textContent = counts;
          // etiqueta.style.visibility="visible";
        } else {
          // Arreglar
        }
      }
      console.log(Panels.showCorrect(e.target.textContent));
      guess.textContent = "";
      console.log(e.target.textContent);
      console.log(Panels.showCorrect(e.target.textContent));

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

  word.map((vectorAdivinanza) => {
    const h2 = document.createElement("h2");
    h2.textContent = vectorAdivinanza;
    h2.addEventListener("click", (e) => {
      console.log(e.target.textContent);
    });
    guess.appendChild(h2);
  });
}
getP();

//Counter
const verifica = Panels.showCorrect(btn.textContent, attempts)
if (verifica) {
  
} else {
    Image.src = Bodyparts.nextimage(counts);
    counts++;
    attempts --;
    attempts.textContent = attempts
}

document.addEventListener("DOMContentLoaded", () => {
  const board = new Keyboard();
  board.drawKeyboard();
});

//tiempo
//tiempo
const cronometroElemt = document.getElementById( 'cronometro');
let timeRemaining = 60;
function actualizarCronometro( ){
cronometroElemt.textContent = timeRemaining + ''
if(timeRemaining <= 0){
clearInterval (intervalo);

}
timeRemaining--;
}
actualizarCronometro;
const intervalo = setInterval (actualizarCronometro, 1000);
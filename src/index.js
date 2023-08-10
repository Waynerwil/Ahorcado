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

console.log(word);

const container=document.querySelector("#container");
const parts = document.getElementById("parts")
console.log(parts);

vector.map((key) =>{
    const button=document.createElement("button");
    button.textContent=key
    button.addEventListener('click',(e)=>{
        console.log(e.target.textContent);
        const verifica = Panels.showCorrectV2(e.target.textContent, conta);
        // debugger
        console.log(verifica);
        if (verifica) {
            button.classList = 'green'
            // index++;
        }
        else{
            button.classList = 'red'
            parts.src = Body.nextimage(conta2)

            conta2++;

        }
        console.log(Panels.showCorrect(e.target.textContent));
        guess.textContent = '' ;
        console.log(e.target.textContent);
        console.log(Panels.showCorrect(e.target.textContent));

        word.map(vectorAdivinanza =>{
            const h2=document.createElement("h2");
            h2.textContent=vectorAdivinanza
            h2.addEventListener('click',(e)=>{
            console.log(e.target.textContent);
            })
            guess.appendChild(h2)
        })


    })
    container.appendChild(button)



})

word.map(vectorAdivinanza =>{
    const h2=document.createElement("h2");
    h2.textContent=vectorAdivinanza
    h2.addEventListener('click',(e)=>{
    console.log(e.target.textContent);
    })
    guess.appendChild(h2)
})





document.addEventListener('DOMContentLoaded',()=>{
    const board= new Keyboard();
    board.drawKeyboard();
})

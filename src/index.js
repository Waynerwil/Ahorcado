import { Keyboard } from "./Keyboard.js";
import { Panel } from "./Panel.js";


const App = new Keyboard();

const Panels = new Panel();
console.log(Panels);

const vector = App.drawKeyboard();
const palabra = Panels.dibujarLineas();

console.log(palabra);

const container=document.querySelector("#container");

vector.map(key =>{
    const button=document.createElement("button");
    button.textContent=key
    button.addEventListener('click',(e)=>{
        console.log(e.target.textContent);
        button.classList = 'verde'
        console.log(Panels.showCorrect(e.target.textContent));
        adivinar.textContent = '';

        palabra.map(vectorAdivinanza =>{
            const h2=document.createElement("h2");
            h2.textContent=vectorAdivinanza
            h2.addEventListener('click',(e)=>{
            console.log(e.target.textContent);
            })
            adivinar.appendChild(h2)
        })


        // button.classList = 'rojo'
        // Panels.showCorrect(e.target.textContent);
    })
    container.appendChild(button)



})

palabra.map(vectorAdivinanza =>{
    const h2=document.createElement("h2");
    h2.textContent=vectorAdivinanza
    h2.addEventListener('click',(e)=>{
    console.log(e.target.textContent);
    })
    adivinar.appendChild(h2)
})





document.addEventListener('DOMContentLoaded',()=>{
    const board= new Keyboard();
    board.drawKeyboard();
})

// vectorLetras.map(key =>{
//     const div = document.createElement('div');
//     const h3 = document.createElement('h3');

//     h3.textContent = key.letter
//     div.classList = 'Div_Letra'

//     div.appendChild(h3);
//     Keyboard.appendChild(div)

//     div.addEventListener('click', function(){
//         App.showCorrect(h3.textContent)
//           
//     })
// })


export default Keyboard;
import Keyboard from "./Keyboard.js";
document.addEventListener('DOMContentLoaded',()=>{
    const board= new Keyboard();
    board.drawKeyboard();
})
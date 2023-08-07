class Keyboard {
    constructor() {
      this.Keys = [
          'a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
      ];
    }
    drawKeyboard() {
      const container=document.querySelector("#container");
      let count=0;
        while (count<this.Keys.length) {
          const button=document.createElement("button");
          button.textContent=this.Keys[count]
          button.addEventListener('click',(e)=>{
            console.log(e.target.textContent);
          })
          container.appendChild(button)
          count++;
      }
      console.log(container);
    }
    showCorrect(letter){
      if (letter == true) {
          return (this.Keys = "Correcta");
        } else {
          return (this.Keys = "Incorreta");
        }
      }
  
    }
  export default Keyboard;


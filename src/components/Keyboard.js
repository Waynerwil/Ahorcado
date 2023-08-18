class Keyboard {
    constructor() {
      this.Keys = [
          'A','B','C','D','E','F','G','H','I','J','K','L','Ñ','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','-'];
    }
    drawKeyboard() {
    
      return this.Keys;
    }
    // showCorrect(letter){
    //   if (letter == true) {
    //       return (this.Keys = "Correcta");
    //     } else {
    //       return (this.Keys = "Incorreta");
    //     }
    //   }
  
    }

// class botonVerde {
//   constructor()
// }
// let botonVerde = class {

// }



// document.addEventListener('keydown', (event) => {
//   var keyValue = event.key;
//   // var codeValue = event.code;
//   console.log("keydown event, keyValue: " + keyValue);
//   console.log("keydown event, codeValue: " + codeValue);
// }, false);
// // document.addEventListener('keyup', (event) => {
// //   var keyValue = event.key;
// //   var codeValue = event.code;
//   // console.log("keyup event, keyValue: " + keyValue);
//   // console.log("keyup event, codeValue: " + codeValue);
// // }, false);



  export {Keyboard};


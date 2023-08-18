class Panel{
    constructor(){
        this.palabras = ['perro', 'adivinar', 'casa', 'odontologo', 'playa', 'javaScript', 'html', 'css', 'otorrinolaringologo', 'elefante', 'kiwi', 'wikipedia']
        this.vectorAdivinanza = []
        this.palabraElejida = '';
        this.vectorRespuesta = []
 }

dibujarPokemon(pokemon){
  
  return this.vectorRespuesta = Array.from(pokemon)
}



 dibujarLineas(){

    // let idpalabra = 0

    // idpalabra = Math.floor(Math.random() * (this.palabras.length - 0) + 0)

    // this.palabraElejida = this.palabras[idpalabra];

    // console.log(this.palabraElejida);

    // this.vectorRespuesta = Array.from(this.palabraElejida)

    for (let index = 0; index < this.vectorRespuesta.length; index++) {
        this.vectorAdivinanza.push('_')
        
    }
    return this.vectorAdivinanza;
 }

  showCorrect(letter){

    const letraMinuscula = letter.toLowerCase();
      this.vectorRespuesta.map((letra, posicion) =>{
        if (letra == letter || letra == letraMinuscula) {
          this.vectorAdivinanza[posicion] = letraMinuscula
        } else {
          console.log("Incorrecta");
        }
        
      })

      return this.vectorAdivinanza;
  }

  showCorrectV2(letter, indexs){ 
    const letraMinuscula = letter.toLowerCase();
    
    for (let index = indexs; index < this.vectorRespuesta.length; index++) {
      if (this.vectorRespuesta[index] == letter || this.vectorRespuesta[index] == letraMinuscula) {
        return true
      }
    }
  }

  isAWin() {
    let variable =
      JSON.stringify(this.vectorRespuesta) === JSON.stringify(this.vectorAdivinanza);

    if (variable === true) {

      return true;
    } else {

      return false;
    }
  }
  
}
 

export {Panel}
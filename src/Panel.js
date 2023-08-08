class Panel{
    constructor(){
        this.palabras = ['Perro', 'Adivinar', 'casa', 'Odontólogo', 'Playa', 'JavaScript', 'HTML', 'CSS', 'Otorrinolaringólogo']
        this.vectorAdivinanza = []
        this.palabraElejida
 }


 dibujarLineas(){

    let idpalabra = 0

    idpalabra = Math.floor(Math.random() * (this.palabras.length - 0) + 0)

    this.palabraElejida = this.palabras[idpalabra];

    console.log(this.palabraElejida);

    for (let index = 0; index < this.palabraElejida.length; index++) {
        this.vectorAdivinanza.push('_')
        
    }
    return this.vectorAdivinanza;
 }

 showCorrect(letter){
    if (letter == true) {
        return (this.Keys = "Correcta");
      } else {
        return (this.Keys = "Incorreta");
      }
    }
    



}

export {Panel}
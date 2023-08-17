class PokemonApi {
    constructor(){
        // this.id = 12;
        // this.vect = {};
        // this.nombrePokemon = '';
        this.baseURL = 'https://pokeapi.co/api/v2/pokemon'
    }

async getRandomPokemon(){
    const randomId = Math.floor(Math.random() * 1) + 1
    const url = `${this.baseURL}/${randomId}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch (error) {
        console.error('Error fetching data:', error);
        return null;

    }
}

}export {PokemonApi};


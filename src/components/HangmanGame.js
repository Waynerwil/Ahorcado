import { PokemonApi } from "../api/pokemon.api";

const PokemonApi = new PokemonApi();
getPokemonName()
{
  return pokemonAPI.getRandomPokemon().then((data) => {
    if (data) {
      console.log("Random Pokemon:", data.name);
      //console.log('Image URL:', data.sprites.front_default);
      return data.name;
    } else {
      console.log("Failed to fetch random Pokemon.");
      return "";
    }
  });
}



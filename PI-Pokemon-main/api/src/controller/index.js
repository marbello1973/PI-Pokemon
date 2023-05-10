const { Pokemon, Type } = require("../db");
const axios = require("axios");

getApiInfo = async () => {
  const strPokemons = [];
  const URL = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1`;
  const pokemonApi = await axios.get(URL);
  const pokemonsUrl = await pokemonApi.data.results.map((el) => el.url);
  for (let i = 0; i < pokemonsUrl.length; i++) {
    const pokemon = await axios.get(pokemonsUrl[i]);
    strPokemons.push({
      id: pokemon.data.id,
      name: pokemon.data.name,
      image: pokemon.data.sprites.other["official-artwork"].front_default,
      life: pokemon.data.stats.find((el) => el.stat.name === "hp").base_stat,
      attack: pokemon.data.stats.find((el) => el.stat.name === "attack")
        .base_stat,
      defense: pokemon.data.stats.find((el) => el.stat.name === "defense")
        .base_stat,
      speed: pokemon.data.stats.find((el) => el.stat.name === "speed")
        .base_stat,
      height: pokemon.data.height,
      weight: pokemon.data.weight,
    });
    // return pokemons;
    console.log(strPokemons);
  }
};

console.log(getApiInfo());

module.exports = { getApiInfo };

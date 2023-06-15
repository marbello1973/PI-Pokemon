const axios = require("axios");
const { Pokemon, Type } = require("../db.js");

const getApiInfo = async () => {
  const strPokemons = [];
  const pokemonApi = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=120`
  );
  const pokemonsUrl = await pokemonApi.data.results.map((el) => el.url);
  for (let i = 0; i < pokemonsUrl.length; i++) {
    const pokemon = await axios.get(pokemonsUrl[i]);
    strPokemons.push({
      id: pokemon.data.id,
      name: pokemon.data.name,
      image: pokemon.data.sprites.other["official-artwork"].front_default,
      // image: pokemon.data.sprites.back_default,
      // image: pokemon.data.sprites.back_shiny,
      hp: pokemon.data.stats.find((el) => el.stat.name === "hp").base_stat,
      attack: pokemon.data.stats.find((el) => el.stat.name === "attack")
        .base_stat,
      defense: pokemon.data.stats.find((el) => el.stat.name === "defense")
        .base_stat,
      speed: pokemon.data.stats.find((el) => el.stat.name === "speed")
        .base_stat,
      height: pokemon.data.height,
      weight: pokemon.data.weight,
      types: pokemon.data.types.map((e) => (e = { name: e.type.name })),
      createdDb: false,
    });
  }
  return strPokemons;
};

const getDbInfo = async () => {
  return await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllPokemons = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  // const infoTotal = apiInfo.concat(dbInfo);
  return [...apiInfo, ...dbInfo];
};

module.exports = { getAllPokemons };

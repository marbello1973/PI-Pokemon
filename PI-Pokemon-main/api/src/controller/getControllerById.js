const { getAllPokemons } = require("../controller/getControllerApi.js");
const { Type, Pokemon } = require("../db.js");
const getControllerById = async (id, source) => {
  const pokemonid = []
  const pokemon =
    source === "api"
      ? await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((res) => res.json())
          .then((data) => {
            return {
              id: data.id,
              name: data.name,
              image: data.sprites.other["official-artwork"].front_default,
              hp: data.stats.find((el) => el.stat.name === "hp").base_stat,
              attack: data.stats.find((el) => el.stat.name === "attack")
                .base_stat,
              defense: data.stats.find((el) => el.stat.name === "defense")
                .base_stat,
              speed: data.stats.find((el) => el.stat.name === "speed")
                .base_stat,
              height: data.height,
              weight: data.weight,
              types: data.types.map((el) => el.type.name),
              createdDB: false,
            };
          })
      : await Pokemon.findByPk(id, {
          include: Type,
        });
  pokemonid.push(pokemon)  
  return  pokemonid
};

module.exports = { getControllerById };

/*
const getControllerById = async (id) => {
  const pokemons = await getAllPokemons();
  if (id) {
    const pokeId = await pokemons.filter((el) => el.id == id);
    pokeId.length ? pokeId : `${id} Not Found`;
    return pokeId;
  }
*/

/*
/* const pokemons = await getAllPokemons();
  if (id) {
    const pokeId = await pokemons.filter((el) => el.id == id);
    pokeId.length ? pokeId : `${id} Not Found`;
    return pokeId;
  }
*/

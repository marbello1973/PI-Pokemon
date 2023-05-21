const { getAllPokemons } = require("../controller/getControllerApi.js");
const getControllerById = async (id) => {
  const pokemons = await getAllPokemons();
  if (id) {
    const pokeId = await pokemons.filter((el) => el.id == id);
    pokeId.length ? pokeId : `${id} Not Found`;
    return pokeId;
  }
};

module.exports = { getControllerById };

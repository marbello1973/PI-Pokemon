const axios = require("axios");
const { Type } = require("../db");

const getTypes = async () => {
  //mapear la api con map y un for
  const pokeType = [];
  const URL = `https://pokeapi.co/api/v2/type`;
  const pokemonApi = await axios.get(URL);
  const pokeId = await pokemonApi.data.results.map((el) => el.url);
  for (let i = 0; i < pokeId.length; i++) {
    const pokemon = await axios.get(pokeId[i]);
    pokeType.push({
      id: pokemon.data.id,
      nombre: pokemon.data.name,
    });
  }
  //iterar y guardar en la basde de datos
  pokeType.forEach((el) => {
    Type.findOrCreate({
      where: {
        id: el.id,
        nombre: el.nombre,
      },
    });
  });
  //console.log(pokeType);

  //traeme todo lo que esta en la tabla
  const dataType = await Type.findAll();
  // console.log(dataType);
  return dataType;
};

module.exports = { getTypes };

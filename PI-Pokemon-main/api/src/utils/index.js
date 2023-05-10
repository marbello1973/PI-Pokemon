//importar axios
const axios = require("axios");

//crear las funcion que me traiga la api
getApiInfo = async () => {
  const pokemons = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=12`
  );
  const pokemonsUrl = pokemons.data.results;
  const pokemonsMap = pokemonsUrl.map((el) => el.url);

  console.log(pokemonsMap.name);

  //   return data;
};

getApiInfo();

module.exports = getApiInfo;

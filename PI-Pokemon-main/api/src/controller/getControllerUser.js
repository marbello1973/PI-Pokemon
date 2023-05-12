const { Pokemon, Type } = require("../db");
const axios = require("axios");

//esta funcion me reccore la api y me sirve para filtrar por item
getApiInfo = async () => {
  const strPokemons = [];
  const URL = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=12`;
  const pokemonApi = await axios.get(URL);
  const pokemonsUrl = await pokemonApi.data.results.map((el) => el.url);
  for (let i = 0; i < pokemonsUrl.length; i++) {
    const pokemon = await axios.get(pokemonsUrl[i]);
    strPokemons.push({
      id: pokemon.data.id,
      nombre: pokemon.data.name,
      imagen: pokemon.data.sprites.other["official-artwork"].front_default,
      vida: pokemon.data.stats.find((el) => el.stat.name === "hp").base_stat,
      ataque: pokemon.data.stats.find((el) => el.stat.name === "attack")
        .base_stat,
      defensa: pokemon.data.stats.find((el) => el.stat.name === "defense")
        .base_stat,
      velocidad: pokemon.data.stats.find((el) => el.stat.name === "speed")
        .base_stat,
      altura: pokemon.data.height,
      peso: pokemon.data.weight,
      created: false
    });
  }
  return strPokemons;
};

//funvion que me busca por id 
const getUserById = async (id, source) => {
  const user = source === "api"
    ? await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    : await Pokemon.findByPk(id)
  return user

}




//esta funcion me busca por nombre dentro de la api o en la base de datos 
const getAllUsersName = async (nombre) => {
  const apiName = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
  const dataApi = await getApiInfo(apiName);
  const dataApiName = await dataApi.find(el => el.nombre.includes(nombre))/* el.nombre.includes(nombre).toLowerCase() */
  return dataApiName
}


//esta funcion me retorna todos los objetos de la base de datos api y bdd
const getAllUsers = async () => {
  const bDD = await Pokemon.findAll();
  const apiUser = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
  const dataApi = await getApiInfo(apiUser);
  // console.log(dataApi);
  return [...bDD, ...dataApi];
};




//funcion me crea un usuario
const createUser = async (nombre, imagen, vida, ataque, defensa, velocidad, altura, peso) => {
  return newUser = await Pokemon.create({ nombre, imagen, vida, ataque, defensa, velocidad, altura, peso })
}

module.exports = { getApiInfo, getAllUsers, createUser, getAllUsersName, getUserById };

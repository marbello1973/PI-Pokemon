const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

//esta funcion me reccore la api y me sirve para filtrar por item
getApiInfo = async () => {
  const strPokemons = [];
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=12`;
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
      created: false,
    });
  }
  return strPokemons;
};

//funcion me crea un usuario
const createUser = async (
  nombre,
  imagen,
  vida,
  ataque,
  defensa,
  velocidad,
  altura,
  peso
) => {
  let newUser = await Pokemon.create({
    nombre: nombre.toLowerCase(),
    imagen,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
  });
};

//funvion que me busca por id
const getUserById = async (id, source) => {
  const user =
    (await source) === "api"
      ? await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((res) => res.json())
          .then((data) => {
            return {
              id: data.id,
              nombre: data.name,
              imagen: data.sprites.other["official-artwork"].front_default,
              vida: data.stats.find((el) => el.stat.name === "hp").base_stat,
              ataque: data.stats.find((el) => el.stat.name === "attack")
                .base_stat,
              defensa: data.stats.find((el) => el.stat.name === "defense")
                .base_stat,
              velocidad: data.stats.find((el) => el.stat.name === "speed")
                .base_stat,
              altura: data.height,
              peso: data.weight,
              created: false,
            };
          })
      : await Pokemon.findByPk(id, {
          include: {
            model: Type,
            attributes: ["id", "nombre"],
          },
        });
  return user;
};

//esta funcion me retorna todos los objetos de la base de datos api y bdd
const getAllUsers = async () => {
  const bDD = await Pokemon.findAll();
  const apiUser = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
  const dataApi = await getApiInfo(apiUser);
  // console.log(dataApi, bDD);
  return [...bDD, ...dataApi];
};

//esta funcion me busca por nombre dentro de la api o en la base de datos
const getAllUsersName = async (nombre) => {
  const bDD = await Pokemon.findAll({
    where: { nombre: { [Op.iLike]: `%${nombre}%` } },
  });
  const apiName = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=5`
  );
  const dataApi = await getApiInfo(apiName);
  const dataApiName = dataApi.filter((el) => {
    if (el.nombre.toLowerCase().includes(nombre.toLowerCase()) === true) {
      return {
        nombre: el.nombre,
      };
    }
  });
  return [...dataApiName, ...bDD];
};

// const getSearchUserName = async () => {}

module.exports = {
  getApiInfo,
  getAllUsers,
  createUser,
  getAllUsersName,
  getUserById,
};

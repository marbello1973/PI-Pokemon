const axios = require("axios");
const { Type } = require("../db.js");

const getControllerTypes = async () => {
  const typesApi = await axios.get(`https://pokeapi.co/api/v2/type`);
  const types = await typesApi.data.results.map((el) => el.name);
  types.forEach((el) => {
    Type.findOrCreate({ where: { name: el } });
  });
  const typesDb = await Type.findAll();
  return typesDb;
};

module.exports = { getControllerTypes };

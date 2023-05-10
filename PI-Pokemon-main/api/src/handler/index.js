const { getApiInfo } = require("../controller/index");

const getPokemons = async (req, res) => {
  const allPokemons = getApiInfo();
  try {
    res.status(200).json(allPokemons);
  } catch (error) {
    res.status(400).json({ error: message.error });
  }
};

module.exports = {
  getPokemons,
  // getPokemonId,
  // getPokemonName
};

/* const getPokemonId = async (req, res) => {
  try {
    res.status(200).json(`ruta get params buscar por ID ${id} `);
  } catch (error) {
    res.status(404).json({ error: message.error });
  }
};
const getPokemonName = async (req, res) => {
  try {
    res.status(200).json(`ruta get query buscar por nombre`);
  } catch (error) {}
}; 
*/

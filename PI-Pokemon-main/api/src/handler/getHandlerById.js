const { getControllerById } = require("../controller/getControllerById.js");
const getHandlerById = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";
  try {
    const pokemons = await getControllerById(id, source);
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
module.exports = { getHandlerById };

/*
const { id } = req.params;
  const pokemons = await getAllPokemons();
  if (id) {
    const pokeId = await pokemons.filter((el) => el.id == id);
    pokeId.length
      ? res.status(200).json(pokeId)
      : res.status(404).send("Pokemon not found");
  }
*/

/*
const getHandlerById = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemons = await getControllerById(id);
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
*/

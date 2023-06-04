const { getAllPokemons } = require("../controller/getControllerApi.js");

const getHandlerApiInfo = async (req, res) => {
  try {
    const { name } = req.query;
    const pokemons = await getAllPokemons();
    if (name) {
      const pokeName = await pokemons.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      pokeName.length
        ? res.status(200).json(pokeName)
        : res.status(404).send("Pokemon not found");
    } else {
      res.status(200).json(pokemons);
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { getHandlerApiInfo };

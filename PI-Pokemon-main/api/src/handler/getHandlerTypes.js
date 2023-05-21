const { getControllerTypes } = require("../controller/getControllerType.js");

const getHandlerTypes = async (req, res) => {
  try {
    const { name } = req.body;
    const typesDb = await getControllerTypes(name);
    res.status(200).json(typesDb);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
module.exports = { getHandlerTypes };

/* 
try {
    const typesApi = await axios.get(`https://pokeapi.co/api/v2/type`);
    const types = await typesApi.data.results.map((el) => el.name);
    types.forEach((el) => {
      Type.findOrCreate({ where: { name: el } });
    });
    const typesDb = await Type.findAll();
    res.status(200).json(typesDb);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  } 
*/

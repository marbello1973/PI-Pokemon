const {
  postControllerCreate,
} = require("../controller/postCotrollerCreate.js");
const postHandlerCreate = async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, height, weight, types } =
      req.body;
    const newPokemon = await postControllerCreate({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      types,
    });
    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
module.exports = { postHandlerCreate };

/*  
try {
    const { name, image, hp, attack, defense, speed, height, weight, types } =
      req.body;
    const newPokemon = await Pokemon.create({
      name,
      image: image
        ? image
        : `https://media.giphy.com/media/Gm7LdndVpiCs0/giphy.gif`,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    });
    const typesDb = await Type.findAll({
      where: { name: types },
    });
    newPokemon.addType(typesDb);
    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  } 
  */

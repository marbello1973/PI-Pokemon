const { Pokemon, Type } = require("../db.js");

const postControllerCreate = async ({
  name,
  image,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  types,
}) => {
  const pokemon = await Pokemon.findOne({
    where: {
      name: name,
      hp: hp,
      attack: attack,
      defense: defense,
      speed: speed,
      height: height,
      weight: weight,
    },
  });
  if (pokemon) {
    throw new Error("Pokemon already exists");
  } else {
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
    return newPokemon;
  }
};
module.exports = { postControllerCreate };

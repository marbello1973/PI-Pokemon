const {
  getAllUsers,
  createUser,
  getAllUsersName,
  getUserById,
} = require("../controller/getControllerUser");

//esta funcion me crea el nuevo usuario
const createUserHandler = async (req, res) => {
  try {
    const { nombre, imagen, vida, ataque, defensa, velocidad, altura, peso } =
      req.body;
    const newUser = await createUser(
      nombre,
      imagen,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso
    );
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//funcion me busca por numero id del pokemon
const getUserHandlerById = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";
  try {
    const userById = await getUserById(id, source);
    res.status(200).json(userById);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//esta funcion me retorna un objeto con los pokemones por nombre o todos
const getUserHandler = async (req, res) => {
  const { nombre } = req.query;
  // console.log(req.query)
  try {
    const results = nombre
      ? await getAllUsersName(nombre.toLowerCase())
      : await getAllUsers();
    res
      .status(200)
      .json(results); /* `No Implementado: devolveme todos los usuarios ` */
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getUserHandler, getUserHandlerById, createUserHandler };

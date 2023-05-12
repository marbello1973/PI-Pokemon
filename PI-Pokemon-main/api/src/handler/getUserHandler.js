const { getAllUsers, createUser, getAllUsersName, getUserById } = require("../controller/getControllerUser");

//esta funcion me retorna un objeto con los pokemones por nombre o todos  
const getUserHandler = async (req, res) => {
  const { nombre } = req.query;
  const allUser = await getAllUsers()
  const allUserName = await getAllUsersName(nombre)
  // console.log(nombre)
  if (nombre) {
    res.status(200).json(allUserName/* `No Implmentado: devolveme por query ${name}` */);
  } else {
    res.status(200).json(allUser/* `No Implementado: devolveme todos los usuarios ` */);
  }
};


const getUserHandlerById = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api"
  try {
    const userById = await getUserById(id, source)
    await res.status(200).json(userById /*`No Implementado: esta ruta me trae usuario por ${id}` */)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

};


//esta funcion me crea el nuevo usuario 
const createUserHandler = async (req, res) => {
  try {
    const { nombre, imagen, vida, ataque, defensa, velocidad, altura, peso } = req.body;
    const newUser = await createUser(nombre, imagen, vida, ataque, defensa, velocidad, altura, peso);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getUserHandler, getUserHandlerById, createUserHandler };

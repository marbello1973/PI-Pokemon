const { Router } = require("express");
const userRouter = Router();
const {
  getUserHandler,
  getUserHandlerById,
  createUserHandler,
} = require("../handler/getUserHandler");

//esta ruta me devuelve el objeto con todos los pokemones o el que viene por query
userRouter.get("/", getUserHandler);

//esta ruta me consulta por id
userRouter.get("/:id", getUserHandlerById);

//esta ruta me crea el usuario
userRouter.post("/", createUserHandler);

module.exports = userRouter;

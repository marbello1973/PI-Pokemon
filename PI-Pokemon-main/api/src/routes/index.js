const { Router } = require("express");
const {
  getPokemons,
  /* getPokemonId,
  getPokemonName, */
} = require("../handler/index.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//importar axios

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", getPokemons);
/* router.use("/:id", getPokemonId);
router.use("/?name=", getPokemonName);
 */
module.exports = router;

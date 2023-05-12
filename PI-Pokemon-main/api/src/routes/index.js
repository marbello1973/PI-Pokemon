const { Router } = require("express");
const userRoute = require("./userRouter");
const typeRouter = require("./typeRouter");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/user", userRoute);
router.use("/type", typeRouter);

module.exports = router;

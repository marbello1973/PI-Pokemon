const { Router } = require('express');
const { getHandlerApiInfo,
    getHandlerById,
    postHandlerCreate,
    getHandlerTypes } = require('../handler/index.js')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers

router.get('/pokemon', getHandlerApiInfo)
router.get('/pokemon/:id', getHandlerById)
router.get('/type', getHandlerTypes)
router.post('/pokemon', postHandlerCreate)

// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

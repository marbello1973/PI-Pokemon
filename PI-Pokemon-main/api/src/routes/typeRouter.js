const { Router } = require("express");
const { typeHandler } = require("../handler/typeHandler");
const typeRouter = Router();

typeRouter.get("/", typeHandler);

module.exports = typeRouter;

const { Router } = require("express");
const { getHandler } = require("../handler/typeHandler");
const typeRouter = Router();

typeRouter.get("/", getHandler);
// typeRouter.post("/", postHandler);

module.exports = typeRouter;

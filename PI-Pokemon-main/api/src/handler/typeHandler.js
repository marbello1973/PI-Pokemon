const { getTypes } = require("../controller/getControllerTypes");

const getHandler = async (req, res) => {
  const { nombre } = req.body;
  try {
    const type = await getTypes(nombre);
    console.log(type);
    res.status(200).json(type);
  } catch (error) {
    res.status(400).json({ error: message.error });
  }
};

module.exports = { getHandler };

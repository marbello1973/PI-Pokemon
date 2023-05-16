const { getTypes } = require("../controller/getControllerTypes");

const typeHandler = async (req, res) => {
  const { id, nombre } = req.body;
  try {
    const types = await getTypes(id, nombre);
    res.status(200).json(types);
  } catch (error) {
    res.status(400).json({ error: message.error });
  }
};

module.exports = { typeHandler };

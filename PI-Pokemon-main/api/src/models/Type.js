const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("type", {
    name: {
      //nombre
      type: DataTypes.STRING,
      unique: true
    },
    createdDB: {
      //creado en la base de datos
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, { timestamps: false, createdAt: false, updatedAt: false });
};

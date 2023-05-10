const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
    {
      uid: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vida: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ataque: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      defensa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      velocidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      altura: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      peso: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    { timestamps: true }
  );
};

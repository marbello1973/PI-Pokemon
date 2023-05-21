const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
    {
      id: {
        //id
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        //nombre
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: `Name is required` },
        },
      },
      image: {
        //imagen
        type: DataTypes.STRING,
      },
      hp: {
        //puntos de vida
        type: DataTypes.INTEGER,
      },
      attack: {
        //ataque
        type: DataTypes.INTEGER,
      },
      defense: {
        //defensa
        type: DataTypes.INTEGER,
      },
      speed: {
        //velocidad
        type: DataTypes.INTEGER,
      },
      height: {
        //altura
        type: DataTypes.INTEGER,
      },
      weight: {
        //peso
        type: DataTypes.INTEGER,
      },
      createdDB: {
        //creado en la base de datos
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
    },
    { timestamps: false, createdAt: false, updatedAt: false }
  );
};

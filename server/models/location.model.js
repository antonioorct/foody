const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>
  sequelize.define(
    "location",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unsigned: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      updatedAt: false,
      createdAt: false,
      underscored: true,
    }
  );

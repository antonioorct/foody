const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>
  sequelize.define(
    "meal",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unsigned: true,
        autoIncrement: true,
      },
      restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unsigned: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    {
      updatedAt: false,
      createdAt: false,
      underscored: true,
    }
  );

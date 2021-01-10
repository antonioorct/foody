const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>
  sequelize.define(
    "orderMeal",
    {
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unsigned: true,
      },
      mealId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unsigned: true,
      },
    },
    {
      updatedAt: false,
      createdAt: false,
      underscored: true,
    }
  );

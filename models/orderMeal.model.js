const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>
  sequelize.define(
    "orderMeal",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unsigned: true,
        autoIncrement: true,
      },
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
      tableName: "orders_meals",
    }
  );

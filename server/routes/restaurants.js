const express = require("express");
const router = express.Router();
const { models } = require("../sequelize");

router.get("/", async function (req, res) {
  const restaurants = await models.restaurant.findAll();

  res.status(200).send(restaurants);
});

router.get("/:restaurantId", async function (req, res) {
  const restaurant = await models.restaurant.findByPk(req.params.restaurantId);

  res.status(200).send(restaurant);
});

module.exports = router;

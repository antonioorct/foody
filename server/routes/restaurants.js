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

router.put("/:restaurantId", async function (req, res) {
  await models.restaurant.update(req.body, {
    where: { id: req.params.restaurantId },
  });

  const restaurant = await models.restaurant.findByPk(req.params.restaurantId);

  return res.status(200).send(restaurant);
});

module.exports = router;

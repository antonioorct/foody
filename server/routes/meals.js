const { verifyJwt, verifyRestaurant } = require("../middleware/jwtAuth");
const express = require("express");
const router = express.Router();
const { models } = require("../sequelize");

router.get("/:restaurantId", verifyJwt, async function (req, res) {
  const meals = await models.meal.findAll({
    where: { restaurantId: req.params.restaurantId },
  });

  res.status(200).send(meals);
});

router.post("/:restaurantId", verifyRestaurant, async function (req, res) {
  const newMeal = await models.meal.create(req.body);

  res.status(200).send(newMeal);
});

router.delete("/:mealId", verifyRestaurant, async function (req, res) {
  await models.meal.destroy({ where: { id: req.params.mealId } });

  res.status(200).send();
});

module.exports = router;

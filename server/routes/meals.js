const express = require("express");
const router = express.Router();
const { models } = require("../sequelize");

router.get("/:restaurantId", async function (req, res) {
  const meals = await models.meal.findAll({
    where: { restaurantId: req.params.restaurantId },
  });

  res.status(200).send(meals);
});

module.exports = router;

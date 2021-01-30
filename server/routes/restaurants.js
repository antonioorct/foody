const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { models } = require("../sequelize");
const { ValidationError } = require("sequelize");

router.get("/", async function (req, res) {
  const restaurants = await models.restaurant.findAll();

  res.status(200).send(restaurants);
});

router.get("/:restaurantId", async function (req, res) {
  const restaurant = await models.restaurant.findByPk(req.params.restaurantId);

  res.status(200).send(restaurant);
});

router.post("/", async function (req, res) {
  try {
    req.body["password"] = await bcrypt.hash(req.body["password"], 10);
    const restaurant = await models.restaurant.create(req.body);

    return res.status(200).send(restaurant);
  } catch (e) {
    console.log(e);
    let message = "";

    if (e instanceof ValidationError) {
      e.errors.forEach((error) => {
        switch (error.validatorKey) {
          case "not_unique":
            message = error.path.includes("username")
              ? "To korisnicko ime je vec zauzeto."
              : "Ta e-mail adresa je vec zauzeta.";
            break;
        }
      });
    }

    return res.status(400).send(message);
  }
});

router.put("/:restaurantId", async function (req, res) {
  await models.restaurant.update(req.body, {
    where: { id: req.params.restaurantId },
  });

  const restaurant = await models.restaurant.findByPk(req.params.restaurantId);

  return res.status(200).send(restaurant);
});

module.exports = router;

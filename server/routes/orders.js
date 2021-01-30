const express = require("express");
const { verifyJwt } = require("../middleware/jwtAuth");
const router = express.Router();
const { models } = require("../sequelize");

router.get("/user/:userId", verifyJwt, async function (req, res) {
  const orders = await models.order.findAll({
    include: [
      { model: models.orderMeal, include: [{ model: models.meal }] },
      { model: models.restaurant },
      { model: models.userLocation },
    ],
    where: { userId: req.params.userId },
  });

  res.status(200).send(orders);
});

router.get("/restaurant/:restaurantId", verifyJwt, async function (req, res) {
  const orders = await models.order.findAll({
    include: [
      { model: models.orderMeal, include: [{ model: models.meal }] },
      { model: models.user },
      { model: models.userLocation },
    ],
    where: { restaurantId: req.params.restaurantId },
  });

  res.status(200).send(orders);
});

router.post("/", verifyJwt, async function (req, res) {
  const newOrder = await models.order.create({
    userId: req.body.userId,
    restaurantId: req.body.restaurantId,
    userLocationId: req.body.userLocationId,
    price: req.body.price,
    status: "Priprema (ETA 2 min.)",
  });

  const meals = req.body.meals.map((meal) => ({
    mealId: meal.id,
    orderId: newOrder.id,
  }));

  const newOrderMeals = await models.orderMeal.bulkCreate(meals);

  setTimeout(async () => {
    await models.order.update(
      { status: "Dostava (ETA 1 min.)" },
      { where: { id: newOrder.id } }
    );
  }, 60000);

  setTimeout(async () => {
    await models.order.update(
      { status: "Dostavljeno" },
      { where: { id: newOrder.id } }
    );
  }, 120000);

  res.status(200).send(newOrder);
});

router.delete("/:orderId", verifyJwt, async function (req, res) {
  await models.orderMeal.destroy({ where: { orderId: req.params.orderId } });
  await models.order.destroy({ where: { id: req.params.orderId } });

  res.status(200).send();
});

module.exports = router;

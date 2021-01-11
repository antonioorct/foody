const express = require("express");
const router = express.Router();
const { models } = require("../sequelize");

router.post("/", async function (req, res) {
  const newOrder = await models.order.create({
    userId: req.body.userId,
    restaurantId: req.body.restaurantId,
    userLocationId: req.body.userLocationId,
    status: "Priprema (ETA 2 min.)",
  });

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

module.exports = router;

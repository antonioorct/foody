const express = require("express");
const router = express.Router();
const { models } = require("../sequelize");

router.get("/:userId", async function (req, res) {
  const userLocations = await models.userLocation.findAll({
    where: { userId: req.params.userId },
  });

  res.status(200).send(userLocations);
});

router.post("/:userId", async function (req, res) {
  const newLocation = await models.userLocation.create({
    userId: req.params.userId,
    name: req.body.name,
  });

  res.status(201).send(newLocation);
});

router.delete("/:locationId", async function (req, res) {
  await models.userLocation.destroy({ where: { id: req.params.locationId } });

  res.status(200).send();
});

module.exports = router;

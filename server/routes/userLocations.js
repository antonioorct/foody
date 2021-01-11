const express = require("express");
const router = express.Router();
const { models } = require("../sequelize");

router.get("/:userId", async function (req, res) {
  const userLocations = await models.userLocation.findAll({
    where: { userId: req.params.userId },
  });

  res.status(200).send(userLocations);
});

module.exports = router;

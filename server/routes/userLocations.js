const express = require("express");
const router = express.Router();
const { models } = require("../sequelize");

router.get("/:userId", async function (req, res) {
  const locations = await models.location.findAll({
    where: { userId: req.params.userId },
  });

  res.status(200).send(locations);
});

module.exports = router;

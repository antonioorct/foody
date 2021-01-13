const express = require("express");
const router = express.Router();
const { models } = require("../sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/user", async function (req, res) {
  const user = await models.user.findOne({
    where: { username: req.body.username },
  });
  if (!user) return res.status(404).send("Invalid username and/or password");

  const doPasswordsMatch = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!doPasswordsMatch)
    return res.status(404).send("Invalid username and/or password");

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      type: "user",
    },
    process.env.JWT_SECRET
  );

  res.status(200).send(token);
});

router.post("/restaurant", async function (req, res) {
  const restaurant = await models.restaurant.findOne({
    where: { username: req.body.username },
  });
  if (!restaurant)
    return res.status(404).send("Invalid username and/or password");

  const doPasswordsMatch = await bcrypt.compare(
    req.body.password,
    restaurant.password
  );

  if (!doPasswordsMatch)
    return res.status(404).send("Invalid username and/or password");

  const token = jwt.sign(
    {
      id: restaurant.id,
      username: restaurant.username,
      email: restaurant.email,
      name: restaurant.name,
      type: "restaurant",
    },
    process.env.JWT_SECRET
  );

  res.status(200).send(token);
});

module.exports = router;

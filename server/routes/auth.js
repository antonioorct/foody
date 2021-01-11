const express = require("express");
const router = express.Router();
const { models } = require("../sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async function (req, res) {
  const user = await models.user.findOne({
    where: { username: req.body.username },
  });
  if (!user) return res.status(404).send("Invalid email and/or password");

  const doPasswordsMatch = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!doPasswordsMatch)
    return res.status(404).send("Invalid email and/or password");

  const token = jwt.sign(
    {
      username: user.username,
      email: user.email,
    },
    process.env.JWT_SECRET
  );

  res.status(200).send(token);
});

module.exports = router;

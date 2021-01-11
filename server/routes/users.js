const express = require("express");
const router = express.Router();
const { models } = require("../sequelize");
const bcrypt = require("bcrypt");

router.get("/", function (req, res) {
  res.send("respond with a resource");
});

router.post("/", async function (req, res) {
  try {
    req.body["password"] = await bcrypt.hash(req.body["password"], 10);
    await models.user.create(req.body);

    return res.status(201).send();
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

module.exports = router;

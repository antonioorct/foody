const express = require("express");
const router = express.Router();
const { models } = require("../sequelize");
const bcrypt = require("bcrypt");
const { ValidationError } = require("sequelize");

router.get("/", function (req, res) {
  res.send("respond with a resource");
});

router.post("/", async function (req, res) {
  try {
    req.body["password"] = await bcrypt.hash(req.body["password"], 10);
    await models.user.create(req.body);

    return res.status(201).send();
  } catch (e) {
    let message = "";

    if (e instanceof ValidationError) {
      e.errors.forEach((error) => {
        switch (error.validatorKey) {
          case "not_unique":
            message =
              "That " +
              error.path.replace("users.", "").replace("_UNIQUE", "") +
              " is taken. Please choose another one";
        }
      });
    }

    return res.status(400).send(message);
  }
});

module.exports = router;

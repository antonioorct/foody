const express = require("express");
const router = express.Router();
const { models } = require("../sequelize");
const bcrypt = require("bcrypt");
const { ValidationError } = require("sequelize");
const { verifyJwt } = require("../middleware/jwtAuth");

router.get("/:userId", verifyJwt, async function (req, res) {
  const user = await models.user.findByPk(parseInt(req.params.userId));

  return res.status(200).send(user);
});

router.post("/", verifyJwt, async function (req, res) {
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

router.put("/:userId", verifyJwt, async function (req, res) {
  await models.user.update(req.body, { where: { id: req.params.userId } });

  const user = await models.user.findByPk(req.params.userId);

  return res.status(200).send(user);
});

module.exports = router;

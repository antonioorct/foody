const usersRouter = require("./users");
const authRouter = require("./auth");
const restaurantsRouter = require("./restaurants");
const mealsRouter = require("./meals");

module.exports = (app) => {
  app.use("/api/users", usersRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/restaurants", restaurantsRouter);
  app.use("/api/meals", mealsRouter);
};

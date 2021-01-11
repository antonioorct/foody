const usersRouter = require("./users");
const authRouter = require("./auth");
const restaurantsRouter = require("./restaurants");
const mealsRouter = require("./meals");
const userLocationsRouter = require("./userLocations");
const ordersRouter = require("./orders");

module.exports = (app) => {
  app.use("/api/users", usersRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/restaurants", restaurantsRouter);
  app.use("/api/meals", mealsRouter);
  app.use("/api/user_locations", userLocationsRouter);
  app.use("/api/orders", ordersRouter);
};

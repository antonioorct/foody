const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.JAWSDB_URL);

sequelize
  .authenticate()
  .then(console.log("Connected to database."))
  .catch((e) => {
    console.log("Unable to connect to the database:");
    console.log(e.message);
    process.exit(1);
  });

const models = [
  require("./models/user.model"),
  require("./models/userLocation.model"),
  require("./models/restaurant.model"),
  require("./models/meal.model"),
  require("./models/order.model"),
  require("./models/orderMeal.model"),
];

models.forEach((model) => {
  model(sequelize);
});

sequelize.models.order.hasMany(sequelize.models.orderMeal);
sequelize.models.orderMeal.belongsTo(sequelize.models.meal);
sequelize.models.order.belongsTo(sequelize.models.restaurant);
sequelize.models.order.belongsTo(sequelize.models.user);
sequelize.models.order.belongsTo(sequelize.models.userLocation);

module.exports = sequelize;

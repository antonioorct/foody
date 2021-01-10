const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:3306/${process.env.DB_DB}`
);

try {
  console.log("Connected to database.");
} catch (e) {
  console.log("Unable to connect to the database:");
  console.log(e.message);
  process.exit(1);
}

const models = [
  require("./models/user.model"),
  require("./models/location.model"),
  require("./models/restaurant.model"),
  require("./models/meal.model"),
];

models.forEach((model) => {
  model(sequelize);
});

module.exports = sequelize;

const express = require("express");
const router = require("./routes/routes");
const cors = require("cors");
require("./sequelize");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

router(app);

try {
  app.listen(process.env.PORT);
  console.log("Listening on port" + process.env.PORT);
} catch (e) {
  console.log("Error starting server: ");
  console.log(e.message);
  process.exit(1);
}

module.exports = app;

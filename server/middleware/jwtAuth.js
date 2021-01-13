const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) return res.status(403).send("No token");

  jwt.verify(token, process.env.JWT_SECRET, (err, jwtDecoded) => {
    if (err) return res.status(401).send("Unauthorized");

    req.userId = jwtDecoded.id;
    req.email = jwtDecoded.email;
    req.username = jwtDecoded.username;
    req.firstName = jwtDecoded.firstName;
    next();
  });
};

module.exports = { verifyJwt };

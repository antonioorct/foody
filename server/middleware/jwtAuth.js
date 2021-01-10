const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) return res.status(403).send("No token");

  jwt.verify(token, process.env.JWT_SECRET, (err, jwtDecoded) => {
    if (err) return res.status(401).send("Unauthorized");

    req.userId = decoded.id;
    next();
  });
};

module.exports = { verifyJwt };

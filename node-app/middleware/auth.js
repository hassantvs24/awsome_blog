const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const tokenSend = req.headers['authorization'];

  if (!tokenSend) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const token = tokenSend.split(' ')[1];
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
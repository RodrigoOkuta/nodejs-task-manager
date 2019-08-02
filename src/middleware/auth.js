const jwt = require("jsonwebtoken");

const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "Uq9!pBv7NajAyW!Y^W#kL$_5uL+6J6-8Z6yQ");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token
    });

    if (!user) throw new Error();

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;

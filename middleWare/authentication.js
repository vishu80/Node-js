const jwt = require("jsonwebtoken");
const user = require("../db/models/usermodel");
async function checkAuthentication(req, res, next) {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    let token = req.headers.authorization.split(" ")[1];

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.userData = await user.User.findById({ _id: decode.id });
      next();
    } catch (error) {
      res.status(401).json({
        message: "401 Not Autorised",
      });
    }
  } else {
    res.status(401).json({
      message: "401 Not Autorised",
    });
  }
}

module.exports = checkAuthentication;

var jwt = require("jsonwebtoken");
const response = require("../network/response");
require("dotenv").config({ path: __dirname + "/./../.env" });
const privateKey = process.env.SECRET;

module.exports = {
  generateToken: (toSave) => {
    return new Promise((resolve, reject) => {
      const token = jwt.sign(toSave, privateKey, { expiresIn: "1d" });
      if (token) {
        resolve(token);
      } else {
        reject();
      }
    });
  },

  verifyToken: (req, res, next) => {
    if (!req.headers.authorization)
      response.error(req, res, "Bad request", 400);
    const AuthContent = req.headers.authorization;
    if (AuthContent.split(" ")[0] !== "bearer")
      response.error(req, res, "Bad request", 400);
    if (!AuthContent.split(" ")[1]) response.error(req, res, "Token unviable");
    const Token = AuthContent.split(" ")[1];
    jwt.verify(Token, privateKey, (err, decoded) => {
      if (decoded) {
        req.user = decoded;
        next();
      } else {
        response.error(req, res, "token expired or unviable");
      }
    });
  },
};

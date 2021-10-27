const express = require("express");
const response = require("../../network/response");
const { createUser } = require("./controler");
const router = express.Router();

router.post("/singup", (req, res) => {
  const { username, email, password, confirmationPassword } = req.body;
  if (password === !confirmationPassword) {
    response.error(
      req,
      res,
      "password and confirm password are not equals",
      400
    );
  }
  createUser({ username, email, password })
    .then((message) => {
      response.success(req, res, message);
    })
    .catch((err) => {
      response.error(req, res, "Internal error", 500, err);
    });
});

module.exports = router;

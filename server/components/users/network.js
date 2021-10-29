const express = require("express");
const response = require("../../network/response");
const { createUser, getUser } = require("./controler");
const router = express.Router();

router.post("/singup", (req, res) => {
  const { username, email, password, confirmationPassword } = req.body;
  if (password !== confirmationPassword) {
    response.error(
      req,
      res,
      "password and confirmation password are not equals",
      400
    );
  } else {
    createUser({ username, email, password })
      .then((message) => {
        response.success(req, res, message);
      })
      .catch((err) => {
        response.error(req, res, err.message, 500, err);
      });
  }
});

router.post("/singin", (req, res) => {
  const { username, password } = req.body;
  //Buscando el usuario
  getUser({ username, password })
    .then((message) => {
      response.success(req, res, message);
    })
    .catch((err) => {
      response.error(req, res, "Incorrect username or password", 500, err);
    });
});

module.exports = router;

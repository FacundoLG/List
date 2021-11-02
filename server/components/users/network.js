const express = require("express");
const response = require("../../network/response");
const { createUser, getUser } = require("./controler");
const { verifyToken } = require("../../auth/JWT");
const router = express.Router();

router.post("/test", verifyToken, (req, res) => {
  response.success(req, res, req.user);
});

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
      response.error(req, res, err.message, 400, err);
    });
});

module.exports = router;

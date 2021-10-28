const express = require("express");
const response = require("../../network/response");
const { createUser, getUser } = require("./controler");
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
    .then((message) => {º
      response.success(req, res, message);
    })
    .catch((err) => {
      response.error(req, res, "Internal error", 500, err);
    });
});


router.post("singin",(req,res) => {
  const {username,email,hashedPassword} = req.body;
  //Buscando el usuario
  getUser(data).then((message) => {
    //Bcrypy verifica la contraseña
        // genera el token y se le da una una fecha de expiracion
        // o se envia el error "Bad combination"
    response.success(req,res,message)
  }).catch((err) => {
    response.error(req,res,"User does not exist",500,err)
  })

})  

module.exports = router;

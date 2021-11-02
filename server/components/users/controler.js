const { addUser, getOneUser } = require("./store");
const bcrypt = require("bcrypt");

const { generateToken } = require("../../auth/JWT.js");
const saltRounds = 10;

module.exports = {
  createUser: (data) => {
    let { username, password, email } = data;
    return new Promise((resolve, reject) => {
      getOneUser(data.username).then((result) => {
        if (result[0]) {
          reject({ message: "User already exist" });
        }
      });

      bcrypt.hash(password, saltRounds).then((password) => {
        addUser({ username, email, password })
          .then(() => {
            resolve("User created successfully");
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  },

  getUser: (data) => {
    return new Promise((resolve, reject) => {
      getOneUser(data)
        .then(async (user) => {
          //Verificar si existe un usuario
          if (!user) {
            reject({ message: "User does not exist" });
          }
          //Bcrypy verifica la contraseña
          // o se envia el error "Bad combination"
          const match = await bcrypt.compare(data.password, user.password);
          if (match) {
            const user_data = {
              id: user._id,
              username: user.username,
            };
            // genera el token y se le da una una fecha de expiracion
            generateToken(user_data).then((token) => {
              resolve({ ...user_data, token });
            });
          } else {
            reject({ message: "Incorrect user or password" });
          }
        })
        .catch((err) => {
          reject({ message: "Incorrect user or password", err });
        });
    });
  },
};

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
          reject("User already exist");
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
            reject();
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

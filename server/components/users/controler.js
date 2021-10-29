const { addUser, getOneUser } = require("./store");
const bcrypt = require("bcrypt");
const saltRounds = 10;
module.exports = {
  createUser: (data) => {
    let { username, password, email } = data;
    return new Promise((resolve, reject) => {
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
            // genera el token y se le da una una fecha de expiracion
            const user_data = {
              id: user._id,
              username: user.username,
            };
            resolve(user_data);
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

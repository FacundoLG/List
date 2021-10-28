const { addUser,getOneUser } = require("./store");

module.exports = {
  
  createUser: (data) => {
    return new Promise((resolve, reject) => {
      //Se hashea la contraseña
      addUser(data)
        .then(() => {
          resolve("User created successfully");
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  getUser: (data) => {
    return new Promise((resolve,reject) => {
      getOneUser(data)
      .then(() => {
        resolve("User Loged successfully")
      })
      .catch(err => {
        reject(err)
      })
    })
  }
};

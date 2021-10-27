const { addUser } = require("./store");

module.exports = {
  createUser: (data) => {
    return new Promise((resolve, reject) => {
      addUser(data)
        .then(() => {
          resolve("User created successfully");
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

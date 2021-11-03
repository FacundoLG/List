const { createOneProduct, getProducts } = require("./store");

module.exports = {
  createProduct: (user, data) => {
    return new Promise((resolve, reject) => {
      createOneProduct(user, data)
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getAllProducts: (userData) => {
    return new Promise((resolve, reject) => {
      const products = getProducts(userData);
      products
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

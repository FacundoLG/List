const { createProduct, getProducts } = require("./store");

module.exports = {
  createProduct: (data) => {},
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

const users = require("../components/users/network");
const products = require("../components/products/network");
const routes = (server) => {
  server.use("/users", users);
  server.use("/products", products);
};

module.exports = routes;

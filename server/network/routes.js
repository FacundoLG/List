const users = require("../components/users/network");
const routes = (server) => {
  server.use("/users", users);
};

module.exports = routes;

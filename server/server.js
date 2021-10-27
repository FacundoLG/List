const express = require("express");
const routes = require("./network/routes");
const dotenv = require("dotenv").config();
const db = require("./db");
const app = express();

const PORT = 3500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db();
routes(app);

app.listen(PORT, () => {
  console.log("[Server] Listening on port " + PORT);
});

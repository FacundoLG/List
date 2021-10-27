const db = require("mongoose");

const uri = process.env.URI;

db.Promise = global.Promise;
const connect = async () => {
  await db
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("[db] Conectada con éxito"))
    .catch((err) => console.error("[db]", err));
};

module.exports = connect;

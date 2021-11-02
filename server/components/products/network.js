const express = require("express");
const response = require("../../network/response");
const router = express.Router();
const { verifyToken } = require("../../auth/JWT");
const { createProduct, getAllProducts } = require("./controler");
router.get("/", verifyToken, (req, res) => {
  getAllProducts(req.user)
    .then((results) => {
      response.success(req, res, { results: results });
    })
    .catch((err) => {
      response.error(req, res, "Something goes wrong", 500, err);
    });
});

router.post("/", verifyToken, (req, res) => {});

router.patch("/", verifyToken, (req, res) => {});

module.exports = router;

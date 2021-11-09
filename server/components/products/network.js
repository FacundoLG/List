const express = require("express");
const response = require("../../network/response");
const router = express.Router();
const { verifyToken } = require("../../auth/JWT");
const { createProduct, getAllProducts, editProduct } = require("./controler");
router.get("/", verifyToken, (req, res) => {
  getAllProducts(req.user)
    .then((results) => {
      response.success(req, res, { results: results });
    })
    .catch((err) => {
      response.error(req, res, "Something goes wrong", 500, err);
    });
});

router.post("/", verifyToken, (req, res) => {
  createProduct(req.user, req.body)
    .then(() => {
      response.success(req, res, "Product Created", 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500, err);
    });
});

router.patch("/", verifyToken, (req, res) => {
  editProduct(req.body)
    .then(() => {
      response.success(req, res, "Product Edited");
    })
    .catch((err) => {
      response.error(req, res, "Internal Error", 500, err);
    });
});

module.exports = router;

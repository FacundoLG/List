const express = require("express");
const response = require("express");
const router = express.Router();
const { verifyToken } = require("../../auth/JWT");
const { createProduct } = "./controler.js";

router.post("/", verifyToken, (req, res) => {});

router.patch("/", verifyToken, (req, res) => {});

module.exports = router;

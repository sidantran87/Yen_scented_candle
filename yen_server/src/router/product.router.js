const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product.controller")

const { authMiddleWare } = require("../middleWare/jwt.middleware");

router.get("/create", ProductController.createProduct)
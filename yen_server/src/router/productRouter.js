const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/productController");

const { authMiddleWare } = require("../middleWare/jwt.middleware");

router.post("/create", ProductController.createProduct);
router.put("/update/:id",  ProductController.updateProduct);
router.delete("/delete/:id", ProductController.deleteProduct);
router.delete("/delete-all/:ids", ProductController.deleteMany);
router.get("/get-all", ProductController.getAll);
router.get("/get-all-type", ProductController.getAllType);
router.get("/get-detail/:id", ProductController.getDetailProduct);

module.exports = router;

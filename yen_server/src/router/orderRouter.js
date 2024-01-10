const express = require("express");
const router = express.Router()
const OrderController = require('../controllers/orderController');
const {authMiddleWare, authUserMiddleWare} = require("../middleWare/jwt.middleware")


router.post('/create/:id', authUserMiddleWare, OrderController.createOrder)
router.get('/get-all-order/:id',authUserMiddleWare, OrderController.getAllOrderDetails)
router.get('/get-details-order/:id', OrderController.getDetailsOrder)
router.delete('/cancel-order/:id',authUserMiddleWare, OrderController.cancelOrderDetails)
router.get('/get-all-order',authMiddleWare, OrderController.getAllOrder)


module.exports = router
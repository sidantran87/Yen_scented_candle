const OrderService = require("../services/orderService");

// Tạo một đơn hàng mới
const createOrder = async (req, res) => {
  try {
    const {
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
      fullName,
      address,
      city,
      phone,
    } = req.body;
    // Kiểm tra thiếu thông tin bắt buộc
    if (
      !paymentMethod ||
      !itemsPrice ||
      !shippingPrice ||
      !totalPrice ||
      !fullName ||
      !address ||
      !city ||
      !phone
    ) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    // Gọi dịch vụ để tạo đơn hàng
    const response = await OrderService.createOrder(req.body);
    return res.status(200).json(response);
  } catch (e) {
    // Xử lý lỗi nếu có
    return res.status(404).json({
      message: e,
    });
  }
};

// Lấy thông tin chi tiết đơn hàng cho một người dùng cụ thể
const getAllOrderDetails = async (req, res) => {
  try {
    const userId = req.params.id;
    // Kiểm tra thiếu ID người dùng
    if (!userId) {
      return res.status(200).json({
        status: "ERR",
        message: "The userId is required",
      });
    }
    // Gọi dịch vụ để lấy thông tin chi tiết đơn hàng
    const response = await OrderService.getAllOrderDetails(userId);
    return res.status(200).json(response);
  } catch (e) {
    // Xử lý lỗi
    return res.status(404).json({
      message: e,
    });
  }
};

// Lấy thông tin chi tiết của một đơn hàng cụ thể
const getDetailsOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    // Kiểm tra thiếu ID đơn hàng
    if (!orderId) {
      return res.status(200).json({
        status: "ERR",
        message: "The userId is required",
      });
    }
    // Gọi dịch vụ để lấy thông tin chi tiết đơn hàng
    const response = await OrderService.getOrderDetails(orderId);
    return res.status(200).json(response);
  } catch (e) {
    // Xử lý lỗi
    return res.status(404).json({
      message: e,
    });
  }
};

// Hủy chi tiết đơn hàng (các mặt hàng trong đơn hàng)
const cancelOrderDetails = async (req, res) => {
  try {
    const data = req.body.orderItems;
    const orderId = req.body.orderId;
    // Kiểm tra thiếu ID đơn hàng
    if (!orderId) {
      return res.status(200).json({
        status: "ERR",
        message: "The orderId is required",
      });
    }
    // Gọi dịch vụ để hủy chi tiết đơn hàng
    const response = await OrderService.cancelOrderDetails(orderId, data);
    return res.status(200).json(response);
  } catch (e) {
    // Xử lý lỗi
    return res.status(404).json({
      message: e,
    });
  }
};

// Lấy tất cả các đơn hàng
const getAllOrder = async (req, res) => {
  try {
    // Gọi dịch vụ để lấy tất cả đơn hàng
    const data = await OrderService.getAllOrder();
    return res.status(200).json(data);
  } catch (e) {
    // Xử lý lỗi
    return res.status(404).json({
      message: e,
    });
  }
};

// Xuất các hàm để sử dụng ở nơi khác
module.exports = {
  createOrder,
  getAllOrderDetails,
  getDetailsOrder,
  cancelOrderDetails,
  getAllOrder,
};

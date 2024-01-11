const Order = require("../models/orderProductModel");
const Product = require("../models/productModel");

// Hàm tạo đơn hàng mới
const createOrder = (newOrder) => {
  return new Promise(async (resolve, reject) => {
    // Rút trích thông tin từ đơn hàng mới
    const {
      orderItems,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
      fullName,
      address,
      city,
      phone,
      user,
      isPaid,
      paidAt,
      email,
    } = newOrder;
    try {
      // Xử lý từng sản phẩm trong đơn hàng
      const promises = orderItems.map(async (order) => {
        // Cập nhật thông tin sản phẩm sau khi đơn hàng được tạo
        const productData = await Product.findOneAndUpdate(
          {
            _id: order.product,
            countInStock: { $gte: order.amount },
          },
          {
            $inc: {
              countInStock: -order.amount,
              selled: +order.amount,
            },
          },
          { new: true }
        );
        // Kiểm tra xem cập nhật thành công hay không
        if (productData) {
          return {
            status: "OK",
            message: "SUCCESS",
          };
        } else {
          return {
            status: "OK",
            message: "ERR",
            id: order.product,
          };
        }
      });
      // Chờ tất cả các promise hoàn thành
      const results = await Promise.all(promises);
      // Lọc ra các sản phẩm không đủ số lượng
      const newData = results && results.filter((item) => item.id);
      if (newData.length) {
        // Trả về thông báo lỗi nếu có sản phẩm không đủ số lượng
        const arrId = [];
        newData.forEach((item) => {
          arrId.push(item.id);
        });
        resolve({
          status: "ERR",
          message: `Quantity of product with id: ${arrId.join(
            ","
          )} is not sufficient`,
        });
      } else {
        // Tạo đơn hàng mới
        const createdOrder = await Order.create({
          orderItems,
          shippingAddress: {
            fullName,
            address,
            city,
            phone,
          },
          paymentMethod,
          itemsPrice,
          shippingPrice,
          totalPrice,
          user: user,
          isPaid,
          paidAt,
        });

        // Send a success response after creating the order
        resolve({
          status: "OK",
          message: "Order created successfully",
          order: createdOrder,
        });
      }
    } catch (e) {
      // Xử lý lỗi nếu có
      reject(e);
    }
  });
};


// Hàm lấy thông tin tất cả đơn hàng của một người dùng
const getAllOrderDetails = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Lấy tất cả đơn hàng của người dùng và sắp xếp theo thời gian
      const order = await Order.find({
        user: id,
      }).sort({ createdAt: -1, updatedAt: -1 });
      // Kiểm tra xem có đơn hàng nào hay không
      if (order === null) {
        resolve({
          status: "ERR",
          message: "The order is not defined",
        });
      }
      // Trả về thông tin đơn hàng nếu có
      resolve({
        status: "OK",
        message: "SUCESSS",
        data: order,
      });
    } catch (e) {
      // Xử lý lỗi nếu có
      reject(e);
    }
  });
};

// Hàm lấy thông tin một đơn hàng cụ thể
const getOrderDetails = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Lấy thông tin đơn hàng dựa trên ID
      const order = await Order.findById({
        _id: id,
      });
      // Kiểm tra xem có đơn hàng nào hay không
      if (order === null) {
        resolve({
          status: "ERR",
          message: "The order is not defined",
        });
      }
      // Trả về thông tin đơn hàng nếu có
      resolve({
        status: "OK",
        message: "SUCESSS",
        data: order,
      });
    } catch (e) {
      // Xử lý lỗi nếu có
      reject(e);
    }
  });
};

// Hàm hủy đơn hàng cụ thể
const cancelOrderDetails = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let order = [];
      // Xử lý từng sản phẩm trong đơn hàng để hủy
      const promises = data.map(async (order) => {
        // Cập nhật lại số lượng sản phẩm và hủy đơn hàng
        const productData = await Product.findOneAndUpdate(
          {
            _id: order.product,
            selled: { $gte: order.amount },
          },
          {
            $inc: {
              countInStock: +order.amount,
              selled: -order.amount,
            },
          },
          { new: true }
        );
        // Kiểm tra xem cập nhật thành công hay không
        if (productData) {
          order = await Order.findByIdAndDelete(id);
          // Kiểm tra xem có đơn hàng nào hay không
          if (order === null) {
            resolve({
              status: "ERR",
              message: "The order is not defined",
            });
          }
        } else {
          return {
            status: "OK",
            message: "ERR",
            id: order.product,
          };
        }
      });
      // Chờ tất cả các promise hoàn thành
      const results = await Promise.all(promises);
      // Kiểm tra xem có sản phẩm không tồn tại hay không
      const newData = results && results[0] && results[0].id;
      if (newData) {
        // Trả về thông báo lỗi nếu có sản phẩm không tồn tại
        resolve({
          status: "ERR",
          message: `Product with id: ${newData} does not exist`,
        });
      }
      // Trả về thông báo thành công nếu hủy đơn hàng thành công
      resolve({
        status: "OK",
        message: "success",
        data: order,
      });
    } catch (e) {
      // Xử lý lỗi nếu có
      reject(e);
    }
  });
};

// Hàm lấy thông tin tất cả đơn hàng
const getAllOrder = () => {
  return new Promise(async (resolve, reject) => {
    try {
      // Lấy tất cả đơn hàng và sắp xếp theo thời gian
      const allOrder = await Order.find().sort({
        createdAt: -1,
        updatedAt: -1,
      });
      // Trả về thông tin tất cả đơn hàng nếu có
      resolve({
        status: "OK",
        message: "Success",
        data: allOrder,
      });
    } catch (e) {
      // Xử lý lỗi nếu có
      reject(e);
    }
  });
};

// Xuất các hàm để sử dụng ở nơi khác
module.exports = {
  createOrder,
  getAllOrderDetails,
  getOrderDetails,
  cancelOrderDetails,
  getAllOrder,
};

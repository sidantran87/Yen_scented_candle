const ProductService = require("../services/productService");

// Tạo một sản phẩm mới
const createProduct = async (req, res) => {
  try {
    const {
      name,
      image,
      type,
      price,
      countInStock,
      rating,
      description,
      discount,
    } = req.body;

    // Kiểm tra thông tin đầu vào
    if (!name || !image || !type || !price || !countInStock || !rating) {
      return res.status(200).json({
        status: "Err",
        messgae: "Invalid input!",
      });
    }

    // Gọi service để tạo sản phẩm
    const response = await ProductService.createProduct(req.body);

    return res.status(200).json(response);
  } catch (error) {
    res.status(404).json({
      error: error.messgae,
    });
  }
};

// Cập nhật thông tin của một sản phẩm
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const data = req.body;

    // Kiểm tra ID sản phẩm
    if (!productId) {
      return res.status(200).json({
        status: "ERR",
        message: "No product Id provided!",
      });
    }

    // Gọi service để cập nhật sản phẩm
    const response = await ProductService.updateProduct(productId, data);
    return res.status(200).json(response.data);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

// Xóa một sản phẩm
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    // Kiểm tra ID sản phẩm
    if (!productId) {
      return res.status(400).json({
        status: "ERR",
        message: "No Product Id provided!",
      });
    }

    // Gọi service để xóa sản phẩm
    const response = await ProductService.deleteProduct(productId);

    if (response.status === "ERR") {
      return res.status(404).json(response);
    }

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in deleteProduct controller:", error);
    return res.status(500).json({
      status: "ERR",
      message: "Internal Server Error",
    });
  }
};

// Xóa nhiều sản phẩm
const deleteMany = async (req, res) => {
  try {
    const ids = req.params.ids;

    // Kiểm tra ID sản phẩm
    if (!ids) {
      return {
        error: "Err",
        message: "No Ids are provided!!!",
      };
    }

    // Gọi service để xóa nhiều sản phẩm
    const response = await ProductService.deleteManyPs(ids);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

// Lấy tất cả sản phẩm
const getAll = async (req, res) => {
  try {
    const { limit, page, sort, filter } = req.query;

    // Gọi service để lấy tất cả sản phẩm
    const response = await ProductService.getAllProduct(
      Number(limit) || null,
      Number(page) || null,
      sort,
      filter
    );

    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      messgae: error,
    });
  }
};

// Lấy tất cả loại sản phẩm
const getAllType = async (req, res) => {
  try {
    // Gọi service để lấy tất cả loại sản phẩm
    const response = await ProductService.getAllType();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

// Lấy chi tiết của một sản phẩm
const getDetailProduct = async (req, res) => {
  try {
    const idProduct = req.params.id;

    // Kiểm tra ID sản phẩm
    if (!idProduct) {
      return {
        status: "Err",
        message: "No product Id provided !!!!!!",
      };
    }

    // Gọi service để lấy chi tiết sản phẩm
    const response = await ProductService.getDetailProduct(idProduct);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  deleteMany,
  getAll,
  getAllType,
  getDetailProduct,
};

const ProductService = require("../services/productService");

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
    if (!name || !image || !type || !price || !countInStock || !rating) {
      return res.status(200).json({
        status: "Err",
        messgae: "Invalid input!",
      });
    }
    const response = await ProductService.createProduct(req.body);

    return res.status(200).json(response);
  } catch (error) {
    res.status(404).json({
      error: error.messgae,
    });
  }
};

// const updateProduct = async (req, res) => {
//   try {
//     const productId = req.params.id;
//     const data = req.body;

//     if (!productId) {
//       return res.status(200).json({
//         status: "OKE",
//         message: "None Product ID input!",
//       });
//     }

//     const response = await ProductService.updateProduct(productId, data);
//     return res.status(200).json(response.data);
//   } catch (error) {
//     return res.status(404).json({
//       message: error,
//     });
//   }
// };

// update 1 product
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const data = req.body;
    if (!productId) {
      return res.status(200).json({
        status: "ERR",
        message: "No product Id provided!",
      });
    }
    const response = await ProductService.updateProduct(productId, data);
    return res.status(200).json(response.data);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

// delete 1 products
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    if (!productId) {
      return res.status(400).json({
        status: "ERR",
        message: "No Product Id provided!",
      });
    }
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

// delete many products

const deleteMany = async (req, res) => {
  try {
    const ids = req.params.ids;
    if (!ids) {
      return {
        error: "Err",
        message: "No Ids are provided!!!",
      };
    }
    const response = await ProductService.deleteManyPs(ids);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

// get All products

const getAll = async (req, res) => {
  try {
    const { limit, page, sort, filter } = req.query;
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

// get all Types
const getAllType = async (req, res) => {
  try {
    const response = await ProductService.getAllType();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

// get Detail Product

const getDetailProduct = async (req, res) => {
  try {
    const idProduct = req.params.id;
    if (!idProduct) {
      return {
        status: "Err",
        message: "No product Id provided !!!!!!",
      };
    }

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
  getDetailProduct
};

const { Promise } = require("mongoose");
const Product = require("../models/productModel");

// create product
const createProduct = async (newProduct) => {
  const {
    name,
    image,
    type,
    price,
    countInStock,
    rating,
    description,
    discount,
  } = newProduct;
  try {
    const checkExistedProduct = await Product.findOne({
      name: name,
    });

    if (checkExistedProduct) {
      return {
        status: "Err",
        message: "The name of the product already exists",
      };
    }

    const createdProduct = await Product.create({
      name,
      image,
      type,
      price,
      countInStock: Number(countInStock),
      rating,
      description,
      discount: Number(discount),
    });
    console.log("------------Created product: ", createdProduct);
    if (createdProduct) {
      return {
        status: "OKE",
        message: "Create Product Successfully",
        data: createdProduct,
      };
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// update product
const updateProduct = async (id, data) => {
  try {
    console.log("-------------need updated product ID:", id);

    const existingProduct = await Product.findOne({ _id: id });

    console.log("Existing product:", existingProduct._id);

    if (!existingProduct) {
      return {
        status: "ERR",
        message: "The product does not exist!",
      };
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, data, {
      new: true,
    });

    console.log("Updated product:", updatedProduct);

    return {
      status: "OK",
      message: "Product updated successfully!",
      data: updatedProduct,
    };
  } catch (error) {
    console.error("Error updating product: ", error);
    throw error;
  }
};

// delete 1 product
const deleteProduct = async (id) => {
  try {
    console.log("---------Need to delete product id:", id);

    const checkExistedProduct = await Product.findOne({
      _id: id,
    });

    console.log("Found product:", checkExistedProduct._id);

    if (!checkExistedProduct) {
      return {
        status: "ERR",
        message: "Product not found with the given ID",
      };
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    console.log("Deleted product:", deletedProduct);

    return {
      status: "OK",
      message: "Deleted Successfully!",
    };
  } catch (error) {
    console.error("Error deleting product: ", error);
    throw error;
  }
};

// delete many product
const deleteManyPs = async (ids) => {
  try {
    console.log("ids", ids);
    await Product.deleleMany({ _id: ids });
    return {
      status: "Oke",
      message: "Delete product successfully",
      id_del: ids,
    };
  } catch (error) {
    console.error("Error delete products is: ", error);
    throw error;
  }
};

// get all products

const getAllProduct = async (limit, page, sort, filter) => {
  try {
    const totalProduct = await Product.countDocuments();
    let allProduct = [];
    if (filter) {
      // filter [0] thuong la cho can filter
      const label = filter[0];
      const allObjectFilter = await Product.find({
        // hieu la key [lable]
        [label]: { $regex: filter[1] },
      })
        .limit(limit)
        .skip(page * limit)
        .sort({ createAt: -1, updateAt: -1 });

      return {
        status: "Oke",
        message: "Get all products with filter method successfully!!!!!!!!",
        data: allObjectFilter,
        total: totalProduct,
        pageCurrent: Number(page + 1),
        totalPage: Math.ceil(totalProduct / limit),
      };
    }

    if (sort) {
      const objectSort = {};
      // sort[0] la tinh chat sort, sort[1] la thu can sort. No se ra kieu {name: desc}
      objectSort[sort[1]] = sort[0];
      const allProductSort = await Product.find()
        .limit(limit)
        .skip(page * limit)
        .sort(objectSort)
        .sort({ createAt: -1, updateAt: -1 });
      return {
        status: "Oke",
        message: "Get all products with sort method successfully!!!!!!!!!!!!",
        data: allProductSort,
        total: totalProduct,
        pageCurrent: page + 1,
        totalPage: Math.ceil(totalProduct / limit),
      };
    }

    if (!limit) {
      allProduct = await Product.find().sort({ createAt: -1, updateAt: -1 });
    } else {
      allProduct = await Product.find()
        .limit(limit)
        .skip(page * limit)
        .sort({ createAt: -1, updateAt: -1 });
    }

    return {
      status: "Oke",
      message: "Get All Product Successfully!!!!!!!!!!!!",
      data: allProduct,
      total: totalProduct,
      pageCurrent: page + 1,
      totalPage: Math.ceil(totalProduct / limit),
    };
  } catch (error) {
    console.error("The error occured is: ", error);
    throw error;
  }
};

// get all types of products
const getAllType = async () => {
  try {
    const allType = await Product.distinct("type");
    return {
      status: "Oke",
      message: "Get all types successfully !!!!!!!!!!!!",
      data: allType,
    };
  } catch (error) {
    console.log("Error occured: ", error);
    throw error;
  }
};

// get detail product

const getDetailProduct = async (id) => {
  try {
    const product = await Product.findOne({
      _id: id,
    });

    if (!product) {
      return {
        error: "Err",
        message: "No product Id provided !!!",
      };
    }

    return {
      status: "Oke",
      message: "Get product detail successfully !!!",
      data: product,
    };
  } catch (error) {
    console.log("The error occured: ", error);
    throw error;
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  deleteManyPs,
  getAllProduct,
  getAllType,
  getDetailProduct
};

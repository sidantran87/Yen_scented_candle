import axios from "./axios";

// create a product
const createProduct = async (productData) => {
  try {
    const response = await axios.post("/create", productData);
    return response.data;
  } catch (error) {
    console.error("Creating product error: ", error);
    throw error;
  }
};

// update a product

const updateProduct = async (productId, access_token, productData) => {
  try {
    const response = await axios.put(
      `/update/${productId}`,
      {
        headers: {
          token: `Bearer ${access_token}`,
        },
      },
      productData
    );
    return response.data;
  } catch (error) {
    console.error("Updating Product Error: ", error);
    throw error;
  }
};

// delete a product

const deleteProduct = async (productId, access_token) => {
  try {
    const response = await axios.delete(`/delete/${productId}`, {
      headers: {
        token: `Bearer ${access_token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Deleting product error: ", error);
    throw error;
  }
};

// delete many Ps

const deleteManyProduct = async (productIds, access_token) => {
  try {
    const response = await axios.post(`/delete-all/${productIds}`, {
      headers: {
        token: `Bearer ${access_token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Deleting many products error is: ", error);
    throw error;
  }
};

// get all products
const getAllProduct = async (search, limit) => {
  //   let response = {};

  try {
    const filterQuery = search ? `&filter=name&filter=${search}` : "";
    const response = await axios.get(`/get-all?limit=${limit}${filterQuery}`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error(`Get all product failed with status ${response.status}`);
      throw new Error("Failed to get products");
    }
  } catch (error) {
    console.error("Get all products error is: ", error);
    throw error;
  }
};

// get product type

const getProductType = async (type, page, limit) => {
  try {
    const response = await axios.get(
      `/get-all?filter=type&filter=${type}&limit=${limit}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Error when getting type: ", error);
    throw error;
  }
};

// get all productType
const getAllProductType = async () => {
  try {
    const response = await axios.get("/get-all-type");
    return response.data;
  } catch (error) {
    console.error("Getting type of product got an error: ", error);
    throw error;
  }
};

// get product detail

const getDetailsProduct = async (productId) => {
  try {
    const response = await axios.get(`/get-detail/${productId}`);
    return response.data;
  } catch (error) {
    console.error(
      "When getting the details of product, an errorr occured: ",
      error
    );
    throw error;
  }
};

export {
  createProduct,
  updateProduct,
  deleteProduct,
  deleteManyProduct,
  getAllProduct,
  getProductType,
  getAllProductType,
  getDetailsProduct,
};

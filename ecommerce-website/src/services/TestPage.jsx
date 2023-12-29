import React, { useState, useEffect } from "react";
import {
  getAllProduct,
  getDetailsProduct,
  getAllProductType,
} from "./ProductService";

const ProductOperations = () => {
  const [productId, setProductId] = useState("");
  const [result, setResult] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const products = await getAllProduct();
      setAllProducts(products.data);
      setResult(null);
    } catch (error) {
      setResult(`Error fetching all products: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleGetAllProducts = async () => {
    fetchAllProducts();
  };

  const handleGetAllProductTypes = async () => {
    try {
      const types = await getAllProductType();
      setResult(types);
      setAllProducts([]);
    } catch (error) {
      setResult(`Error fetching product types: ${error.message}`);
    }
  };

  const handleGetProductDetails = async () => {
    try {
      const details = await getDetailsProduct(productId);
      setResult(details.data);
    } catch (error) {
      setResult(`Error fetching product details: ${error.message}`);
    }
  };

  return (
    <div>
      <button onClick={handleGetAllProducts}>Get All Products</button>
      <button onClick={handleGetAllProductTypes}>Get All Product Types</button>

      {allProducts.length > 0 && (
        <div>
          <h3>All Products:</h3>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {allProducts.map((product) => (
              <div
                key={product._id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <h4>{product._id}</h4>
                <h4>{product.name}</h4>
                <p>Type: {product.type}</p>
                <p>Price: {product.price}</p>
                <img src={product.image} alt="hinh" />
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <label>Product ID for Details:</label>
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <button onClick={handleGetProductDetails}>Get Product Details</button>
      </div>

      <div>
        <h3>Result:</h3>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ProductOperations;

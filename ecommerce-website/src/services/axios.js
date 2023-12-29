// axios.js (in your service folder)
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3888/api/product",
   // Replace with your server base URL
});

export default axiosInstance;

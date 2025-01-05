import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.github.com", // Base URL for all requests
  timeout: 5000, // Request timeout
  headers: {
    "Content-Type": "application/json",
    Accept: "application/vnd.github.v3+json",
  },
});

export default axiosInstance;

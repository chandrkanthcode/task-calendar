import axios from "axios";

// Allow override from Settings page via localStorage
const BASE = localStorage.getItem("apiBaseUrl") || "http://localhost:5002";

const client = axios.create({
  baseURL: `${BASE}/api`,
  headers: { "Content-Type": "application/json" },
});

export default client;

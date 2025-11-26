import axios from "axios";

const api = axios.create({
  baseURL: "https://pgx8epa0n0.execute-api.us-east-1.amazonaws.com/default",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    accept: "*/*",
  },
});

export default api;


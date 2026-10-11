import axios from "axios";

export const productAPI = axios.create({
  baseURL: "https://dummyjson.com",
});

export const userAPI = axios.create({
  baseURL: "https://fakestoreapi.com",
});
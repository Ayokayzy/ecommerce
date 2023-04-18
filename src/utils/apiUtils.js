import axios from "axios";

export const loginUser = async (userDetails) => {
  const res = await axios.post(
    "https://fakestoreapi.com/auth/login",
    userDetails
  );
  return res;
};

export const getAllProducts = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};

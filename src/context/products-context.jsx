import { createContext, useState } from "react";
import { getAllProducts } from "../utils/apiUtils";

export const ProductContext = createContext({
  products: [],
  getProducts: () => {},
});

export const ProductProvider = ({ children }) => {
  const [ products, setProducts ] = useState([]);

  const getProducts = async () => {
    try {
      const productsArray = await getAllProducts();
      setProducts(productsArray);
    } catch (err) {
      console.log({ err });
    }
  };

  const value = {
    products,
    getProducts,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

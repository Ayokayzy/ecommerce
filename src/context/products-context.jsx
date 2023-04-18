import { createContext, useState } from "react";
import {
  getAllProducts,
  getCategories,
  getProductsByCategory,
} from "../utils/apiUtils";

export const ProductContext = createContext({
  products: [],
  getProducts: () => {},
  categories: [],
  getAllCategories: () => {},
  productMap: [],
  mapProductToArray: () => {},
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productMap, setProductMap] = useState([]);

  const getProducts = async () => {
    try {
      const productsArray = await getAllProducts();
      setProducts(productsArray);
    } catch (err) {
      console.log({ err });
    }
  };

  const getAllCategories = async () => {
    try {
      const categoriesArray = await getCategories();
      setCategories(categoriesArray);
    } catch (error) {
      console.log({ error });
    }
  };

  const mapProductToArray = async (categories) => {
    const productByCat = categories.map(async (category) => {
      try {
        const categoryProduct = await getProductsByCategory(category);
        return { category, products: categoryProduct };
      } catch (error) {
        console.log({ error });
      }
    });
    const res = await Promise.all(productByCat);
    setProductMap(res);
  };

  // for all categories
  // fetch category products
  // map in an array {category: categoryName, products: []}

  const value = {
    products,
    getProducts,
    categories,
    getAllCategories,
    mapProductToArray,
    productMap,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

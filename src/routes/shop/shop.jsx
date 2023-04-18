import { useContext, useEffect } from "react";
import ProductCard from "../../components/product-card";
import { ProductContext } from "../../context/products-context";
import Category from "../../components/category";

const Shop = () => {
  const { categories, getAllCategories, productMap, mapProductToArray } =
    useContext(ProductContext);
    console.log(productMap);

  useEffect(() => {
      getAllCategories();
  }, []);
  

  useEffect(() => {
    mapProductToArray(categories);
  }, [categories]);

  return (
    <div className="container mx-auto">
      <p className="text-center text-4xl font-medium">Welcome to shop</p>
      <div className="mt-16">
        <div className="">
          {productMap?.map((product) => {
            return <Category category={product.category} products={product.products} />
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;

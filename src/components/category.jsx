import { useContext } from "react";
import ProductCard from "./product-card";
import { CartContext } from "../context/cart-context";

const Category = ({ category, products }) => {
  const { addProductToCart } = useContext(CartContext);
  return (
    <div className="mb-20 w-5/6 mx-auto ">
      <p className="text-xl font-bold capitalize text-center mb-8">
        {category}
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        {products?.map((product) => (
          <ProductCard
            price={product.price}
            image={product.image}
            title={product.title}
            addToCart={() => addProductToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;

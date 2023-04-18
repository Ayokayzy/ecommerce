import { useContext, useEffect } from "react";
import ProductCard from "../../components/product-card";
import { ProductContext } from "../../context/products-context";
import { getAllProducts } from "../../utils/apiUtils";

const Shop = () => {
  const { getProducts, products } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container mx-auto">
      <p className="text-center text-4xl font-medium">Welcome to shop</p>
      <div className="mt-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        {products?.map((product) => (
          <ProductCard price={product.price} image={product.image} title={product.title} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

import ProductCard from "./product-card";

const Category = ({ category, products }) => {
  return (
    <div className="mb-20">
      <p className="text-xl font-bold capitalize text-center mb-8">
        {category}
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        {products?.map((product) => (
          <ProductCard
            price={product.price}
            image={product.image}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;

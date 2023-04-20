import Button from "./button";

const ProductCard = ({ price, image, title, addToCart }) => {
  return (
    <div className="border-2 border-teal-400 bg-teal-100 shadow-xl rounded-xl p-4">
      <div className="">
        <img src={image} alt="product" className="h-32 mx-auto" />
      </div>
      <div>
        <p className="text-lg font-medium text-center capitalize mt-2 cursor-pointer" title={title}>{title.split(' ').filter((_, idx) => idx < 5).map((text)=> text + " ")}</p>
        <p className="font-bold text-center text-green-900 mt-2 text-md">$ {price}</p>
      </div>
      <div className="mt-4 p-4 flex justify-center">
        <Button children="add to cart" onClick={addToCart} />
      </div>
    </div>
  );
};

export default ProductCard;

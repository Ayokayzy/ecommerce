import Button from "./button";

const ProductCard = ({ price, image, title }) => {
  return (
    <div className="border rounded p-4">
      <div className="">
        <img src={image} alt="product" className="h-40 mx-auto" />
      </div>
      <div>
        <p className="text-lg font-medium capitalize mt-2 cursor-pointer" title={title}>{title.split(' ').filter((_, idx) => idx < 5).map((text)=> text + " ")}</p>
        <p className="font-bold text-green-500 mt-2 text-md">$ {price}</p>
      </div>
      <div className="mt-4 p-4 flex justify-center">
        <Button children="add to cart" />
      </div>
    </div>
  );
};

export default ProductCard;

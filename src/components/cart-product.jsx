const CartProduct = ({ title, quantity, price, removeItem }) => {
  return (
    <div className="container mx-auto my-4">
      <div className="flex items-center justify-between">
        <p>{title}</p>
        <div className="flex items-center justify-center gap-8">
          <span>-</span>
          <p>{quantity}</p>
          <span>+</span>
        </div>
        <p>${price}</p>
        <span className="text-red-500 text-2xl font-bold" onClick={removeItem}>x</span>
      </div>
    </div>
  );
};

export default CartProduct;

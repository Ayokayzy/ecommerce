import { useContext } from "react";
import CartProduct from "../../components/cart-product";
import { CartContext } from "../../context/cart-context";

const Checkout = () => {
  const { cartItems, removeProductFromCart } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="container mx-auto py-20">
      <div className="flex items-center justify-between">
        <div className="product">Product</div>
        <div className="qty">Quantity</div>
        <div className="amount">Amount</div>
        <div className="remove">Remove item</div>
      </div>
      <div>
        {cartItems.map((item) => (
          <CartProduct
            key={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            removeItem={() => removeProductFromCart(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Checkout;

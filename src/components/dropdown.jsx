import { useContext, useState } from "react";
import { GlobalContext } from "../context/global-context";
import Button from "./button";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cart-context";

const items = [
  { id: 1, name: "item 1" },
  { id: 2, name: "item 2" },
  { id: 3, name: "item 3" },
  { id: 4, name: "item 4" },
  { id: 5, name: "item 5" },
  { id: 6, name: "item 6" },
  { id: 7, name: "item 7" },
];

const Dropdown = () => {
  const { dropdown, toggleDropdown } = useContext(GlobalContext);
  const { cartItems, removeProductFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    toggleDropdown();
    navigate("/checkout");
  };
  return (
    <div className="absolute right-8">
      <div className=" bg-blue-200 w-48 p-2">
        {dropdown &&
          cartItems.map((item) => (
            <div className="flex items-center">
              <img src={item.image} alt="" className="h-8" />
              <p className="p-4 text-xs font-medium" key={item.id}>
                {item.title}
              </p>
              <span className="text-red-600 font-bold cursor-pointer" onClick={() => removeProductFromCart(item)}>x</span>
            </div>
          ))}
        <div className="flex items-center py-4 justify-center">
          {dropdown && <Button children="checkout" onClick={handleCheckout} />}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

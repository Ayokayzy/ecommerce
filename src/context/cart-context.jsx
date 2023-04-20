import { createContext, useState } from "react";

export const CartContext = createContext({
  noOfCartItems: null,
  cartItems: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [noOfCartItems, setNoOfCartItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  //   [{id: 1, name: phone, price: 10, qty: qty? qty + 1 : qty = 1}]

  // item no_of_item(3) price
  // item no_of_item(8) price
  // item no_of_item(2) price

  // total = 13

  // increase and reduce items
  // remove product

  const addProductToCart = (product) => {
    console.log("working");
    // check if product exist
    const productExist = cartItems.find((item) => product.id === item.id);

    if (productExist) {
      // increase count
      const newCartItems = cartItems.map((product) => {
        if (productExist.id === product.id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });

      setCartItems(newCartItems);
    } else {
      // add new product
      const newCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(newCartItems);
    }
    setNoOfCartItems(noOfCartItems + 1);
  };

  const removeProductFromCart = (product) => {
    const newCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(newCartItems);
    setNoOfCartItems(noOfCartItems - 1)
  };

  const value = {
    noOfCartItems,
    addProductToCart,
    cartItems,
    removeProductFromCart
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

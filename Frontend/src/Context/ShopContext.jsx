import React, { createContext, useState } from "react";
import all_product from "../assets/Assets/Frontend_Assets/all_product";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const ShopContext = createContext(null);

// ✅ Proper cart initialization with product IDs
const getDefaultCart = () => {
  let cart = {};
  all_product.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    toast.success("Item added to cart!");
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;

      // Toastify trigger
      toast.info("🛒 Item removed from cart", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });

      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const addToCartPlus = (itemId) => {
    setCartItems((prev) => {
      return {
        ...prev,
        [itemId]: (prev[itemId] ? prev[itemId] : 0) + 1
      };
    });
  };


  const RemoveFromCartMinus = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      }
      return prev; // value 1 ya 0 hai to wahi rakho
    });
  };


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.new_price;
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    RemoveFromCartMinus,
    addToCartPlus
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

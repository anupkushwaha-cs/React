import { createContext } from "react";
import { useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  var incrementQuantity = (id) =>{
    setCartItems((prev)=>{
      return prev.map((val)=>{
        return val.id === id ? {...val, quantity:val.quantity +1}: val;
      });
    });
  }

    var decrementQuantity = (id) =>{
    setCartItems((prev)=>{
      return prev.map((val)=>{
        return val.id === id ? {...val, quantity:val.quantity - 1}: val;
      });
    });
  }

  return <MyStore.Provider value = {{isCartOpen, setIsCartOpen , cartItems, setCartItems,incrementQuantity ,decrementQuantity}}>{children}</MyStore.Provider>;
};

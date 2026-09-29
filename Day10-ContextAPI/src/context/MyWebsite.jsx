import { createContext, useState } from "react";


export const MyStore = createContext();

export const MyContextProvider = ({ children }) => {

   const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <MyStore.Provider value={{isCartOpen, setCartItems, cartItems,setIsCartOpen}}>
      {children}
    </MyStore.Provider>
  );
};

export default MyContextProvider;
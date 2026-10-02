
import axios from 'axios';
import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import ProductCard from './Components/ProductCard';
import Navbar from './Components/Navbar';
import CartCard from './Components/CartCard';
import CardScreen from './Components/CardScreen';
import { MyStore } from './Context/MyContext';



const App = () => {
  const [productData, setProductData] = useState([]);

 let {setIsCartOpen,isCartOpen, cartItems, setCartItems, }= useContext(MyStore);



  const getProductData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProductData(response.data);
    } catch (error) {
      console.log("Error is ", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
    <Navbar />

      {
        isCartOpen ?  <CardScreen  /> :<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {productData.map((elems) => {
          let isInCart = cartItems.find((val)=> val.id ===elems.id);
  
          return <ProductCard key={elems.id} product={elems} isInCart = {isInCart}/>;
        })}
      </div> 
      }
     
    </div>
  );
};

export default App;
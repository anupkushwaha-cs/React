import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MyStore } from "../Context/MyContext";
import ProductCard from "../Componets/ProductCard.jsx";


const Home = () => {

   const {productsData, setProductsData}= useContext(MyStore);
  


  let getProductData = async () => {
     try {  
     let res =await axios.get('https://dummyjson.com/products');
          setProductsData(res.data.products);
   } catch (error) {


    console.log("Error in" , error);
    
   }
  };

  useEffect(()=>{
    getProductData();
  },[]);

  return <div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
  {productsData.map((val) => {
    return <ProductCard key={val.id} product={val} />;
  })}
</div>
  </div>;
};

export default Home;

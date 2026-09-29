import React, { useContext } from "react";
import { MyStore } from "../context/MyWebsite";

const ProductCard = ({ val }) => {

 let {setCartItems}= useContext(MyStore)
  
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-64 bg-gray-50 p-6 flex items-center justify-center overflow-hidden">
        <button className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full shadow flex items-center justify-center text-gray-500 hover:text-red-500 transition">
          ♡
        </button>

        <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1.5 rounded-full capitalize">
          {val.category}
        </span>

        <img
          src={val.image}
          alt={val.title}
          className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <h2 className="font-semibold text-gray-900 text-base leading-6 line-clamp-2 min-h-12">
          {val.title}
        </h2>

        <div className="flex items-center mt-3">
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md">
            <span className="text-yellow-500 text-sm">★</span>

            <span className="text-sm font-semibold text-gray-700">
              {val.rating.rate}
            </span>
          </div>

          <span className="text-sm text-gray-400 ml-2">
            {val.rating.count} ratings
          </span>
        </div>

        <div className="mt-4 flex items-end gap-2">
          <span className="text-2xl font-bold text-gray-900">
            ${val.price}
          </span>
        </div>

        <button onClick={()=>{
          setCartItems  ( prev=>  [...prev ,val])
        }} 
        
        
        className="w-full mt-4 bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

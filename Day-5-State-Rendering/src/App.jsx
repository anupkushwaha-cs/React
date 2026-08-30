import React from "react";
import ProductCard from "./ProductCard";

const App = () => {
  const productArr = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 1999,
      category: "electronics",
      image: "https://example.com/headphones.jpg",
      description: "High quality wireless headphones",
    },
    {
      id: 2,
      title: "Men's T-Shirt",
      price: 799,
      category: "clothing",
      image: "https://example.com/tshirt.jpg",
      description: "Comfortable cotton t-shirt",
    },
    {
      id: 3,
      title: "Smart Watch",
      price: 2999,
      category: "electronics",
      image: "https://example.com/watch.jpg",
      description: "Track your fitness and notifications",
    },
    {
      id: 4,
      title: "Running Shoes",
      price: 2499,
      category: "footwear",
      image: "https://example.com/shoes.jpg",
      description: "Lightweight running shoes",
    },
  ];

  return (
    <div>
      <h1 className="text-7xl">Hello bro kya haal chal</h1>
    {
      productArr.map((elem)=>{
        return <ProductCard product={elem}/>
      })
    }
    </div>
  );
};

export default App;

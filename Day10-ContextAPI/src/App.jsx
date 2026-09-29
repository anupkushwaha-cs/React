import React, { useContext, useState } from "react";
import Navbar from "./Componets/Navbar";
import Cart from "./Componets/Cart";
import ProductCard from "./Componets/ProductCard";

import { MyStore } from "./context/MyWebsite";

const App = () => {

 let {isCartOpen} = useContext(MyStore)


  let products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },

    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      description: "Slim-fitting style, contrast raglan long sleeve.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },

    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description: "Great outerwear jacket for Spring, Autumn and Winter.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },

    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description: "Casual slim fit clothing.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },

    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description: "Beautiful gold and silver dragon bracelet.",
      category: "jewelery",
      image:
        "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },

    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      price: 168,
      description: "Beautiful solid gold jewelry.",
      category: "jewelery",
      image:
        "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },

    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description: "Classic created wedding engagement ring.",
      category: "jewelery",
      image:
        "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
      rating: {
        rate: 3,
        count: 400,
      },
    },

    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description: "Rose gold plated stainless steel earrings.",
      category: "jewelery",
      image:
        "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },

    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive",
      price: 64,
      description: "USB 3.0 portable external hard drive.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },

    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD",
      price: 109,
      description: "Fast and reliable internal SSD.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
      rating: {
        rate: 2.9,
        count: 470,
      },
    },

    {
      id: 11,
      title: "Silicon Power 256GB SSD 3D NAND A55",
      price: 109,
      description: "High performance SATA III SSD.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
      rating: {
        rate: 4.8,
        count: 319,
      },
    },

    {
      id: 12,
      title: "WD 4TB Gaming Drive",
      price: 114,
      description: "Portable external gaming hard drive.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
      rating: {
        rate: 4.8,
        count: 400,
      },
    },

    {
      id: 13,
      title: "Acer SB220Q 21.5 inches Full HD IPS",
      price: 599,
      description: "Full HD IPS ultra-thin monitor.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
      rating: {
        rate: 2.9,
        count: 250,
      },
    },

    {
      id: 14,
      title: "Samsung 49-Inch CHG90 Curved Gaming Monitor",
      price: 999.99,
      description: "Super ultrawide curved gaming monitor.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
      rating: {
        rate: 2.2,
        count: 140,
      },
    },

    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket",
      price: 56.99,
      description: "Warm and comfortable winter jacket.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
      rating: {
        rate: 2.6,
        count: 235,
      },
    },

    {
      id: 16,
      title: "Lock and Love Women's Faux Leather Jacket",
      price: 29.95,
      description: "Stylish faux leather biker jacket.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
      rating: {
        rate: 2.9,
        count: 340,
      },
    },

    {
      id: 17,
      title: "Rain Jacket Women Windbreaker",
      price: 39.99,
      description: "Lightweight rain jacket.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
      rating: {
        rate: 3.8,
        count: 679,
      },
    },

    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck",
      price: 9.85,
      description: "Lightweight comfortable short sleeve top.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
      rating: {
        rate: 4.7,
        count: 130,
      },
    },

    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      description: "Lightweight breathable moisture wicking shirt.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
      rating: {
        rate: 4.5,
        count: 146,
      },
    },

    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton",
      price: 12.99,
      description: "Casual cotton t-shirt.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
  ];

  return (
    <div>
      <Navbar  />

      {isCartOpen ? (
        <div className="h-screen">
          <Cart  />
        </div>
      ) : (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((val) => (
            <ProductCard  key={val.id} val={val} />
          ))}
        </div>
      )}


    </div>
  );
};

export default App;

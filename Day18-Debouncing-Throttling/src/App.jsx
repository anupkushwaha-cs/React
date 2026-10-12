import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [searchData, setSearchData] = useState(null);
  const [productData, setProductData] = useState([]);
   const [scrollY, setScrollY] = useState(null);

  const getProduct = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
    } catch (error) {
      console.log("Error in Product api", error);
    }
  };

  const filtereData = () => {
    console.log("Filter Running");
    let result = productData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setProductData(result);
  };

  useEffect(() => {
    getProduct();
  }, []);




// Debouncing
  useEffect(() => {
    if (!searchData) return;
    let timeout = setTimeout(() => {
      filtereData();
    }, 700);
    return () => clearTimeout(timeout);
  }, [searchData]);



  // throttling


useEffect(() => {
  let throttle = false;

  const handleScroll = () => {
    if (throttle) return;

    throttle = true;
    console.log("Scroll triggered...");
    setScrollY(window.scrollY);

    setTimeout(() => {
      throttle = false;
    }, 10000);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <div>
      <h1>Debouncing</h1>

      <input
        style={{ padding: "10px 30px" }}
        type="text"
        placeholder="Search Products.."
        onChange={(e) => setSearchData(e.target.value)}
      />

      {productData.map((val) => {
        return <h1 key={val.id}>{val.title}</h1>;
      })}
    </div>
  );
};

export default App;

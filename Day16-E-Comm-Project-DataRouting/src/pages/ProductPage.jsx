
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { productAPI } from "../config/axiosInstance";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const getProductPage = async () => {
    try {
      const res = await productAPI(
        "/products?limit=30"
      );

      setProductData(res.data.products);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductPage();
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existingProduct = prev.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-950 p-6 text-white">

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-500">
            E-Commerce Dashboard
          </p>

          <h1 className="text-3xl font-bold">
            Our Products
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Discover products you'll love.
          </p>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900 px-5 py-3">
          <p className="text-sm text-gray-400">
            Shopping Cart
          </p>

          <p className="mt-1 text-xl font-bold text-red-500">
            🛒 {totalItems} Items
          </p>
        </div>

      </div>

      <div className="mb-6 flex items-center justify-between border-b border-gray-800 pb-4">
        <h2 className="text-lg font-semibold">
          All Products
        </h2>

        <span className="rounded-lg bg-gray-900 px-3 py-2 text-sm text-gray-400">
          {productData.length} Products
        </span>
      </div>

      {loading ? (
        <p className="py-20 text-center text-red-500">
          Loading products...
        </p>
      ) : productData.length === 0 ? (
        <p className="py-20 text-center text-gray-400">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {productData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default ProductPage;
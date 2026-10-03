import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const ProductDetails = () => {
  const [singleProductData, setSingleProductData] = useState({});
  const { id } = useParams();

  const getSingleProductData = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setSingleProductData(res.data);
    } catch (error) {
      console.log("Detail API Error", error);
    }
  };

  useEffect(() => {
    getSingleProductData();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-lg">
        <div className="grid lg:grid-cols-2">
          <div className="flex min-h-[450px] items-center justify-center bg-gray-50 p-8">
            <img
              src={singleProductData.thumbnail}
              alt={singleProductData.title}
              className="max-h-[420px] w-full object-contain transition duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
              {singleProductData.category}
            </p>

            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              {singleProductData.title}
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <span className="rounded-lg bg-yellow-50 px-3 py-2 font-semibold text-gray-800">
                ★ {singleProductData.rating}
              </span>

              <span className="text-sm text-gray-500">
                {singleProductData.stock} items available
              </span>
            </div>

            <p className="mt-6 leading-7 text-gray-500">
              {singleProductData.description}
            </p>

            <div className="mt-7 flex items-end gap-3">
              <span className="text-4xl font-bold text-gray-900">
                ${singleProductData.price}
              </span>

              <span className="mb-1 rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-600">
                {singleProductData.discountPercentage}% OFF
              </span>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-400">Brand</p>
                <p className="mt-1 font-semibold text-gray-800">
                  {singleProductData.brand || "Premium"}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-400">Warranty</p>
                <p className="mt-1 font-semibold text-gray-800">
                  {singleProductData.warrantyInformation || "Available"}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-400">Shipping</p>
                <p className="mt-1 font-semibold text-gray-800">
                  {singleProductData.shippingInformation || "Fast Delivery"}
                </p>
              </div>
            </div>

            <button className="mt-8 w-full rounded-2xl bg-gray-900 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-gray-700 active:scale-[0.98]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

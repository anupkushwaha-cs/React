import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  let navigate = useNavigate();
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-64 overflow-hidden bg-gray-50">
        <img onClick={()=>{
          navigate(`details/${product.id}`)

        }}
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-6 transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {product.category}
        </p>

        <h2 className="mt-2 line-clamp-1 text-lg font-bold text-gray-900">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span className="rounded-lg bg-yellow-50 px-2 py-1 text-sm font-semibold text-gray-700">
            ★ {product.rating}
          </span>

          <span className="text-sm text-gray-400">
            {product.stock} in stock
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">
            ${product.price}
          </h3>

          <button className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
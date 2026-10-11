import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group w-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 transition duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-xl hover:shadow-red-950/20">

      <div className="relative flex h-56 items-center justify-center bg-gray-800 p-5">

        <span className="absolute left-3 top-3 rounded-lg bg-red-500 px-3 py-1 text-xs font-bold text-white">
          {Math.round(product.discountPercentage)}% OFF
        </span>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-110"
        />

      </div>

      <div className="p-5">

        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="text-sm font-semibold text-red-500">
            {product.brand || "Featured Brand"}
          </p>

          <p className="text-sm text-yellow-400">
            ★ {product.rating || "New"}
          </p>
        </div>

        <h2 className="truncate text-lg font-bold text-white">
          {product.title}
        </h2>

        <p className="mt-2 h-10 overflow-hidden text-sm leading-5 text-gray-400">
          {product.description}
        </p>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold text-white">
            ${product.price}
          </span>

          <span className="text-sm text-gray-500 line-through">
            $
            {(
              product.price /
              (1 - product.discountPercentage / 100)
            ).toFixed(2)}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              product.stock > 0 ? "bg-green-500" : "bg-red-500"
            }`}
          />

          <span className="text-sm text-gray-400">
            {product.availabilityStatus}
          </span>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          disabled={product.stock === 0}
          className="mt-5 w-full rounded-xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600 active:scale-95 disabled:opacity-50"
        >
          + Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;

import React from "react";

const CartCard = ({ product }) => {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md sm:p-5">
      
      <div className="flex gap-4 sm:gap-5">

        <div className="flex h-28 w-24 shrink-0 items-center justify-center rounded-xl bg-[#f7f4ef] p-3 sm:h-32 sm:w-28">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="min-w-0 flex-1">

          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wide text-stone-400">
                {product.category}
              </p>

              <h2 className="mt-1 line-clamp-2 text-sm font-semibold leading-6 text-stone-900 sm:text-base">
                {product.title}
              </h2>
            </div>

            <button className="shrink-0 text-xs font-medium text-stone-400 transition hover:text-red-500">
              Remove
            </button>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">

         
            <div className="flex items-center rounded-lg border border-stone-200 bg-stone-50">
              <button className="px-3 py-1.5 text-lg text-stone-500 transition hover:text-black">
                −
              </button>

              <span className="min-w-8 text-center text-sm font-semibold text-stone-800">
                {product.quantity}
              </span>

              <button className="px-3 py-1.5 text-lg text-stone-500 transition hover:text-black">
                +
              </button>
            </div>

          
            <p className="text-lg font-bold text-stone-900">
              ${product.price}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

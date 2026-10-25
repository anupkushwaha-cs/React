
import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b0b11] p-4 text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.10)] sm:p-5">
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/10 blur-[80px] transition-all duration-700 group-hover:bg-purple-500/20" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-cyan-500/[0.06] blur-[80px] transition-all duration-700 group-hover:bg-cyan-400/15" />

      <div className="relative flex h-60 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#171722] via-[#101018] to-[#17101f] sm:h-64">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_65%)]" />

        <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-md">
          SkyDart Select
        </div>

        <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        <img
          src={product.thumbnail}
          alt={product.title}
          className="relative z-10 h-full w-full object-contain p-5 transition-transform duration-700 ease-out group-hover:scale-110 sm:p-6"
        />
      </div>

      <div className="relative mt-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
              Featured Product
            </p>

            <h2 className="line-clamp-2 min-h-12 text-base font-semibold leading-6 tracking-wide text-zinc-100 transition-colors duration-300 group-hover:text-white sm:text-lg">
              {product.title}
            </h2>
          </div>

          <div className="shrink-0 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2">
            <p className="text-[9px] uppercase tracking-widest text-zinc-500">
              Price
            </p>
            <p className="mt-0.5 text-lg font-bold text-white">
              ${product.price}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs text-zinc-400">Available stock</span>
          </div>

          <span className="text-sm font-semibold text-emerald-300">
            {product.stock}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            Quantity
          </span>

          <div className="flex items-center gap-0.5 rounded-xl border border-white/10 bg-[#14141d] p-1">
            <button
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              aria-label="Decrease quantity"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-lg text-zinc-400 transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-90"
            >
              −
            </button>

            <span className="w-10 text-center text-sm font-bold tabular-nums text-white">
              {quantity}
            </span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              aria-label="Increase quantity"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/15 to-purple-500/15 text-lg text-cyan-300 transition-all duration-200 hover:from-cyan-400/25 hover:to-purple-500/25 active:scale-90"
            >
              +
            </button>
          </div>
        </div>

        <button
          type="button"
          className="group/btn relative mt-5 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_5px_25px_rgba(59,130,246,0.15)] transition-all duration-300 hover:shadow-[0_5px_30px_rgba(139,92,246,0.35)] active:scale-[0.98]"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />

          <span className="relative">Add to Cart</span>
          <span className="relative text-lg transition-transform duration-300 group-hover/btn:translate-x-1">
            →
          </span>
        </button>

        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="h-px w-6 bg-zinc-800" />
          <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-zinc-600">
            A better way to shop
          </p>
          <span className="h-px w-6 bg-zinc-800" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

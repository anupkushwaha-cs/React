
import React from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

const Filters = ({ filterProducts }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0b11] p-4 text-white shadow-[0_10px_40px_rgba(0,0,0,0.2)] sm:p-5">
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-600/10 blur-[70px]" />

      <div className="relative flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div className="w-full flex-1">
          <div className="mb-3 flex items-center gap-2">
            <Search size={15} className="text-cyan-300" />
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Find your product
            </label>
          </div>

          <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-[#14141d] p-1.5 transition-all duration-300 focus-within:border-cyan-400/40 focus-within:shadow-[0_0_25px_rgba(34,211,238,0.08)]">
            <Search
              size={19}
              className="ml-3 shrink-0 text-zinc-500 transition-colors group-focus-within:text-cyan-300"
            />

            <input
              onChange={(e) => filterProducts(e.target.value)}
              className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-white outline-none placeholder:text-zinc-600"
              type="text"
              placeholder="Search products..."
            />

            <button
              type="button"
              className="flex shrink-0 items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] active:scale-95"
            >
              <Search size={15} />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>

        <div className="w-full xl:w-64 xl:shrink-0">
          <div className="mb-3 flex items-center gap-2">
            <SlidersHorizontal size={15} className="text-fuchsia-300" />
            <label
              htmlFor="product-category"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400"
            >
              Select category
            </label>
          </div>

          <div className="relative">
            <select
              id="product-category"
              defaultValue="groceries"
              className="w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-[#14141d] px-4 py-3.5 pr-11 text-sm text-zinc-200 outline-none transition-all duration-300 hover:border-fuchsia-400/30 focus:border-fuchsia-400/50 focus:shadow-[0_0_20px_rgba(217,70,239,0.08)]"
            >
              <option className="bg-[#14141d]" value="groceries">
                Groceries
              </option>
              <option className="bg-[#14141d]" value="beauty">
                Beauty
              </option>
              <option className="bg-[#14141d]" value="furniture">
                Furniture
              </option>
            </select>

            <ChevronDown
              size={17}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-fuchsia-300"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-5 flex items-center gap-2 border-t border-white/[0.06] pt-4">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
          Discover something extraordinary
        </p>
      </div>
    </div>
  );
};

export default Filters;

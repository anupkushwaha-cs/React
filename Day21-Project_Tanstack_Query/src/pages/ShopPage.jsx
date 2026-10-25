
import React from "react";
import { useProduct } from "../hooks/productHooks";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import Filters from "../components/Filters";
import { ShoppingBag, Sparkles } from "lucide-react";

const ShopPage = () => {
  const { filteredProducts, filterProducts, isLoading } = useProduct();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050508] px-4 py-8 text-white sm:px-6 sm:py-12 lg:px-10">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-64 h-96 w-96 rounded-full bg-purple-600/[0.08] blur-[130px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <section className="relative mb-10 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#101019] via-[#0a0a10] to-[#110b18] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute -right-10 -top-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-cyan-400/[0.08] blur-[90px]" />

          <div className="relative z-10 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2">
              <Sparkles size={14} className="text-cyan-300" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-200 sm:text-xs">
                The Next-Gen Shopping Experience
              </span>
            </div>

            <h1 className="text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
              Discover Your
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                Next Favorite.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
              Explore a world of exceptional products, handpicked for your
              lifestyle. Find what you love, all in one place.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3">
                <ShoppingBag size={17} className="text-cyan-300" />
                <span className="text-sm font-medium text-zinc-200">
                  Premium Collection
                </span>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-zinc-400">
                Quality meets style
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 right-0 hidden h-1/2 w-1/3 bg-gradient-to-tl from-fuchsia-500/[0.06] to-transparent lg:block" />
        </section>

        <section className="mb-8">
          <Filters filterProducts={filterProducts} />
        </section>

        <section>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Explore the collection
              </p>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Our <span className="text-zinc-500">Products</span>
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Find the perfect pick for you.
              </p>
            </div>

            {!isLoading && (
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5">
                <span className="text-sm text-zinc-400">
                  <span className="font-semibold text-white">
                    {filteredProducts?.length ?? 0}
                  </span>{" "}
                  products found
                </span>
              </div>
            )}
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </div>
          ) : filteredProducts?.length > 0 ? (
            <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] px-5 py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <ShoppingBag size={28} className="text-zinc-500" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                No products found
              </h3>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-zinc-500">
                Try searching with a different name to discover more products.
              </p>
            </div>
          )}
        </section>

        <footer className="mt-16 border-t border-white/[0.06] py-6 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-600">
            SkyDart — A better way to shop
          </p>
        </footer>
      </div>
    </main>
  );
};

export default ShopPage;

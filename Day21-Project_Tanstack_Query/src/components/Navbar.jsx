
import React from "react";
import { NavLink } from "react-router";
import { LogOut, ShoppingBag, Menu } from "lucide-react";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `relative py-2 text-sm font-medium tracking-wide transition-all duration-300
    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:to-fuchsia-500
    after:transition-all after:duration-300
    ${
      isActive
        ? "text-white after:w-full"
        : "text-zinc-400 hover:text-white after:w-0 hover:after:w-full"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#050508]/85 text-white backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
        <NavLink to="/main" className="group flex shrink-0 items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-fuchsia-500/20 shadow-[0_0_25px_rgba(34,211,238,0.12)] transition-all duration-300 group-hover:border-cyan-300/60 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            <ShoppingBag
              size={21}
              className="text-cyan-300 transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div>
            <h1 className="text-xl font-black tracking-tight sm:text-2xl">
              Sky<span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">Dart</span>
            </h1>
            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-zinc-500">
              Beyond Ordinary
            </p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          <NavLink to="/main" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/main/shop" className={linkClass}>
            Shop
          </NavLink>
          <NavLink to="/main/about" className={linkClass}>
            About
          </NavLink>
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <h2 className="hidden text-sm text-zinc-400 lg:block">
            Hey, <strong className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text font-semibold text-transparent">Dev</strong>
          </h2>

          <button
            type="button"
            className="group relative flex items-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:shadow-[0_0_22px_rgba(34,211,238,0.12)]"
          >
            <ShoppingBag size={17} className="text-cyan-300 transition-transform duration-300 group-hover:-rotate-12" />
            <span>Cart</span>
          </button>

          <button
            type="button"
            aria-label="Log out"
            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:border-rose-400/40 hover:bg-rose-500/10"
          >
            <LogOut
              size={18}
              className="text-zinc-400 transition-colors duration-300 group-hover:text-rose-400"
            />
          </button>
        </div>
      </nav>

      <div className="flex items-center justify-center gap-8 border-t border-white/[0.05] px-4 py-3 md:hidden">
        <NavLink to="/main" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/main/shop" className={linkClass}>
          Shop
        </NavLink>
        <NavLink to="/main/about" className={linkClass}>
          About
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;

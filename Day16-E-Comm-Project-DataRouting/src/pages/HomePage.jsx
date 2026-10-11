import React from "react";
import { NavLink } from "react-router";

const HomePage = () => {
  const stats = [
    {
      title: "Total Products",
      value: "1,240",
      change: "+12.5%",
      icon: "📦",
      color: "text-red-400",
      bg: "bg-red-500/10",
    },
    {
      title: "Total Users",
      value: "856",
      change: "+8.2%",
      icon: "👥",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: "Total Orders",
      value: "3,420",
      change: "+18.4%",
      icon: "🛍️",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      title: "Total Revenue",
      value: "$24,580",
      change: "+10.3%",
      icon: "💰",
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
  ];

  const activities = [
    {
      title: "New user registered",
      description: "A new customer joined your store.",
      time: "2 minutes ago",
      icon: "👤",
      color: "bg-blue-500/10",
    },
    {
      title: "Product inventory updated",
      description: "Your product collection was updated.",
      time: "18 minutes ago",
      icon: "📦",
      color: "bg-purple-500/10",
    },
    {
      title: "New order received",
      description: "A new order was placed successfully.",
      time: "35 minutes ago",
      icon: "🛒",
      color: "bg-green-500/10",
    },
  ];

  const sales = [35, 55, 42, 75, 50, 90, 65];

  return (
    <div className="min-h-screen bg-gray-950 p-5 text-white sm:p-8">

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
            E-Commerce Dashboard
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Welcome Back! 👋
          </h1>

          <p className="mt-2 text-sm text-gray-400 sm:text-base">
            Here's what's happening with your store today.
          </p>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900 px-4 py-3">
          <p className="text-xs text-gray-500">Dashboard Status</p>
          <p className="mt-1 flex items-center gap-2 font-semibold text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            Overview
          </p>
        </div>
      </div>

      <div className="relative mb-8 overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-r from-red-950 via-gray-900 to-gray-900 p-6 sm:p-9">
        <div className="relative z-10 max-w-2xl">
          <span className="rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-300">
            YOUR STORE AT A GLANCE
          </span>

          <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-4xl">
            Manage your business.
            <span className="block text-red-400">
              Grow without limits.
            </span>
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
            Manage products, explore users and keep everything organized from one place.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <NavLink
              to="/main/products"
              className="rounded-xl bg-red-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-600"
            >
              Explore Products →
            </NavLink>

            <NavLink
              to="/main/users"
              className="rounded-xl border border-gray-700 bg-gray-900/70 px-5 py-3 text-sm font-semibold text-gray-200 transition hover:border-gray-500 hover:bg-gray-800"
            >
              View Users
            </NavLink>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border-[35px] border-red-500/5"></div>
        <div className="pointer-events-none absolute -bottom-24 right-24 h-52 w-52 rounded-full bg-red-500/5 blur-3xl"></div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 2xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-800 bg-gray-900 p-5 transition duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-xl hover:shadow-black/20"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">
                  {item.title}
                </p>

                <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">
                  {item.value}
                </h3>
              </div>

              <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${item.bg}`}>
                {item.icon}
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <span className="rounded-md bg-green-500/10 px-2 py-1 text-xs font-bold text-green-400">
                ↗ {item.change}
              </span>

              <span className="text-xs text-gray-500">
                vs last month
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-3">

        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5 sm:p-6 xl:col-span-2">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-white">
                Sales Overview
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Weekly performance at a glance
              </p>
            </div>

            <span className="rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-xs text-gray-300">
              This Week
            </span>
          </div>

          <div className="flex h-52 items-end justify-between gap-3 border-b border-l border-gray-800 px-2 sm:gap-5 sm:px-5">
            {sales.map((height, index) => (
              <div
                key={index}
                className="group flex h-full flex-1 flex-col items-center justify-end"
              >
                <span className="mb-2 text-xs text-gray-500 opacity-0 transition group-hover:opacity-100">
                  {height}%
                </span>

                <div
                  style={{ height: `${height}%` }}
                  className={`w-full max-w-12 rounded-t-lg transition-all duration-300 group-hover:brightness-125 ${
                    index === 5
                      ? "bg-red-500"
                      : "bg-red-500/30 group-hover:bg-red-500/60"
                  }`}
                ></div>
              </div>
            ))}
          </div>

          <div className="mt-3 flex justify-between px-2 text-xs text-gray-500 sm:px-5">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
              (day) => (
                <span key={day}>{day}</span>
              )
            )}
          </div>

          <p className="mt-5 text-xs text-gray-500">
            Illustrative chart data for the dashboard UI.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5 sm:p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-white">
              Quick Actions
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Navigate to your workspace
            </p>
          </div>

          <div className="space-y-3">
            <NavLink
              to="/main/products"
              className="flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-950 p-4 transition hover:border-red-500/50 hover:bg-gray-800"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-xl">
                📦
              </span>

              <span className="flex-1">
                <span className="block font-semibold text-white">
                  Products
                </span>
                <span className="mt-1 block text-xs text-gray-500">
                  Browse product collection
                </span>
              </span>

              <span className="text-gray-500">→</span>
            </NavLink>

            <NavLink
              to="/main/users"
              className="flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-950 p-4 transition hover:border-red-500/50 hover:bg-gray-800"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                👥
              </span>

              <span className="flex-1">
                <span className="block font-semibold text-white">
                  Users
                </span>
                <span className="mt-1 block text-xs text-gray-500">
                  View registered users
                </span>
              </span>

              <span className="text-gray-500">→</span>
            </NavLink>
          </div>

          <div className="mt-5 rounded-xl border border-red-500/10 bg-red-500/5 p-4">
            <p className="text-sm font-semibold text-red-400">
              ✨ Keep growing!
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-400">
              Your workspace is ready for the next step.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5 sm:p-6">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-white">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            A preview of recent store events
          </p>
        </div>

        <div className="divide-y divide-gray-800">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
            >
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl ${activity.color}`}>
                {activity.icon}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-gray-200">
                  {activity.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {activity.description}
                </p>
              </div>

              <span className="shrink-0 text-right text-xs text-gray-500">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-8 border-t border-gray-800 pt-5 text-center text-xs text-gray-500">
        E-Comm Dashboard · Built with React & Tailwind CSS
      </footer>

    </div>
  );
};

export default HomePage;
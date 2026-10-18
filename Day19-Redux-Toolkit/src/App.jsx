import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./Feature/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 flex items-center justify-center p-5">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-3xl shadow-lg shadow-indigo-500/30">
            🔢
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Redux Counter
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Manage your count with Redux Toolkit
          </p>
        </div>

        <div className="mb-7 rounded-2xl border border-white/10 bg-slate-950/50 p-7 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
            Current Count
          </p>

          <h2 className="break-all text-6xl font-black tabular-nums text-white">
            {count}
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        <div className="mb-7 grid grid-cols-2 gap-4">
          <button
            onClick={() => dispatch(increment())}
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-3.5 font-bold text-white shadow-lg shadow-indigo-500/20 transition duration-200 hover:-translate-y-1 hover:shadow-indigo-500/40 active:scale-95"
          >
            <span className="text-xl">+</span>
            Increment
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-4 py-3.5 font-bold text-white shadow-lg shadow-rose-500/20 transition duration-200 hover:-translate-y-1 hover:shadow-rose-500/40 active:scale-95"
          >
            <span className="text-xl">−</span>
            Decrement
          </button>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <label className="mb-3 block text-sm font-semibold text-slate-200">
            Increment by Amount
          </label>

          <div className="flex gap-3">
            <input
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
              value={num}
              type="number"
              onChange={(e) => setNum(e.target.value)}
              placeholder="Enter amount"
            />

            <button
              onClick={() => dispatch(incrementByAmount(Number(num)))}
              className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:brightness-110 active:scale-95"
            >
              Add +
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Built with ❤️ using React & Redux Toolkit
        </p>
      </div>
    </div>
  );
};

export default App;

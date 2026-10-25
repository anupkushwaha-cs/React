
import React from "react";
import { useAuth } from "../hooks/authHooks";
import {
  UserRound,
  Mail,
  LockKeyhole,
  ArrowRight,
  Sparkles,
  UserPlus,
} from "lucide-react";

const RegisterPage = () => {
  let { navigate, register, handleSubmit, errors, registerForm } = useAuth();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050508] px-4 py-10 text-white sm:px-6">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-600/15 blur-[130px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />

      <div className="relative w-full max-w-md">
        <div className="absolute -inset-px rounded-[30px] bg-gradient-to-br from-cyan-400/30 via-transparent to-fuchsia-500/30 opacity-70 blur-sm" />

        <div className="relative overflow-hidden rounded-[29px] border border-white/[0.09] bg-[#0b0b11]/95 p-7 shadow-[0_25px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-10">
          <div className="absolute right-0 top-0 h-40 w-40 bg-purple-500/[0.07] blur-[70px]" />

          <div className="relative">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 to-purple-500/15 shadow-[0_0_25px_rgba(34,211,238,0.08)]">
                <UserPlus size={22} className="text-cyan-300" />
              </div>

              <div>
                <h2 className="text-xl font-black tracking-tight">
                  Sky<span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">Dart</span>
                </h2>
                <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-zinc-500">
                  Beyond Ordinary
                </p>
              </div>
            </div>

            <div className="mb-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/15 bg-fuchsia-300/[0.06] px-3 py-1.5">
                <Sparkles size={12} className="text-fuchsia-300" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-fuchsia-200">
                  Join the Experience
                </span>
              </div>

              <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                Create your
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                  own account.
                </span>
              </h1>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Your next great shopping experience starts here.
              </p>
            </div>

            <form onSubmit={handleSubmit(registerForm)} className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
                  Full Name
                </label>

                <div className={`group flex items-center gap-3 rounded-xl border bg-[#14141d] px-4 transition-all duration-300 focus-within:shadow-[0_0_25px_rgba(34,211,238,0.07)] ${
                  errors.name
                    ? "border-rose-400/50"
                    : "border-white/10 focus-within:border-cyan-400/50"
                }`}>
                  <UserRound size={18} className="shrink-0 text-zinc-500 transition-colors group-focus-within:text-cyan-300" />

                  <input
                    {...register("name", {
                      required: "name is required",
                    })}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-zinc-600"
                  />
                </div>

                {errors.name && (
                  <p className="mt-2 text-xs text-rose-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
                  Email Address
                </label>

                <div className={`group flex items-center gap-3 rounded-xl border bg-[#14141d] px-4 transition-all duration-300 focus-within:shadow-[0_0_25px_rgba(34,211,238,0.07)] ${
                  errors.email
                    ? "border-rose-400/50"
                    : "border-white/10 focus-within:border-cyan-400/50"
                }`}>
                  <Mail size={18} className="shrink-0 text-zinc-500 transition-colors group-focus-within:text-cyan-300" />

                  <input
                    {...register("email", {
                      required: "email is required",
                    })}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-zinc-600"
                  />
                </div>

                {errors.email && (
                  <p className="mt-2 text-xs text-rose-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
                  Password
                </label>

                <div className={`group flex items-center gap-3 rounded-xl border bg-[#14141d] px-4 transition-all duration-300 focus-within:shadow-[0_0_25px_rgba(34,211,238,0.07)] ${
                  errors.password
                    ? "border-rose-400/50"
                    : "border-white/10 focus-within:border-cyan-400/50"
                }`}>
                  <LockKeyhole size={18} className="shrink-0 text-zinc-500 transition-colors group-focus-within:text-cyan-300" />

                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Minimum 8 characters are required",
                      },
                    })}
                    type="password"
                    placeholder="Create a password"
                    className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-zinc-600"
                  />
                </div>

                {errors.password && (
                  <p className="mt-2 text-xs text-rose-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 py-3.5 text-sm font-bold text-white shadow-[0_5px_25px_rgba(59,130,246,0.18)] transition-all duration-300 hover:shadow-[0_5px_35px_rgba(139,92,246,0.3)] active:scale-[0.98]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Create My Account</span>
                <ArrowRight size={17} className="relative transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/[0.07]" />
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                Already a member?
              </span>
              <div className="h-px flex-1 bg-white/[0.07]" />
            </div>

            <button
              onClick={() => navigate("/")}
              type="button"
              className="group flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] py-3.5 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-white"
            >
              Login to Your Account
              <ArrowRight size={16} className="text-cyan-300 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <p className="mt-7 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
              SkyDart · Beyond Ordinary
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const { registeredUsers, setRegisteredUsers, setLoggedInUser } =
    useContext(Auth);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    const existingUser = registeredUsers.find(
      (user) => user.email.toLowerCase() === data.email.toLowerCase()
    );

    if (existingUser) {
      toast.error("An account with this email already exists");
      return;
    }

    const arr = [...registeredUsers, data];

    setRegisteredUsers(arr);
    setLoggedInUser(data);

    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    localStorage.setItem("loggedinUser", JSON.stringify(data));

    toast.success("Account created successfully!");

    reset();
    navigate("/main", { replace: true });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-950 px-4 py-8 text-white sm:py-10">

      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-red-600/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-red-600/10 blur-3xl"></div>

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 shadow-2xl md:grid-cols-2">

        <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-red-950 via-gray-900 to-gray-950 p-10 md:flex lg:p-12">

          <div className="absolute -right-20 top-20 h-64 w-64 rounded-full border-[40px] border-red-500/10"></div>
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border-[45px] border-red-500/10"></div>

          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-2xl font-extrabold text-white shadow-lg shadow-red-950/50">
              E
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-wide">
                E-Comm
              </h2>
              <p className="text-xs text-gray-400">
                Your shopping workspace
              </p>
            </div>
          </div>

          <div className="relative z-10 py-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-3xl">
              🚀
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-400">
              Get Started
            </p>

            <h1 className="text-4xl font-extrabold leading-tight lg:text-5xl">
              Create your account.
              <span className="mt-2 block text-red-500">
                Start something great.
              </span>
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Join E-Comm to explore products, manage your workspace and enjoy a simple experience.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800 text-red-400">
                  ✓
                </span>
                Quick and easy registration
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800 text-red-400">
                  ✓
                </span>
                Manage your shopping workspace
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800 text-red-400">
                  ✓
                </span>
                Get started in just a few steps
              </div>
            </div>
          </div>

          <p className="relative z-10 text-xs text-gray-500">
            © 2026 E-Comm. All rights reserved.
          </p>
        </div>

        <div className="flex items-center justify-center px-6 py-8 sm:px-10 md:px-10 lg:px-12">

          <div className="w-full max-w-md">

            <div className="mb-7 flex items-center gap-3 md:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500 text-xl font-extrabold">
                E
              </div>

              <div>
                <h2 className="text-xl font-extrabold">E-Comm</h2>
                <p className="text-xs text-gray-500">
                  Your shopping workspace
                </p>
              </div>
            </div>

            <div className="mb-7">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                Join E-Comm
              </p>

              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Create account
              </h1>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Enter your details below to create your account.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(formSubmit)}
              className="space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  Full Name
                </label>

                <input
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must have at least 2 characters",
                    },
                  })}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 hover:border-gray-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                />

                {errors.name && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  Email Address
                </label>

                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 hover:border-gray-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                />

                {errors.email && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-300">
                  Password
                </label>

                <div className="relative">
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters required",
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3.5 pr-20 text-sm text-white outline-none transition placeholder:text-gray-600 hover:border-gray-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 transition hover:text-red-400"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 py-3.5 font-bold text-white shadow-lg shadow-red-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-red-600 active:translate-y-0"
              >
                Create Account
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-800"></div>
              <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Already a member?
              </span>
              <div className="h-px flex-1 bg-gray-800"></div>
            </div>

            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/")}
                className="font-bold text-red-400 transition hover:text-red-300 hover:underline"
              >
                Sign In
              </button>
            </p>

            <div className="mt-7 rounded-xl border border-gray-800 bg-gray-950 p-4">
              <p className="text-center text-xs leading-5 text-gray-500">
                🔒 Create your account and get started with E-Comm.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
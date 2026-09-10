import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUser, setToggle }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const formSubmit = (data) => {
    console.log(data);

    setUser((prev) => [...prev, data]);

    reset();
    setToggle((prev)=> !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Create User
        </h1>

        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col gap-4"
        >
         
          <input
            {...register("name", {
              required: "Name is required",
            })}
            type="text"
            placeholder="Name"
            className="p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
          />

          {errors.name && (
            <p className="text-red-700">{errors.name.message}</p>
          )}

        
          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
          />

          {errors.email && (
            <p className="text-red-700">{errors.email.message}</p>
          )}

          <input
            {...register("mobile", {
              required: "Mobile is required",
              minLength: {
                value: 10,
                message: "Minimum 10 digits are required",
              },
              maxLength: {
                value: 10,
                message: "Maximum 10 digits are required",
              },
            })}
            type="text"
            placeholder="Mobile"
            className="p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
          />

          {errors.mobile && (
            <p className="text-red-700">{errors.mobile.message}</p>
          )}

          <input
            {...register("image", {
              required: "Image is required",
            })}
            type="text"
            placeholder="Image"
            className="p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
          />

          {errors.image && (
            <p className="text-red-700">{errors.image.message}</p>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 cursor-pointer"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
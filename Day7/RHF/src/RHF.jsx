import React from "react";
import { useForm } from "react-hook-form";

const RHF = () => {

  console.log("Data Re-Rendering......")
  let {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm();
  
  const formSubmit = (data)=>{
    console.log(data)
    reset();
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
      onSubmit={handleSubmit(formSubmit)}
      className="w-80 p-6 bg-white rounded-xl shadow-lg flex flex-col gap-4">
        <input
          className="w-full p-2 border border-gray-400 rounded outline-none focus:border-blue-500"
          type="text"
          placeholder="Product Name"
        />

    
        <input
        {...register("price")}
          className="w-full p-2 border border-gray-400 rounded outline-none focus:border-blue-500"
          type="text"
          placeholder="Price"
        />

        <input
         {...register("category")}
          className="w-full p-2 border border-gray-400 rounded outline-none focus:border-blue-500"
          type="text"
          placeholder="Category"
        />

        <input
         {...register("image")}
          className="w-full p-2 border border-gray-400 rounded outline-none focus:border-blue-500"
          type="text"
          placeholder="Image"
        />

        <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Select
        </button>
      </form>
    </div>
  );
};

export default RHF;

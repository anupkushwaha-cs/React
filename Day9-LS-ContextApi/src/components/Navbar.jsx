import React from "react";

const Navbar = ({setToggle}) => {
  return (
    <div className="bg-black h-[100px] flex justify-between items-center">
      <div className="flex justify-between align-center">
        <img
          className="h-[50px] object-fit m-4"
          src="https://imgs.search.brave.com/nhMriVbnNDakUU4DNIPn-wICqp7k3PVS1iBaU17lqhc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtdmVjdG9y/L2lsbHVzdHJhdGlv/bi11c2VyLWF2YXRh/ci1pY29uXzUzODc2/LTU5MDcuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MCZxPTgw"
          alt=""
        />
      </div>

      <div className="flex gap-6 font-semibold">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
      </div>

      <div>
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="p-2 m-4 bg-blue-700 text-white cursor-pointer rounded"
        >
          Create User
        </button>
      </div>
    </div>
  );
};

export default Navbar;

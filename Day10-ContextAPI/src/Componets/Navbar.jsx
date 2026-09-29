import React, { useContext } from 'react'
import { MyStore } from "../context/MyWebsite";

const Navbar = () => {
  let {setIsCartOpen} =useContext(MyStore)
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-gray-100">

      <div>
        <h1 className="text-xl font-bold">Logo</h1>
      </div>

      <div className="flex gap-6">
        <p onClick={()=>
          setIsCartOpen(false)
        } className="cursor-pointer">Home</p>
        <p onClick={()=>
          setIsCartOpen(true)
        }
        className="cursor-pointer">Cart</p>
      </div>

      <div>
        <button className="bg-black text-white px-4 py-2 rounded">
          Login
        </button>
      </div>

    </div>
  )
}

export default Navbar
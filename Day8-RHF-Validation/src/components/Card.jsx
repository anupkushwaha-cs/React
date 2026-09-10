import React from 'react'

const Card = ({user}) => {
  return (
    <div className="w-80 bg-white rounded-xl shadow-md p-4">

      <div className="flex items-center gap-4">

       
        <div>
          <img
            src={user.image}
            alt=""
            className="w-20 h-20 rounded-lg object-cover"
          />
        </div>

     
        <div className="flex-1">
          <p className="font-semibold text-lg">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
          <p className="text-sm text-gray-500">{user.contact}</p>
        </div>

      </div>

  
      <div className="flex gap-3 mt-4">
        <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
          Update
        </button>

        <button className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 cursor-pointer">
          Delete
        </button>
      </div>

    </div>
  )
}

export default Card
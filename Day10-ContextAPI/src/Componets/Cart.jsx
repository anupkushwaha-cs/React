import React, { useContext } from 'react'
import { MyStore } from "../context/MyWebsite";

const Cart = () => {

 let {cartItems}= useContext(MyStore)

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700">
              Your cart is empty
            </h2>

            <p className="text-gray-400 mt-2">
              Add some products to your cart.
            </p>
          </div>
        ) : (

          <div className="grid lg:grid-cols-3 gap-6">

            {/* Products */}
            <div className="lg:col-span-2 space-y-4">

              {cartItems.map((item, index) => (

                <div
                  key={`${item.id}-${index}`}
                  className="bg-white rounded-2xl p-4 shadow-sm flex gap-5 items-center"
                >

                
                  <div className="w-28 h-28 bg-gray-50 rounded-xl flex items-center justify-center p-3 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1">

                    <span className="text-xs bg-gray-100 px-3 py-1 rounded-full capitalize text-gray-600">
                      {item.category}
                    </span>

                    <h2 className="font-semibold text-gray-900 mt-2 line-clamp-2">
                      {item.title}
                    </h2>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-yellow-500">
                        ★
                      </span>

                      <span className="text-sm text-gray-500">
                        {item.rating.rate}
                      </span>
                    </div>

                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">
                      ${item.price}
                    </p>

                    <button className="text-sm text-red-500 mt-3 hover:text-red-700">
                      Remove
                    </button>
                  </div>

                </div>

              ))}

            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">

              <h2 className="text-xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="flex justify-between mt-6 text-gray-600">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="flex justify-between mt-3 text-gray-600">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="border-t border-gray-200 my-5"></div>

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-xl mt-6 font-medium hover:bg-gray-800 transition">
                Checkout
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  )
}

export default Cart;
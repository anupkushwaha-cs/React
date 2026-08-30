import React from 'react'

const ProductCard = ({product}) => {
  return (
  <div className="w-64 overflow-hidden rounded-xl border-2 border-gray-200 bg-white p-3 shadow-md">
  
  <img
    className="h-40 w-full rounded-lg object-cover"
    src="https://images.unsplash.com/photo-1500534623283-312aade485b7"
    alt="Product"
  />

  <div className="mt-3">
    <h3 className="text-lg font-bold">Product Name</h3>

    <p className="mt-1 text-sm text-gray-500">
      Category
    </p>

    <p className="mt-2 text-lg font-semibold text-green-600">
      ₹999
    </p>

    <button className="mt-3 w-full rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600">
      Add to Cart
    </button>
  </div>

</div>
  )
}

export default ProductCard
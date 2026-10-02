import { useContext } from "react";
import { MyStore } from "../Context/MyContext";


const ProductCard = ({ product, isInCart , }) => {
  let { setCartItems, incrementQuantity ,  decrementQuantity} = useContext(MyStore);

  const addToCart = () => {
    setCartItems((prev) => [...prev, {...product, quantity: 1}]);
    alert("Product Added Into Cart");
  };

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative flex h-80 items-center justify-center overflow-hidden bg-[#f7f4ef]">
        <span className="absolute left-5 top-5 z-10 rounded-full bg-white px-4 py-2 text-xs font-semibold capitalize text-stone-600 shadow-sm">
          {product.category}
        </span>

        <button className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-stone-500 shadow-sm transition-all duration-300 hover:bg-stone-900 hover:text-white">
          ♡
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-10 transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute bottom-5 left-5 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 shadow-sm">
          <span className="text-amber-500">★</span>
          <span className="text-sm font-semibold text-stone-700">
            {product.rating.rate}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h2 className="line-clamp-2 min-h-[56px] text-lg font-semibold leading-7 text-stone-900">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-500">
          {product.description}
        </p>

        <div className="mt-3 text-xs text-stone-400">
          {product.rating.count} customer reviews
        </div>

        <div className="my-5 border-t border-stone-100"></div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-stone-400">
              Price
            </p>

            <p className="mt-1 text-2xl font-bold text-stone-900">
              ${product.price}
            </p>
          </div>

          {isInCart ? (
            <button className="flex items-center gap-4 rounded-xl border border-stone-200 px-4 py-2">
              <span onClick={()=> decrementQuantity (product.id)}>-</span>
              <span>{isInCart.quantity}</span>
              <span onClick={()=> incrementQuantity (product.id)}>+</span>
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="rounded-xl bg-stone-900 px-5 py-3 font-medium text-white transition-all duration-300 hover:bg-stone-700 active:scale-95"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

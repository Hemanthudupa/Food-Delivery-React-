import { useSelector } from "react-redux";
import { IMAGE_BASE_URL } from "../utils/constants";
import ListItems from "./ListItems";
import { clearCart } from "../utils/Slices/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const selector = useSelector((store) => store.cart.items);
  const cartdispatch = useDispatch();

  function clearCartFun() {
    console.log("invoked");
    cartdispatch(clearCart());
  }

  return selector.length === 0 ? (
    <div className="h-screen flex items-center justify-center text-gray-500 text-xl font-semibold">
      🛒 Your cart is empty
    </div>
  ) : (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-green-200 via-green-100 to-green-300 p-6 font-sans">
      <h1 className="text-3xl font-bold text-green-800 py-4 bg-white shadow-md w-full text-center rounded-xl">🛍️ Your Cart</h1>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6 mt-6">
        <ListItems data={selector} />
      </div>
      <button
        className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-500 transition transform hover:scale-105"
        onClick={clearCartFun}
      >
        ❌ Clear Cart
      </button>
    </div>
  );
};

export default Cart;

import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="p-6">
            <button
              className="block w-full py-3 px-6 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 focus:outline-none focus:bg-gray-700 mb-8"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            {cartItems.length === 0 && (
              <p className="text-lg text-center text-gray-600 mb-8">
                Your cart is empty. Add items to your cart.
              </p>
            )}
            <ItemList items={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

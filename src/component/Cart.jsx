import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navTo = useNavigate();

  const loadCart = () => {
    axios
      .get("http://localhost:8080/cart")
      .then((res) => {
        setCartItems(res.data);

        // Sync localStorage cartCount with actual items
        localStorage.setItem("cartCount", res.data.length.toString());
      })
      .catch(() => console.log("Error while fetching cart"));
  };

  useEffect(() => {
    loadCart();
  }, []);

  const updateQuantity = (item, newQty) => {
    if (newQty < 1) return;

    axios
      .put(`http://localhost:8080/cart/${item.cartId}`, {
        quantity: newQty,
      })
      .then((res) => {
        setCartItems((prev) =>
          prev.map((c) =>
            c.cartId === item.cartId ? { ...c, quantity: res.data.quantity } : c
          )
        );
      })
      .catch(() => console.log("Error while updating quantity"));
  };

  const removeItem = (id) => {
    axios
      .delete(`http://localhost:8080/cart/${id}`)
      .then(() => {
        setCartItems((prev) => {
          const updated = prev.filter((c) => c.cartId !== id);

          // Update localStorage cartCount after delete
          let count = parseInt(localStorage.getItem("cartCount")) || 0;
          const newCount = Math.max(0, count - 1);
          if (newCount === 0) {
            localStorage.removeItem("cartCount");
          } else {
            localStorage.setItem("cartCount", newCount.toString());
          }
          return updated;
        });
      })
      .catch(() => console.log("Error while deleting item"));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.productPrice * item.quantity,
    0
  );

  const clearCart = () => {
    axios
      .delete("http://localhost:8080/cart")
      .then(() => {
        setCartItems([]); 
        localStorage.removeItem("cartCount"); 
      })
      .catch(() => console.log("Error while clearing cart"));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-5">
          My Cart ({cartItems.length})
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600 py-20">
            <p className="text-xl mb-6">Your cart is empty</p>

            <button
              className="px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
              onClick={() => navTo("/")}
            >
              ⬅️ Back to Home
            </button>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.cartId} className="flex border-b pb-4 mb-4 gap-6">
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="w-48 h-48 object-cover rounded-md border"
                />

                <div className="flex-1">
                  <h2 className="font-bold text-lg">{item.productName}</h2>
                  <p className="text-gray-600 capitalize">{item.category}</p>

                  <div className="mt-3 flex items-center gap-3">
                    <button
                      className="px-3 py-1 border rounded bg-gray-200"
                      onClick={() => updateQuantity(item, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="font-bold">{item.quantity}</span>
                    <button
                      className="px-3 py-1 border rounded bg-gray-200"
                      onClick={() => updateQuantity(item, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="mt-4 flex items-center gap-6">
                    <button
                      className="text-red-600 font-medium"
                      onClick={() => removeItem(item.cartId)}
                    >
                      ❌ Remove
                    </button>
                  </div>
                </div>

                <div className="font-bold text-xl text-green-600">
                  ₹{item.productPrice * item.quantity}
                </div>
              </div>
            ))}

            <div className="border-t pt-4 flex justify-between items-center">
              <button
                className="px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
                onClick={() => navTo("/")}
              >
                ⬅️ Back to Home
              </button>

              <h2 className="text-xl font-bold text-gray-700">
                Total: ₹{totalAmount}
              </h2>

              <button
                className="px-6 py-3 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600"
                onClick={() => {
                  clearCart(); 
                  toast.success("Order Placed Successfully 🎉");
                  navTo("/order-success"); // redirect
                }}
              >
                PLACE ORDER
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

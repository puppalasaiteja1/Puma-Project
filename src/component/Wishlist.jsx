import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const [favItems, setFavItems] = useState([]);
  const navTo = useNavigate();

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavItems(fav);
  }, []);

  const removeFav = (name) => {
    const updated = favItems.filter((item) => item.productName !== name);
    localStorage.setItem("favourites", JSON.stringify(updated));
    setFavItems(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-5">
          My Favourites ❤️ ({favItems.length})
        </h1>

        {favItems.length === 0 ? (
          <div className="text-center text-gray-600 py-20">
            <p className="text-xl mb-6">No favourites yet</p>
            <button
              className="px-6 py-3 bg-blue-500 text-white rounded-md"
              onClick={() => navTo("/")}
            >
              ⬅ Back to Home
            </button>
          </div>
        ) : (
          <>
            {favItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 border-b pb-4 mb-4"
              >
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="w-32 h-32 rounded border"
                />
                <div className="flex-1">
                  <h2 className="font-bold text-lg">{item.productName}</h2>
                  <p className="text-gray-700 capitalize">{item.category}</p>
                  <p className="text-green-600 font-bold text-xl">
                    ₹{item.productPrice}
                  </p>
                  <button
                    className="text-red-600 mt-3"
                    onClick={() => removeFav(item.productName)}
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))}

            <button
              className="px-6 py-3 bg-blue-500 text-white rounded-md"
              onClick={() => navTo("/")}
            >
              ⬅ Back to Home
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

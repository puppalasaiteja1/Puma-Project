import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex justify-center items-center px-4">

      <div className="bg-white/40 backdrop-blur-xl p-10 rounded-3xl shadow-2xl text-center w-full max-w-lg border border-white/30">        
        <div className="mx-auto mb-6 animate-bounce">
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            className="w-24 mx-auto drop-shadow-lg"
            alt="success"
          />
        </div>        
        <h1 className="text-4xl font-extrabold text-green-700 drop-shadow-sm mb-4">
          Order Placed! 🎉
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Your order has been successfully placed.  
          We appreciate your trust in us!
        </p>
        <div className="my-4 h-[1px] w-3/4 bg-gray-300 mx-auto"></div>
        <Link to="/">
          <button className="mt-4 px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300">
            Go to Home
          </button>
        </Link>
      </div>

    </div>
  );
};

export default OrderSuccess;

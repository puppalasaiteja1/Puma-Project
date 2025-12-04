import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';

const Search = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSearch = () => {
    const text = inputRef.current.value.trim().toLowerCase();

    if (!text) {
      toast.error("Enter product category like: kid, shirt, shoe, jacket");
      return;
    }

    // redirect to existing pages
    if (text.includes("kid") || text.includes("kids")) {
      navigate("/kid");
    } else if (text.includes("shirt") || text.includes("tshirt") || text.includes("top")) {
      navigate("/shirt");
    } else if (text.includes("shoe") || text.includes("sneaker") || text.includes("shoes")) {
      navigate("/shoe");
    } else if (text.includes("jacket") || text.includes("jackets")) {
      navigate("/jacket");
    } else if(text.includes("slide") || text.includes("slides")){
        navigate("/slide")
    } 
    else {
      toast.error("No category found! Try: kid, shirt, shoe, jacket");
    }
  };

  return (
    <div className="w-full flex justify-center items-center mt-6 gap-3">
      <input
        type="text"
        ref={inputRef}
        placeholder="Search for Product"
        className="w-[600px] p-3 border-gray-400 rounded-full outline-none shadow-sm"
      />
      <button
        onClick={handleSearch}
        className="bg-orange-300 px-6 py-2 rounded-full font-semibold"
      >
        Search
      </button>
    </div>
  );
};

export default Search;

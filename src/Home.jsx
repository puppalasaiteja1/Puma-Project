import React, { useEffect, useState } from "react";
import img1 from "./assets/puma-logo.svg";
import img2 from "./assets/img2.avif";
import img3 from "./assets/img4.avif";
import img4 from "./assets/left1.avif";
import img5 from "./assets/right1.avif";
import img6 from "./assets/img5.avif";
import shoe2 from "./assets/shoe2.avif";
import img7 from "./assets/section101.avif";
import img8 from "./assets/section102.avif";
import img9 from "./assets/section11.avif";
import img10 from "./assets/section12.avif";
import { Link, Links } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const Home = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCount = parseInt(localStorage.getItem("cartCount")) || 0;
    setCartCount(storedCount);
  }, []); // 🔴 run only once when component mounts

  return (
    <>
      {/* Navbar Section starts */}
      <div className="sticky inset-x-0 bg-black text-white">
        <div className="flex justify-between h-18 w-380 m-auto">
          <div className="flex w-240 items-center">
              <img src={img1} alt="" className="h-13 w-15 invert p-1 m-y-4" />          
            <ul className="flex w-240 justify-around items-center font-bold text-white p-5">
              
              <Link to={"/shoe"}>
              <li>
                  Shoe
              </li>
              </Link>             
              <Link to={"/jacket"}>
              <li>
                Jacket
              </li>
              </Link>
              <Link to={"/slide"}>
              <li>
                 Slides
              </li>
              </Link>
              <Link to={"/shirt"}>
                 <li>
                 Shirts
              </li>
              </Link>
              
              <Link to={"/kid"}>
                <li>
                  Kids
                </li>
              </Link>
            </ul>
          </div>
          <div className="w-70 flex justify-between text-white items-center">
            <div className="md:flex items-center border h-10 w-32 rounded px-2 py-1">
              <button className="mr-2 p-2">
                <FaSearch size={14} />
              </button>
             <Link to={"/search"}> <span className="text-sm font-bold">SEARCH</span></Link>
            </div>

            <Link to="/wishlist" className="p-1">
              <FaHeart size={18} />
            </Link>


            {/* Cart icon with badge */}
            <Link to="/cart" className="relative cursor-pointer">
              <FaShoppingCart className="text-white text-2xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs 
                  w-5 h-5 flex justify-center items-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link to={"/login"}>
              <button className="p-1">
                <FaUser size={18} />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Navbar Section ends */}

      {/* Section1 starts */}
      <div className="relative">
        <img src={img2} alt="" className="w-full h-[550px] object-cover" />
        <div className="absolute top-1/2 right-16 -translate-y-1/2 text-white ">
          <h1 className="text-4xl font-extrabold leading-tight">
            FOR THE TRENDSETTERS
          </h1>
          <p className="mt-3 text-lg leading-snug">
            SPEEDCAT RETURNS IN NEW COLOURWAYS
          </p>
          <p className="text-lg leading-snug">FOR THE SEASON</p>
          <div className="mt-6 flex gap-4">
            <Link to={"/shoe"}>
              <button className="bg-white text-black px-5 py-2 font-semibold">
                SHOP SHOE
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Section1 ends */}

      {/*Section2 Starts */}
      <div className="relative mt-3">
        <img src={img3} alt="" className="w-full h-[550px] object-cover" />
        <div className="absolute top-1/2 left-16 -translate-y-1/3 text-white">
          <h1 className="text-4xl font-extrabold leading-tight">
            ART THAT MOVES
          </h1>
          <p className="mt-2 text-lg">INSPIRED BY BMW ART CARS</p>
          <Link to={"/jacket"}>
          <button className="mt-6 bg-white text-black px-5 py-2 font-semibold">
            SHOP NOW
          </button>
          </Link>
        </div>
      </div>
      {/*Section2 ends */}

      {/* Section3 starts */}
      <div className="h-40 text-center mt-18">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold font-display leading-tight text-[#181819]">
          LEGENDS, RELOADED.
        </h1>
        <p className="font-display text-center mt-4 text-[#6e6e6e]">
          THE GAME, REWORKED.
        </p>
      </div>
      {/* Section3 ends */}

      {/* Section4 starts */}
      <div className="h-340 w-380 m-auto flex gap-4">
        <div className="relative w-1/2 h-340">
          <img src={img4} alt="" className="w-full h-full object-cover" />
          <h1 className="absolute bottom-20 left-1/2 -translate-x-1/2 text-4xl text-white font-bold">
            SHOP BALLET
          </h1>
        </div>

        <div className="relative w-1/2 h-340">
          <img src={img5} alt="" className="w-full h-full object-cover" />
          <h1 className="absolute bottom-20 left-1/2 -translate-x-1/2 text-4xl text-white font-bold">
            SPEEDCAT
          </h1>
        </div>
      </div>
      {/* Section4 ends */}

      {/* Section5 starts */}
      <div className="h-40 text-center mt-18">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold font-display leading-tight text-[#181819]">
          MORE OF SPEEDCATS
        </h1>
        <p className="font-display text-center mt-4 text-[#6e6e6e]">
          VARIANTS YOU CAN'T MISS OUT ON
        </p>
      </div>
      {/* Section5 ends */}

      {/* Section6 starts */}
      <div className="relative w-full h-140">
        <img src={img6} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-1/2 right-20 -translate-y-1/2 text-right">
          <h1 className="text-4xl font-bold text-white">LOOK LIKE CHAMPIONS</h1>
          <p className="text-xl mt-2 text-white tracking-wider">
            PUMA x RCB ATHLEISURE
            <br />
            COLLECTION IS BACK
          </p>
         
         <Link to={"/shirt"}>
          <button className="mt-4 bg-black text-white px-6 py-3 font-semibold">
            SHOP NOW
          </button>
         </Link>
        </div>
      </div>
      {/* Section6 ends */}

      {/* Section7 starts */}
      <div className="h-40 text-center mt-18">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold font-display leading-tight text-[#181819]">
          BROWNS OWNING <br /> THE MOMENT
        </h1>
        <p className="font-display text-center mt-4 text-[#6e6e7e]">
          SLIDE INTO FALL'S FAVOURITE COLOR
        </p>
      </div>
      {/* Section7 ends */}

      {/* Section9 starts */}
      <div className="h-180 w-380 m-auto flex gap-4 border-2">
        <div className="relative w-1/2 h-180">
          <img src={img7} alt="" className="object-fit w-full h-full" />
          <h1 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-5xl text-white font-bold">
            PALMERO
          </h1>
        </div>

        <div className="relative w-1/2 h-180">
          <img src={img8} alt="" className="object-fit w-full h-full" />
          <h1 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-5xl text-white font-bold">
            NITRO
          </h1>
        </div>
      </div>
      {/* Section9 ends */}

       {/* Section10 starts */}
      <div className="h-40 text-center mt-18">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold font-display leading-tight text-[#181819]">
          ICONS, REINVENTED
        </h1>
        <p className="font-display text-center mt-4 text-[#6e6e7e]">
          SHOP THE LATEST & GREATEST
        </p>
      </div> 
      {/* Section10 ends */}

      {/* Section11 starts */}
      <div className="relative  h-130 mt-1">
        <img src={img9} alt="" />
        <div className="absolute top-1/2 left-16 -translate-y-1/2 text-white ">
          <h1 className="text-4xl font-extrabold leading-tight">
            THE FUTURE JUST LANDED
          </h1>
          <p className="mt-3 text-lg leading-snug">OWN THE NEW SEASON</p>
          <div className="mt-6 flex gap-4">
              <Link to={"/kid"}>
               <button className="bg-white text-black px-5 py-2 font-semibold">
              FOR KIDS
            </button>
              </Link>            
          </div>
        </div>
      </div>
      {/* Section11 ends */}

      {/* Section12 starts */}
      <div className="relative h-130 mt-15">
        <img src={img10} alt="" />
        <div className="absolute top-1/2 right-16 -translate-y-1/2 text-black ">
          <h1 className="text-4xl font-extrabold leading-tight">
            LAST MOVE BEFORE IT'S GONE
          </h1>
          <div className="mt-6 flex gap-4">
            <Link to={"/slide"}>
            <button className="bg-black text-white px-5 py-2 font-semibold ml-52">
              SHOP FOOTWEAR
            </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Section12 ends */}

      {/* Section13 starts */}
      <div className="h-120 mt-16 ">
        <h1 className="text-2xl font-semibold ml-8">RECENTLY VIEWED BY YOU</h1>
        <div className="h-85 w-80 ml-9 mt-4">
          <img src={shoe2} alt="" />
        </div>
        <div className="h-13 mt-2 ml-9 w-80 flex justify-between">
          <p className="font-extrabold">
            Palermo Moda La Catrina Women's Sneakers
          </p>
          <p className="font-extrabold">₹7,999</p>
        </div>
      </div>
      {/* Section13 ends */}

      {/* Section14 starts */}
      <div className="border-2 h-140 mt-15 bg-black">
        <div className="border-2 h-full w-368 m-auto text-white">
          <div className="h-100 flex justify-around">
            <div className="w-55 h-85 p-7 font-semibold mt-10">
              <h3 className="text-2xl pb-2">support</h3>
              <ul>
                <li>Contact us</li>
                <li>Promotions & Sale</li>
                <li>Track Order</li>
                <li>Shoe care</li>
                <li>Tech Glossary</li>
                <li>Initiate Return / Exchange</li>
                <li>Sneakers</li>
                <li>Nitro</li>
                <li>Cookie Settings</li>
              </ul>
            </div>
            <div className="w-55 h-85 p-7 font-semibold mt-10">
              <h3 className="text-2xl pb-2">Contact us</h3>
              <ul>
                <li>Promotions & Sale</li>
                <li>Track Order</li>
                <li>Shoe care</li>
                <li>Tech Glossary</li>
                <li>Initiate Return / Exchange</li>
                <li>Sneakers</li>
                <li>Nitro</li>
                <li>Cookie Settings</li>
              </ul>
            </div>
            <div className="w-55 h-85 p-7 font-semibold mt-10">
              <h3 className="text-2xl pb-2">About</h3>
              <ul>
                <li>Contact us</li>
                <li>Promotions & Sale</li>
                <li>Track Order</li>
                <li>Shoe care</li>
                <li>Tech Glossary</li>
                <li>Initiate Return / Exchange</li>
                <li>Sneakers</li>
                <li>Nitro</li>
                <li>Cookie Settings</li>
              </ul>
            </div>
            <div className="w-75 h-85 p-7 font-semibold mt-10">
              <h3 className="text-2xl pb-2">support</h3>
              <ul>
                <li>Contact us</li>
                <li>Promotions & Sale</li>
                <li>Track Order</li>
                <li>Shoe care</li>
                <li>Tech Glossary</li>
                <li>Initiate Return / Exchange</li>
                <li>Sneakers</li>
                <li>Nitro</li>
                <li>Cookie Settings</li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
      </div>
      {/* Section14 ends */}
    </>
  );
};

export default Home;

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import {toast } from 'react-toastify';

const Kid = () => {
  let [kid, setKid] = useState([])
  let navTo = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:8080/kid')
      .then((res) => setKid(res.data))
      .catch(() => console.log('error'))
  }, [])

  const addToCart = (eachKid) => {
    const isLogin = sessionStorage.getItem('isLogin')

    if (isLogin !== 'true') {
      navTo('/login')
    } else {
      const payload = {
        productName: eachKid.kidName,
        productImage: eachKid.kidImage,
        productPrice: eachKid.kidPrice,
        category: 'kid',
        quantity: 1,
      }

      axios.post('http://localhost:8080/addCart', payload)
        .then(() => {
          let count = parseInt(sessionStorage.getItem("cartCount")) || 0;
          sessionStorage.setItem("cartCount", count + 1);
          navTo('/cart')
        })
        .catch(() => console.log('error while adding to cart'))
    }
  }

  
  const addToFav = (eachKid) => {
    // get old favourites from localStorage (or empty array if nothing)
    let favList = JSON.parse(localStorage.getItem("favourites")) || [];

    // check if already exists (avoid duplicates)
    const exists = favList.some(
      (item) => item.productName === eachKid.kidName
    );
    if (exists) {
      toast.warning("Already in favourites ❤️");
      return;
    }

    // create a favourite object
    const favItem = {
      productName: eachKid.kidName,
      productImage: eachKid.kidImage,
      productPrice: eachKid.kidPrice,
      category: "kid",
    };

    // add and save back to localStorage
    favList.push(favItem);
    localStorage.setItem("favourites", JSON.stringify(favList));

    toast.success("Added to favourites ❤️");
  };

  return (
    <>
    <Link to={"/"}><button className='ml-10 mt-2 w-30 font-semibold bg-red-500 text-white h-10 rounded-xl'>Back</button></Link>
    <div className='w-380 m-auto mt-10 flex gap-2 flex-wrap'>
      {kid.map((eachKid) => (
        <div key={eachKid.kidId} className='p-3 rounded-lg h-130 w-120 ml-2'>
          <img src={eachKid.kidImage} className='w-full h-90 object-cover' />
          <div className='flex justify-between'>
            <div>
              <h4 className='font-bold mt-2 text-lg mb-3'>{eachKid.kidName}</h4>
              <p className='text-red-600 font-semibold'>Extra 30% off auto applied</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className='text-gray-700 mt-3 font-semibold text-center'>₹{eachKid.kidPrice}</p>

              <button
                className='border-2 w-32 rounded-lg bg-green-400 h-10 text-white font-bold'
                onClick={() => addToCart(eachKid)}
              >
                Add Cart
              </button>

              <button
                className='border-2 w-32 rounded-lg bg-pink-500 h-10 text-white font-bold'
                onClick={() => addToFav(eachKid)}
              >
                ❤️ Fav
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Kid

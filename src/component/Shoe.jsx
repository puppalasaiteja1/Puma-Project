import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import {toast } from 'react-toastify';
const Shoe = () => {
  let [shoe, setShoe] = useState([])
  let navTo = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:8080/shoes')
      .then((res) => setShoe(res.data))
      .catch(() => console.log('error'))
  }, [])

  const addToCart = (eachShoe) => {
    const isLogin = sessionStorage.getItem('isLogin')

    if (isLogin !== 'true') {
      navTo('/login')
    } else {
      const payload = {
        productName: eachShoe.shoeName,
        productImage: eachShoe.shoeImage,
        productPrice: eachShoe.shoePrice,
        category: 'shoe',
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

  const addToFav = (eachShoe) => {
    let favList = JSON.parse(localStorage.getItem("favourites")) || [];

    const exists = favList.some(
      (item) => item.productName === eachShoe.shoeName
    );

    if (exists) {
     toast.error("Already in favourites ❤️")
      return
    }

    const favItem = {
      productName: eachShoe.shoeName,
      productImage: eachShoe.shoeImage,
      productPrice: eachShoe.shoePrice,
      category: "shoe",
    }

    favList.push(favItem);
    localStorage.setItem("favourites", JSON.stringify(favList));

    toast.success("Added to favourites ❤️");
  };

  return (
    <>
    <Link to={"/"}><button className='ml-10 mt-2  w-30 font-semibold bg-red-500 text-white h-10 rounded-xl'>Back</button></Link>
    <div className='w-380 m-auto mt-5 flex gap-2 flex-wrap'>
      
      {shoe.map((eachShoe) => (
        <div key={eachShoe.shoeId} className='p-3 rounded-lg h-130 w-120 ml-2'>
          <img src={eachShoe.shoeImage} className='w-full h-90 object-cover' />

          <div className='flex justify-between'>
            <div>
              <h4 className='font-bold mt-2 text-lg mb-3'>{eachShoe.shoeName}</h4>
              <p className='text-red-600 font-semibold'>Extra 30% off auto applied</p>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-gray-700 mt-3 font-semibold text-center'>₹{eachShoe.shoePrice}</p>

              <button className='border-2 w-32 rounded-lg bg-green-400 h-10 text-white font-bold'
                onClick={() => addToCart(eachShoe)}>
                Add Cart
              </button>

              <button className='border-2 w-32 rounded-lg bg-pink-500 h-10 text-white font-bold'
                onClick={() => addToFav(eachShoe)}>
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

export default Shoe

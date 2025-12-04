import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import {toast } from 'react-toastify';

const Jacket = () => {
  let [jacket, setJacket] = useState([])
  let navTo = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:8080/jacket')
      .then((res) => setJacket(res.data))
      .catch(() => console.log('error'))
  }, [])

  const addToCart = (eachJacket) => {
    let isLogin = sessionStorage.getItem('isLogin')

    if (isLogin !== 'true') {
      navTo('/login')
    } else {
      const payload = {
        productName: eachJacket.jacketName,
        productImage: eachJacket.jacketImage,
        productPrice: eachJacket.jacketPrice,
        category: 'jacket',
        quantity: 1,
      }

      axios.post('http://localhost:8080/addCart', payload)
        .then(() => {
          let count = parseInt(localStorage.getItem("cartCount")) || 0;
          localStorage.setItem("cartCount", count + 1);
          navTo('/cart')
        })
        .catch(() => console.log('error while adding to cart'))
    }
  }

  const addToFav = (eachJacket) => {
    let favList = JSON.parse(localStorage.getItem("favourites")) || []

    const exists = favList.some(
      (item) => item.productName === eachJacket.jacketName
    )

    if (exists) {
      toast.error("Already in favourites ❤️")
      return
    }

    const favItem = {
      productName: eachJacket.jacketName,
      productImage: eachJacket.jacketImage,
      productPrice: eachJacket.jacketPrice,
      category: "jacket",
    }

    favList.push(favItem)
    localStorage.setItem("favourites", JSON.stringify(favList))

    toast.success("Added to favourites ❤️")
  }

  return (
    <>
    <Link to={"/"}><button className='ml-10 mt-2 w-30 font-semibold bg-red-500 text-white h-10 rounded-xl'>Back</button></Link>
    <div className='w-380 m-auto mt-10 flex gap-2 flex-wrap'>
      {jacket.map((eachJacket) => (
        <div key={eachJacket.jacketId} className='p-3 rounded-lg h-130 w-120 ml-2'>
          <img
            src={eachJacket.jacketImage}
            className='w-full h-90 object-cover'
            alt={eachJacket.jacketName}
          />

          <div className='flex justify-between'>
            <div>
              <h4 className='font-bold mt-2 text-lg mb-3'>{eachJacket.jacketName}</h4>
              <p className='text-red-600 font-semibold'>Extra 30% off auto applied</p>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-gray-700 mt-3 font-semibold text-center'>₹{eachJacket.jacketPrice}</p>

              <button
                className='border-2 w-32 rounded-lg bg-green-400 h-10 text-white font-bold'
                onClick={() => addToCart(eachJacket)}
              >
                Add Cart
              </button>

              <button
                className='border-2 w-32 rounded-lg bg-pink-500 h-10 text-white font-bold'
                onClick={() => addToFav(eachJacket)}
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

export default Jacket

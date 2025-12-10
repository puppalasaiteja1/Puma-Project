import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './component/Login'
import Register from './component/Register'
import Shoe from './component/Shoe'
import Shirt from './component/Shirt'
import Kid from './component/Kid'
import Jacket from './component/Jacket'
import Slide from './component/Slide'
import Cart from './component/Cart'
import Home from './Home'
import Wishlist from './component/Wishlist'
import Search from './component/Search'
import OrderSuccess from './component/OrderSuccess'

const Master = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/shoe' element={<Shoe/>}></Route>
        <Route path='/shirt' element={<Shirt/>}></Route>
        <Route path='/kid' element={<Kid/>}></Route>
        <Route path='/jacket' element={<Jacket/>}></Route>
        <Route path='/slide' element={<Slide/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path="/order-success" element={<OrderSuccess/>} />

       </Routes>
    </div>
  )
}

export default Master
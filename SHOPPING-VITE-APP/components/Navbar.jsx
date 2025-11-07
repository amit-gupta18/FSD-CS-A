import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='bg-amber-900 text-white p-4 flex justify-around rounded-xl'>
        <Link to="/user/cart">View - Cart</Link>
        <Link to="/user/order">View - Orders</Link>
        <Link to="/user">Home</Link>
        <Link to="/user/login">Login</Link>
    </div>
  )
}

export default Navbar
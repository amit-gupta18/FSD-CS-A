import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Cart from '../components/Cart'
import Order from '../components/Order'
import Checkout from '../components/Checkout'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Navbar from '../components/Navbar'
import Register from '../components/Register'
import UserDashboard from './UserDashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<UserDashboard />} >
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order" element={<Order />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

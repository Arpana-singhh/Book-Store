import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import AllBooks from '../pages/AllBooks'
import Login from '../pages/Login'
import MainLayout from '../layouts/MainLayout'
import Cart from '../pages/Cart'

const AppRoutes = () => {
  return (
  <Routes>
       <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login />} />
      </Route>
  </Routes>
  )
}

export default AppRoutes
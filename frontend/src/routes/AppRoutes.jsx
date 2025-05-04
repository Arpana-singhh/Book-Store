import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import AllBooks from '../pages/AllBooks'
import Login from '../pages/Login'
import MainLayout from '../layouts/MainLayout'
import Cart from '../pages/Cart'
import EmailVerify from '../pages/EmailVerify'
import ResetPassword from '../pages/ResetPassword'

const AppRoutes = () => {
  return (
  <Routes>
       <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login />} />
        <Route path="reset-password" element={<ResetPassword/>} />
        <Route path="/email-verify" element={<EmailVerify />} />
      </Route>
  </Routes>
  )
}

export default AppRoutes
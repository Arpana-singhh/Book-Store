import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import AllBooks from "../pages/AllBooks";
import Login from "../pages/Login";
import MainLayout from "../layouts/MainLayout";
import Cart from "../pages/Cart";
import EmailVerify from "../pages/EmailVerify";
import ResetPassword from "../pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import {PublicRoute, PrivateRoute} from './routeGuards'
import BookDetail from "../components/BookDetail";

const AppRoutes = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/books" element={<AllBooks />} />
          <Route path="/book-detail/:id" element={<BookDetail />} />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />

          {/* ✅ Public only routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/verify-email"
            element={
              <PublicRoute>
                <EmailVerify />
              </PublicRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;

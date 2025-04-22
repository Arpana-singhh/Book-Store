import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import { AppContent } from "../../context/AppContext";
import axios from "axios";
const NavBar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const { backendUrl, setUserData, isLoggedin, setIsLoggedin } =
    useContext(AppContent);
  const navigate = useNavigate();
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const handleLogout = async () => {
    try {
      const { data } = await axios.post(backendUrl + "api/auth/logout");
      if (data.success) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("userRole");

        toast.success(data.message);
        setIsLoggedin(false);
        setUserData(false);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="px-[60px] py-[15px] z-[2] sticky w-full top-0 bg-white">
      <div className="flex justify-between items-center">
        <Link to="/" className="h-[55px] w-[55px]">
          <img src={assets.Logo} alt="Leaf&Ink" />
        </Link>

        <div className="flex items-center gap-[10px]">
          <Link
            to="/"
            className={`text-[18px] font-[700] text-[#232323] px-[20px] transition duration-300 ease-in-out  hover:text-[#ED553B]
            ${activeLink === "/" ? "text-[#ED553B]" : ""}`}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`text-[18px] font-[700] text-[#232323] px-[20px] transition duration-300 ease-in-out  hover:text-[#ED553B]
            ${activeLink === "/about" ? "text-[#ED553B]" : ""}`}
            onClick={() => handleLinkClick("/about")}
          >
            About
          </Link>

          <Link
            to="/books"
            className={`text-[18px] font-[700] text-[#232323] px-[20px]transition duration-300 ease-in-out hover:text-[#ED553B] 
            ${activeLink === "/books" ? "text-[#ED553B]" : ""}`}
            onClick={() => handleLinkClick("/books")}
          >
            All Books
          </Link>
          {isLoggedin && (
              <Link
              to="/cart"
              className={`text-[18px] font-[700] text-[#232323] px-[20px] transition duration-300 ease-in-out hover:text-[#ED553B] 
              ${activeLink === "/cart" ? "text-[#ED553B]" : ""}`}
              onClick={() => handleLinkClick("/cart")}
            >
              Cart
            </Link>
          )}
         {!isLoggedin ? (
            <Link
              to="/login"
              className={`text-[18px] font-[700] text-[#232323] pl-[20px] transition duration-300 ease-in-out hover:text-[#ED553B]
           ${activeLink === "/login" ? "text-[#ED553B]" : ""}`}
              onClick={() => handleLinkClick("/login")}
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="text-[18px] font-[700] text-[#232323] pl-[20px] transition duration-300 ease-in-out hover:text-[#ED553B]"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

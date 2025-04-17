import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="px-[60px] py-[15px] z-[2] sticky w-full top-0 bg-white">
      <div className="flex justify-between items-center">
        <Link to="/" className="h-[55px] w-[55px]">
          <img src={assets.Logo} alt="Leaf&Ink"/>
        </Link>

        <div className="flex items-center gap-[10px]">
          <Link
            to="/"
            className={`text-[18px] font-[700] text-[#232323] px-[20px] transition duration-300 ease-in-out  hover:text-[#ED553B]
            ${activeLink === '/' ? 'text-[#ED553B]' : ''}`}
            onClick={() => handleLinkClick('/')}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`text-[18px] font-[700] text-[#232323] px-[20px] transition duration-300 ease-in-out  hover:text-[#ED553B]
            ${activeLink === '/about' ? 'text-[#ED553B]' : ''}`}
            onClick={() => handleLinkClick('/about')}
          >
            About
          </Link>

          <Link
            to="/books"
            className={`text-[18px] font-[700] text-[#232323] px-[20px]transition duration-300 ease-in-out hover:text-[#ED553B] 
            ${activeLink === '/books' ? 'text-[#ED553B]' : ''}`}
            onClick={() => handleLinkClick('/books')}
          >
            All Books
          </Link>

          <Link
            to="/cart"
            className={`text-[18px] font-[700] text-[#232323] px-[20px] transition duration-300 ease-in-out hover:text-[#ED553B] 
            ${activeLink === '/cart' ? 'text-[#ED553B]' : ''}`}
            onClick={() => handleLinkClick('/cart')}
          >
            Cart
          </Link>

          <Link
            to="/login"
            className={`text-[18px] font-[700] text-[#232323] pl-[20px] transition duration-300 ease-in-out hover:text-[#ED553B]
            ${activeLink === '/login' ? 'text-[#ED553B]' : ''}`}
            onClick={() => handleLinkClick('/login')}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

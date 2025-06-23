import React, { useContext, useEffect, useState } from "react";
import { AppContent } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";
const Cart = () => {
  const [cartItems, setcartItems] = useState([]);
  const { backendUrl } = useContext(AppContent);
  let authToken = localStorage.getItem("authToken");
  let userId = localStorage.getItem("userId");

  const getCartBook = async () => {
    const headers = {
      authorization: `Bearer ${authToken}`,
      id: userId,
    };

    let { data } = await axios.get(backendUrl + "api/auth/get-cart-book", {
      headers,
    });
    if (data.success) {
      setcartItems(data.data);
      console.log(data.data)
    }
  };


  const handleRemoveFromCart = async (bookId) => {
    const headers = {
      authorization: `Bearer ${authToken}`,
      id: userId,
      bookid: bookId,
    };

    try {
      const { data } = await axios.put(backendUrl + "api/auth/remove-book-from-cart", null, { headers });

      if (data.success) {
        toast.success(data.message);
        setcartItems(cartItems.filter((book) => book._id !== bookId));
       
      } else {
        console.log("Error removing from favourites");
      }
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      toast.error(message);
    }
  };

  useEffect(()=>{
    getCartBook();
  },[])


  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="mx-[60px] my-[40px]">
      <h1 className="text-[40px] font-[600] text-[#393280] mb-[30px]">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row items-center border rounded-[12px] p-4 shadow-md"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-[120px] h-[160px] object-cover rounded-md mb-4 md:mb-0"
              />
              <div className="md:ml-6 flex flex-col flex-grow">
                <h2 className="text-[20px] font-[600] text-[#393280]">{item.title}</h2>
                <p className="text-[#555] text-[16px] mb-2">by {item.author}</p>
                <p className="text-[#393280] font-[500] text-[18px] mb-2">₹{item.price}</p>

                <div className="flex items-center space-x-4 mt-auto">
                  <div className="flex items-center border rounded-[6px] overflow-hidden">
                    <button className="px-3 py-1 bg-[#f2f2f2] hover:bg-[#ddd]">-</button>
                    <span className="px-4">1</span>
                    <button className="px-3 py-1 bg-[#f2f2f2] hover:bg-[#ddd]">+</button>
                  </div>
                  <button className="cmn-org-btn" onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="border p-6 rounded-[12px] shadow-md h-fit">
          <h2 className="text-[24px] font-[600] text-[#393280] mb-4">Order Summary</h2>
          <div className="flex justify-between mb-3">
            <span className="text-[16px]">Subtotal</span>
            <span className="font-[500]">₹{subtotal}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-[16px]">Shipping</span>
            <span className="text-green-600 font-[500]">Free</span>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between mb-6 text-[18px] font-[600] text-[#393280]">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>
          <button className="w-full bg-[#393280] text-white py-[12px] rounded-[8px] text-[16px] font-[500] hover:bg-[#2f2966] transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

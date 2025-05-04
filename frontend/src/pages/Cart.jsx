import React from "react";

const Cart = () => {
  const cartItems = [
    {
      _id: 1,
      url: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      title: "The Book of Secrets",
      author: "Deepak Chopra",
      price: 499,
      quantity: 2,
    },
    {
      _id: 2,
      url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      title: "Atomic Habits",
      author: "James Clear",
      price: 350,
      quantity: 1,
    },
    {
      _id: 3,
      url: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      title: "The Book of Secrets",
      author: "Deepak Chopra",
      price: 499,
      quantity: 2,
    },
  ];

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
                    <span className="px-4">{item.quantity}</span>
                    <button className="px-3 py-1 bg-[#f2f2f2] hover:bg-[#ddd]">+</button>
                  </div>
                  <button className="text-red-500 hover:underline">Remove</button>
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

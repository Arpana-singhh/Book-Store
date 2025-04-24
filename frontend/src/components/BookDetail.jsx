import React from "react";

const BookDetail = () => {
  const book = {
    url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    title: "The Art of Reading",
    author: "Jane Doe",
    price: 399,
    desc: "This inspiring book dives deep into the world of literature and explores the transformative power of reading. It's a must-read for every book lover.",
    language: "English",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Book Image */}
        <div className="md:w-1/2">
          <img
            src={book.url}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Book Info */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-[40px] font-bold text-[#393280] mb-4">
              {book.title}
            </h2>
            <h3 className="text-lg font-medium text-[#393280CC] mb-2">
             {book.author}
            </h3>

            <p className="text-[18px] text-gray-700 mb-6 leading-relaxed">
              {book.desc}
            </p>

            <div className="mb-4">
              <span className="text-lg text-gray-600 font-medium">Language:</span>{" "}
              <span className="text-[#393280] font-semibold">{book.language}</span>
            </div>

            <div className="text-[28px] font-bold text-[#393280] mb-6">
              ₹{book.price}
            </div>
          </div>

          {/* Buy Button */}
          <button className="bg-[#393280] text-white px-6 py-3 rounded-xl hover:bg-[#2f276f] transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

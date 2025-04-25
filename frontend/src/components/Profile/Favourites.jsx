import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { AppContent } from "../../../context/AppContext";
import { Link } from "react-router-dom";

const Favourites = () => {
  const [favBooks, setIsFavBooks] = useState("");
  const { backendUrl } = useContext(AppContent);

  const getFavouriteBook = async () => {
    const authToken = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");

    const headers = {
      authorization: `Bearer ${authToken}`,
      id: userId,
    };

    let { data } = await axios.get(backendUrl + "api/auth/get-favourite-book", {
      headers,
    });
    if (data.success) {
      setIsFavBooks(data.data);
    }
  };

  const handleRemoveFromFavourite = async (bookId) => {
    const authToken = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");

    const headers = {
      authorization: `Bearer ${authToken}`,
      id: userId,
      bookid: bookId,
    };

    try {
      const { data } = await axios.put(backendUrl + "api/auth/remove-book-from-favourite", null, { headers });

      if (data.success) {
        // Remove the book from the state after successful removal
        setIsFavBooks(favBooks.filter((book) => book._id !== bookId));
      } else {
        // Handle error (optional)
        console.log("Error removing from favourites");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getFavouriteBook();
  }, []);
  return (
    <>
      <div className="pt-[0] pb-[92px] px-[60px]">
        <h1 className="font-[700] text-[32px] text-[#393280] mb-10">
          Explore Your Favourites
        </h1>
        <div className="flex flex-wrap gap-[20px]">
          {favBooks &&
            favBooks.map((item, index) => (
              <div
                // to={`/book-detail/${item._id}`}
                key={index}
                className="w-[calc(100%/3-(2*20px)/3)] flex flex-col justify-center items-center shadow-[1.03px_4.12px_15px_0px_#8282822e] p-[20px]"
              >
                <div className="w-[200px] h-[240px]">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2">
                  <h5 className="font-semibold text-[18px] text-[#393280] text-center">
                    {item.title}
                  </h5>
                  <p className="text-[14px] text-gray-600 text-center">
                    {item.author}
                  </p>
                  <p className="text-center">{item.price}</p>
                  <div className="flex justify-center items-center">
                  <button
                      onClick={() => handleRemoveFromFavourite(item._id)}
                      className="mt-2 px-3 py-1 bg-[#ED553B] text-white rounded"
                    >
                      Remove from Favourite
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Favourites;

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContent } from "../../context/AppContext";
import axios from "axios";

const NewRelease = () => {
  const [recentData, setRecentData] = useState("");
  const { backendUrl } = useContext(AppContent);

  const getRecentBook = async () => {
    let result = await axios.get(backendUrl + "api/auth/get-recent-book");
    result = result.data.data;
    setRecentData(result);
  };

  useEffect(() => {
    getRecentBook();
  }, []);

  return (
    <div className="pt-[0] pb-[92px] layout-fixer">
      <h4 className="font-[700] text-[14px] text-[#ED553B] mb-[12px]">
        New Release
      </h4>
       <div className="flex justify-between items-center mb-10">
      <h1 className="font-[700] text-[32px] text-[#393280]">Explore our New Release</h1>
            <button className="text-[#393280] font-[400] text-[16px] px-[34px] pt-[12px] pb-[14px] mt-10 border border-[#393280] rounded-[7px] w-fit hover:bg-[#393280] hover:text-white transition-all duration-300">
            View More
            </button>
      </div>
      <div className="flex flex-wrap gap-[34px]">
        {recentData &&
          recentData.map((item, index) => (
            <Link
              to={`/book-detail/${item._id}`}
              key={index}
              className="w-[calc(100%/4-(3*34px)/4)] flex flex-col justify-center items-center shadow-[1.03px_4.12px_15px_0px_#8282822e] p-[20px]  rounded-[10px] border border-transparent hover:border-[#393280] transition-all duration-300
"
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
                  <button className="mt-2 cmn-org-btn">
                    Read More
                  </button>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default NewRelease;

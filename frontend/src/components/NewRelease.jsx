import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AppContent } from "../../context/AppContext";
import axios from "axios";

const NewRelease = () => {
  const [recentData, setRecentData] = useState('')
    const {backendUrl} = useContext(AppContent);
  
  const getRecentBook =async()=>{
    let result= await axios.get(backendUrl + "api/auth/get-recent-book")
    result = result.data.data
    setRecentData(result);
  }

  
  useEffect(()=>{
    getRecentBook();
  },[])

  return (
    <div className="pt-[0] pb-[92px] px-[60px]">
      <h4 className="font-[700] text-[14px] text-[#ED553B] mb-[12px]">New Release</h4>
      <h1 className="font-[700] text-[32px] text-[#393280] mb-10">Explore our New Release</h1>
      <div className="flex flex-wrap gap-[34px]">
        {recentData && recentData.map((item, index) => (
          <Link to="/" key={index} className="w-[calc(100%/4-(3*34px)/4)] flex flex-col justify-center items-center shadow-[1.03px_4.12px_15px_0px_#8282822e] p-[20px]">
            <div className="w-[200px] h-[240px]">
              <img src={item.url} alt={item.title} className="w-full h-full object-cover"/>
            </div>
            <div className="mt-2">
              <h5 className="font-semibold text-[18px] text-[#393280] text-center">{item.title}</h5>
              <p className="text-[14px] text-gray-600 text-center">{item.author}</p>
              <p className="text-center">{item.price}</p>
              <div className="flex justify-center items-center">
                <button className="mt-2 px-3 py-1 bg-[#ED553B] text-white rounded">Add To Cart</button>
              </div>
             
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewRelease;

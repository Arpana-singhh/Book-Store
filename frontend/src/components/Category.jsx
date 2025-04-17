import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <>
    <div className="py-[92px] px-[60px]">
        <h4 className="font-[700] text-[14px] text-[#ED553B] mb-[12px]">Categories</h4>
        <h1 className="font-[700] text-[32px] text-[#393280] mb-10">Explore our Top Categories</h1>
        <div className="flex flex-wrap gap-[35px]">
            <Link to='/books' className="w-[calc(100%/3-((2*35px)/3))] h-[100%]">
                <img src={assets.Cat1} alt="" className="w-[100%]"/>
                <span className="font-[600] text-[24px] text-[#393280] text-center block mt-3">Higher Education</span>
            </Link>
            <Link to='/books' className="w-[calc(100%/3-((2*35px)/3))] h-[100%] ">
                <img src={assets.Cat2} alt="" className="w-[100%]" />
                <span className="font-[600] text-[24px] text-[#393280] text-center block mt-3">Management</span>
            </Link>
            <Link to='/books' className="w-[calc(100%/3-((2*35px)/3))] h-[100%]">
                <img src={assets.Cat3} alt="" className="w-[100%]"/>
                <span className="font-[600] text-[24px] text-[#393280] text-center block mt-3">Engineering</span>
            </Link>
            <Link to='/books' className="w-[calc(100%/3-((2*35px)/3))] h-[100%]">
                <img src={assets.Cat2} alt="" className="w-[100%]"/>
                <span className="font-[600] text-[24px] text-[#393280] text-center block mt-3">Finance</span>
            </Link>
            <Link to='/books' className="w-[calc(100%/3-((2*35px)/3))] h-[100%]">
                <img src={assets.Cat3} alt="" className="w-[100%]"/>
                <span className="font-[600] text-[24px] text-[#393280] text-center block mt-3">Travelling</span>
            </Link>
            <Link to='/books' className="w-[calc(100%/3-((2*35px)/3))] h-[100%]">
                <img src={assets.Cat1} alt="" className="w-[100%]"/>
                <span className="font-[600] text-[24px] text-[#393280] text-center block mt-3">Novel</span>
            </Link>
        </div>
        <div className="flex justify-center items-center">
            <button className="text-[#393280] font-[400] text-[16px] px-[34px] pt-[12px] pb-[14px] mt-10  border border-[#393280] rounded-[7px] w-fit hover:bg-[#393280] hover:text-white transition-all duration-300">View More</button>
        </div>
      
    </div>
    </>
  )
}

export default Category



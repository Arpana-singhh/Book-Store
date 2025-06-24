import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Category = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  }

  const categories = [
    { img: assets.Cat1, label: 'Drama' },
    { img: assets.Cat2, label: 'Heart-warming' },
    { img: assets.Cat3, label: 'Thrill' },
    { img: assets.Cat2, label: 'Romance' },
    { img: assets.Cat3, label: 'Fantasy' },
    { img: assets.Cat1, label: 'Comedy' }
  ]

  return (
    <div className="py-[92px] layout-fixer">
      <h4 className="font-[700] text-[14px] text-[#ED553B] mb-[12px]">Genre</h4>
      <h1 className="font-[700] text-[32px] text-[#393280] mb-10">Explore our Genre</h1>


      <Slider {...settings} className="category-slider cmn-slider-dot">
        {categories.map((cat, index) => (
        <div key={index} className="px-2 ">
        <Link to="/books" className="block group relative overflow-hidden rounded-[8px]">
        <span className="absolute top-0 left-0 w-full h-full z-[1] bg-[#00000094] opacity-0 group-hover:opacity-100 items-center transition-opacity duration-300"></span>
          <img src={cat.img} alt={cat.label} className="w-full block scale-1 group-hover:scale-[1.1] transition-transform duration-300" />
          <span className="absolute bottom-[-210px] z-[1] left-0 w-full h-full text-white flex justify-center  text-[24px] font-[600] opacity-100 group-hover:bottom-[-84px]  transition-all duration-300" >
            {cat.label}
          </span>
        </Link>
      </div>
      
        ))}
      </Slider>

    
    </div>
  )
}

export default Category

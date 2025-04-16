import React from "react";
import Slider from "react-slick";

import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import Category from "../components/Category";
import NewRelease from "../components/NewRelease";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <>
    {/* Hero Section */}
      <div className="w-full py-8 bg-custom-gradient overflow-hidden">
        <div>
          <Slider {...settings} className="hero-slider">
            <div className="relative h-[100%]">
              <div className="mx-[60px] min-h-[657px] flex items-center">
                <div className="flex flex-col">
                  <h1 className="mb-[9px] text-[60px] font-[600] text-[#393280]">
                    Lipsum Dolor Si
                  </h1>
                  <p className=" mb-[28px] max-w-[607px] font-[500] text-[22px] tracking-tight-4 text-[#393280CC]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    eu feugiat amet, libero ipsum enim pharetra hac. Urna
                    commodo, lacus ut magna velit eleifend. Amet, quis urna, a
                    eu.
                  </p>
                  <Link
                    to="/"
                    className="text-[#393280] font-[400] text-[16px] px-[34px] pt-[12px] pb-[14px] border border-[#393280] rounded-[7px] w-fit hover:bg-[#393280] hover:text-white transition-all duration-300"
                  >
                    <span className="mr-[10px]">READ MORE</span>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
                <div className="absolute top-0 right-0">
                  <img src={assets.heroSlider1} alt="Slide 1" />
                </div>
              </div>
            </div>
            {/* Slider 2 */}
            <div className="relative h-[100%]">
              <div className="mx-[60px] min-h-[657px] flex items-center">
                <div className="flex flex-col">
                  <h1 className="mb-[9px] text-[60px] font-[600] text-[#393280]">
                    Lipsum Dolor Si
                  </h1>
                  <p className=" mb-[28px] max-w-[607px] font-[500] text-[22px] tracking-tight-4 text-[#393280CC]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    eu feugiat amet, libero ipsum enim pharetra hac. Urna
                    commodo, lacus ut magna velit eleifend. Amet, quis urna, a
                    eu.
                  </p>
                  <Link
                    to="/"
                    className="text-[#393280] font-[400] text-[16px] px-[35px] pt-[12px] pb-[14px] px-[10px] border border-[#393280] rounded-[7px] w-fit"
                  >
                    <span className="mr-[10px]">READ MORE</span>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
                <div className="absolute top-0 right-0">
                  <img src={assets.heroSlider2} alt="Slide 1" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* Category Section */}
      <Category/>
      <NewRelease/>
    </>
  );
};

export default Home;

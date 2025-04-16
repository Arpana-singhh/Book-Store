import React from 'react'


const TopBar = () => {
  return (
    <div className="bg-[#393280] w-full px-[60px] py-[18px] text-white">
      <div className="flex justify-between items-center">
        <div>
      
          <a href="tel:+918374902234" className="flex items-center gap-[5px]">
            <i className="fa-solid fa-phone"></i>
            +91 8374902234
          </a>
        </div>

        <div className="flex items-center gap-[42px]">
        
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar

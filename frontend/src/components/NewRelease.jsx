import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const newReleases = [
  {
    id: 1,
    image: assets.Rel1,
    title: 'The Mind Connection',
    author: 'Joyce Meyer',
    rating: 4,
  },
  {
    id: 2,
    image: assets.Rel2,
    title: 'Atomic Habits',
    author: 'James Clear',
    rating: 5,
  },
  {
    id: 3,
    image: assets.Rel3,
    title: 'Think Like a Monk',
    author: 'Jay Shetty',
    rating: 3,
  },
  {
    id: 4,
    image: assets.Rel4,
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    rating: 4,
  },
];

// Function to render stars
const renderStars = (rating) => {
  const totalStars = 5;
  const filledStars = '★'.repeat(rating);
  const emptyStars = '☆'.repeat(totalStars - rating);
  return (
    <span className="text-yellow-500 text-[18px]">
      {filledStars}{emptyStars}
    </span>
  );
};

const NewRelease = () => {
  return (
    <div className="pt-[0] pb-[92px] px-[60px]">
      <h4 className="font-[700] text-[14px] text-[#ED553B] mb-[12px]">New Release</h4>
      <h1 className="font-[700] text-[32px] text-[#393280] mb-10">Explore our New Release</h1>
      <div className="flex flex-wrap gap-[34px]">
        {newReleases.map((item) => (
          <Link to="/" key={item.id} className="w-[calc(100%/4-(3*34px)/4)] flex flex-col justify-center items-center shadow-[1.03px_4.12px_15px_0px_#8282822e] p-[20px]">
            <div className="w-[142px] h-[212px]">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="mt-2">
              <h5 className="font-semibold text-[18px] text-[#393280] text-center">{item.title}</h5>
              <p className="text-[14px] text-gray-600 text-center">{item.author}</p>
              <p className="text-center">{renderStars(item.rating)}</p>
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

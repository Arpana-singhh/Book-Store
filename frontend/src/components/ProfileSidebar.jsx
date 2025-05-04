import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContent } from "../../context/AppContext";

const ProfileSidebar = () => {
  const { userData } = useContext(AppContent);

  return (
    <div className="bg-white rounded-lg p-6 shadow-md h-full flex flex-col justify-between min-h-[calc(100vh-60px-85px-24px-24px)]">
      {/* Top Section */}
      <div className="">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-4">
          <img
            src={userData?.avatar}
            alt="Profile"
            className="w-[100px] h-[100px] rounded-full object-cover border-2 border-[#393280]"
          />
          <h2 className="mt-3 text-[20px] font-[600] text-[#393280]">{userData?.username || "User Name"}</h2>
          <p className="text-[14px] text-gray-600">{userData?.email || "user@email.com"}</p>
        </div>

        {/* Dashed Line */}
        <hr className="my-5 border-dashed border-gray-300" />

        {/* Navigation Links */}
        <div className="space-y-6">
          <Link
            to="/profile"
            className="block text-[16px] text-[#393280] hover:underline"
          >
            ⭐ Favourites
          </Link>
          <Link
            to="/profile/orders"
            className="block text-[16px] text-[#393280] hover:underline"
          >
            📦 Order History
          </Link>
          <Link
            to="/profile/settings"
            className="block text-[16px] text-[#393280] hover:underline"
          >
            ⚙️ Settings
          </Link>
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-6">
        <button className="w-full text-white bg-red-500 py-2 rounded-md font-[500] hover:bg-red-600 transition-all">
          🔓 Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileSidebar;

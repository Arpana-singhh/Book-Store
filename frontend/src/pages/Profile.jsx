import React from 'react'

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">

        <div className="flex items-center space-x-6 border-b pb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Arpana Singh</h2>
            <p className="text-gray-500">arpana@example.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div className="bg-indigo-50 p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">Total Orders</h3>
            <p className="text-2xl font-bold text-indigo-900">12</p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-yellow-700 mb-2">Favourites</h3>
            <p className="text-2xl font-bold text-yellow-900">7</p>
          </div>

          <div className="bg-green-50 p-4 rounded-xl shadow-sm sm:col-span-2">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Address</h3>
            <p className="text-gray-800">123, Main Street, New Delhi, India</p>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl shadow hover:bg-indigo-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile

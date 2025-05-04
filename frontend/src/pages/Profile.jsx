import React,{useContext} from 'react'
import { AppContent } from '../../context/AppContext';
import ProfileSidebar from '../components/ProfileSidebar';
import { Outlet } from 'react-router-dom';

const Profile = () => {
    const {userData} =
      useContext(AppContent);
  return (
    <div className=" bg-gray-100 py-10 px-4 flex ">
       <div className="w-[30%] shadow">
        <ProfileSidebar/>
      </div>
      <div className="flex-1 px-4">
        <Outlet/>
      </div>
    </div>
  )
}

export default Profile

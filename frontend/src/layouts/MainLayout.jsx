import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from '../components/NavBar'
import TopBar from '../components/TopBar'

const MainLayout = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default MainLayout
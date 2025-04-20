import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from '../components/NavBar'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default MainLayout
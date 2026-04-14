import React from 'react'
import { Outlet } from 'react-router'
import HomePage from '../pages/HomePage/HomePage'
import Navber from '../components/HomePage/Navber/Navber'
import Footer from '../components/HomePage/Footer/Footer'

const RootPage = () => {
  return (
    <div className='bg-[#F8FAFC]'>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootPage

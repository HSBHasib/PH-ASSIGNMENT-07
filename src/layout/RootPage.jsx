import React from 'react'
import { Outlet } from 'react-router'
import HomePage from '../pages/HomePage/HomePage'
import Navber from '../components/HomePage/Navber/Navber'
import Footer from '../components/HomePage/Footer/Footer'

const RootPage = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootPage

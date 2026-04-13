import React from 'react'
import { Outlet } from 'react-router'
import HomePage from '../pages/HomePage/HomePage'
import Navber from '../components/HomePage/Navber/Navber'

const RootPage = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <h1>I am Footer</h1>
    </div>
  )
}

export default RootPage

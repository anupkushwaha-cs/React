import React from 'react'
import AppRoutes from '../routes/AppRoutes'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout
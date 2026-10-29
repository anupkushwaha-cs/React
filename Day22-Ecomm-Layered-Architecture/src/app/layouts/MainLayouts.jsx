import React from 'react'
import { Outlet } from 'react-router'

const MainLayouts = () => {
  return (
    <div>
    <h2>Navbar</h2>
    <div>
        <Outlet/>
    </div>
    </div>
  )
}

export default MainLayouts
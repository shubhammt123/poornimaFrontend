import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const NavParent = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default NavParent
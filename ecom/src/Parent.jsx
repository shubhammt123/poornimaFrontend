import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const Parent = () => {
  return (
    <div>
        <Navbar />
        <Outlet /></div>
  )
}

export default Parent
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // /login , /signup , / , /productdesc , /order , /cart  , /dashboard  , /adminproduct , /adminorder , /adminuser
  return (
    <div className="flex justify-between items-center p-2 py-3 bg-neutral-100">
      <div><h1 className="text-3xl font-medium ">
        Logo
      </h1></div>
      <div>
        <input type="text" placeholder="Search here..." className="outline-none border border-gray-600 px-2 py-1 rounded" />
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Navbar
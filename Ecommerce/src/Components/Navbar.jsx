import React from 'react'
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { auth } = useSelector((state)=>state.auth);
    const { cartItems } = useSelector((state)=>state.product);
  return (
    <div className="flex justify-between items-center p-2 py-3 bg-neutral-100">
      <div><h1 className="text-3xl font-medium ">
        Logo
      </h1></div>
      <div>
        <input type="text" placeholder="Search here..." className="outline-none border border-gray-600 px-2 py-1 rounded" />
      </div>
      <div>
      <p>
        My Cart : {cartItems.length}
      </p>
      {
        auth ?  <CgProfile className='text-2xl cursor-pointer' /> : 
        <div className='gap-2 flex'>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
       
      </div>
      }
      </div>
     
      
    </div>
  )
}

export default Navbar
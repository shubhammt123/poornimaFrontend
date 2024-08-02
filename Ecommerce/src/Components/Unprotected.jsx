import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'

const Unprotected = () => {
    
    const navigate = useNavigate();

    const {auth} = useSelector((state)=>state.auth);

    useEffect(()=>{
        if(auth){
            return navigate("/");
        }
    },[auth]);

    
  return (
    <div><Outlet /></div>
  )
}

export default Unprotected
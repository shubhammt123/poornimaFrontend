import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const Protected = ({allowedRole}) => {

    const navigate = useNavigate();

    const { auth , role } = useSelector((state)=>state.auth)

    useEffect(()=>{
        if(!auth){
            return navigate("/login")
        }

        if(!allowedRole.includes(role)){
            return navigate("/")
        }
    },[auth ,  role])

  return (
    <div><Outlet /></div>
  )
}

export default Protected
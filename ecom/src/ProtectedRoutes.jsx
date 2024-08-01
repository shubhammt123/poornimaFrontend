import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({allowedRole}) => {
    const [auth , setAuth ] = useState(true);
    const [role , setRole] = useState("admin");
    const navigate = useNavigate();

    useEffect(()=>{
        if(!auth){
            return navigate("/login");
        }
    },[auth]);

    useEffect(()=>{
        if(allowedRole !== role){
            return navigate("/login")
        }
    },[role]);
    

    
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default ProtectedRoutes
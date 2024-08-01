import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import ProtectedRoutes from './ProtectedRoutes'
import Profile from './Profile'
import MyOrder from './MyOrder'
import AdminDashboard from './AdminDashboard'
import AdminUser from './AdminUser'
import Parent from './Parent'

// "/login" , "/signup"
// "/profile" ,  "/myorders" -- user
//  "/admindahboard" , "/adminuser" , "/adminproduct" -- logged in user

const Router = createBrowserRouter([
    {
        element : <Parent />,
        children : [
            {
                element : <ProtectedRoutes allowedRole = "user"  />,
                children : [
                    {
                        path : "/profile",
                        element : <Profile />
                    },
                    {
                        path : "/myorders",
                        element : <MyOrder />
                    }
                ]
            },
            {
                element : <ProtectedRoutes allowedRole = "admin" />,
                children : [
                    {
                        path : "/admindashboard",
                        element : <AdminDashboard />
                    },
                    {
                        path : "/adminuser",
                        element : <AdminUser />
                    }
                ]
            },
            {
                path : "/login",
                element : <Login />
            },
            {
                path : "/signup",
                element : <Signup />
            }
        ]
    }

])

export default Router
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import ProductDesc from './Components/ProductDesc'
import Unprotected from './Components/Unprotected'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Protected from './Components/Protected'
import Order from './Components/Order'
import MyOrder from './Components/MyOrder'
import AdminDashboard from './Components/AdminDashboard'
import AdminUser from './Components/AdminUser'
import AdminProduct from './Components/AdminProduct'
import Profile from './Components/Profile'
import NavParent from './Components/NavParent'

  

const Router = createBrowserRouter([
    {
        element : <NavParent />,
        children : [
            {
                path : "/",
                element : <Home />
            },
            {
                path : "/cart",
                element  : <Cart />
            },
            {
                path : "/productdesc",
                element :   <ProductDesc />
            },
            {
                element : <Protected allowedRole = {["admin" , "user"]} />,
                children : [
                    {
                        path : "/profile",
                        element   : <Profile />
                    }
                ]
            },
            {
                element : <Protected allowedRole = {["user"]} />,
                children : [
                    {
                        path : "/order",
                        element   : <Order />
                    },
                    {
                        path : "/myorder",
                        element   : <MyOrder />
                    }
                ]
            },
            {
                element : <Protected allowedRole = {["admin"]} />,
                children : [
                    {
                        path : "/admin-dashboard",
                        element   : <AdminDashboard />
                    },
                    {
                        path : "/admin-user",
                        element   : <AdminUser />
                    },
                    {
                        path : "/admin-product",
                        element   : <AdminProduct />
                    },
                ]
            }
        ]
    },
    {
        element :  <Unprotected />,
        children : [
            {
                path : "/login",
                element :  <Login />
            },
            {
                path : "/signup",
                element : <Signup />
            }
        ]
    },
    
])

export default Router
import { useContext, useEffect, useState } from "react";
import "./App.css";
import Child1 from "./components/Child1";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Router from "./Router";
import { CountContext } from "./context/CountContext";

function App() {
  // firstName - camel case -- variable , state  , function  , objectkeys
  // FirstName - pascle case -- File name , component name
  // first_name , FIRST_NAME- snackcase  -- global variables in reactjs
  const [count , setCount] = useState(1);
  const [data , setData] = useState([]);

  // const  { count, setCount  } = useContext(CountContext);
  console.log(data);
  // const data = [
  //   {
  //     name : "Shubham jain",
  //     address : "Jaipur",
  //     section : "FSD"
  //   },
  //   {
  //     name : "Viany jain",
  //     address : "Jaipur",
  //     section : "FSD"
  //   },
  //   {
  //     name : "Harshit jain",
  //     address : "Jaipur",
  //     section : "FSD"
  //   },
  //   {
  //     name : "Ritesh jain",
  //     address : "Jaipur",
  //     section : "FSD"
  //   },
  //   {
  //     name : "Samyak jain",
  //     address : "Jaipur",
  //     section : "FSD"
  //   },
  // ]

  const fetchData = async ()=>{
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${count}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[count])

  const handleIncCount = ()=>{
        setCount(count+1);
      }

  const handleLogin = ()=>{

  }
  return (
    <div>
      {/* <Navbar /> */}
      {/* <div>
        {count}
        <div>
        <button className="bg-slate-400 p-2 active:bg-slate-500" onClick={handleIncCount}>+</button>
        </div>
      </div> */}
      <div className="grid grid-cols-3 gap-4 m-4">
      
      {/* {
        data.map((item , i)=>{ 
          return  (
            <div key={item.id}>
              <Child1  title={item.title} description={item.description} image={item.image} price={item.price}  />
            </div>
          )
        })
      } */}
      {/* <Child1  name="Manish" address="Jaipur" section="FSD" />
      <Child1  name="Vinay Jain" address="Jaipur" section="FSD" />
      <Child1  name="Harshit Mittal" address="Jaipur" section="FSD" /> */}
      
      </div>
      {/* <div className="flex justify-center items-center gap-4">
      <p>{count}</p>
      <button className="bg-slate-400 p-2 active:bg-slate-500" onClick={handleIncCount}>+</button>
      </div> */}
      
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> */}
      {/* <RouterProvider router={Router} /> */}
      <div className="bg-blue-300 p-10 text-center">
      App
      {/* <button onClick={()=>{setCount(count+1)}}>Inc Count</button> */}
      <button className="bg-green-800 text-gray-200 p-2 mx-5 rounded active:bg-green-900" onClick={handleLogin}>Login</button>
      <Child1  />
      </div>

     
    </div>
  )
}

export default App;
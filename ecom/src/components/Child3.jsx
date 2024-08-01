import React, { useContext } from 'react'
import { CountContext } from '../context/CountContext'
import { useSelector } from 'react-redux'

const Child3 = () => {
    // const { count , setCount } = useContext(CountContext);
    const { auth } = useSelector((state)=>state.auth)
    console.log(auth)
  return (
    <div className='bg-green-300 p-10'>Child3 {auth}</div>
  )
}

export default Child3
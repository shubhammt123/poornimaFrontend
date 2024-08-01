import React from 'react'
import Child2 from './Child2';

const Child1 = () => {
    // console.log(props)
    // const handleIncCount = ()=>{
    //     setCount(count+1);
    //   }
    
  return (
    <div className='bg-gray-200 p-10 text-center shadow-lg rounded'>
        {/* <img src={image} alt={title} />
        <p className='text-2xl font-medium'>{title}</p> */}
        {/* <p className='text-gray-600 text-md'>{description}</p> */}
        {/* <p className='text-gray-600 text-sm'>{price}</p> */}
        {/* <p className='text-gray-600 text-sm'>{count}</p>
        <button className="bg-slate-400 p-2 active:bg-slate-500" onClick={handleIncCount}>+</button> */}
        <p>Child 1</p>
        <Child2  />
    </div>
  )
}

export default Child1;
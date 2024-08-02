import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem, fetchProduct, setStatus } from '../redux/slices/productSlice';

const Home = () => {
    const dispatch = useDispatch();
    const { products , status } = useSelector((state)=>state.product);
    const fetchProducts = async ()=>{
        dispatch(setStatus("loading"));
        try {
            const response = await axios("https://fakestoreapi.com/products");
            console.log(response.data)
            dispatch(fetchProduct(response.data))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    const handleAddCart = (data)=>{
        dispatch(addCartItem(data));
    }

    if(status === "loading"){
        return (
            <div>
                Loading...
            </div>
        )
    }
  return (
    <div className='grid grid-cols-3 gap-4 m-4'>{
        products.map((item , i)=>{
            return (
                <div key={i} className='flex flex-col items-center shadow-lg p-2 py-4'>
                    <img src={item.image} alt="" className='w-48 h-60' />
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <button className='px-2 py-1 bg-orange-600 text-white' onClick={()=>{handleAddCart(item)}}>Add to cart</button>
                </div>
            )
        })
        }</div>
  )
}

export default Home
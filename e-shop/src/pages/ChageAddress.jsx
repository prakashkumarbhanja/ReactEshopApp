import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAddress } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const ChageAddress = () => {
    const address = useSelector((state)=>state.cart.address);
    const dispatch = useDispatch();
    const [address1, setaddress1] = useState(address)
    const navigate = useNavigate()

    const saveAddress = (e)=>{
        e.preventDefault()
        dispatch(changeAddress(address1))
        navigate('/cart')
    }

  return (
    <div>
         <h2 className='text-lg font-bold'>Change Address</h2>
        <div className='flex items-center justify-center mt-8 mb-8'>
        <h3 className='text-x font-bold mr-4'>Address</h3>
        <input value={address1} onChange={(e)=>setaddress1(e.target.value)} type='text' className='w-full rounded-l-lg p-2 rounded-lg bg-white-800 border border-gray-600'></input>
        </div>
        <div className='flex item-center'>
        <button className='bg-gray-600 text-white px-4 py-2 rounded-lg mb-4'
        onClick={saveAddress}>Save Address</button>
        </div>
    </div>
  )
}

export default ChageAddress
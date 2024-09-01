import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice';
import emptyCart from '../assets/Images/emptyCart.png';
import ChageAddress from './ChageAddress';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state)=>state.cart)
  const address = useSelector((state)=>state.cart.address)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      {cart.products.length > 0 ? 
      <div>
        <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
        <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
          <div className='md:w-2/3'>
            <div className='flex justify-between border-b items mb-4 text-xs font-bold'>
              <p>PRODUCTS</p>
              <div className='flex space-x-8'>
                <p>Price</p>
                <p>Quanitity</p>
                <p>Subtotal</p>
                <p>Remove</p>
              </div>
            </div>
            <div>
              {cart.products.map((product, index)=>(
                <div key={index} className='flex items-center justify-between p-3 border-b'>
                  <div className='md:flex items-center space-x-4'>
                    <img src={product.image} className='w-16 h-16 object-contain rounded'></img>
                    <div className='flex-1 ml-4'>
                      <h3 className='text-lg font-semibold'>{product.name}</h3>
                    </div>
                  </div>
                  <div className='flex space-x-12 items-center'>
                    <p>{product.price}</p>
                    <div className='flex items-center justify-center border'>
                      <button className='text-xl font-bold px-1.5 border-r' onClick={()=>dispatch(decreaseQuantity(product))}>-</button>
                      <p className='text-xl px-2'>{product.quantity}</p>
                      <button className='text-xl px-1 border-1' onClick={()=>dispatch(increaseQuantity(product))}>+</button>
                    </div>
                    <p>{(product.quantity * product.price).toFixed(2)}</p>
                  <button onClick={()=>dispatch(removeFromCart(product.id))} className='text-red-500 hover:text-red-700'><FaTrashAlt/></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
            <h3 className='text-sm font-semibold mb-5'>Cart Total</h3>
            <div className='flex jsutify-between mb-5 border-b pb-1'>
              <span className='text-sm mr-2'>total items</span>
              <span>{cart.totalQuantity}</span>
            </div>
            <div className='mb-4 border-b pb-2'>
              <p>Shipping</p>
              <p className='ml-2'>Shippin to:</p>
              <span className='text-xs font-bold ml-2'>{address}</span>
              <button onClick={()=>navigate('/changeAddress')} className='text-blue-500 hover:underline mt-1 ml-2'>Change Address</button>
            </div>

            <div className='flex justify-between mb-4'>
              <span>Total Price</span>
              <span>{(cart.totalPrice).toFixed(2)}</span>
            </div>
            <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800'>Proceed to checkout</button>
          </div>
        </div>
      </div>:
      <div className='flex justify-center'>
        <img src={emptyCart}></img>
        </div>}
    </div>
  )
}

export default Cart
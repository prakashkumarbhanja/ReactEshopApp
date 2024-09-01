import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

const ProductCard = ({product}) => {

    const dispatch = useDispatch()

    const handleAddToCart = (e, product)=>{
        e.stopPropagation()
        e.preventDefault()
        dispatch(addToCart(product))
    }

  return (
    <div className='bg-white pd-4 shadow rounded relative border relative
    transform transition-transform duration-300 hover:scale-105'>
        <img src={product.image} alt=''
        className='w-full h-48 object-contain mb-4'></img>
        <h3 className='text-lg font-semibold'>{product.name}</h3>
        <p className='text-gray-500'>₹ {product.price}</p>
        <div className='flex item-center mb-4'>
            <FaStar className='text-yellow-500'></FaStar>
            <FaStar className='text-yellow-500'></FaStar>
            <FaStar className='text-yellow-500'></FaStar>
            <FaStar className='text-yellow-500'></FaStar>
        </div>
        <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600
        group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition' onClick={(e)=>handleAddToCart(e, product)}>
            <span className='group-hover:hidden rounded'>+</span>
            <span className='hidden group-hover:block'>Add to card</span>
        </div>
    </div>
  )
}

export default ProductCard
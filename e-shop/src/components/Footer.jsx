import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
                <h3 className='text-xl font-semibold'>E-shop</h3>
                <p className='mt-4 '>your one-step for all your needs. Shop with use and experience the best online
                    shopping experience.
                </p>
            </div>
            <div className='flex flex-col md:items-center'>
                <h4 className='text-lg font-semibold'>Quick Links</h4>
                <ul className='mt-4 space-y-2'>
                    <li>
                        <Link className='hover:underline' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='hover:underline' to='/shop'>Shop</Link>
                    </li>
                    <li>
                        <Link className='hover:underline' to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='text-lg font-semibold'>
                <h4 className='flex space-x-4 mt-4'>Follow us</h4>
                <a href='' className='hover:text-gray-400'>Facebook</a>
                <a href='' className='hover:text-gray-400'>Twitter</a>
                <a href='' className='hover:text-gray-400'>Github</a>
            </div>
            <form className='flex items-center justify-center mt-8'>
                <input type='email' className='w-full rounded-l-lg p-2 rounded-lg bg-gray-800 border border-gray-600'></input>
                <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg'>Subscribe</button>
            </form>
        </div>
    </footer>
  )
}

export default Footer
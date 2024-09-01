import React, { useEffect } from "react";
import { categories, mockData } from "../assets/mockData";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import {setProducts} from '../redux/productSlice';
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";
import CartBanner from '../assets/Images/CartBanner.png'

const Home = () => {

    const dispatch = useDispatch()
    const products = useSelector(state=>state.product.products)
    
    useEffect(()=>{
        dispatch(setProducts(mockData))
    }, [])

  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-xol md:flex-row cpace-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">Sho by catagories</div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {categories.map((item, index) =>{
                return (
                    <li key={index} className="flex items-center text-sm font-medium">
                    <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                        {item}
                     </li>  
                )}
            )}
          </ul>
        </div>
        <div className="w-full md:9/12 mt-8 md:mt-0 h-96 relative">
          <img src={CartBanner} alt="" className="h-full w-full"></img>
          <div className="absolute top-16 left-8">
            <h2 className="text-3xl font-bold">Welcome to E-shop</h2>
            <p className="text-xl mt-2.5 font-bold text-gray-800">Million+ products</p>
            <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700
             transform transition-transform duration-300 hover:scale-105">SHOP NOW</button>
          </div>
        </div>
      </div>
      <InfoSection/>
      <CategorySection/>

      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cusrsor-pointer">
                {                    
                products.map((product, index)=>(
                    <ProductCard key={index} product={product}></ProductCard>
                ))
                }
        </div>
      </div>
      <Shop/>
    </div>
  );
};

export default Home;

import React from "react";
import menCategory from '../assets/Images/menCategory.png'
import womenCategory from '../assets/Images/womenCategory.jpg'
import kidsCategory from '../assets/Images/kidsCategory.jpg'
const CategorySection = () => {
  const categories = [
    {
      title: "Men",
      imageurl: menCategory,
    },

    {
      title: "Women",
      imageurl: womenCategory,
    },

    {
      title: "Kids",
      imageurl: kidsCategory,
    },
  ];
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
      {categories.map((item, index) => (
        <div key={index} className="relative h-64 transition transition-transform duration-300 hover:scale-105 cusrsor-pointer">
          <img src={item.imageurl} className="w-full h-full object-cover rounded-lg shadow-md"></img>
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{item.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;

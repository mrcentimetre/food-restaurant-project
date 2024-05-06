"use client";

import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const OffersItems = [
  {id: 1, title: "Main Dish", despriction: "(86 dishes)", image: "maindish.png"},
  {id: 2, title: "Breakfast", despriction: "(12 breakfast)", image: "breakfast.png"},
  {id: 3, title: "Dessert", despriction: "(48 dessert)", image: "dessert.png"},
  {id: 4, title: "Browse All", despriction: "(255 Items)", image: "allfood.png"}
]

const TodayOffers = () => {

  const [recipes, setRecipes] = useState([]);
  const slider = React.useRef(null);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 970,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]
    };

return (
  <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16'>
      <div className='text-left'>
          <p className='subtitle text-[20px] font-bold text-[#FF6868]'>Customer Favorites</p>
          <h2 className='title text-[52px] font-bold text-black'>Today Offers</h2>
      </div>

      {/* item cards */}
      {/* <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 '>
      {
              OffersItems.map((item, i) => (
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={item.image} alt="" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.despriction}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Order Now</button>
                  </div>
                </div>
              </div>
              ))
          }
      </div> */}
      <Slider ref={slider} {...settings} className="overflow-hidden mt-10 space-x-[50px]">
        {OffersItems.map((item) => (
          <div className="card relative mr-5 md:my-5 shadow-xl">
          <figure><img src={item.image} alt="" className="hover:scale-105 transition-all duration-300 md:h-72"/></figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.despriction}</p>
            <div className="card-actions justify-between items-center mt-2">
            <h5 className="font-semibold">
            <span className="text-sm text-red">Rs. </span> 100.00
          </h5>
              <button className="btn bg-[#39DB4A] text-white">Add to Cart</button>
            </div>
          </div>
        </div>
        ))}
      </Slider>
  </div>
)
}

export default TodayOffers;
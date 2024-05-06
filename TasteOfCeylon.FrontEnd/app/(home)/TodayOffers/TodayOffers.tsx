"use client";

import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const OffersItems = [
  {id: 1, title: "Hoppers", despriction: "Traditional Sri Lankan pancake made from fermented rice flour and coconut milk, served with a spicy sambal or curry.", image: "hoppers.png", price: "30/=", disprice:"25/="},
  {id: 2, title: "Kottu Roti  ", despriction: "Chopped flatbread mixed with vegetables, eggs, and/or meat, seasoned with spices and served with a side of curry.", image: "kottu roti.png", price: "500/=", disprice:"400/="},
  {id: 5, title: "Milk Rice", despriction: "Sri Lankan milk rice, cooked with coconut milk and served as a ceremonial dish for special occasions such as New Year.", image: "milkrice.png", price: "150/=", disprice:"120/="},
  {id: 6, title: "Egg Hoppers", despriction: "Hoppers topped with a cracked egg and cooked until the egg is set, creating a delicious breakfast or snack.", image: "hoppers.png", price: "100/=", disprice:"80/="},
  {id: 7, title: "Pol Roti", despriction: "Coconut roti made from grated coconut, flour, and water, cooked on a hot griddle until crispy and golden brown.", image: "polroti.png", price: "30/=", disprice:"25/="},
  {id: 8, title: "Vegetabal Roti", despriction: "Sweet roti made from flour, coconut, and treacle, cooked until crispy and caramelized.", image: "vegroti.png", price: "70/=", disprice:"60/="},
  {id: 9, title: "Pittu", despriction: "Steamed cylinders of ground rice mixed with grated coconut, served with a side of curry or coconut milk.", image: "pittu.png", price: "30/=", disprice:"20/="}
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
          <p className='subtitle text-[20px] font-bold text-[#FF6868]'>Special Dishes</p>
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
            <h2 className="card-title text-black">{item.title}</h2>
            <p className="text-black">{item.despriction}</p>
            <div className="card-actions justify-between items-center mt-2">
            <h5 className="font-semibold text-red-700">
            <span className="text-md line-through">Rs. {item.disprice} </span>
            <span className="text-md">&nbsp;&nbsp;&nbsp;Rs. {item.disprice} </span>
          </h5>

              <button className="bg-[#39DB4A] drop-shadow-md font-semibold text-white px-4 py-3 rounded-[40px] hover:translate-y-[-3px] hover:ease-in-out hover:scale-110 transition-all duration-300 hover:shadow">Add to Cart</button>
            </div>
          </div>
        </div>
        ))}
      </Slider>
  </div>
)
}

export default TodayOffers;
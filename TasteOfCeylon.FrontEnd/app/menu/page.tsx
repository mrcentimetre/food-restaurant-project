"use client"

import React, { useEffect, useState, useContext } from "react";
import { FaFilter } from "react-icons/fa";
import NavBar from "@/components/navBar";

const OffersItems = [
    {id: 1, title: "Hoppers", despriction: "Traditional Sri Lankan pancake made from fermented rice flour and coconut milk, served with a spicy sambal or curry.", image: "hoppers.png", price: "30/="},
    {id: 2, title: "Kottu Roti  ", despriction: "Chopped flatbread mixed with vegetables, eggs, and/or meat, seasoned with spices and served with a side of curry.", image: "kottu roti.png", price: "500/="},
    {id: 3, title: "Lamprais", despriction: "Rice cooked with meat (usually chicken, beef, or mutton), accompanied by side dishes such as boiled eggs, seeni sambol (sweet onion relish), and fried ash plantains, all wrapped in a banana leaf and baked.", image: "lampraise.png", price: "450/="},
    {id: 5, title: "Milk Rice", despriction: "Sri Lankan milk rice, cooked with coconut milk and served as a ceremonial dish for special occasions such as New Year.", image: "milkrice.png", price: "150/="},
    {id: 6, title: "Egg Hoppers", despriction: "Hoppers topped with a cracked egg and cooked until the egg is set, creating a delicious breakfast or snack.", image: "hoppers.png", price: "100/="},
    {id: 7, title: "Pol Roti", despriction: "Coconut roti made from grated coconut, flour, and water, cooked on a hot griddle until crispy and golden brown.", image: "polroti.png", price: "30/="},
    {id: 8, title: "Vegetabal Roti", despriction: "Sweet roti made from flour, coconut, and treacle, cooked until crispy and caramelized.", image: "vegroti.png", price: "70/="},
    {id: 9, title: "Pittu", despriction: "Steamed cylinders of ground rice mixed with grated coconut, served with a side of curry or coconut milk.", image: "pittu.png", price: "30/="}
  ]

const MenuPage = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items to display per page

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data); // Initially, display all items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1); 
  };

  const handleSortChange = (option) => {
    setSortOption(option);

    // Logic for sorting based on the selected option
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        // Do nothing for the "default" case
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

//   console.log(filteredItems);
  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="bg-white">
        <div className="relative bg-black flex place-items-center before:absolute before:h-[400px] before:w-full before:-translate-x-6 before:-translate-y-2 before:rounded-full before:blur-2xl 
before:content-[''] after:absolute after:-z-20 after:h-[120px] after:w-full after:translate-x-1/6 after:translate-y-1/2 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-[#22c55e] before:opacity-10 after:from-green-950 after:via-[#22c55e] after:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
            <NavBar />
        </div>
      {/* menu banner */}
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="py-48 flex flex-col items-center justify-center">
          {/* content */}
          <div className=" text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-black">
              For the Love of Delicious <span className="text-green">Food</span>
            </h2>
            <p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto">
              Come with family & feel the joy of mouthwatering food such as
              Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas
              Rellenas and more for a moderate cost
            </p>
            <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* menu shop  */}
      <div className="bg-white text-black section-container px-[50px]">
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          
           {/* all category buttons */}
          <div className="flex flex-row justify-center md:items-center md:gap-8 gap-4 flex-wrap t">
            <button
              onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => filterItems("salad")}
              className={selectedCategory === "salad" ? "active" : ""}
            >
              Salad
            </button>
            <button
              onClick={() => filterItems("pizza")}
              className={selectedCategory === "pizza" ? "active" : ""}
            >
              Pizza
            </button>
            <button
              onClick={() => filterItems("soup")}
              className={selectedCategory === "soup" ? "active" : ""}
            >
              Soups
            </button>
            <button
              onClick={() => filterItems("dessert")}
              className={selectedCategory === "dessert" ? "active" : ""}
            >
              Desserts
            </button>
            <button
              onClick={() => filterItems("drinks")}
              className={selectedCategory === "drinks" ? "active" : ""}
            >
              Drinks
            </button>
          </div>

            {/* filter options */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2 ">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default"> Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>

        {/* product card */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {OffersItems.map((item) => (
            <div className="card relative mr-5 md:my-5 shadow-xl">
            <figure><img src={item.image} alt="" className="hover:scale-105 transition-all duration-300 md:h-72"/></figure>
            <div className="card-body">
              <h2 className="card-title text-black">{item.title}</h2>
              <p className="text-black">{item.despriction}</p>
              <div className="card-actions justify-between items-center mt-2">
              <h5 className="font-semibold text-red-700">
              <span className="text-sm">Rs. </span> {item.price}
            </h5>
                <button className="bg-[#39DB4A] drop-shadow-md font-semibold text-white px-4 py-3 rounded-[40px] hover:translate-y-[-3px] hover:ease-in-out hover:scale-110 transition-all duration-300 hover:shadow">Add to Cart</button>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>

       {/* Pagination */}
       <div className="flex justify-center my-8 pb-[50px]">
        {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? "bg-green-500 text-white" : "bg-gray-500"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
const categoryItems = [
    {id: 1, title: "Main Dish", despriction: "(86 dishes)", image: "maindish.png"},
    {id: 2, title: "Breakfast", despriction: "(12 breakfast)", image: "breakfast.png"},
    {id: 3, title: "Dessert", despriction: "(48 dessert)", image: "dessert.png"},
    {id: 4, title: "Browse All", despriction: "(255 Items)", image: "allfood.png"}
]

const PopularCategories = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16'>
        <div className='text-center'>
            <p className='subtitle text-[20px] font-bold text-[#FF6868]'>Customer Favorites</p>
            <h2 className='title text-[52px] font-bold text-black'>Popular Catagories</h2>
        </div>

        {/* category cards */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 '>
            {
                categoryItems.map((item, i) => (
                    <div key={i} className='shadow-lg rounded-[30px] bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10'>
                        <div className='w-full mx-auto flex items-center justify-center'><img src={item.image} alt="" className='bg-[#C1F1C6] p-1 rounded-full w-28 h-28' /></div>
                        <div className='mt-5 space-y-1'>
                            <h5 className='text-black text-[19px] font-semibold'>{item.title}</h5>
                            <p className=' text-black text-sm'>{item.despriction}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default PopularCategories;
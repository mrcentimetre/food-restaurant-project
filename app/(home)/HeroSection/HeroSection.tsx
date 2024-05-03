import Image from "next/image";
import NavBar from '@/components/navBar'

const HeroSection = () => {
  return (
    <div className="relative z-0 max-w-screen-2xl container mx-auto xl:px-24">
    <NavBar />
        <Image
      src="grbg.png"
      alt="background-image"
      className="object-cover w-full z-[-1]"
    //   width={1000}
    //   height={1000}
      fill={true}
      />
      
      <div className="pb-[100px] flex flex-col md:flex-row-reverse items-center justify-between gap-8">

        {/* img */}
        <div className="md:w-1/2">
          <img src="foodplate.png" alt="" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            
          </div>
        </div>

        {/* texts */}
        <div className="md:w-1/2 px-4 space-y-10">
        <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-black">
            Dive into Delights <br /> of <span className="text-[#39DB4A]">Sri Lankan Food</span>
          </h2>
          <p className="text-[#4A4A4A] text-[20px]">
          Where each plate weaves a story<br />of Sri Lankan traditional food.
          </p>
          <button className="bg-[#39DB4A] drop-shadow-md font-semibold btn text-white px-8 py-3 rounded-[50px] hover:translate-y-[-3px] hover:ease-in-out hover:scale-110 transition-all duration-300 hover:shadow">
            Order Now
          </button>
        
          <button className="ml-[25px] bg-white drop-shadow-md font-semibold btn text-black px-8 py-3 rounded-[50px] hover:translate-y-[-3px] hover:ease-in-out hover:scale-110 transition-all duration-300 hover:shadow">
            Contact Us
          </button>
          
          </div>
          
        
      </div>
    </div>
  );
};

export default HeroSection;
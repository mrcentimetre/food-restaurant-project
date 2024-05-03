const serviceLists = [
    {id:1, title: "Best Quality", des: "Not only fast for us quality is also number one", img: "waiters.png"},
    {id:2, title: "Easy To Order", des: "You only need a few steps in ordering food", img: "orderfood.png"},
    {id:3, title: "Fastest Delivery", des: "Delivery that is always ontime even faster", img: "takeaway.png"},
]

const OurServices = () => {
  return (
    <div className="section-container my-20">
      <div className="flex flex-col md:flex-column items-center justify-between gap-12">
          <div className="text-center md:w-4/5">
            <p className="subtitle text-[20px] font-bold text-[#FF6868]">What We Serve</p>
            <h2 className="title text-[52px] font-bold text-black">Our Services</h2>
          </div>
        <div className="md:w-4/5">
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-[125px] items-center">
                {
                    serviceLists.map((service) => (
                        <div key={service.id} className="rounded-[50px] py-2 px-4 text-center space-y-2 hover:translate-y-[-3px] hover:ease-in-out hover:scale-110 transition-all duration-300">
                            <img src={service.img} alt="" className=" mx-auto"/>
                            <h5 className="pt-3 font-bold text-black text-[28px]"> {service.title}</h5>
                            <p className="text-[#333333] font-medium">{service.des}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
import { CodeBracketSquareIcon, ShieldCheckIcon, WrenchScrewdriverIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Services = () => {
  return <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
    <p className="heading">
        My <span className="text-yellow-400">Services</span>
    </p>
    <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
      <div className="bg-red-700 hover:scale-110 transform tranisition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
        <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
          Web Development
        </h1>
        <p className="text-[15px] text-[#d3d2d2] font-normal"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem expedita beatae reprehenderit deleniti fuga, voluptas aspernatur, ipsa impedit, ad ea voluptatibus illum.</p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="300" className="bg-blue-700 hover:scale-110 transform tranisition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
        <ShieldCheckIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
          Cybersecurity Specialist
        </h1>
        <p className="text-[15px] text-[#d3d2d2] font-normal"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem expedita beatae reprehenderit deleniti fuga, voluptas aspernatur, ipsa impedit, ad ea voluptatibus illum.</p>
        </div>

        <div data-aos="fade-left" data-aos-delay="500" className="bg-orange-700 hover:scale-110 transform tranisition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
        <WrenchScrewdriverIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
          Technician
        </h1>
        <p className="text-[15px] text-[#d3d2d2] font-normal"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem expedita beatae reprehenderit deleniti fuga, voluptas aspernatur, ipsa impedit, ad ea voluptatibus illum.</p>
        </div>
    </div>
  </div>
}

export default Services
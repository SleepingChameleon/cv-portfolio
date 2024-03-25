import { CodeBracketSquareIcon, WrenchScrewdriverIcon } from '@heroicons/react/16/solid'
import { VideoCameraIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Services = () => {
  return <div id="services" className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
    <p className="heading">
        My <span className="text-yellow-400">Services</span>
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
      <div className="bg-red-700 hover:scale-110 transform tranisition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
        <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
          Web Development
        </h1>
        <p className="text-[15px] text-[#d3d2d2] font-normal">I offer services in website design, development, and maintenance. 
          I specialize in creating responsive and user-friendly websites using modern technologies such as HTML, CSS, and JavaScript. 
        </p>
        </div>

        <div className="bg-blue-700 hover:scale-110 transform tranisition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
        <VideoCameraIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
          Video Editor
        </h1>
        <p className="text-[15px] text-[#d3d2d2] font-normal">I specialize in event videography, capturing the essence of 
          special occasions like weddings, birthdays, and corporate events. Additionally, I offer promotional video services, 
          helping businesses showcase their products and services effectively.
        </p>
        </div>

        <div className="bg-orange-700 hover:scale-110 transform tranisition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
        <WrenchScrewdriverIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
          Technician
        </h1>
        <p className="text-[15px] text-[#d3d2d2] font-normal">
          I provide a range of services including equipment installation, maintenance, and repair. 
          I specialize in troubleshooting technical issues and ensuring systems operate efficiently. 
        </p>
        </div>
    </div>
  </div>
}

export default Services
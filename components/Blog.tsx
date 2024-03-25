import React from 'react'
import Image from 'next/image';
import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/16/solid';

const Blog = () => {
  return (
    <div id="blog" className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
        <h1 className="heading">
            MY <span className="text-yellow-400">BLOG</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
            <div>
                <div className="w-[100%] relative h-[400px]">
                    <Image src="/images/fls.png" alt="blog" fill={true} className="object-cover"/>
                </div>
                <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                    <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                        December 10, 2019
                    </div>
                    <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                        <div className="flex items-center space-x-3">
                            <UserCircleIcon className="w-[1rem] mx-auto h-[1.5rem] text-[#55e6a5]"/>
                            <p className="text-white">By Rey Larombe</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <ChatBubbleLeftRightIcon className="w-[1rem] mx-auto h-[1.5rem] text-[#55e6a5]"/>
                            <p className="text-white">Comments(2)</p>
                        </div>
                    </div>
                    <div className="">
                        <p className="mt-[1rem] text-white text-[18px] font-semibold">FullStack Development</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-[100%] relative h-[400px]">
                    <Image src="/images/cyber.jpg" alt="blog" fill={true} className="object-cover"/>
                </div>
                <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                    <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                        October 25, 2022
                    </div>
                    <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                        <div className="flex items-center space-x-3">
                            <UserCircleIcon className="w-[1rem] mx-auto h-[1.5rem] text-[#55e6a5]"/>
                            <p className="text-white">By Harvard Online for CS</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <ChatBubbleLeftRightIcon className="w-[1rem] mx-auto h-[1.5rem] text-[#55e6a5]"/>
                            <p className="text-white">Comments(8)</p>
                        </div>
                    </div>
                    <div className="">
                        <p className="mt-[1rem] text-white text-[18px] font-semibold">CyberSecurity</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-[100%] relative h-[400px]">
                    <Image src="/images/rep.jpg" alt="blog" fill={true} className="object-cover"/>
                </div>
                <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                    <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                        December 15, 2023
                    </div>
                    <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                        <div className="flex items-center space-x-3">
                            <UserCircleIcon className="w-[1rem] mx-auto h-[1.5rem] text-[#55e6a5]"/>
                            <p className="text-white">By UITO</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <ChatBubbleLeftRightIcon className="w-[1rem] mx-auto h-[1.5rem] text-[#55e6a5]"/>
                            <p className="text-white">Comments(9)</p>
                        </div>
                    </div>
                    <div className="">
                        <p className="mt-[1rem] text-white text-[18px] font-semibold">Technicians Round</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog
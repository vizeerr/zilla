"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import rightr from "@/assets/arrowr.png"
import pifico from "@/assets/pifico.jpg"
import Link from 'next/link'

const StakeCard = ({data,setStakeOpen}) => {
    
    const totalDuration = 30 * 60; // 30 minutes in seconds
        const [timeLeft, setTimeLeft] = useState(totalDuration); // Time left in seconds
      
        useEffect(() => {
          const timer = setInterval(() => {
            setTimeLeft((prev) => Math.max(prev - 1, 0));
          }, 1000);
      
          return () => clearInterval(timer); // Cleanup interval on unmount
        }, []);
      
        const percentage = (timeLeft / totalDuration) * 100;
    
      
        const calculateTipPosition = (percentage) => {
          const angle = (percentage / 100) * 360; // Calculate angle based on percentage
          const radians = (angle - 90) * (Math.PI / 180); // Convert to radians and offset by -90deg for top start
          const radius = 45; // Radius of the circle
          const x = 50 + radius * Math.cos(radians); // X position
          const y = 50 + radius * Math.sin(radians); // Y position
          return { x, y };
        };
      
  return (
    <>
        <div className='bg-[#111111] shadow-[12px_20px_37.64px_0px_#0000004D] sm:rounded-[2vw] rounded-[2.7vw] sm:p-[1.5vw] p-[1.9vw] flex'>
        <div className='w-[100%]'>
            <div className='flex items-center sm:gap-[0.8vw] gap-[1.1vw]'>
                <div className='flex gap-[0.4vw] sm:py-[0.5vw] py-[0.9vw] sm:px-[1.3vw] px-[1.99vw] items-center bg-[#23252A] rounded-full'>
                    {
                        data.status=="ongoing" && (
                            <>
                                <span className='sm:w-[1.1vw] w-[1.9vw] sm:h-[1.1vw] h-[1.8vw] rounded-full  bg-primary'></span>
                                <p className='font-montserrat font-[900] sm:text-[1vw] text-[1.8vw] text-primary'>ONGOING</p>
                            </>
                        )
                    }
                    {
                        data.status=="ended" && (
                            <p className='font-montserrat font-[900] sm:text-[1vw] text-[1.8vw] text-[#FFFFFF59] uppercase'>Pool Ended</p>
                        )
                    }
                    {
                        data.status==null && (
                            <p className='font-montserrat font-[900] sm:text-[1vw] text-[1.8vw] text-[#FFFFFF59] uppercase'>Pool Ended</p>
                        )
                    }
                </div>
                <Link href={`/details/${data.token_address}`}>
                <div className='anim flex sm:gap-[0.6vw] gap-[1vw] items-center bg-[#23252A] rounded-full sm:px-[0.7vw] px-[1.3vw] py-[0.2vw]'>
                     <p className='font-bebasneue sm:text-[1vw] text-[1.7vw] text-white'>see more</p>
                    <div className='sm:w-[1vw] w-[1.4vw] sm:h-[0.7vw] h-[1.4vw]'>
                        <Image src={rightr} className='w-full'/>
                    </div>
                </div>
                </Link>
            </div>

            <div className='flex items-center sm:gap-[1.6vw] gap-[3vw] sm:mt-[1.6vw] mt-[4.6vw]'>
                <div className='sm:w-[11.1vw] w-[14vw] sm:h-[11.1vw] h-[14vw] overflow-hidden sm:rounded-[1.3vw] rounded-[1.7vw] sm:border-2 border-[1px] border-white '>
                    <Image src={pifico} className='w-full' alt=''/>
                </div>
                <div className='flex flex-col '>
                    <div className='flex items-center sm:gap-[0.6vw] gap-[1vw]'>
                        <div className='bg-primary rounded-full sm:w-[0.2vw] w-[0.8vw] sm:h-[2.3vw] h-[5vw]'></div>
                        <p className='font-montserrat font-[800] sm:text-[1.8vw] text-[2.9vw] text-white'>{data.name}</p>
                    </div>
                    <p className='text-primary sm:text-[1vw] text-[2vw] font-[800] font-montserrat sm:mt-[0.8vw] mt-[2vw]'>{data.symbol}</p>
                    <div className='bg-[#23252A] shadow-[9px_9px_17.4px_0px_#00000040] sm:mt-[1.6vw] mt-[2.1vw] sm:px-[1.5vw] px-[2vw] sm:pt-[0.2vw] pt-[0.7vw] sm:leading-[3.1vw] leading-[4vw] rounded-full'>
                        <p className='round sm:text-[2vw] text-[2.5vw] text-white'>Total Rewards  :  <span className='text-primary'>12,345,678</span></p>
                    </div>
                </div>
            </div>

        </div>
        <div className='w-[80%] mx-auto'>

            <div className='bg-[#23252A] sm:rounded-[1.3vw] rounded-[1.4vw] sm:p-[1.2vw] p-[1.7vw] w-full h-full flex flex-col justify-around'>
                <div className='flex justify-between items-center'>
                    {
                        data.activity == "commit" && (
                            <>
                                <p onClick={()=>setStakeOpen(true)} className='round anim bg-primary text-[#111111] sm:text-[1.8vw] text-[2.3vw] sm:px-[1.3vw] px-[1.5vw] leading-[1.8vw] pt-[0.5vw] rounded-full'>COMMIT</p>
                                <div className='bg-[#1B1C1E] rounded-full px-[1.6vw] py-[0.4vw] flex sm:gap-[0.6vw]  gap-[1vw] items-center'>
                        <div className="relative flex items-center justify-center sm:w-[1.5vw] w-[1.9vw]  sm:h-[1.5vw] h-[1.9vw]">
                            {/* Circular Progress Bar */}
                            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                {/* Background Circle */}
                                <circle
                                className="text-[#D9D9D92E]"
                                strokeWidth="9"
                                stroke="currentColor"
                                fill="transparent"
                                r="45"
                                cx="50"
                                cy="50"
                                />
                                {/* Progress Circle */}
                                <circle
                                className="text-[#A8FF2F]"
                                strokeWidth="9"
                                stroke="currentColor"
                                fill="transparent"
                                r="45"
                                cx="50"
                                cy="50"
                                strokeDasharray="282.6" // Circumference: 2 * π * 45
                                strokeDashoffset={282.6 - (percentage / 100) * 282.6} // Calculate progress
                                style={{
                                    transform: "rotate(-90deg)", // Start at the top middle
                                    transformOrigin: "50% 50%", // Rotate around the center
                                    transition: "stroke-dashoffset 0.3s ease", // Smooth transition
                                }}
                                />
                            </svg>
                        </div>

                        <p className='text-white font-[800] sm:text-[1vw] text-[1.8vw] font-montserrat'><span className='text-primary'>24</span> H : <span className='text-primary'>30</span> M</p>
                    </div>
                            </>
                        )
                    }
                    {
                        data.activity == "claimed" && (
                            <>
                                <p onClick={()=>setStakeOpen(true)} className='round anim bg-[#6666669C] text-[#FFFFFF82] text-[1.8vw] px-[1.3vw] leading-[1.8vw] pt-[0.5vw] rounded-full uppercase'>claimed</p>
                                <div className='flex gap-[0.6vw] items-center'>
                                    <div className='bg-[#1B1C1E] rounded-full px-[1vw] py-[0.6vw]'>
                                        <p className='text-primary text-[0.7vw] font-bebasneue'> 11 Dec, 2024 </p>
                                    </div>
                                    <p className='font-montserrat text-[0.7vw] text-[#FFFFFF4F] font-[800]'>To</p>
                                    <div className='bg-[#1B1C1E] rounded-full px-[1vw] py-[0.6vw]'>
                                        <p className='text-primary text-[0.7vw] font-bebasneue'> 13 Dec, 2024 </p>
                                    </div>
                                </div>
                            </>
                        )
                    }

                    {
                        data.activity == "claim" && (
                            <>
                                <p onClick={()=>setStakeOpen(true)} className='round anim bg-primary text-[#111111] text-[1.8vw] px-[1.3vw] leading-[1.8vw] pt-[0.5vw] rounded-full uppercase'>claim</p>
                                <div className='flex gap-[0.6vw] items-center'>
                                    <div className='bg-[#1B1C1E] rounded-full px-[1vw] py-[0.6vw]'>
                                        <p className='text-primary text-[0.7vw] font-bebasneue'> 11 Dec, 2024 </p>
                                    </div>
                                    <p className='font-montserrat text-[0.7vw] text-[#FFFFFF4F] font-[800]'>To</p>
                                    <div className='bg-[#1B1C1E] rounded-full px-[1vw] py-[0.6vw]'>
                                        <p className='text-primary text-[0.7vw] font-bebasneue'> 13 Dec, 2024 </p>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    {
                        data.activity == null && (
                            <>
                                <p onClick={()=>setStakeOpen(true)} className='round anim bg-primary text-[#111111] text-[1.8vw] px-[1.3vw] leading-[1.8vw] pt-[0.5vw] rounded-full uppercase'>claim</p>
                                <div className='flex gap-[0.6vw] items-center'>
                                    <div className='bg-[#1B1C1E] rounded-full px-[1vw] py-[0.6vw]'>
                                        <p className='text-primary text-[0.7vw] font-bebasneue'> 11 Dec, 2024 </p>
                                    </div>
                                    <p className='font-montserrat text-[0.7vw] text-[#FFFFFF4F] font-[800]'>To</p>
                                    <div className='bg-[#1B1C1E] rounded-full px-[1vw] py-[0.6vw]'>
                                        <p className='text-primary text-[0.7vw] font-bebasneue'> 13 Dec, 2024 </p>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    
                </div>
                
                <div className=''>
                    <ul className='space-y-3 '>.
                        <li className='flex justify-between items-center'>
                            <div className='flex items-center gap-[0.4vw]'>
                                <span className='w-[0.7vw] h-[0.7vw] rounded-full  bg-primary'></span>
                                <p className='text-white  text-[1.1vw]  font-bebasneue'>user’s committed points</p>
                            </div>
                            <p className='text-[1.1vw]  font-montserrat font-[800] text-primary'>123,456</p>
                        </li>
                        <li className='flex justify-between items-center'>
                            <div className='flex items-center gap-[0.4vw]'>
                                <span className='w-[0.7vw] h-[0.7vw] rounded-full  bg-primary'></span>
                                <p className='text-white  text-[1.1vw]  font-bebasneue'>user’s committed points</p>
                            </div>
                            <p className='text-[1.1vw]  font-montserrat font-[800] text-primary'>123,456</p>
                        </li>
                        <li className='flex justify-between items-center'>
                            <div className='flex items-center gap-[0.4vw]'>
                                <span className='w-[0.7vw] h-[0.7vw] rounded-full  bg-primary'></span>
                                <p className='text-white  text-[1.1vw]  font-bebasneue'>user’s committed points</p>
                            </div>
                            <p className='text-[1.1vw]  font-montserrat font-[800] text-primary'>123,456</p>
                        </li>
                        
                    </ul>
                </div>
            </div>

        </div>
        </div>
        
    </>
  )
}

export default StakeCard

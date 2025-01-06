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
        <div className='bg-[#111111] shadow-[12px_20px_37.64px_0px_#0000004D] rounded-[40px] p-[30px] flex'>
        <div className='w-[100%]'>
            <div className='flex items-center gap-4'>
                <div className='flex gap-2 py-[10px] px-[25px] items-center bg-[#23252A] rounded-full'>
                    {
                        data.status=="ongoing" && (
                            <>
                                <span className='w-[1.1vw] h-[1.1vw] rounded-full  bg-primary'></span>
                                <p className='font-montserrat font-[900] text-[20px] text-primary'>ONGOING</p>
                            </>
                        )
                    }
                    {
                        data.status=="ended" && (
                            <p className='font-montserrat font-[900] text-[20px] text-[#FFFFFF59] uppercase'>Pool Ended</p>
                        )
                    }
                    {
                        data.status==null && (
                            <p className='font-montserrat font-[900] text-[20px] text-[#FFFFFF59] uppercase'>Pool Ended</p>
                        )
                    }
                </div>
                <Link href={`/details/${data.token_address}`}>
                <div className='anim flex gap-3 items-center bg-[#23252A] rounded-full px-[15px] py-[4px]'>
                     <p className='font-bebasneue text-[20px] text-white'>see more</p>
                    <div className='w-[20px] h-[15px]'>
                        <Image src={rightr} className='w-full'/>
                    </div>
                </div>
                </Link>
            </div>

            <div className='flex gap-8 mt-8'>
                <div className='w-[215px] h-[215px] overflow-hidden rounded-[25px] border-2 border-white '>
                    <Image src={pifico} className='w-full' alt=''/>
                </div>
                <div className='flex flex-col '>
                    <div className='flex items-center gap-3'>
                        <div className='bg-primary rounded-full w-[5px] h-[45px]'></div>
                        <p className='font-montserrat font-[800] text-[36px] text-white'>{data.name}</p>
                    </div>
                    <p className='text-primary text-[20px] font-[800] font-montserrat mt-4'>{data.symbol}</p>
                    <div className='bg-[#23252A] shadow-[9px_9px_17.4px_0px_#00000040] mt-8 px-[30px] pt-[5px] leading-[60px] rounded-full'>
                        <p className='round text-[39px] text-white'>Total Rewards  :  <span className='text-primary'>12,345,678</span></p>
                    </div>
                </div>
            </div>

        </div>
        <div className='w-[80%] mx-auto'>

            <div className='bg-[#23252A] rounded-[25px] p-[24px] w-full h-full flex flex-col justify-around'>
                <div className='flex justify-between items-center'>
                    {
                        data.activity == "commit" && (
                            <>
                                <p onClick={()=>setStakeOpen(true)} className='round anim bg-primary text-[#111111] text-[36px] px-[25px] leading-[35px] pt-[10px] rounded-full'>COMMIT</p>
                                <div className='bg-[#1B1C1E] rounded-full px-[32px] py-[8px] flex gap-3 items-center'>
                        <div className="relative flex items-center justify-center w-[1.5vw] h-[1.5vw]">
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

                        <p className='text-white font-[800] text-[20px] font-montserrat'><span className='text-primary'>24</span> H : <span className='text-primary'>30</span> M</p>
                    </div>
                            </>
                        )
                    }
                    {
                        data.activity == "claimed" && (
                            <>
                                <p onClick={()=>setStakeOpen(true)} className='round anim bg-[#6666669C] text-[#FFFFFF82] text-[36px] px-[25px] leading-[35px] pt-[10px] rounded-full uppercase'>claimed</p>
                                <div className='flex gap-3 items-center'>
                                    <div className='bg-[#1B1C1E] rounded-full px-5 py-3'>
                                        <p className='text-primary text-[14px] font-bebasneue'> 11 Dec, 2024 </p>
                                    </div>
                                    <p className='font-montserrat text-[14px] text-[#FFFFFF4F] font-[800]'>To</p>
                                    <div className='bg-[#1B1C1E] rounded-full px-5 py-3'>
                                        <p className='text-primary text-[14px] font-bebasneue'> 13 Dec, 2024 </p>
                                    </div>
                                </div>
                            </>
                        )
                    }

{
                        data.activity == "claim" && (
                            <>
                                <p onClick={()=>setStakeOpen(true)} className='round anim bg-primary text-[#111111] text-[36px] px-[25px] leading-[35px] pt-[10px] rounded-full uppercase'>claim</p>
                                <div className='flex gap-3 items-center'>
                                    <div className='bg-[#1B1C1E] rounded-full px-5 py-3'>
                                        <p className='text-primary text-[14px] font-bebasneue'> 11 Dec, 2024 </p>
                                    </div>
                                    <p className='font-montserrat text-[14px] text-[#FFFFFF4F] font-[800]'>To</p>
                                    <div className='bg-[#1B1C1E] rounded-full px-5 py-3'>
                                        <p className='text-primary text-[14px] font-bebasneue'> 13 Dec, 2024 </p>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    
                </div>
                
                <div className=''>
                    <ul className='space-y-3 '>.
                        <li className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <span className='w-[0.7vw] h-[0.7vw] rounded-full  bg-primary'></span>
                                <p className='text-white  text-[22px]  font-bebasneue'>user’s committed points</p>
                            </div>
                            <p className='text-[22px]  font-montserrat font-[800] text-primary'>123,456</p>
                        </li>
                        <li className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <span className='w-[0.7vw] h-[0.7vw] rounded-full  bg-primary'></span>
                                <p className='text-white  text-[22px]  font-bebasneue'>user’s committed points</p>
                            </div>
                            <p className='text-[22px]  font-montserrat font-[800] text-primary'>123,456</p>
                        </li>
                        <li className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <span className='w-[0.7vw] h-[0.7vw] rounded-full  bg-primary'></span>
                                <p className='text-white  text-[22px]  font-bebasneue'>user’s committed points</p>
                            </div>
                            <p className='text-[22px]  font-montserrat font-[800] text-primary'>123,456</p>
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

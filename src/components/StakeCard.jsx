"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import stakearr from "@/assets/stakearr.png"
import pifico from "@/assets/pifico.jpg"
import Link from 'next/link'

const StakeCard = ({data,setStakeOpen}) => {
    
    const totalDuration = 30 * 60; // 30 minutes in seconds
        const [timeLeft, setTimeLeft] = useState(totalDuration); // Time left in seconds
      
        useEffect(() => {
            // Only set up the interval if `timeLeft` is not 0
            if (timeLeft === 0) return; // No need to set the interval if the time is already up
          
            const timer = setInterval(() => {
              setTimeLeft((prev) => Math.max(prev - 1, 0)); // Decrement the time
            }, 1000);
          
            // Cleanup function to clear the interval when the component is unmounted
            return () => clearInterval(timer);
          }, [timeLeft]); // This effect depends on `timeLeft` but avoids unnecessary updates when it reaches 0
          
        const percentage = (timeLeft / totalDuration) * 100;
    

      
  return (
    <>
        <div className='bg-[#111111] shadow-[12px_20px_37.64px_0px_#0000004D] 2xl:rounded-[2.2rem] lg:rounded-[1.7rem] md:rounded-[1.3rem]  rounded-[2.7vw] 2xl:p-7 lg:p-5 md:p-4 p-[2.4vw] flex flex-col md:flex-row gap-[4.6vw] md:gap-0'>
        <div className='w-[100%]'>
            <div className='flex items-center lg:gap-4 md:gap-3 gap-[1.1vw]'>
                <div className='flex lg:gap-2 md:gap-1.5 gap-[0.6vw] 2xl:py-2 md:py-1.5 py-[0.9vw] 2xl:px-6 md:px-3.5 px-[1.99vw] items-center bg-[#23252A] rounded-full'>
                    {
                        data.status=="ongoing" && (
                            <>
                                <span className='2xl:w-5 lg:w-3.5 md:w-2.5 w-[1.9vw] 2xl:h-5 lg:h-3.5 md:h-2.5 h-[1.8vw] rounded-full  bg-primary'></span>
                                <p className='font-montserrat font-[900] 2xl:text-lg lg:text-xs lg:text-[0.6rem] md:text-[0.5rem] text-[2.4vw] text-primary'>ONGOING</p>
                            </>
                        )
                    }
                    {
                        data.status=="ended" && (
                            <p className='font-montserrat font-[900] 2xl:text-lg lg:text-xs lg:text-[0.6rem] md:text-[0.5rem] text-[2.4vw] text-[#FFFFFF59] uppercase'>Pool Ended</p>
                        )
                    }
                    {
                        data.status==null && (
                            <p className='font-montserrat font-[900] 2xl:text-lg lg:text-xs lg:text-[0.6rem] md:text-[0.5rem] text-[2.4vw] text-[#FFFFFF59] uppercase'>Pool Ended</p>
                        )
                    }
                </div>
                <Link href={`/details/${data.token_address}`}>
                <div className='anim flex 2xl:gap-2.5 lg:gap-2 md:gap-1.5 gap-[1vw] items-center bg-[#23252A] rounded-full 2xl:px-4 md:px-3 md:py-0.5  px-[1.99vw] py-[0.4vw]'>
                     <p className='font-bebasneue 2xl:text-lg lg:text-xs lg:text-[0.6rem] md:text-[0.5rem] text-[2.4vw] 2xl:mt-0.5 md:mt-1 text-white'>see more</p>
                    <div className='2xl:w-4 lg:w-3 md:w-2.5 w-[2.1vw] '>
                        <Image src={stakearr} className='w-full' alt={''}/>
                    </div>
                </div>
                </Link>
            </div>

            <div className='flex items-center 2xl:gap-9 lg:gap-6 md:gap-5 gap-[3vw] md:mt-7 mt-[4.6vw]'>
                <div className='2xl:w-48 lg:w-40 md:w-32 w-[17vw] 2xl:h-48 lg:h-40 md:h-32 h-[17vw] overflow-hidden 2xl:rounded-[1.5rem] md:rounded-[1.2rem] rounded-[1.7vw] md:border-2 border-[1px] border-white '>
                    <Image src={pifico} className='w-full' alt=''/>
                </div>
                <div className='flex flex-col '>
                    <div className='flex items-center md:gap-3 gap-[1vw]'>
                        <div className='bg-primary rounded-full 2xl:w-1.5 lg:w-1 md:w-0.5 w-[0.8vw] 2xl:h-12 lg:h-8 md:h-6 h-[4.8vw]'></div>
                        <p className='font-montserrat font-[800] 2xl:text-5xl lg:text-3xl md:text-xl text-[3.6vw] text-white'>{data.name}</p>
                    </div>
                    <p className='text-primary 2xl:text-lg lg:text-xs lg:text-[0.6rem] md:text-[0.5rem] text-[2.9vw] font-[800] font-montserrat md:mt-3 mt-[2vw]'>$ {data.symbol}</p>
                    <div className='bg-[#23252A] shadow-[9px_9px_17.4px_0px_#00000040] 2xl:mt-7 lg:mt-5 md:mt-3 mt-[2.1vw] 2xl:px-7 lg:px-5 md:px-4 px-[2vw] 2xl:pt-4 lg:pt-2 md:pt-1 2xl:pb-2 lg:pb-1 mb:pb-0.5 pt-[0.7vw] md:leading-none leading-[4vw] rounded-full'>
                        <p className='round 2xl:text-4xl lg:text-2xl md:text-xl text-[2.9vw] text-white'>Total Rewards  :  <span className='text-primary'>12,345,678</span></p>
                    </div>
                </div>
            </div>

        </div>
        <div className='2xl:w-[75%] md:w-[80%] w-full mx-auto'>

            <div className='bg-[#23252A] md:rounded-[1.5rem] rounded-[2.7vw] 2xl:md-6 lg:p-5 md:p-4 p-[2.9vw] w-full h-full flex flex-col justify-around'>
                <div className='flex justify-between items-center md:flex-row flex-row-reverse gap-[1.7vw] md:gap-0 '>
                    {
                        data.activity == "commit" && (
                            <>
                                <p onClick={()=>setStakeOpen(true)} className='round anim bg-primary text-[#111111] 2xl:text-4xl lg:text-3xl md:text-xl text-[3.6vw] 2xl:px-7 lg:px-5 md:px-4 px-[2.2vw] md:leading-none lg:pt-2 md:pt-1 leading-[2.8vw] pt-[1.1vw] rounded-full'>COMMIT</p>
                                <div className='bg-[#1B1C1E] rounded-full 2xl:px-6 md:px-3 px-[2vw] 2xl:py-2 md:py-1.5 py-[0.5vw] flex md:flex-row flex-row-reverse 2xl:gap-3 md:gap-2  gap-[1vw] items-center'>
                                    
                                    {/* Circular Progress Bar */}
                                    <div className="relative flex items-center justify-center 2xl:w-7 lg:w-4 md:w-3.5 w-[2vw]  2xl:h-7 lg:h-4 md:h-3.5 h-[2vw]">
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

                                    <p className='text-white font-[800] 2xl:text-lg lg:text-sm md:text-[0.7rem] text-[2.1vw] font-montserrat'><span className='text-primary'>24</span> H : <span className='text-primary'>30</span> M</p>
                                </div>
                            </>
                        )
                    }
                    {
                        data.activity == "claimed" && (
                            <>
                                <p onClick={()=>setStakeOpen(true)} className='round anim bg-[#6666669C] text-[#FFFFFF82] 2xl:text-4xl lg:text-3xl md:text-xl text-[3.6vw] 2xl:px-7 lg:px-5 md:px-4 px-[2.2vw] md:leading-none lg:pt-2 md:pt-1 leading-[2.8vw] pt-[1.1vw] rounded-full uppercase'>claimed</p>
                                <div className='flex gap-3 items-center'>
                                <div className='bg-[#1B1C1E] rounded-full 2xl:px-5 md:px-3 px-[2vw] 2xl:py-2 md:py-1 py-[0.6vw]'>
                                        <p className='text-primary 2xl:text-sm lg:text-[0.6rem] md:text-[0.5rem] text-[1.6vw] font-bebasneue mt-0.5'> 11 Dec, 2024 </p>
                                    </div>
                                    <p className='font-montserrat 2xl:text-sm lg:text-[0.6rem] md:text-[0.5rem] text-[1.6vw] text-[#FFFFFF4F] font-[800]'>To</p>
                                    <div className='bg-[#1B1C1E] rounded-full  2xl:px-5 md:px-3 px-[2vw] 2xl:py-2 md:py-1 py-[0.6vw]'>
                                        <p className='text-primary 2xl:text-sm lg:text-[0.6rem] md:text-[0.5rem]  text-[1.6vw] font-bebasneue mt-0.5'> 11 Dec, 2024 </p>
                                    </div>
                                </div>
                            </>
                        )
                    }

                    {
                        data.activity == "claim" && (
                            <>
                                <p onClick={()=>setStakeOpen(true)} className='round anim bg-primary text-[#111111] 2xl:text-4xl lg:text-3xl md:text-xl text-[3.6vw] 2xl:px-7 lg:px-5 md:px-4 px-[2.2vw] md:leading-none lg:pt-2 md:pt-1 leading-[2.8vw] pt-[1.1vw] rounded-full uppercase'>claim</p>
                                <div className='flex gap-3 items-center'>
                                <div className='bg-[#1B1C1E] rounded-full  2xl:px-5 md:px-3 px-[2vw] 2xl:py-2 md:py-1 py-[0.6vw]'>
                                        <p className='text-primary 2xl:text-sm lg:text-[0.6rem] md:text-[0.5rem] text-[1.6vw] font-bebasneue mt-0.5'> 11 Dec, 2024 </p>
                                    </div>
                                    <p className='font-montserrat 2xl:text-sm lg:text-[0.6rem] md:text-[0.5rem] text-[1.6vw] text-[#FFFFFF4F] font-[800]'>To</p>
                                    <div className='bg-[#1B1C1E] rounded-full  2xl:px-5 md:px-3 px-[2vw] 2xl:py-2 md:py-1 py-[0.6vw]'>
                                        <p className='text-primary 2xl:text-sm lg:text-[0.6rem] md:text-[0.5rem]  text-[1.6vw] font-bebasneue mt-0.5'> 11 Dec, 2024 </p>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    {
                        data.activity == null && (
                            <>
                                <p onClick={()=>setStakeOpen(true)} className='round anim bg-primary text-[#111111] 2xl:text-4xl lg:text-3xl md:text-xl text-[3.6vw] 2xl:px-7 lg:px-5 md:px-4 px-[2.2vw] md:leading-none lg:pt-2 md:pt-1 leading-[2.8vw] pt-[1.1vw] rounded-full uppercase'>claim</p>
                                <div className='flex gap-3 items-center'>
                                <div className='bg-[#1B1C1E] rounded-full  2xl:px-5 md:px-3 px-[2vw] 2xl:py-2 md:py-1 py-[0.6vw]'>
                                        <p className='text-primary 2xl:text-sm lg:text-[0.6rem] md:text-[0.5rem] text-[1.6vw] font-bebasneue mt-0.5'> 11 Dec, 2024 </p>
                                    </div>
                                    <p className='font-montserrat 2xl:text-sm lg:text-[0.6rem] md:text-[0.5rem] text-[1.6vw] text-[#FFFFFF4F] font-[800]'>To</p>
                                    <div className='bg-[#1B1C1E] rounded-full  2xl:px-5 md:px-3 px-[2vw] 2xl:py-2 md:py-1 py-[0.6vw]'>
                                        <p className='text-primary 2xl:text-sm lg:text-[0.6rem] md:text-[0.5rem]  text-[1.6vw] font-bebasneue mt-0.5'> 11 Dec, 2024 </p>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    
                </div>
                
                <div className=''>
                    <ul className='md:space-y-3 space-y-2 md:block flex items-end gap-[1.7vw] md:gap-0 '>
                        <li className='flex justify-between md:items-center md:flex-row flex-col md:bg-transparent bg-[#111111] md:rounded-none p-[2.1vw] md:p-0 rounded-[1.9vw] md:shadow-none shadow-[7px_6px_9.5px_0px_#0000006B'>
                            <div className='flex items-center md:gap-2 gap-[0.6vw]'>
                                <span className='2xl:w-3 md:w-2.5 2xl:h-3 md:h-2.5 w-[0.9vw] h-[0.7vw] rounded-full  bg-primary hidden md:block'></span>
                                <p className='text-white  2xl:text-xl  lg:text-sm md:text-xs text-[2.5vw]  font-bebasneue'>user’s committed points</p>
                            </div>
                            <p className='2xl:text-xl  lg:text-sm md:text-xs text-[3.1vw]  font-montserrat font-[800] text-primary'>123,456</p>
                        </li>
                        <li className='flex justify-between md:items-center md:flex-row flex-col md:bg-transparent bg-[#111111] md:rounded-none p-[2.1vw] md:p-0 rounded-[1.9vw] md:shadow-none shadow-[7px_6px_9.5px_0px_#0000006B'>
                            <div className='flex items-center md:gap-2 gap-[0.6vw]'>
                                <span className='2xl:w-3 md:w-2.5 2xl:h-3 md:h-2.5 w-[0.9vw] h-[0.7vw] rounded-full  bg-primary hidden md:block'></span>
                                <p className='text-white  2xl:text-xl  lg:text-sm md:text-xs  text-[2.5vw]   font-bebasneue'>user’s committed points</p>
                            </div>
                            <p className='2xl:text-xl  lg:text-sm md:text-xs text-[3.1vw]  font-montserrat font-[800] text-primary'>123,456</p>
                        </li>
                        <li className='flex justify-between md:items-center md:flex-row flex-col md:bg-transparent bg-[#111111] md:rounded-none p-[2.1vw] md:p-0 rounded-[1.9vw] md:shadow-none shadow-[7px_6px_9.5px_0px_#0000006B'>
                            <div className='flex items-center md:gap-2 gap-[0.6vw]'>
                                <span className='2xl:w-3 md:w-2.5 2xl:h-3 md:h-2.5 w-[0.9vw] h-[0.7vw] rounded-full  bg-primary hidden md:block'></span>
                                <p className='text-white  2xl:text-xl lg:text-sm md:text-xs  text-[2.5vw]   font-bebasneue'>user’s committed points</p>
                            </div>
                            <p className='2xl:text-xl  lg:text-sm md:text-xs text-[3.1vw]  font-montserrat font-[800] text-primary'>123,456</p>
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

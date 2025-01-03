"use client"
import React, { useEffect, useState } from 'react'
import info from '@/assets/info.svg'
import Image from 'next/image'
import { motion } from 'framer-motion';
import CircularSlider from '@fseehawer/react-circular-slider';


const ReferalUse = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnter = (cardId) => setHoveredCard(cardId);
    const handleMouseLeave = () => setHoveredCard(null);

    const totalDuration = 30 * 60; // 30 minutes in seconds
        const [timeLeft, setTimeLeft] = useState(totalDuration); // Time left in seconds
      
        useEffect(() => {
          const timer = setInterval(() => {
            setTimeLeft((prev) => Math.max(prev - 1, 0));
          }, 1000);
      
          return () => clearInterval(timer); // Cleanup interval on unmount
        }, []);
      
        const percentage = (timeLeft / totalDuration) * 100;
      
        const formatTime = (seconds) => {
          const minutes = Math.floor(seconds / 60);
          const secs = seconds % 60;
          return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
        };
      
        const calculateTipPosition = (percentage) => {
          const angle = (percentage / 100) * 360; // Calculate angle based on percentage
          const radians = (angle - 90) * (Math.PI / 180); // Convert to radians and offset by -90deg for top start
          const radius = 45; // Radius of the circle
          const x = 50 + radius * Math.cos(radians); // X position
          const y = 50 + radius * Math.sin(radians); // Y position
          return { x, y };
        };
      
        const { x, y } = calculateTipPosition(percentage);
      
      
    


  return (
    <div className='bg-[#1B1C1E] 2xl:w-[985px] lg:w-[550px] w-[88vw] 2xl:rounded-[66px] rounded-[20px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F]  2xl:p-[38px] p-[13px] '>

        <div className=' flex 2xl:gap-[12px] gap-[9.5px] items-center justify-center '>
            <motion.div
                key="5"
                initial={{ rotateX: 0 }}
                animate={hoveredCard === 5 ? { rotateX: 180 } : { rotateX: 0 }}
                transition={{ duration: 0.6 }}
                 className='card 2xl:w-[345px] 2xl:h-[345px] lg:w-[250px] lg:h-[250px] w-[35vw] h-[35vw] bg-[#111111] shadow-[19.3px_19.3px_66.91px_0px_#0000004F] 2xl:rounded-[33px] rounded-[15px]'>
                <div className="card-back" onMouseLeave={() => handleMouseEnter(0)}>
                    <p className='font-montserrat font-[700] text-white 2xl:text-[22px] lg:text-[15px] text-[2vw] text-center 2xl:px-[20px] px-[10px]'>Shows when the next points-to-tokens airdrop will occur.</p>
                </div>
                <div className='card-front'>
                    <Image src={info} alt=""  className='float-end 2xl:mt-[34px] 2xl:me-[40px] mt-[10px] me-[10px] 2xl:w-[20px] 2xl:h-[20px] w-[9px] h-[9px]' onMouseEnter={() => handleMouseEnter(5)}/>
                    <div className='w-full flex justify-center items-center'>
                    <div
                    className="relative flex items-center justify-center lg:w-[15vw] lg:h-[15vw] w-[25vw] h-[25vw]"
                    
                >
                    {/* Circular Progress Bar */}
                    <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <circle
                        className="text-[#A8FF2F]"
                        strokeWidth="5"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                    />
                    <circle
                        className="text-[#262626]"
                        strokeWidth="6"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                        strokeDasharray="282.6"
                        strokeDashoffset={282.6 - (percentage / 100) * 282.6}
                        style={{
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                        transition: "stroke-dashoffset 0.3s ease",
                        }}
                    />
                    </svg>

                    {/* Centered Text */}
                    <div className="absolute text-center">
                    <p className=" font-bold lg:text-[2.5vw] text-[4vw] text-white font-montserrat">{formatTime(timeLeft)}</p>
                    </div>

                    {/* Circular Button */}
                    <div
                    className="absolute bg-[#A8FF2F] w-[2vw] h-[2vw] rounded-full shadow"
                    style={{
                        top: `${y}%`,
                        left: `${x}%`,
                        transform: "translate(-50%, -50%)",
                    }}
                    ></div>
                </div>
                   </div>
                </div>
            </motion.div>

            <div className='2xl:space-y-4 space-y-2 '>

                <motion.div
                key="1"
                initial={{ rotateX: 0 }}
                animate={hoveredCard === 1 ? { rotateX: 180 } : { rotateX: 0 }}
                transition={{ duration: 0.6 }}
                className=' bg-[#111111] card 2xl:w-[400px] lg:w-[250px] w-[42vw] 2xl:px-[20px] 2xl:py-[20px] px-[10px] py-[8.5px] 2xl:rounded-[26px] rounded-[7px] shadow-[19.3px_19.3px_66.91px_0px_#0000004F]'>
                    <div className="card-front flex justify-between items-center">
                        <div className='flex items-center 2xl:gap-4 gap-2'>
                            <p className='font-bebasneue 2xl:text-[27px] lg:text-[20px] text-[3vw] font-[400] text-primary'>referral uses</p>
                            <div className='2xl:w-[20px] w-[8px]'>

                            <Image src={info} alt=""  style={{ width: '100vw'}} onMouseEnter={() => handleMouseEnter(1)}/>
                            </div>
                        </div>
                        <p className='font-montserrat 2xl:text-[36px] lg:text-[25px] text-[3.5vw] text-white font-[800]'>123</p>
                    </div>
                    <div className="card-back" onMouseLeave={() => handleMouseEnter(1)}>
                        <p className='font-montserrat font-[800] 2xl:text-[18px]  text-[1vw] text-white'>Tracks how many times your referral link has been used.</p>
                    </div>
                    
                </motion.div>

                <motion.div
                key="2"
                initial={{ rotateX: 0 }}
                animate={hoveredCard === 2 ? { rotateX: 180 } : { rotateX: 0 }}
                transition={{ duration: 0.6 }}
                className=' bg-[#111111] card w-full 2xl:px-[20px] 2xl:py-[20px] px-[10px] py-[8.5px] 2xl:rounded-[26px] rounded-[7px] shadow-[19.3px_19.3px_66.91px_0px_#0000004F]'>
                    <div className="card-front flex justify-between items-center">
                        <div className='flex items-center 2xl:gap-4 gap-2'>
                            <p className='font-bebasneue 2xl:text-[27px] lg:text-[20px]  text-[3vw] font-[400] text-primary'>your referral points</p>
                            <div className='2xl:w-[20px] w-[8px]'>

                            <Image src={info} alt=""  style={{ width: '100vw'}} onMouseEnter={() => handleMouseEnter(2)}/>
                            </div>
                        </div>
                        <p className='font-montserrat 2xl:text-[36px] text-[3.5vw] lg:text-[25px] text-white font-[800]'>123</p>
                    </div>
                    <div className="card-back" onMouseLeave={() => handleMouseEnter(2)}>
                        <p className='font-montserrat font-[800] 2xl:text-[18px]  text-[1vw] text-white text-center'>Shows the total points you’ve earned from users using your referral links.</p>
                    </div>
                    
                </motion.div>


                <motion.div
                key="3"
                initial={{ rotateX: 0 }}
                animate={hoveredCard === 3 ? { rotateX: 180 } : { rotateX: 0 }}
                transition={{ duration: 0.6 }}
                className=' bg-[#111111] card w-full 2xl:px-[20px] 2xl:py-[20px] px-[10px] py-[8.5px] 2xl:rounded-[26px] rounded-[7px] shadow-[19.3px_19.3px_66.91px_0px_#0000004F]'>
                    <div className="card-front flex justify-between items-center">
                        <div className='flex items-center 2xl:gap-4 gap-2'>
                            <p className='font-bebasneue 2xl:text-[27px] lg:text-[20px] text-[3vw] font-[400] text-primary'>referral points</p>
                            <div className='2xl:w-[20px] w-[8px]'>

                            <Image src={info} alt=""  style={{ width: '100vw'}} onMouseEnter={() => handleMouseEnter(3)}/>
                            </div>
                        </div>
                        <p className='font-montserrat 2xl:text-[36px] text-[3.5vw] lg:text-[25px] text-white font-[800]'>123</p>
                    </div>
                    <div className="card-back" onMouseLeave={() => handleMouseEnter(3)}>
                        <p className='font-montserrat font-[800] 2xl:text-[18px]  text-[1vw] text-white text-center'>Reflects the 50% bonus points awarded to users who used a referral link to make their purchase.</p>
                    </div>
                    
                </motion.div>

                


            </div>
        </div>
        <div className='2xl:mt-[35px] mt-[29px] flex justify-center items-center 2xl:gap-[24px] gap-[9px]'>
            <div className='bg-[#111111] 2xl:w-[482px] w-[48vw] shadow-[13.13px_13.13px_45.5px_0px_#0000004F] 2xl:rounded-[23px] rounded-[9px] text-center 2xl:py-[25px] py-[10px]'>
                <p className='capitalize font-bebasneue 2xl:text-[27px] lg:text-[20px] text-[3vw] text-primary'>claimable zilla tokens  :  <span className='text-white'>1,234,567</span></p>
            </div>

            <div className='bg-primary 2xl:w-[194px] w-[16vw]  rounded-full text-center'>
                <p className='round font-[500] text-[#262626] 2xl:leading-[60px] lg:pt-2 lg:leading-[35px] leading-[20px] pt-1 2xl:pt-3 2xl:text-[50px] lg:text-[38px] text-[4.8vw]'>claim</p>
            </div>
        </div>
    </div>

  )
}

export default ReferalUse

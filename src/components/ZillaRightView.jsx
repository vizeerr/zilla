"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import eth from "@/assets/eth.png"
import info from "@/assets/info.svg"
import pizz from "@/assets/zillablack.svg"
import pizz2 from "@/assets/pizz.svg"

import arrow from "@/assets/arrow2.svg"
import CircularSlider from '@fseehawer/react-circular-slider';
import { motion } from 'framer-motion';

const ZillaRightView = () => {
    const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card
    
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
    <div className='flex md:flex-col flex-row md:gap-[2vw] gap-[13px] md:w-[29vw] w-full '>

        <div className='bg-[#1B1C1E] md:w-full w-[48vw] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[2.3vw] rounded-[16px] md:p-[1.5vw] p-[12px]'>
          <div className='bg-[#111111]   relative md:rounded-[1.3vw] rounded-[9px]  md:py-[0.7vw] py-[6px] md:px-[1.3vw] px-[8px] shadow-[12.7px_12.7px_14.6px_0px_#00000040]'>
              <p className='text-primary font-montserrat font-[800] md:text-[1.3vw] text-[2.8vw]'>Sell</p>
            <div className='flex justify-between items-center'>
              <p className='font-bebasneue md:text-[3.4vw] text-[5.6vw] '>0</p>
              <div className='bg-[#252729] md:w-[5.5vw] w-[45px] md:pe-[0.6vw] md:py-[0.3vw] py-0.5 ps-[5px] flex md:gap-[0.4vw] gap-0.5 items-center rounded-full'>
                <div className='md:w-[1.4vw] w-[10px]'>
                  
                <Image src={eth} className='w-full' alt=''/>
                </div>
                <p className='md:text-[0.8vw] text-[9px] font-[800]'>ETH</p>
              </div>
            </div>
              <p className='font-bebasneue text-[#4E4F54] md:text-[0.9vw] text-[1.8vw]'>user balance : $0</p>
            <div className='bottom-[-2vw] absolute flex justify-center md:w-[90%] w-[6.5vw]'>
              <div className='bg-primary md:w-[3vw] md:h-[3vw] w-[10px] h-[10px]  rounded-full flex justify-center items-center'>
                <Image src={arrow} alt=''/>
              </div>
            </div>
          </div>

          <div className='bg-[#111111]  md:rounded-[1.3vw] rounded-[9px] md:mt-[0.9vw] mt-[6px] md:py-[0.7vw] py-[6px] md:px-[1.3vw] px-[8px]  shadow-[12.7px_12.7px_14.6px_0px_#00000040]'>
              <p className='text-primary font-montserrat font-[800] md:text-[1.3vw] text-[2.8vw]'>Buy</p>
            <div className='flex justify-between items-center'>
              <p className='font-bebasneue md:text-[3.4vw] text-[5.6vw]'>0</p>
              <div className='bg-[#252729] md:w-[5.5vw]  w-[49px] md:ps-[0.5vw] md:pe-[0.6vw] md:py-[0.3vw] py-0.5 ps-[5px] flex md:gap-[0.4vw] gap-0.5 items-center rounded-full'>
                <div className='md:w-[1.4vw] w-[10px]'>
                  <Image className='bg-primary md:p-[0.5vw] p-[2px] rounded-full w-full' src={pizz}  alt=''/>
                </div>
                <p className='md:text-[0.8vw] text-[9px] font-[800]'>ZILLA</p>
              </div>
            </div>
            <p className='font-bebasneue text-[#4E4F54] md:text-[0.8vw] text-[1.8vw] opacity-0'>user balance : $0</p>
          </div>

          <p className='md:w-[8.3vw] w-[90px] mx-auto md:mt-[1.3vw] mt-[15px] round anim bg-primary md:leading-[2vw] leading-[25px] md:pt-[0.6vw] pt-[8px] text-[#262626] md:text-[2.7vw]  text-[30px] text-center  md:rounded-[0.7vw] rounded-[10px] shadow-[5.21px_5.21px_7.76px_0px_#00000040]'>
            SWAP
          </p>

         
        </div>

        <div className='bg-[#1B1C1E] md:w-full w-[40vw] overflow-hidden relative md:p-[1.6vw]  p-[10px] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] md:rounded-[2vw]  rounded-[16px]'>
            <p className='font-[900]  md:pb-[1.4vw] pb-[15px]  font-montserrat md:text-[1.8vw]  text-[3.2vw] text-white'><span className='text-primary'>Tax</span> Mechanism </p>
            <div className='flex flex-col md:gap-[1.3vw]  gap-[6px]'>
            {[
            {
              id: 1,
              title: "CURRENT SELL TAX RATE",
              value: "0%",
              description: "Tax starts at 0% and only activates if the price drops over 5%. The tax rate matches the drop percentage (up to 15%) and distributes collected tax to buyers during the stage.",
            },
            {
              id: 2,
              title: "BASE PRICE",
              value: "$0.0000150",
              description: "Token price before the latest drop, serving as a benchmark for recovery.",
            },
            
          ].map((card) => (
            <motion.div
              key={card.id}
              initial={{ rotateX: 0 }}
              animate={hoveredCard === card.id ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-[#111111] card w-full shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[1.5vw] rounded-[7px]'
            >
              <div className='card-front w-full md:ps-[1.8vw] ps-[9px] md:pe-[1.3vw] pe-[6px] md:py-[0.7vw] py-[6px] '>
                <div className='md:w-[0.6vw] md:h-[0.6vw] w-[5px] float-end'>
                  <Image
                    src={info}
                    alt=''
                    onMouseOver={() => handleMouseEnter(card.id)}
                    className='w-full'
                    />
                </div>
                <div className='md:block flex justify-between w-full items-center'>
                  <p className='font-bebasneue font-[400] md:text-[1vw] md:w-auto w-[50px] text-[2.1vw] text-primary'>{card.title}</p>
                  <p className='font-montserrat font-[800] md:text-[1.3vw] text-[2.8vw] text-white'>{card.value}</p>
                </div>
                
              </div>
              <div onMouseLeave={handleMouseLeave} className='card-back md:ps-[1.8vw] md:pe-[1.3vw] md:py-[0.7vw] px-[8px]'>
                <p className='font-montserrat md:leading-[0.9vw] font-[700] md:text-[0.7vw] text-[5px]'>{card.description}</p>
              </div>
            </motion.div>
          ))}

            <motion.div
              key={3}
              initial={{ rotateX: 0 }}
              animate={hoveredCard === 3 ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-[#111111] card w-full  shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[1.5vw] rounded-[7px]'
            >
              <div className='card-front  md:ps-[1.8vw] ps-[9px] md:pe-[1.3vw] pe-[6px] md:py-[0.7vw] py-[6px]'>
                <div className='md:w-[0.6vw] md:h-[0.6vw] w-[5px] float-end'>

                <Image
                  src={info}
                  alt=''
                  onMouseOver={() => handleMouseEnter(3)}
                  className='w-full'
                  />
                </div>
                <div className='flex justify-between items-center w-[95%]'>

                  <div className='md:block flex justify-between  items-center w-full'>
                    <div className='flex items-center '>
                      <p className='font-bebasneue font-[400] md:text-[1vw] md:w-auto w-[50px] text-[2.1vw] text-primary'>current Reward Pool</p>
                      <div className='md:hidden block md:w-[2.3vw] w-[16px] pt-2'>
                        <Image src={pizz2} alt='' unoptimized={true} width={45}/>
                      </div>
                    </div>
                    <p className='font-montserrat font-[800] md:text-[1.3vw] text-[2.8vw] text-white'>0</p>
                  </div>
                  <div className='md:w-[2.3vw] w-[16px] md:block hidden'>
                    <Image src={pizz2} alt='' unoptimized={true} width={45}/>
                  </div>
                </div>
                
              
              </div>
              <div onMouseLeave={handleMouseLeave} className='card-back  md:ps-[1.8vw] md:pe-[1.3vw] md:py-[0.7vw] px-[8px]'>
                <p className='font-montserrat md:leading-[0.9vw] font-[700] md:text-[0.7vw] text-[5px]'>Shows total tokens collected from the sell tax during the current stage, distributed as rewards to buyers participating in this period.</p>
              </div>
            </motion.div>
            <motion.div
              key={4}
              initial={{ rotateX: 0 }}
              animate={hoveredCard === 4 ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-[#111111] card w-full  shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[1.5vw] rounded-[7px]'
            >
              <div className='card-front w-full md:ps-[1.8vw] ps-[9px] md:pe-[1.3vw] pe-[6px] md:py-[0.7vw] py-[6px]'>
                <div className='md:w-[0.6vw] md:h-[0.6vw] w-[5px] float-end'>
                  <Image
                    src={info}
                    alt=''
                    onMouseOver={() => handleMouseEnter(4)}
                    className='w-full'
                    />
                </div>
                <div className='flex justify-center gap-[1.5vw] w-full items-center'>
                  <p className='font-bebasneue font-[400] md:text-[1vw] md:w-auto w-[50px] text-[2.1vw] text-primary'>TAX STAGE TIMER</p>
                  <div
              className="relative flex items-center justify-center md:w-[4.6vw] md:h-[4.6vw] w-[8vw] h-[8vw]"
              
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
                <p className="md:text-[0.6vw] font-bold text-[8px]">{formatTime(timeLeft)}</p>
              </div>

              {/* Circular Button */}
              <div
                className="absolute bg-[#A8FF2F] md:w-[0.6vw] md:h-[0.6vw] w-[1vw] h-[1vw] rounded-full shadow"
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                  transform: "translate(-50%, -50%)",
                }}
                ></div>
                  </div>
 
                </div>
                
              </div>
              <div onMouseLeave={handleMouseLeave} className='card-back  md:ps-[1.8vw] md:pe-[1.3vw] md:py-[0.7vw] px-[8px]'>
                <p className='font-montserrat md:leading-[0.9vw] font-[700] md:text-[0.7vw] text-[5px]'>Displays remaining time in the active tax stage, ending if the price recovers to the base or after 30 minutes, whichever comes first.</p>
              </div>
            </motion.div>
            

             


            </div>
            
        </div>
      
    </div>
  )
}

export default ZillaRightView

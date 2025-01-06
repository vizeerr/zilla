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
    <div className='flex lg:flex-col flex-row 2xl:gap-[50px] lg:gap-[20px] gap-[13px]  2xl:w-[558px] w-full lg:w-[100%] '>

        <div className='bg-[#1B1C1E] lg:w-full w-[48vw] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] 2xl:rounded-[45px] lg:rounded-[20px] rounded-[16px] 2xl:p-[30px] lg:p-[15px] p-[12px]'>
          <div className='bg-[#111111]   relative 2xl:rounded-[25px] lg:rounded-[15px] rounded-[9px]  lg:py-[15px] py-[6px] lg:px-[25px] px-[8px] shadow-[12.7px_12.7px_14.6px_0px_#00000040]'>
              <p className='text-primary font-montserrat font-[800] 2xl:text-[25px] lg:text-[20px] text-[2.8vw]'>Sell</p>
            <div className='flex justify-between items-center'>
              <p className='font-bebasneue 2xl:text-[67px] lg:text-[35px] text-[5.6vw] '>0</p>
              <div className='bg-[#252729] 2xl:w-[106px] lg:w-[75px] w-[45px] 3xl:ps-2.5 2xl:pe-3 2xl:py-1.5 py-0.5 ps-[5px] flex 2xl:gap-2 lg:gap-1 gap-0.5 items-center rounded-full'>
                <div className='2xl:w-[28px] lg:w-[20px] w-[10px]'>
                  
                <Image src={eth} width={28} alt=''/>
                </div>
                <p className='2xl:text-[16px] lg:text-[12px] text-[9px] font-[800]'>ETH</p>
              </div>
            </div>
              <p className='font-bebasneue text-[#4E4F54] 2xl:text-[18px] lg:text-[12px] text-[1.8vw]'>user balance : $0</p>
            <div className='bottom-[-40px] absolute flex justify-center lg:w-[90%] w-[6.5vw]'>
              <div className='bg-primary lg:w-[58px] lg:h-[58px] w-[10px] h-[10px]  rounded-full flex justify-center items-center'>
                <Image src={arrow} alt=''/>
              </div>
            </div>
          </div>

          <div className='bg-[#111111]  2xl:rounded-[25px] lg:rounded-[15px] rounded-[9px] lg:mt-[18px] mt-[6px] lg:py-[15px] py-[6px] lg:px-[25px] px-[8px]  shadow-[12.7px_12.7px_14.6px_0px_#00000040]'>
              <p className='text-primary font-montserrat font-[800] 2xl:text-[25px] lg:text-[20px] text-[2.8vw]'>Buy</p>
            <div className='flex justify-between items-center'>
              <p className='font-bebasneue 2xl:text-[67px] lg:text-[35px] text-[5.6vw]'>0</p>
              <div className='bg-[#252729] 2xl:w-[106px] lg:w-[75px] w-[49px] 2xl:ps-2.5 2xl:pe-3 2xl:py-1.5 py-0.5 ps-[5px] flex 2xl:gap-2 lg:gap-1 gap-0.5 items-center rounded-full'>
                <div className='2xl:w-[28px] lg:w-[20px] w-[10px]'>
                  <Image className='bg-primary lg:p-1 p-[2px] rounded-full' src={pizz} width={28} alt=''/>
                </div>
                <p className='2xl:text-[16px] lg:text-[12px] text-[9px] font-[800]'>ZILLA</p>
              </div>
            </div>
            <p className='font-bebasneue text-[#4E4F54] 2xl:text-[18px] lg:text-[12px] text-[1.8vw] opacity-0'>user balance : $0</p>
          </div>

          <p className='2xl:w-[161px] w-[90px] mx-auto 2xl:mt-[25px] mt-[15px] round anim bg-primary 2xl:leading-[40px] leading-[25px] 2xl:pt-[12px] pt-[8px] text-[#262626] 2xl:text-[52px]  text-[30px] text-center  lg:rounded-[15px] rounded-[10px] shadow-[5.21px_5.21px_7.76px_0px_#00000040]'>
            SWAP
          </p>

         
        </div>

        <div className='bg-[#1B1C1E] lg:w-full w-[40vw] overflow-hidden relative 2xl:p-[32px] lg:p-[20px] p-[10px] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] 2xl:rounded-[40px] lg:rounded-[20px] rounded-[16px]'>
            <p className='font-[900]  2xl:pb-[28px] pb-[15px]  font-montserrat 2xl:text-[35px] lg:text-[20px] text-[3.2vw] text-white'><span className='text-primary'>Tax</span> Mechanism </p>
            <div className='flex flex-col 2xl:gap-[25px] lg:gap-[10px] gap-[6px]'>
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
              className='bg-[#111111] card w-full shadow-[16.21px_16.21px_56.21px_0px_#0000004F] 2xl:rounded-[30px] lg:rounded-[15px] rounded-[7px]'
            >
              <div className='card-front w-full 2xl:ps-[35px] lg:ps-[15px] ps-[9px] 2xl:pe-[25px] lg:pe-[15px] pe-[6px] lg:py-[15px] py-[6px] '>
                <div className='lg:w-auto w-[5px] h-[6px] float-end'>
                  <Image
                    src={info}
                    alt=''
                    onMouseEnter={() => handleMouseEnter(card.id)}
                    
                    />
                </div>
                <div className='lg:block flex justify-between w-full items-center'>
                  <p className='font-bebasneue font-[400] 2xl:text-[21px] lg:text-[18px] lg:w-auto w-[50px] text-[2.1vw] text-primary'>{card.title}</p>
                  <p className='font-montserrat font-[800] 2xl:text-[25px] lg:text-[18px] text-[2.8vw] text-white'>{card.value}</p>
                </div>
                
              </div>
              <div onMouseLeave={handleMouseLeave} className='card-back 2xl:ps-[35px] 2xl:pe-[25px] 2xl:py-[15px] px-[8px]'>
                <p className='font-montserrat 2xl:leading-[18px] font-[700] 2xl:text-[15px] text-[5px]'>{card.description}</p>
              </div>
            </motion.div>
          ))}

            <motion.div
              key={3}
              initial={{ rotateX: 0 }}
              animate={hoveredCard === 3 ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-[#111111] card 2xl:w-full lg:w-[21vw]  shadow-[16.21px_16.21px_56.21px_0px_#0000004F] 2xl:rounded-[30px] lg:rounded-[15px] rounded-[7px]'
            >
              <div className='card-front  2xl:ps-[35px] lg:ps-[15px] ps-[9px] 2xl:pe-[25px] lg:pe-[15px] pe-[6px] lg:py-[15px] py-[6px]'>
                <div className='lg:w-auto w-[5px] float-end'>

                <Image
                  src={info}
                  alt=''
                  onMouseEnter={() => handleMouseEnter(3)}
                  
                  />
                </div>
                <div className='flex justify-between items-center w-[90%]'>

                  <div className='lg:block flex justify-between  items-center w-full'>
                    <div className='flex items-center '>
                      <p className='font-bebasneue font-[400] 2xl:text-[21px] lg:text-[18px] lg:w-auto w-[50px] text-[2.1vw] text-primary'>current Reward Pool</p>
                      <div className='lg:hidden block lg:w-[45px] w-[16px] pt-2'>
                        <Image src={pizz2} alt='' unoptimized={true} width={45}/>
                      </div>
                    </div>
                    <p className='font-montserrat font-[800] 2xl:text-[25px] lg:text-[18px] text-[2.8vw] text-white'>0</p>
                  </div>
                  <div className='lg:w-[45px] w-[16px] lg:block hidden'>
                    <Image src={pizz2} alt='' unoptimized={true} width={45}/>
                  </div>
                </div>
                
              
              </div>
              <div onMouseLeave={handleMouseLeave} className='card-back  2xl:ps-[35px] 2xl:pe-[25px] 2xl:py-[15px] px-[8px]'>
                <p className='font-montserrat leading-[18px] font-[700] 2xl:text-[15px] text-[5px]'>Shows total tokens collected from the sell tax during the current stage, distributed as rewards to buyers participating in this period.</p>
              </div>
            </motion.div>
            <motion.div
              key={4}
              initial={{ rotateX: 0 }}
              animate={hoveredCard === 4 ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-[#111111] card 2xl:w-full lg:w-[21vw]  shadow-[16.21px_16.21px_56.21px_0px_#0000004F] 2xl:rounded-[30px] lg:rounded-[15px] rounded-[7px]'
            >
              <div className='card-front w-full 2xl:ps-[35px] lg:ps-[15px] ps-[9px] 2xl:pe-[25px] lg:pe-[15px] pe-[6px] lg:py-[15px] py-[6px] '>
                <div className='lg:w-auto w-[5px] h-[6px] float-end'>
                  <Image
                    src={info}
                    alt=''
                    onMouseEnter={() => handleMouseEnter(4)}
                    
                    />
                </div>
                <div className='flex justify-center gap-[30px] w-full items-center'>
                  <p className='font-bebasneue font-[400] 2xl:text-[21px] lg:text-[18px] lg:w-auto w-[50px] text-[2.1vw] text-primary'>TAX STAGE TIMER</p>
                  <div
              className="relative flex items-center justify-center lg:w-[89px] lg:h-[89px] w-[8vw] h-[8vw]"
              
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
                <p className="lg:text-xs font-bold text-[8px]">{formatTime(timeLeft)}</p>
              </div>

              {/* Circular Button */}
              <div
                className="absolute bg-[#A8FF2F] lg:w-3 lg:h-3 w-[1vw] h-[1vw] rounded-full shadow"
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                  transform: "translate(-50%, -50%)",
                }}
                ></div>
                  </div>
 
                </div>
                
              </div>
              <div onMouseLeave={handleMouseLeave} className='card-back  2xl:ps-[35px] 2xl:pe-[25px] 2xl:py-[15px] px-[8px]'>
                <p className='font-montserrat leading-[18px] font-[700] 2xl:text-[15px] text-[5px]'>sssss ssssss sssssss  sss sssss ssss</p>
              </div>
            </motion.div>
            

             


            </div>
            
        </div>
      
    </div>
  )
}

export default ZillaRightView

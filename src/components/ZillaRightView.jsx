"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import eth from "@/assets/eth.png"
import info from "@/assets/info.svg"
import pizz from "@/assets/zillablack.svg"
import pizz2 from "@/assets/pizz.svg"
import setico from "@/assets/sett.svg"
import arrow from "@/assets/arrow2.svg"
import arrowdown from "@/assets/arrowdown.svg"
import CircularSlider from '@fseehawer/react-circular-slider';
import { motion } from 'framer-motion';

const ZillaRightView = () => {
    const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card

    const [swap,setSwap] = useState(false);
    const [swapCoin,setSwapCoin] = useState("ETH");

    const handleSwap = () =>{
      setSwap(!swap);
    }

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
    <div className='flex md:flex-col flex-row md:gap-[2.8vw] gap-[4.3vw] md:w-[29vw] w-full '>

        <div className='bg-[#1B1C1E] md:w-full w-[48vw] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[2.3vw] rounded-[3.8vw] md:p-[1.5vw] p-[2.7vw]'>
          <div className='w-full flex justify-end mb-6'>
            <div>
              <Image src={setico} alt=''/>
            </div>
          </div>
          <div className='bg-[#111111]   relative md:rounded-[1.3vw] rounded-[2.1vw]  md:py-[0.7vw] py-[1.4vw] md:px-[1.3vw] px-[1.9vw] shadow-[12.7px_12.7px_14.6px_0px_#00000040]'>
              <p className='text-primary font-montserrat font-[800] md:text-[1.3vw] text-[2.8vw]'>Sell</p>
              <div className='flex justify-between items-center'>
                <p className='font-bebasneue md:text-[3.4vw] text-[5.6vw] '>0</p>
                <div className='bg-[#252729] md:w-auto w-[10.9vw] md:px-[0.7vw] md:py-[0.3vw] py-[0.4vw] flex md:gap-[0.4vw] gap-[0.8vw] items-center rounded-full'>
                  <div className='md:w-[1.4vw] md:h-[1.4vw] w-[2.2vw] h-[2.2vw]'>
                    
                  <Image src={eth} className='w-full' alt=''/>
                  </div>
                  <p className='md:text-[0.8vw] text-[1.8vw] font-[800]'>{swapCoin}</p>
                  <Image src={arrowdown} alt=''/>
                </div>
              </div>
              <div className='flex justify-between items-center '>
                <p className='font-bebasneue text-[#4E4F54] md:text-[1vw] text-[1.8vw]'>$0</p>
                <div className='flex gap-2'>
                  <p className='font-bebasneue text-[#4E4F54] md:text-[1vw] text-[1.8vw]'>0 ETH</p>
                  <div className='bg-[#3F3F3F] px-2.5 rounded-full flex justify-center items-center'>
                    <p className='font-montserrat text-[#FFFFFF47] font-[800] leading-none md:text-[10px] text-[1.8vw]'>MAX</p>
                  </div>
                </div>
              </div>

            <div className='md:bottom-[-2vw] bottom-[-3vw] absolute flex justify-center w-[90%]'>
              <div onClick={handleSwap} className='bg-primary md:w-[3vw] md:h-[3vw] w-[4.8vw] h-[5vw] md:p-[0.9vw] p-[1.4vw] rounded-full flex justify-center items-center'>
                <Image src={arrow} className='w-full' alt=''/>
              </div>
            </div>
          
          </div>

          <div className='bg-[#111111]  md:rounded-[1.3vw] rounded-[2.1vw] md:mt-[0.9vw] mt-[1.4vw] md:py-[0.7vw] py-[1.4vw] md:px-[1.3vw] px-[1.9vw]  shadow-[12.7px_12.7px_14.6px_0px_#00000040]'>
              <p className='text-primary font-montserrat font-[800] md:text-[1.3vw] text-[2.8vw]'>Buy</p>
            <div className='flex justify-between items-center'>
              <p className='font-bebasneue md:text-[3.4vw] text-[5.6vw]'>0</p>
              <div className='bg-[#252729] md:w-[5.5vw]  w-[11.9vw] md:ps-[0.5vw] md:pe-[0.6vw] md:py-[0.3vw] py-[0.4vw] ps-[1.2vw] flex md:gap-[0.4vw] gap-[0.8vw] items-center rounded-full'>
                <div className='md:w-[1.4vw] md:h-[1.4vw] w-[2.2vw] h-[2.2vw]'>
                  <Image className='bg-primary md:p-[0.5vw] p-[0.4vw] rounded-full w-full' src={pizz}  alt=''/>
                </div>
                <p className='md:text-[0.8vw] text-[1.8vw] font-[800]'>ZILLA</p>
              </div>
            </div>
            <p className='font-bebasneue text-[#4E4F54] md:text-[0.8vw] text-[1.8vw] opacity-0'>user balance : $0</p>
          </div>

          <p className='md:w-[8.3vw] w-[21.8vw] mx-auto md:mt-[1.3vw] mt-[3.6vw] round anim bg-primary md:leading-[2vw] leading-[6vw] md:pt-[0.6vw] pt-[1.9vw] text-[#262626] md:text-[2.7vw]  text-[7.2vw] text-center  md:rounded-[0.7vw] rounded-[2.4vw] shadow-[5.21px_5.21px_7.76px_0px_#00000040]'>
            SWAP
          </p>

         
        </div>

        <div className='bg-[#1B1C1E] md:w-full w-[40vw] overflow-hidden relative md:p-[1.6vw]  p-[2.4vw] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] md:rounded-[2vw]  rounded-[3.8vw]'>
            <p className='font-[900]  md:pb-[1.4vw] pb-[3.6vw]  font-montserrat md:text-[1.8vw]  text-[3.2vw] text-white'><span className='text-primary'>Tax</span> Mechanism </p>
            <div className='flex flex-col md:gap-[1.3vw]  gap-[1.4vw]'>
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
              className='bg-[#111111] card w-full shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[1vw] rounded-[1.6vw]'
            >
              <div className='card-front w-full md:ps-[1.8vw] ps-[2.3vw] md:pe-[1.3vw] pe-[1.4vw] md:py-[0.7vw] py-[1vw] '>
                  <div className='md:w-[0.6vw] md:h-[0.6vw] w-[1vw] h-[1vw] float-end' onMouseOver={() => handleMouseEnter(card.id)}>

                  <Image
                    src={info}
                    alt=''
                    className='w-full'
                    />
                  </div>
                <div className='md:block flex justify-between w-full items-center md:pe-0 pe-[1vw]'>
                  <p className='font-bebasneue font-[400] md:text-[1vw] md:w-auto w-[12.1vw] text-[2.6vw] text-primary leading-tight'>{card.title}</p>
                  <p className='font-montserrat font-[800] md:text-[1.3vw] text-[2.8vw] text-white'>{card.value}</p>
                </div>
                
              </div>
              <div onMouseLeave={handleMouseLeave} className='card-back md:ps-[1.8vw] md:pe-[1.3vw] md:py-[0.7vw] px-[1.9vw]'>
                <p className='font-montserrat md:leading-[0.9vw] font-[700] md:text-[0.7vw] text-[1.2vw]'>{card.description}</p>
              </div>
            </motion.div>
          ))}

            <motion.div
              key={3}
              initial={{ rotateX: 0 }}
              animate={hoveredCard === 3 ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-[#111111] card w-full shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[1vw] rounded-[1.6vw]'
            >
              <div className='card-front  md:ps-[1.8vw] ps-[2.3vw] md:pe-[1.3vw] pe-[1.4vw] md:py-[0.7vw] py-[1vw]'>
                <div className='md:w-[0.6vw] md:h-[0.6vw] w-[1vw] h-[1vw] float-end'>

                <Image
                  src={info}
                  alt=''
                  onMouseOver={() => handleMouseEnter(3)}
                  className='w-full'
                  />
                </div>
                <div className='flex justify-between items-center md:w-[95%] w-full'>

                  <div className='md:block flex justify-between  items-center w-full md:pe-0 pe-[1vw]'>
                    <div className='flex items-center '>
                      <p className='font-bebasneue font-[400] md:text-[1vw] md:w-auto w-[12.1vw] text-[2.6vw] text-primary leading-tight'>current Reward Pool</p>
                      <div className='md:hidden block w-[3.4vw] pt-[1.9vw]'>
                        <Image src={pizz2} alt='' unoptimized={true} className='w-full'/>
                      </div>
                    </div>
                    <p className='font-montserrat font-[800] md:text-[1.3vw] text-[2.8vw] text-white'>0</p>
                  </div>
                  <div className='md:w-[2.3vw] w-[16px] md:block hidden'>
                    <Image src={pizz2} alt='' unoptimized={true} className='w-full'/>
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
              className='bg-[#111111] card w-full  shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[1vw] rounded-[1.6vw]'
            >
              <div className='card-front w-full md:ps-[1.8vw] ps-[2.3vw] md:pe-[1.3vw] pe-[1.4vw] md:py-[0.4vw] py-[1vw]'>
                <div className='md:w-[0.6vw] md:h-[0.6vw] w-[1vw] h-[1vw] float-end'>
                  <Image
                    src={info}
                    alt=''
                    onMouseOver={() => handleMouseEnter(4)}
                    className='w-full'
                    />
                </div>
                <div className='flex justify-center gap-[5vw] w-full items-center'>
                  <p className='font-bebasneue font-[400] md:text-[1vw] md:w-auto w-[14.5vw] text-[2.6vw] text-primary'>TAX STAGE TIMER</p>
                  {/* <div
              className="relative flex items-center justify-center md:w-[4.6vw] md:h-[4.6vw] w-[9vw] h-[9vw]"
 
            >
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

              
              <div className="absolute text-center">
                <p className="md:text-[0.6vw] font-[600] text-[1.6vw]">{formatTime(timeLeft)}</p>
              </div>

            
              <div
                className="absolute bg-[#A8FF2F] md:w-[0.6vw] md:h-[0.6vw] w-[1vw] h-[1vw] rounded-full shadow"
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                  transform: "translate(-50%, -50%)",
                }}
                ></div>
                  </div> */}
                  <div className='w-[10vw] rounded-[0.9vw] py-[1vw] px-[0.8vw] bg-[#252729] flex flex-col justify-center items-center shadow-[8.59px_8.59px_29.78px_0px_#0000004F]'>
                    <div className='flex items-center gap-[20px]'>
                      <div>
                        <p className='font-bebasneue text-primary text-[18px]'>MIN</p>
                        <p className='font-montserrat font-[800] text-white text-[28px]'>15</p>
                      </div>
                      <p className='font-montserrat text-white font-[500] mt-[20px] text-[28px]'>:</p>
                      <div>
                        <p className='font-bebasneue text-primary text-[18px]'>SEC</p>
                        <p className='font-montserrat text-white font-[800] text-[28px]'>15</p>
                      </div>
                    </div>
                    <div className='w-full h-[6px] bg-[#FFFFFF24] rounded-full mt-4'>
                      <div className='w-[90%] h-full bg-primary rounded-full'>

                      </div>
                    </div>
                  </div>
                
                </div>
                
              </div>
              <div onMouseLeave={handleMouseLeave} className='card-back  md:ps-[1.8vw] md:pe-[1.3vw] md:py-[0.7vw] px-[1.9vw]'>
                <p className='font-montserrat md:leading-[0.9vw] font-[700] md:text-[0.7vw] text-[1.2vw]'>Displays remaining time in the active tax stage, ending if the price recovers to the base or after 30 minutes, whichever comes first.</p>
              </div>
            </motion.div>
            

             


            </div>
            
        </div>

        <div className='bg-[#1B1C1E] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[2.3vw] overflow-hidden'>
          <div className='w-[1vw] h-[1vw] float-end mt-[30px] me-[20px]'>
            <Image src={info} alt='' className='w-full'/>
          </div>
          <p className='text-[34px] text-white font-montserrat text-center mt-12 font-[800]'><span className='text-primary'>Accumulated</span> Rewards</p>
          <p className='text-white text-center text-[55px] mt-5 font-montserrat font-[800]'>12,345,678 <span className='text-primary text-[45px]'>Zilla</span></p>
          <motion.div 
              key={8}
              initial={{ rotateX: 0 }}
              animate={hoveredCard === 8 ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-[#2F3135] text-center pt-5 pb-2 mt-8 card'>
            <div className='card-front w-full h-full' onMouseOver={() => handleMouseEnter(8)}>
              <p className='text-[#FFFFFF4A] round leading-none text-[78px]'>CLAIM REWARDS</p>
            </div>
            <div className='card-back w-full text-center h-full' onMouseLeave={handleMouseLeave}>
              <p className='font-montserrat  font-[800]  w-full text-[55px] text-white'>24 <span className='text-primary font-bebasneue text-[33px]'>HRS</span>       :  60 <span className='text-primary font-bebasneue text-[33px]'>MINS</span></p>
            </div>
          </motion.div>
        </div>
      
    </div>
  )
}

export default ZillaRightView

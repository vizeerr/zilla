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
    const [mcard, setMcard] = useState(null); // Track hovered card


    const handleMouseEnter = (cardId) => setHoveredCard(cardId);
    const handleMouseLeave = () => setHoveredCard(null);
  
   
    const [degree, setDegree] = useState(0);
    const [timeElapsed, setTimeElapsed] = useState(0); // Time in seconds
    const totalDuration = 30 * 60; // 30 minutes in seconds
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeElapsed((prev) => {
          if (prev < totalDuration) {
            const newElapsed = prev + 1;
            setDegree((newElapsed / totalDuration) * 360); 
            return newElapsed;
          }
          clearInterval(interval); 
          return prev;
        });
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };
    

  return (
    <div className='flex sm:flex-col flex-row sm:gap-[50px] gap-[13px]  sm:w-[558px] w-full '>

        <div className='bg-[#1B1C1E] sm:w-full w-[48vw] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] sm:rounded-[45px] rounded-[16px] sm:p-[30px] p-[12px]'>
          <div className='bg-[#111111]   relative sm:rounded-[25px] rounded-[9px]  sm:py-[15px] py-[6px] sm:px-[25px] px-[8px] shadow-[12.7px_12.7px_14.6px_0px_#00000040]'>
              <p className='text-primary font-montserrat font-[800] sm:text-[25px] text-[2.8vw]'>Sell</p>
            <div className='flex justify-between items-center'>
              <p className='font-bebasneue sm:text-[67px] text-[5.6vw]'>0</p>
              <div className='bg-[#252729] sm:w-[106px] w-[45px] sm:ps-2.5 sm:pe-3 sm:py-1.5 py-0.5 ps-[5px] flex sm:gap-2 gap-0.5 items-center rounded-full'>
                <div className='sm:w-[28px] w-[10px]'>
                  
                <Image src={eth} width={28} alt=''/>
                </div>
                <p className='sm:text-[16px] text-[9px] font-[800]'>ETH</p>
              </div>
            </div>
              <p className='font-bebasneue text-[#4E4F54] sm:text-[18px] text-[1.8vw]'>user balance : $0</p>
            <div className='bottom-[-40px] absolute flex justify-center sm:w-[90%] w-[6.5vw]'>
              <div className='bg-primary sm:w-[58px] sm:h-[58px] w-[10px] h-[10px]  rounded-full flex justify-center items-center'>
                <Image src={arrow} alt=''/>
              </div>
            </div>
          </div>

          <div className='bg-[#111111] sm:rounded-[25px] rounded-[9px] sm:mt-[18px] mt-[6px] sm:py-[15px] py-[6px] sm:px-[25px] px-[8px]  shadow-[12.7px_12.7px_14.6px_0px_#00000040]'>
              <p className='text-primary font-montserrat font-[800] sm:text-[25px] text-[2.8vw]'>Buy</p>
            <div className='flex justify-between items-center'>
              <p className='font-bebasneue sm:text-[67px] text-[5.6vw]'>0</p>
              <div className='bg-[#252729] sm:w-[106px] w-[49px] sm:ps-2.5 sm:pe-3 sm:py-1.5 py-0.5 ps-[5px] flex sm:gap-2 gap-0.5 items-center rounded-full'>
                <div className='sm:w-[28px] w-[10px]'>
                  <Image className='bg-primary sm:p-1 p-[2px] rounded-full' src={pizz} width={28} alt=''/>
                </div>
                <p className='sm:text-[16px] text-[9px] font-[800]'>ZILLA</p>
              </div>
            </div>
            <p className='font-bebasneue text-[#4E4F54] sm:text-[18px] text-[1.8vw] opacity-0'>user balance : $0</p>
          </div>

          <p className='sm:w-[161px] w-[24vw] mx-auto sm:mt-[25px] mt-[15px] round anim bg-primary sm:leading-[40px] leading-[30px] sm:pt-[12px] pt-[8px] text-[#262626] sm:text-[52px]  text-[8vw] text-center  sm:rounded-[15px] rounded-[10px] shadow-[5.21px_5.21px_7.76px_0px_#00000040]'>
            SWAP
          </p>

         
        </div>

        <div className='bg-[#1B1C1E] sm:w-full w-[40vw] overflow-hidden relative sm:p-[32px] p-[10px] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] sm:rounded-[40px] rounded-[16px]'>
            <p className='font-[900]  sm:pb-[28px] pb-[15px]  font-montserrat sm:text-[35px] text-[3.2vw] text-white'><span className='text-primary'>Tax</span> Mechanism </p>
            <div className='flex flex-col sm:gap-[25px] gap-[6px]'>
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
              className='bg-[#111111] card w-full shadow-[16.21px_16.21px_56.21px_0px_#0000004F] sm:rounded-[30px] rounded-[7px]'
            >
              <div className='card-front w-full sm:ps-[35px] ps-[9px] sm:pe-[25px] pe-[6px] sm:py-[15px] py-[6px] '>
                <div className='sm:w-auto w-[5px] h-[6px] float-end'>
                  <Image
                    src={info}
                    alt=''
                    onMouseEnter={() => handleMouseEnter(card.id)}
                    
                    />
                </div>
                <div className='sm:block flex justify-between w-full items-center'>
                  <p className='font-bebasneue font-[400] sm:text-[21px] sm:w-auto w-[50px] text-[2.5vw] text-primary'>{card.title}</p>
                  <p className='font-montserrat font-[800] sm:text-[25px] text-[2.8vw] text-white'>{card.value}</p>
                </div>
                
              </div>
              <div onMouseLeave={handleMouseLeave} className='card-back ps-[35px] pe-[25px] py-[15px]'>
                <p className='font-montserrat leading-[18px] font-[700] text-[15px]'>{card.description}</p>
              </div>
            </motion.div>
          ))}

            <motion.div
              key={3}
              initial={{ rotateX: 0 }}
              animate={hoveredCard === 3 ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-[#111111] card  shadow-[16.21px_16.21px_56.21px_0px_#0000004F] sm:rounded-[30px] rounded-[7px]'
            >
              <div className='card-front  sm:ps-[35px] ps-[9px] sm:pe-[25px] pe-[6px] sm:py-[15px] py-[6px]'>
                <div className='sm:w-auto w-[5px] float-end'>

                <Image
                  src={info}
                  alt=''
                  onMouseEnter={() => handleMouseEnter(card.id)}
                  
                  />
                </div>
                <div className='flex justify-between items-center w-[90%]'>

                  <div className='sm:block flex justify-between  items-center w-full'>
                    <div className='flex items-center'>
                      <p className='font-bebasneue font-[400] sm:text-[21px] sm:w-auto w-[50px] text-[2.5vw] text-primary'>current Reward Pool</p>
                      <div className='sm:w-[45px] w-[16px] pt-2'>
                        <Image src={pizz2} alt='' unoptimized={true} width={45}/>
                      </div>
                    </div>
                    <p className='font-montserrat font-[800] sm:text-[25px] text-[2.8vw] text-white'>0</p>
                  </div>
                  <div className='sm:w-[45px] w-[16px] sm:block hidden'>
                    <Image src={pizz2} alt='' unoptimized={true} width={45}/>
                  </div>
                </div>
                
              
              </div>
              <div onMouseLeave={handleMouseLeave} className='card-back ps-[35px] pe-[25px] py-[15px]'>
                <p className='font-montserrat leading-[18px] font-[700] text-[15px]'>Shows total tokens collected from the sell tax during the current stage, distributed as rewards to buyers participating in this period.</p>
              </div>
            </motion.div>
   


             


            </div>
            
        </div>
      
    </div>
  )
}

export default ZillaRightView

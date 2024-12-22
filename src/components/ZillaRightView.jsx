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
    <div className='flex flex-col gap-[50px]  w-full'>

        <div className='bg-[#1B1C1E] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] rounded-[45px] p-[30px]'>
          <div className='bg-[#111111]  relative rounded-[25px]  py-[15px] px-[25px] shadow-[12.7px_12.7px_14.6px_0px_#00000040]'>
              <p className='text-primary font-montserrat font-[800] text-[25px]'>Sell</p>
            <div className='flex justify-between items-center'>
              <p className='font-bebasneue text-[67px]'>0</p>
              <div className='bg-[#252729] w-[106px] ps-2.5 pe-3 py-1.5 flex gap-2 items-center rounded-full'>
                <Image src={eth} width={28} alt=''/>
                <p className='text-[16px] font-[800]'>ETH</p>
              </div>
            </div>
              <p className='font-bebasneue text-[#4E4F54] text-[18px]'>user balance : $0</p>
            <div className='bottom-[-40px] absolute flex justify-center w-[90%]'>
              <div className='bg-primary w-[58px] h-[58px]  rounded-full flex justify-center items-center'>
                <Image src={arrow} alt=''/>
              </div>
            </div>
          </div>

          <div className='bg-[#111111] rounded-[25px] mt-[18px]  py-[15px] px-[25px] shadow-[12.7px_12.7px_14.6px_0px_#00000040]'>
              <p className='text-primary font-montserrat font-[800] text-[25px]'>Buy</p>
            <div className='flex justify-between items-center'>
              <p className='font-bebasneue text-[67px]'>0</p>
              <div className='bg-[#252729] ps-2.5 pe-3 w-[106px] py-1.5 flex gap-2 items-center rounded-full'>
                <Image className='bg-primary p-1 rounded-full' src={pizz} width={28} alt=''/>
                <p className='text-[16px] font-[800]'>ZILLA</p>
              </div>
            </div>
              <p className='font-bebasneue text-[#4E4F54] text-[18px] opacity-0'>user balance : $0</p>
          </div>

          <p className='w-[161px] mx-auto mt-[25px] round anim bg-primary leading-[40px] pt-[12px] text-[#262626] text-[52px] text-center  rounded-[15px] shadow-[5.21px_5.21px_7.76px_0px_#00000040]'>
            SWAP
          </p>

         
        </div>

        <div className='bg-[#1B1C1E]  overflow-x-hidden relative p-[32px] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[40px]'>
            <p className='font-[900]  pb-[28px]   font-montserrat text-[35px] text-white'><span className='text-primary'>Tax</span> Mechanism </p>
            <div className='flex flex-col gap-[25px]'>
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
              className='bg-[#111111] card w-[490px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] rounded-[30px]'
            >
              <div className='card-front flex justify-between items-start ps-[35px] pe-[25px] py-[15px]'>
                <div>
                  <p className='font-bebasneue font-[400] text-[21px] text-primary'>{card.title}</p>
                  <p className='font-montserrat font-[800] text-[25px] text-white'>{card.value}</p>
                </div>
                <Image
                  src={info}
                  alt=''
                  onMouseEnter={() => handleMouseEnter(card.id)}
                  
                />
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
              className='bg-[#111111] card w-[490px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] rounded-[30px]'
            >
              <div className='card-front flex justify-between items-start ps-[35px] pe-[25px] py-[15px]'>
                <div className='flex justify-between items-center w-[90%]'>

                  <div>
                    <p className='font-bebasneue font-[400] text-[21px] text-primary'>current Reward Pool</p>
                    <p className='font-montserrat font-[800] text-[25px] text-white'>0</p>
                  </div>
                  <Image src={pizz2} alt='' unoptimized={true} width={45}/>
                </div>
                <Image
                  src={info}
                  alt=''
                  onMouseEnter={() => handleMouseEnter(3)}
                  
                />
              </div>
              <div onMouseLeave={handleMouseLeave} className='card-back ps-[35px] pe-[25px] py-[15px]'>
                <p className='font-montserrat leading-[18px] font-[700] text-[15px]'>Shows total tokens collected from the sell tax during the current stage, distributed as rewards to buyers participating in this period.</p>
              </div>
            </motion.div>
   


                <motion.div
                key="5"
                initial={{ rotateX: 0 }}
                animate={{rotateX: mcard?  180  :  0 }}
                transition={{ duration: 0.6 }}
                 className='bg-[#111111] card  w-[490px]  shadow-[16.21px_16.21px_56.21px_0px_#0000004F]  rounded-[30px]'>
                    <div className='ps-[35px] pe-[25px] py-[15px] card-front'>
                       <Image src={info} alt='' className='float-right' onMouseEnter={()=>setMcard(true)}/>
                        
                        <div className='flex justify-center gap-8 items-center'>
                            <div>
                                <p className='font-bebasneue font-[400] text-[25px] text-primary'>Tax Stage Timer</p>
                            </div>
                            <div>
                                <div className=''>
                                    <CircularSlider
                                                                        
                                        labelColor="#ffffff"
                                        knobColor="#ffffff"
                                        progressColorFrom="#A8FF2F"
                                        progressColorTo="#A8FF2F"
                                        progressSize={5}
                                        trackColor="#262626"
                                        labelBottom={true}
                                        trackSize={5}
                                        knobSize={20}
                                        knobDraggable={false}
                                        width={90}                           
                                        initialValue={0}
                                        dataIndex={degree} 
                                        label={formatTime(timeElapsed)}
                                        valueFontSize={"0rem"}
                                        labelFontSize={"1rem"}

                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div onMouseLeave={()=>setMcard(false)} className='card-back px-[35px]'>
                    <p className='font-montserrat leading-[18px] font-[700] text-[15px]'>Displays remaining time in the active tax stage, ending if the price recovers to the base or after 30 minutes, whichever comes first.</p>
                    </div>

                    
                </motion.div>


            </div>
            
        </div>
      
    </div>
  )
}

export default ZillaRightView

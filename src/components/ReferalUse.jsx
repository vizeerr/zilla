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
  
    const [prom,setPromo] = useState(false)
    const [degree, setDegree] = useState(0);
    const [timeElapsed, setTimeElapsed] = useState(0); // Time in seconds
    const totalDuration = 30 * 60; // 30 minutes in seconds
  
    const [running, setRunning] = useState(true);

useEffect(() => {
  if (running) {
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
  }
}, [running]); // Depend on `running`
  
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
      };
      
    


  return (
    <div className='bg-[#1B1C1E] sm:w-[985px] w-[88vw] sm:rounded-[66px] rounded-[20px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F]  sm:p-[38px] p-[13px] '>

        <div className=' flex sm:gap-[12px] gap-[9.5px] items-center'>
            <motion.div
                key="5"
                initial={{ rotateX: 0 }}
                animate={hoveredCard === 5 ? { rotateX: 180 } : { rotateX: 0 }}
                transition={{ duration: 0.6 }}
                 className='card sm:w-[345px] sm:h-[345px] w-[36vw] h-[36vw] bg-[#111111] shadow-[19.3px_19.3px_66.91px_0px_#0000004F] sm:rounded-[33px] rounded-[15px]'>
                <div className="card-back" onMouseLeave={() => handleMouseEnter(0)}>
                    <p className='font-montserrat font-[700] text-white text-[22px] text-center px-[20px]'>Shows when the next points-to-tokens airdrop will occur.</p>
                </div>
                <div className='card-front'>
                    <Image src={info} alt=""  className='float-end mt-[34px] me-[40px] sm:w-[20px] sm:h-[20] w-[9px] h-[9px]' onMouseEnter={() => handleMouseEnter(5)}/>
                    <div className='w-full flex justify-center items-center'>
                    {/* <CircularSlider    
                                                                        labelColor="#ffffff"
                                                                        knobColor="#ffffff"
                                                                        progressColorFrom="#A8FF2F"
                                                                        progressColorTo="#A8FF2F"
                                                                        progressSize={20}
                                                                        trackColor="#262626"
                                                                        labelBottom={true}
                                                                        trackSize={15}
                                                                        knobSize={35}
                                                                        knobDraggable={false}
                                                                        width={227}                           
                                                                        initialValue={0}
                                                                        dataIndex={degree} 
                                                                        label={formatTime(timeElapsed)}
                                                                        valueFontSize={"0rem"}
                                                                        labelFontSize={"2rem"}
                                
                                                                    /> */}
                    </div>
                </div>
            </motion.div>

            <div className='space-y-4'>

                <motion.div
                key="1"
                initial={{ rotateX: 0 }}
                animate={hoveredCard === 1 ? { rotateX: 180 } : { rotateX: 0 }}
                transition={{ duration: 0.6 }}
                className=' bg-[#111111] card w-full sm:px-[45px] sm:py-[25px] px-[10px] py-[8.5px] sm:rounded-[26px] rounded-[7px] shadow-[19.3px_19.3px_66.91px_0px_#0000004F]'>
                    <div className="card-front flex justify-between items-center">
                        <div className='flex items-center gap-4'>
                            <p className='font-bebasneue sm:text-[27px] text-[3vw] font-[400] text-primary'>referral uses</p>
                            <Image src={info} alt="" classname = "sm:w-[24px] sm:h-[24px] w-[5.6vw] h-[5.6vw]" onMouseEnter={() => handleMouseEnter(1)}/>
                        </div>
                        <p className='font-montserrat sm:text-[36px] text-[3.5vw] text-white font-[800]'>123</p>
                    </div>
                    <div className="card-back" onMouseLeave={() => handleMouseEnter(0)}>
                        <p className='font-montserrat font-[800] sm:text-[27px] text-[3vw] text-white'>Tracks how many times your referral link has been used.</p>
                    </div>
                    
                </motion.div>

                <motion.div
                key="2"
                initial={{ rotateX: 0 }}
                animate={hoveredCard === 2 ? { rotateX: 180 } : { rotateX: 0 }}
                transition={{ duration: 0.6 }}
                className=' bg-[#111111] card w-full sm:px-[45px] sm:py-[25px] px-[10px] py-[8.5px] sm:rounded-[26px] rounded-[7px] shadow-[19.3px_19.3px_66.91px_0px_#0000004F]'>
                    <div className="card-front flex justify-between items-center">
                        <div className='flex items-center gap-4'>
                            <p className='font-bebasneue sm:text-[27px] text-[3vw] font-[400] text-primary'>your referral points</p>
                            <Image src={info} alt="" classname = "sm:w-[24px] sm:h-[24px] w-[5.6vw] h-[5.6vw]" onMouseEnter={() => handleMouseEnter(2)}/>
                        </div>
                        <p className='font-montserrat sm:text-[36px] text-[3.5vw] text-white font-[800]'>123</p>
                    </div>
                    <div className="card-back" onMouseLeave={() => handleMouseEnter(0)}>
                        <p className='font-montserrat font-[800] sm:text-[27px] text-[3vw] text-white text-center'>Shows the total points you’ve earned from users using your referral links.</p>
                    </div>
                    
                </motion.div>


                <motion.div
                key="3"
                initial={{ rotateX: 0 }}
                animate={hoveredCard === 3 ? { rotateX: 180 } : { rotateX: 0 }}
                transition={{ duration: 0.6 }}
                className=' bg-[#111111] card w-full sm:px-[45px] sm:py-[25px] px-[10px] py-[8.5px] sm:rounded-[26px] rounded-[7px] shadow-[19.3px_19.3px_66.91px_0px_#0000004F]'>
                    <div className="card-front flex justify-between items-center">
                        <div className='flex items-center gap-4'>
                            <p className='font-bebasneue sm:text-[27px] text-[3vw] font-[400] text-primary'>referral points</p>
                            <Image src={info} alt="" classname = "sm:w-[24px] sm:h-[24px] w-[5.6vw] h-[5.6vw]" onMouseEnter={() => handleMouseEnter(3)}/>
                        </div>
                        <p className='font-montserrat sm:text-[36px] text-[3.5vw] text-white font-[800]'>123</p>
                    </div>
                    <div className="card-back" onMouseLeave={() => handleMouseEnter(0)}>
                        <p className='font-montserrat font-[800] sm:text-[27px] text-[3vw] text-white text-center'>Reflects the 50% bonus points awarded to users who used a referral link to make their purchase.</p>
                    </div>
                    
                </motion.div>

                


            </div>
        </div>
        <div className='sm:mt-[35px] mt-[29px] flex justify-center items-center sm:gap-[24px] gap-[9px]'>
            <div className='bg-[#111111] sm:w-[482px] w-[200px] shadow-[13.13px_13.13px_45.5px_0px_#0000004F] sm:rounded-[23px] rounded-[9px] text-center sm:py-[25px] py-[10px]'>
                <p className='capitalize font-bebasneue sm:text-[27px] text-[3vw] text-primary'>claimable zilla tokens  :  <span className='text-white'>1,234,567</span></p>
            </div>

            <div className='bg-primary sm:w-[194px] w-[70px]  rounded-full text-center'>
                <p className='round font-[500] text-[#262626] sm:leading-[60px] leading-[20px] pt-1 sm:pt-3 sm:text-[50px] text-[4.8vw]'>claim</p>
            </div>
        </div>
    </div>

  )
}

export default ReferalUse

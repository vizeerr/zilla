'use client'
import React, { useState } from 'react'
import info from "@/assets/info.svg"
import Image from 'next/image'
import { motion } from 'framer-motion';

const ZillaBottomView = () => {
    const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card
    
        const handleMouseEnter = (cardId) => setHoveredCard(cardId);
        const handleMouseLeave = () => setHoveredCard(null);
  return (
    <motion.div
    key={5}
    initial={{ rotateX: 0 }}
    animate={hoveredCard === 5 ? { rotateX: 180 } : { rotateX: 0 }}
    transition={{ duration: 0.6 }} className='bg-[#1B1C1E] card shadow-[16.21px_16.21px_56.21px_0px_#0000004F] 2xl:rounded-[2.8rem] md:rounded-[2rem] rounded-[3.6vw]'>
      <div className="card-front  2xl:rounded-b-[2.8rem] md:rounded-b-[2rem] rounded-b-[3.6vw]">
        <div className='w-[90%] md:pt-5 pt-4 mx-auto flex justify-end'>
          <div className='2xl:w-3 md:w-2.5 2xl:h-3 md:h-2.5  w-[3.8vw] h-[3.8vw] ' onMouseOver={() => handleMouseEnter(5)} >
            <Image src={info} alt='' className='w-full'/>
          </div>
        </div>
        <div className='md:ps-9 ps-6'>
          <p className='2xl:text-4xl md:text-2xl text-[3.4vw] text-white font-montserrat md:mt-4 font-[800]'><span className='text-primary'>Accumulated</span> Rewards</p>
        </div>
          <p className='text-white text-center 2xl:text-5xl md:text-4xl text-[6vw] 2xl:mt-12 md:mt-6 mt-[6vw] font-montserrat font-[800]'>12,345,678 <span className='text-primary 2xl:text-4xl text-2xl text-[4vw]'>Zilla</span></p>
          <div className='2xl:rounded-b-[2.8rem] md:rounded-b-[2rem] rounded-b-[3.6vw] overflow-hidden'>

          <motion.div 
              key={8}
              initial={{ rotateX: 0 }}
              animate={hoveredCard === 8 ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-[#2F3135] text-center 2xl:pt-5 pt-3 2xl:pb-2 pb-0.5 2xl:mt-14 md:mt-7 mt-[5vw] card '>
              <div className='card-front w-full h-full 'onMouseOver={() => handleMouseEnter(8)}>
                <p className='text-[#FFFFFF4A] round leading-none 2xl:text-7xl md:text-5xl text-[7.4vw]'>CLAIM REWARDS</p>
              </div>
              <div className='card-back w-full text-center h-full' onMouseLeave={handleMouseLeave}>
                <p className='font-montserrat  font-[800]  w-full 2xl:text-6xl md:text-3xl text-[5vw] text-white'>24 <span className='text-primary font-bebasneue 2xl:text-3xl md:text-lg text-[3.8vw]'>HRS</span>       :  60 <span className='text-primary font-bebasneue 2xl:text-3xl md:text-lg text-[3.8vw]'>MINS</span></p>
              </div>
          </motion.div>
          </div>
      </div>
      <div className="card-back px-5" onMouseLeave={handleMouseLeave}>
        <p className='font-montserrat font-[700] 2xl:text-xl md:text-sm text-[3vw] text-white text-center'>You can claim your tax rewards after 24 hours. Selling your tokens before claiming will forfeit the reward—hold on tight to secure what’s yours!</p>
      </div>
</motion.div>

  )
}

export default ZillaBottomView

"use client"
import React, { useEffect, useRef, useState } from 'react'

import cross from "@/assets/cross.svg"
import Image from 'next/image'
import { AnimatePresence, motion } from "framer-motion";

const SettingModel = ({openSet,setOpenSet}) => {
    const [opt,setOpt] = useState(0);
    const modalRef = useRef(null);
    useEffect(() => {
      const handleClickOutside = (event) => {
          if (modalRef.current && !modalRef.current.contains(event.target)) {
              setOpenSet(false);
          }
      };

      if (openSet) {
          document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, [openSet, setOpenSet]);
  return (
    <AnimatePresence>
    {openSet&& (
    <motion.div
    ref={modalRef}
     key="setting-modal"
     initial={{  x: 350,height: 160  }} // Start from left
     animate={{  x: 0 ,height: opt > 1 ? 250 : 160,}} // Move to center when open
    exit={{  x: 350 }} 
    transition={{ duration: 0.3 }} className={`font-montserrat absolute end-5 z-20 w-[304px] px-[20px] pt-[8px] pb-[14px] bg-[#2C2D30] rounded-[32px]`}>
        <div className='flex items-center justify-between'>
            <p className='text-primary text-[13px] font-[900]'>SET MAX SLIPPAGE</p>
            <Image onClick={()=>setOpenSet(false)} src={cross} width={29} alt="cross" className='anim'/>
        </div>
        <div className='flex my-[28px]  justify-between'>
            <button onClick={()=>setOpt(1)} className= {`${opt == 1? "text-[#262626] bg-primary":"text-white bg-[#1B1C1E]  text-opacity-25"} anim text-[14.5px] font-[800]  border-0 px-2.5 rounded-[9px] shadow-[2px_2px_7.4px_0px_#00000080]`}>2%</button>
            <button onClick={()=>setOpt(2)} className= {`${opt == 2? "text-[#262626] bg-primary":"text-white bg-[#1B1C1E]  text-opacity-25"} anim text-[14.5px] font-[800]  border-0 px-2.5 rounded-[9px] shadow-[2px_2px_7.4px_0px_#00000080]`}>10%</button>
            <button onClick={()=>setOpt(3)} className= {`${opt == 3? "text-[#262626] bg-primary":"text-white bg-[#1B1C1E]  text-opacity-25"} anim text-[14.5px] font-[800]  border-0 px-2.5 rounded-[9px] shadow-[2px_2px_7.4px_0px_#00000080]`}>20%</button>
            <button onClick={()=>setOpt(4)} className = {`${opt == 4? "text-[#262626] bg-primary":"text-white bg-[#1B1C1E]  text-opacity-25"} anim text-[9px] font-[800]  border-0 px-2.5 rounded-[9px] shadow-[2px_2px_7.4px_0px_#00000080]`}>ENTER AMOUNT</button>
        </div>
        
        {/* <p className={` text-[#FF003D] text-[13px] leading-[16px] text-center mb-[28px] shadow-[0px_0.83px_0.83px_0px_#00000040]`}>Caution: Slippage above 10% may result in significant deviations in the transaction price. Please proceed with caution.</p>
         */}

<AnimatePresence>
            {opt > 1 && (
              <motion.div
              key="caution"
     initial={{ opacity:0,height: 0  }} // Start from left
     animate={{ opacity:1,height: opt > 1 ? 92 : 0}}
     exit={{opacity:0,height:0}} // Move to center when open
    transition={{ duration: 0.3 }}
              className=' overflow-hidden'>

              
              <p
                
                className="text-[#FF003D] h-[0] font-[700]  text-[13px] leading-[16px] text-center mb-[28px] "
              >
                Caution: Slippage above 10% may result in significant deviations
                in the transaction price. Please proceed with caution.
              </p>
              </motion.div>
            )}
          </AnimatePresence>

        <div className='flex justify-center '>

            <button onClick={()=>setOpenSet(false)} className='text-[#262626] anim bg-primary rounded-full font-[900] text-[18.5px] w-[122px]'>SAVE</button>
        </div>
    </motion.div>
    )}
    </AnimatePresence>
  )
}

export default SettingModel

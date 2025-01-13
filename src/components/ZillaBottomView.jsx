'use client'
import React, { useState } from 'react'
import info from "@/assets/info.svg"
import Image from 'next/image'
import { motion } from 'framer-motion';

const ZillaBottomView = () => {
    const [hover,setHover] = useState(false)
  return (
    <div className='overflow-hidden'>

        <motion.div  
          initial={{ rotateX: 0 }}
          animate={{ rotateX: hover?180:0 }}
          transition={{ duration: 0.6 }}  
        key='eee' className='bg-[#1B1C1E] card md:mt-[2vw] mt-[18px] w-full shadow-[16.21px_16.21px_56.21px_0px_#0000004F]  md:rounded-[2.6vw] rounded-[10px] '>
                
                <div className="card-front md:px-[2.6vw] px-[11px] md:py-[1.5vw] py-[7px]">

                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-montserrat font-[900] md:text-[1.7vw] text-[3.2vw] text-primary'>Accumulated <span className='text-white'>Rewards</span></p>
                            
                        </div>
                        <div className='md:w-[2.1vw] w-[8px]'>
                            <Image onMouseEnter={()=>setHover(true)} src={info} alt='' width={42} height={42}/>
                        </div>
                    </div> 
                    
                    <div className=' mb-[0.6vw] flex justify-between items-center'>
                        
                        <div className='mt-[1vw]'>
                            <p className='text-white font-montserrat font-[800] md:text-[3.1vw] text-[4.9vw]'>1,234.5678 <span className='text-primary text-[2.5vw]'>PumpZilla</span></p>
                            <div className='bg-[#111111] md:mt-[0.8vw] mt-2 shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:w-[23vw] w-[43vw] text-center rounded-full md:py-[0.7vw] py-[9px]'>
                                <p className='font-montserrat md:text-[2.3vw] text-[3.5vw] font-[800]'>$123.45 <span className='text-primary'>USD</span></p>                       
                            </div>
                        
                        </div>
                        <div className='bg-primary rounded-full anim text-center md:w-[20vw] w-[28vw]'>
                            <p className='round text-[#262626] md:text-[3.6vw] text-[4.9vw] font-[500] md:pt-[0.5vw] pt-[3px] md:leading-[5.2vw]'>claim rewards</p>
                        </div>

                    </div>

                    
                </div>

                <div onMouseLeave={()=>setHover(false)}  className='card-back md:px-[2.6vw] px-[10px]'>
                    <p className='font-montserrat font-[700] md:text-[2.6vw] text-[3vw] text-white'>Claim tax rewards after 24 hours. Selling any tokens before claiming <span className='text-primary'>forfeits the reward</span>, so  <span className='text-primary'> hold your tokens until claiming to secure it.</span></p>
                </div>
                

                
                
        
        </motion.div>

      
    </div>
  )
}

export default ZillaBottomView

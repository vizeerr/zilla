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
        key='eee' className='bg-[#1B1C1E] card 2xl:mt-[56px] lg:mt-[20px] mt-[18px] w-full shadow-[16.21px_16.21px_56.21px_0px_#0000004F]  2xl:rounded-[50px] lg:rounded-[30px] rounded-[10px] '>
                
                <div className="card-front 2xl:px-[50px] lg:px-[30px] px-[11px] lg:py-[30px] py-[7px]">

                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-montserrat font-[900] 2xl:text-[34px] lg:text-[25px] text-[3.2vw] text-primary'>Accumulated <span className='text-white'>Rewards</span></p>
                            
                        </div>
                        <div className='2xl:w-[42px] lg:w-[20px] w-[8px]'>
                            <Image onMouseEnter={()=>setHover(true)} src={info} alt='' width={42} height={42}/>
                        </div>
                    </div> 
                    
                    <div className=' mb-3 flex justify-between items-center'>
                        
                        <div className='mt-5'>
                            <p className='text-white font-montserrat font-[800] 2xl:text-[60px] lg:text-[30px] text-[4.9vw]'>1,234.5678 <span className='text-primary lg:text-[31px] text-[2.5vw]'>PumpZilla</span></p>
                            <div className='bg-[#111111] lg:mt-4 mt-2 shadow-[16.21px_16.21px_56.21px_0px_#0000004F] lg:w-[455px] w-[43vw] text-center rounded-full lg:py-[15px] py-[9px]'>
                                <p className='font-montserrat lg:text-[45px] text-[3.5vw] font-[800]'>$123.45 <span className='text-primary'>USD</span></p>                       
                            </div>
                        
                        </div>
                        <div className='bg-primary rounded-full anim text-center lg:w-[394px] w-[28vw]'>
                            <p className='round text-[#262626] lg:text-[70px] text-[4.9vw] font-[500] lg:pt-[10px] pt-[3px] lg:leading-[100px]'>claim rewards</p>
                        </div>

                    </div>

                    
                </div>

                <div onMouseLeave={()=>setHover(false)}  className='card-back 2xl:px-[50px] px-[10px]'>
                    <p className='font-montserrat font-[700] 2xl:text-[50px] text-[3vw] text-white'>Claim tax rewards after 24 hours. Selling any tokens before claiming <span className='text-primary'>forfeits the reward</span>, so  <span className='text-primary'> hold your tokens until claiming to secure it.</span></p>
                </div>
                

                
                
        
        </motion.div>

      
    </div>
  )
}

export default ZillaBottomView

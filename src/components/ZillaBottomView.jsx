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
        key='eee' className='bg-[#1B1C1E] card sm:mt-[56px] mt-[18px] w-full shadow-[16.21px_16.21px_56.21px_0px_#0000004F]  sm:rounded-[50px] rounded-[10px] '>
                
                <div className="card-front sm:px-[50px] px-[11px] sm:py-[30px] py-[7px]">

                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-montserrat font-[900] sm:text-[34px] text-[3.2vw] text-primary'>Accumulated <span className='text-white'>Rewards</span></p>
                            
                        </div>
                        <div className='sm:w-[42px] w-[8px]'>
                            <Image onMouseEnter={()=>setHover(true)} src={info} alt='' width={42} height={42}/>
                        </div>
                    </div> 
                    
                    <div className=' mb-3 flex justify-between items-center'>
                        
                        <div className='mt-5'>
                            <p className='text-white font-montserrat font-[800] sm:text-[60px] text-[4.9vw]'>1,234.5678 <span className='text-primary sm:text-[31px] text-[2.5vw]'>PumpZilla</span></p>
                            <div className='bg-[#111111] sm:mt-4 mt-2 shadow-[16.21px_16.21px_56.21px_0px_#0000004F] sm:w-[455px] w-[43vw] text-center rounded-full sm:py-[15px] py-[9px]'>
                                <p className='font-montserrat sm:text-[45px] text-[3.5vw] font-[800]'>$123.45 <span className='text-primary'>USD</span></p>                       
                            </div>
                        
                        </div>
                        <div className='bg-primary rounded-full anim text-center sm:w-[394px] w-[28vw]'>
                            <p className='round text-[#262626] sm:text-[70px] text-[4.9vw] font-[500] sm:pt-[10px] pt-[3px] sm:leading-[100px]'>claim rewards</p>
                        </div>

                    </div>

                    
                </div>

                <div onMouseLeave={()=>setHover(false)}  className='card-back px-[50px]'>
                    <p className='font-montserrat font-[700] text-[50px] text-white'>Claim tax rewards after 24 hours. Selling any tokens before claiming <span className='text-primary'>forfeits the reward</span>, so  <span className='text-primary'> hold your tokens until claiming to secure it.</span></p>
                </div>
                

                
                
        
        </motion.div>

      
    </div>
  )
}

export default ZillaBottomView

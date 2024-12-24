'use client'
import React, { useState } from 'react'
import info from "@/assets/info.svg"
import Image from 'next/image'
import { motion } from 'framer-motion';

const ZillaBottomView = () => {
    const [hover,setHover] = useState(false)
  return (
    <div>

        <motion.div  
          initial={{ rotateX: 0 }}
          animate={{ rotateX: hover?180:0 }}
          transition={{ duration: 0.6 }}  
        key='eee' className='bg-[#1B1C1E] card mt-[56px] w-full shadow-[16.21px_16.21px_56.21px_0px_#0000004F]  rounded-[50px] '>
                
                <div className="card-front px-[50px] py-[30px]">

                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-montserrat font-[900] text-[34px] text-primary'>Accumulated <span className='text-white'>Rewards</span></p>
                            
                        </div>
                        <Image onMouseEnter={()=>setHover(true)} src={info} alt='' width={42} height={42}/>
                    </div> 
                    
                    <div className=' mb-3 flex justify-between items-center'>
                        
                        <div className='mt-5'>
                            <p className='text-white font-montserrat font-[800] text-[60px]'>1,234.5678 <span className='text-primary text-[31px]'>PumpZilla</span></p>
                            <div className='bg-[#111111] mt-4 shadow-[16.21px_16.21px_56.21px_0px_#0000004F] w-[455px] text-center rounded-[75px] py-[15px]'>
                                <p className='font-montserrat text-[45px] font-[800]'>$123.45 <span className='text-primary'>USD</span></p>                       
                            </div>
                        
                        </div>
                        <div className='bg-primary rounded-full anim text-center w-[394px]'>
                            <p className='round text-[#262626] text-[70px] font-[500] pt-[10px] leading-[100px]'>claim rewards</p>
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

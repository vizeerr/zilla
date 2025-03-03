"use client"
import React, { useState } from 'react'
import ProfileTokens from './ProfileTokens'
import { motion } from 'framer-motion';
const ProfileRight = () => {
  const[tab, setTab] = useState(0)
  const[dead, setDead] = useState(false)

  return (
    <div className='bg-[#1B1C1E] shadow-[-19px_23px_42.8px_0px_#0000004D] 2xl:py-7 md:py-5 py-[2vw] 2xl:px-12 xl:px-8 md:px-5 px-[4vw] w-full 2xl:rounded-[2.2rem] rounded-[1.5rem] h-full overflow-y-auto'>
      <div className='flex items-center justify-between'>
        <div className='bg-[#111111] rounded-full shadow-[8px_8px_22px_0px_#0000005C] 2xl:px-10 md:px-7 px-[5vw] 2xl:pt-2.5 pt-2'>
          
          <div className='flex items-center'>
            <div onClick={(e)=>setTab(0)} className='2xl:w-44 md:w-32 text-center '>
              <p className={`${tab === 0 ? "text-primary":"text-white"} font-montserrat font-[800] 2xl:text-base md:text-[0.6rem] text-[2vw]`}>TOKENS HELD</p>
            </div>
            <div onClick={(e)=>setTab(1)} className='2xl:w-44 md:w-32 text-center '>
              <p className={`${tab === 1 ? "text-primary":"text-white"} font-montserrat font-[800]  2xl:text-base md:text-[0.6rem] text-[2vw]`}>TOKENS CREATED</p>
            </div>
          </div>

          <div className="flex mt-2">
            <motion.div 
              className="bg-primary 2xl:w-44 w-32 2xl:h-1 h-0.5"
              animate={{ x: tab === 0 ? 0 : 175 }} 
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
          

          
        </div>
        <div className='bg-[#111111] shadow-[5.91px_5.91px_13.59px_0px_#0000004D] 2xl:rounded-2xl rounded-lg flex items-center 2xl:gap-4 gap-2 2xl:px-6 md:px-4 px-[3vw] 2xl:py-3 md:py-2 py-[1.5vw]'>
          <p className='text-white 2xl:mt-1 font-montserrat font-[700] 2xl:text-base md:text-[0.6rem] text-[2vw]'>DEAD TOKENS</p>
          <div onClick={()=>setDead(!dead)} className={`2xl:w-14 md:w-8 w-[7vw] 2xl:h-5 md:h-2.5 h-[2.5vw] ${dead?"bg-primary":"bg-[#595959]"} tranis rounded-full flex ${dead?"justify-end":"justify-start"} items-center `}>
            <div className={`${dead?"bg-white":"bg-[#8A8A98]"} 2xl:w-6 md:w-3.5 w-[3vw] 2xl:h-6 md:h-3.5 h-[3vw] rounded-full shadow-md tranis`}></div>
          </div>
        </div>
      </div>

      <div className='grid xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 2xl:gap-x-8 gap-x-6 2xl:gap-y-14 gap-y-11 2xl:mt-20 mt-16'>
        {tab==0 && Array(13).fill().map((_, i) => (
          <ProfileTokens key={i} dead={dead} state={tab}/>
        ))}
         {tab==1 && Array(3).fill().map((_, i) => (
          <ProfileTokens key={i} dead={dead} state={tab} />
        ))}
      </div>
    </div>
  )
}

export default ProfileRight

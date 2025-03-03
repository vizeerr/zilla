"use client"
import React, { useState } from 'react'
import ProfileTokens from './ProfileTokens'
import { motion } from 'framer-motion';
const ProfileRight = () => {
  const[tab, setTab] = useState(0)
  const[dead, setDead] = useState(false)

  return (
    <div className='bg-[#1B1C1E] shadow-[-19px_23px_42.8px_0px_#0000004D] py-7 px-12 w-full rounded-[2.2rem] h-[100vh] overflow-y-auto'>
      <div className='flex items-center justify-between'>
        <div className='bg-[#111111] rounded-full shadow-[8px_8px_22px_0px_#0000005C] px-10 pt-2.5'>
          
          <div className='flex items-center'>
            <div onClick={(e)=>setTab(0)} className='w-44 text-center '>
              <p className={`${tab === 0 ? "text-primary":"text-white"} font-montserrat font-[800] text-base`}>TOKENS HELD</p>
            </div>
            <div onClick={(e)=>setTab(1)} className='w-44 text-center '>
              <p className={`${tab === 1 ? "text-primary":"text-white"} font-montserrat font-[800] text-base`}>TOKENS CREATED</p>
            </div>
          </div>

          <div className="flex mt-2">
            <motion.div 
              className="bg-primary w-44 h-1"
              animate={{ x: tab === 0 ? 0 : 175 }} 
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>
        <div className='bg-[#111111] shadow-[5.91px_5.91px_13.59px_0px_#0000004D] rounded-2xl flex items-center gap-4 px-6 py-3'>
          <p className='text-white mt-1 font-montserrat font-[800] text-base'>DEAD TOKENS</p>
          <div onClick={()=>setDead(!dead)} className={`w-14 h-5 ${dead?"bg-primary":"bg-[#595959]"} tranis rounded-full flex ${dead?"justify-end":"justify-start"} items-center `}>
            <div className={`${dead?"bg-white":"bg-[#8A8A98]"} w-6 h-6 rounded-full shadow-md tranis`}></div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-x-8 gap-y-14 mt-20'>
        {tab==0 && Array(13).fill().map((_, i) => (
          <ProfileTokens key={i} />
        ))}
         {tab==1 && Array(3).fill().map((_, i) => (
          <ProfileTokens key={i} />
        ))}
      </div>
    </div>
  )
}

export default ProfileRight

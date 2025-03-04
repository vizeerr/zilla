"use client"
import React, { useState } from 'react'
import profbg from '@/assets/profbg.png'
import pencil from '@/assets/pencil.png'
import tlogo from '@/assets/tlogo.png'
import xlogo from '@/assets/xlogo.png'
import primcopy from '@/assets/primcopy.png'
import pizzdark from '@/assets/pizzdark.png'
import profavtr from '@/assets/profavtr.png'
import cam from '@/assets/cam.png'
import plus from '@/assets/plus.png'
import stakearr from '@/assets/stakearr.png'
import Image from 'next/image'
import { motion } from 'framer-motion';
const ProfileLeft = () => {
    const[editProfile,setEditProfile]=useState(false)
    const[profileBio,setProfileBio]=useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ')
  return (
    <div className='2xl:w-[55%] xl:w-[45%] w-full h-full '>
        <motion.div 
        key={1}
        initial={{ rotateY: 0 }}
        animate={editProfile ? { rotateY: 180 } : { rotateY: 0 }}
        transition={{ duration: 0.6 }}
        className='bg-[#1B1C1E] 2xl:rounded-[2rem] md:rounded-[1.5rem] rounded-[5vw] shadow-[-19px_23px_42.8px_0px_#0000004D] card h-full'>
            
            <div className="profilecard-front ">
                <div className='w-full 2xl:h-[14rem] xl:h-[10rem] lg:h-[7rem] md:h-[10rem] h-[44.6vw] 2xl:rounded-t-[2rem] md:rounded-t-[1.5rem] rounded-t-[5vw] overflow-hidden object-contain 2xl:border-b-2 border-b border-primary'>
                    <Image src={profbg} alt="profbg" />
                </div>
                <div className='2xl:-mt-24 -mt-12 xl:pb-5 md:pb-5 pb-[4vw] relative z-10  2xl:px-8 md:px-5 px-[4vw]'>
                    <div className='flex items-end justify-between'>
                        <div>
                            <div className='2xl:w-44 md:w-24 w-[24vw] 2xl:h-44 md:h-24 h-[24vw] bg-[#1B1C1E] rounded-full flex items-center justify-center overflow-hidden 2xl:border-4 border-2 border-primary 2xl:p-3 md:p-2 p-[2vw] object-contain '>
                                <Image src={profavtr} alt="profbg" className='w-full h-full rounded-full' />
                            </div>
                        </div>
                        <div className='flex flex-col 2xl:gap-4 md:gap-3 gap-[3vw] items-end'>
                            <div onClick={()=>setEditProfile(true)} className='text-white anim flex 2xl:gap-3 md:gap-2 gap-[1.5vw]  items-center shadow-[5px_5px_14px_0px_#0000004D] bg-[#0E0E0EC9] backdrop-blur-sm rounded-full 2xl:px-11 md:px-6 px-[6vw] 2xl:py-3.5 md:py-2 py-[1.5vw]'>
                                <div className='2xl:w-7 md:w-3 w-[4.4vw]'>
                                    <Image src={pencil} alt="pencil" />
                                </div>
                                <p className='font-montserrat font-[800] 2xl:text-lg md:text-[0.7rem] text-[2.9vw]'>Edit</p>
                            </div>
                            <div className='flex md:gap-4 gap-[3vw] items-center'>
                                <div className='text-white flex 2xl:gap-3 md:gap-2 gap-[1.5vw]   anim items-center shadow-[5px_5px_14px_0px_#0000004D] bg-[#0E0E0EC9] backdrop-blur-sm rounded-full 2xl:px-6 md:px-3.5 px-[3.5vw] 2xl:py-2.5 md:py-1.5 py-[1.5vw]'>
                                    <div className='2xl:w-5 md:w-3 w-[3.4vw]'>
                                        <Image src={tlogo} alt="pencil" />
                                    </div>
                                    <p className='font-montserrat font-[800] 2xl:text-base md:text-[0.6rem] text-[1.9vw]'>Telegram</p>
                                </div>
                                <div className='text-white flex 2xl:gap-3 md:gap-2 gap-[1.5vw]   anim items-center shadow-[5px_5px_14px_0px_#0000004D] bg-[#0E0E0EC9] backdrop-blur-sm rounded-full 2xl:px-6 md:px-3.5 px-[3.5vw] 2xl:py-2.5 md:py-1.5 py-[1.5vw]'>
                                    <div className='2xl:w-5 md:w-3 w-[3.4vw]'>
                                        <Image src={xlogo} alt="pencil" />
                                    </div>
                                    <p className='font-montserrat font-[800] 2xl:text-base md:text-[0.6rem] text-[1.9vw]'>Twitter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex md:gap-3 gap-[2vw] items-center xl:mt-9 md:mt-5 mt-[6vw]'>
                            <h1 className='font-montserrat font-[800] 2xl:text-4xl md:text-2xl text-[4.4vw] text-white'> 0xABC...1234</h1>
                            <div className='2xl:w-10 md:w-8 w-[6vw] anim'>
                                <Image src={primcopy} alt="primcopy" />
                            </div>
                        </div>
                        <p className='font-montserrat text-[#FFFFFF78] 2xl:font-[700] font-[500] 2xl:text-sm xl:text-xs md:text-xs  text-[2.5vw] leading-tight 2xl:mt-5 mt-3'>{profileBio}</p>
                    </div>
                    <div className=' 2xl:pt-10 md:pt-6 pt-[6vw] 2xl:mt-10 md:mt-6 mt-[4vw]  bg-black md:border-2 border  border-primary md:rounded-[1rem] rounded-[3vw]'>
                        <div className='text-center'>
                            
                            <p className='2xl:border-x-[12px] md:border-x-[9px] border-x-[4px] border-primary font-montserrat font-[800] text-white 2xl:text-3xl xl:text-xl md:text-2xl text-[4vw]'>Claimable Zilla </p>
                            <p className='font-montserrat font-[800] text-primary 2xl:text-5xl xl:text-2xl md:text-4xl text-[5vw] 2xl:mt-5 md:mt-2 mt-[2vw]'>10,000,000 </p>
                                                        
                        </div>
                        <p className='2xl:mt-8 md:mt-4 mt-[2vw] 2xl:px-10 md:px-4 px-[3vw] text-center font-montserrat text-[#FFFFFF6E] font-[700] 2xl:text-sm xl:text-[0.7rem] md:text-sm text-[2.5vw] leading-tight'>Your share from dead tokens — plus weekly rewards based on your trading volume </p>
                        <div className='w-full 2xl:mt-8 md:mt-6 mt-[4vw] flex justify-center'>
                            <div className=''>
                                <button className='round anim text-[#262626] bg-primary leading-none 2xl:text-5xl xl:text-3xl md:text-4xl text-[6.5vw] 2xl:px-20 xl:px-12 md:px-16 px-[8vw]  2xl:rounded-t-[1rem] md:rounded-t-[0.8rem] rounded-t-[2.5vw]  2xl:pt-3 md:pt-2 pt-[1.5vw]'>Claim</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="profilecard-back flex-col z-10 ">
                <div className='relative'>
                        <div onClick={(e)=>setEditProfile(false)} className='bg-[#0000008C] backdrop-blur-sm 2xl:w-10 2xl:h-10 md:w-7 w-[7vw] md:h-7 h-[7vw] absolute z-10 top-3 start-3 rounded-full 2xl:p-3 md:p-2 p-[2vw] anim'>
                            <Image src={stakearr} alt="cam" className='rotate-180'/>
                        </div>
                        <div className='w-full blur-sm 2xl:h-[14rem] xl:h-[10rem] lg:h-[7rem] md:h-[10rem] h-[44.6vw] 2xl:rounded-t-[2rem] md:rounded-t-[1.5rem] rounded-t-[5vw] overflow-hidden object-contain 2xl:border-b-2 border-b border-primary'>
                            <Image src={profbg} alt="profbg" />
                        </div>
                        
                    <div className='absolute 2xl:top-[30%] top-[30%] flex w-full justify-center items-center 2xl:gap-5 gap-3'>
                        <div className='bg-[#0000008C] backdrop-blur-sm 2xl:w-28 md:w-14 w-[12vw] 2xl:h-28 md:h-14 h-[12vw] rounded-full 2xl:p-8 md:p-4 p-[4vw]'>
                            <Image src={cam} alt="cam" className=''/>
                        </div>
                        <div className='bg-[#0000008C] backdrop-blur-sm 2xl:w-28 md:w-14 w-[12vw] 2xl:h-28 md:h-14 h-[12vw] rounded-full 2xl:p-8 md:p-4 p-[4vw]'>
                            <Image src={plus} alt="cam" />
                        </div>
                    </div>
                </div>
                <div className='2xl:-mt-24 -mt-12 xl:pb-5 md:pb-5 pb-[4vw] relative z-10 2xl:px-8 md:px-5 px-[4vw] w-full '>
                    <div className='flex items-center justify-between'>
                        <div>
                        <div className='2xl:w-44 md:w-24 w-[24vw] 2xl:h-44 md:h-24 h-[24vw] bg-[#1B1C1E] rounded-full flex items-center justify-center overflow-hidden 2xl:border-4 border-2 border-primary 2xl:p-3 md:p-2 p-[2vw] object-contain '>
                                <Image src={profavtr} alt="profbg" className='w-full h-full rounded-full' />
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div onClick={()=>setEditProfile(true)} className='text-[#262626] anim shadow-[5px_5px_14px_0px_#0000004D] bg-primary rounded-full 2xl:px-11 md:px-8 px-[8vw] 2xl:py-2 md:py-1.5 py-[1.5vw]'>                
                                <p className='font-montserrat font-[800] 2xl:text-lg md:text-xs text-[3vw]'>Save</p>
                            </div>
                        </div>
                    </div>
                    <div className='2xl:mt-8 mt-5'>
                        <h1 className='font-montserrat font-[800] 2xl:text-xl md:text-base text-[4vw] text-white'> Edit Bio</h1>
                        <div className='border-primary 2xl:border-2 border 2xl:rounded-[0.9rem] rounded-[0.7rem] 2xl:mt-4 md:mt-2.5 mt-[2.5vw] '>                            
                            <textarea name="" id="" value={profileBio} onChange={(e)=>setProfileBio(e.target.value)} className='outline-none w-full 2xl:h-40 md:h-32 h-[25vw]  2xl:p-3 md:p-2 p-[2vw] font-montserrat bg-transparent text-[#FFFFFF78] 2xl:font-[700] font-[500] 2xl:text-sm md:text-xs  text-[2.5vw] leading-tight'></textarea>
                            <div className='w-[95%]  mx-auto flex justify-end'>
                                <button className='font-montserrat font-[800] anim text-[#262626] bg-primary leading-none 2xl:text-sm md:text-[0.7rem] text-[2.5vw] rounded-full md:py-1 py-[1vw] md:px-4 px-[4vw] 2xl:my-3 md:my-2 my-[2vw]'>Done</button>

                            </div>
                        </div>
                        

                    </div>
                    <div className='2xl:mt-8 md:mt-5 mt-[5vw]'>
                        <h1 className='font-montserrat font-[800] 2xl:text-xl md:text-base text-[4vw] text-white'> Social</h1>
                        <div className='2xl:mt-4 md:mt-2 mt-[2vw] 2xl:space-y-4 space-y-2'>
                            <div className='flex items-center justify-between bg-[#111111] rounded-full 2xl:p-3 md:p-2 p-[2vw] shadow-[6px_6px_22px_0px_#0000004F]'>
                                <div className='flex 2xl:gap-3 md:gap-2 gap-[2vw] items-center'>
                                    <div className='bg-white rounded-full p-2 2xl:w-10 md:w-7 w-[6.5vw]'>
                                        <Image src={tlogo}  alt="tlogo" className='invert'/>
                                    </div>
                                    <p className='text-[#FFFFFF80] 2xl:text-xl md:text-base text-[3.5vw] font-bebasneue'>Telegram</p>
                                </div>
                                <button className='font-montserrat font-[800] anim text-[#262626] bg-primary leading-none 2xl:text-sm md:text-[0.7rem] text-[3vw] rounded-full 2xl:py-1.5 md:py-1 py-[1vw] 2xl:px-5 md:px-3 px-[3vw] '>Disconnect</button>

                            </div>

                            <div className='flex items-center justify-between bg-[#111111] rounded-full 2xl:p-3 md:p-2 p-[2vw] shadow-[6px_6px_22px_0px_#0000004F]'>
                                <div className='flex 2xl:gap-3 md:gap-2 gap-[2vw]  items-center'>
                                    <div className='bg-white rounded-full p-2 2xl:w-10 md:w-7 w-[6.5vw]'>
                                        <Image src={tlogo}  alt="tlogo" className='invert'/>
                                    </div>
                                    <p className='text-[#FFFFFF80] 2xl:text-xl md:text-base text-[3.5vw] font-bebasneue'>Not connected</p>
                                </div>
                                <button className='font-montserrat font-[800] anim text-[#262626] bg-primary leading-none 2xl:text-sm md:text-[0.7rem] text-[3vw] rounded-full 2xl:py-1.5 md:py-1 py-[1vw] 2xl:px-5 md:px-3 px-[3vw] '>Connect</button>

                            </div>

                        </div>
                        
                    </div>
                    
                    
                </div>
               
            </div>


   
      </motion.div>
      
    </div>
  )
}

export default ProfileLeft

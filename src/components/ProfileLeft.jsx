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
    <div className='2xl:w-[55%] xl:w-[45%] w-full h-full'>
        <motion.div 
        key={1}
        initial={{ rotateY: 0 }}
        animate={editProfile ? { rotateY: 180 } : { rotateY: 0 }}
        transition={{ duration: 0.6 }}
        className='bg-[#1B1C1E] 2xl:rounded-[2rem] md:rounded-[1.5rem] rounded-[6vw] shadow-[-19px_23px_42.8px_0px_#0000004D] card h-full'>
            
            <div className="profilecard-front ">
                <div className='w-full 2xl:h-[14rem] md:h-[10rem] h-[44.6vw] 2xl:rounded-t-[2rem] md:rounded-t-[1.5rem] rounded-t-[6vw] overflow-hidden object-contain 2xl:border-b-2 border-b border-primary'>
                    <Image src={profbg} alt="profbg" />
                </div>
                <div className='2xl:-mt-24 -mt-12 md:pb-5 pb-[4vw] relative z-10  2xl:px-8 md:px-5 px-[4vw]'>
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
                        <div className='flex md:gap-3 gap-[2vw] items-center md:mt-9 mt-[6vw]'>
                            <h1 className='font-montserrat font-[800] 2xl:text-4xl md:text-2xl text-[4.4vw] text-white'> 0xABC...1234</h1>
                            <div className='2xl:w-10 md:w-8 w-[6vw] anim'>
                                <Image src={primcopy} alt="primcopy" />
                            </div>
                        </div>
                        <p className='font-montserrat text-[#FFFFFF78] 2xl:font-[700] font-[500] 2xl:text-sm md:text-[0.55rem] text-[2.5vw] leading-tight 2xl:mt-5 mt-3'>{profileBio}</p>
                    </div>
                    <div className=' pt-5 mt-10 mb-8 bg-black border-2  border-primary rounded-[1rem]'>
                        <div className='2xl:px-10 px-3 flex justify-between items-center'>
                            <div>
                                <p className='font-montserrat font-[800] text-white 2xl:text-3xl text-lg'>Claimable <span className='text-primary'>Zilla</span> </p>
                                <p className='font-montserrat font-[800] text-white 2xl:text-5xl text-2xl 2xl:mt-5 mt-2'>10,000,000 </p>
                            </div>
                            <div className='bg-primary rounded-full 2xl:w-32 w-20 2xl:h-32 h-20 flex justify-center items-center 2xl:p-6 p-4'>
                                <Image src={pizzdark} alt="primcopy" />
                            </div>
                        </div>
                        <p className='px-10 font-montserrat text-[#FFFFFF6E] font-[700] text-sm leading-tight mt-3'>These Zilla tokens are distributed to you from liquidity removed from dead tokens. </p>
                        <div className='w-full mt-10 flex justify-end'>
                            <div className='border-t-2 border-s-2 border-primary ps-2  pt-2 rounded-ss-[1.4rem] '>
                                <button className='round anim text-[#262626] bg-primary leading-none text-5xl w-52  rounded-ss-[0.8rem] rounded-ee-[0.8rem] pt-3'>Claim</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="profilecard-back flex-col z-10 ">
                <div className='relative'>
                        <div onClick={(e)=>setEditProfile(false)} className='bg-[#0000008C] backdrop-blur-sm w-10 h-10 absolute z-10 top-3 start-3 rounded-full p-3 anim'>
                            <Image src={stakearr} alt="cam" className='rotate-180'/>
                        </div>
                    <div className='w-full h-[30vh] blur-sm rounded-t-[2rem] overflow-hidden object-contain'>
                        <Image src={profbg} alt="profbg" />
                    </div>
                    <div className='absolute top-[30%] flex w-full justify-center items-center gap-5'>
                        <div className='bg-[#0000008C] backdrop-blur-sm w-28 h-28 rounded-full p-8'>
                            <Image src={cam} alt="cam" className=''/>
                        </div>
                        <div className='bg-[#0000008C] backdrop-blur-sm w-28 h-28 rounded-full p-10'>
                            <Image src={plus} alt="cam" />
                        </div>
                    </div>
                </div>
                <div className='-mt-24 pb-5 relative z-10  px-8 w-full '>
                    <div className='flex items-center justify-between'>
                        <div>
                            <div className='w-44 h-44 bg-[#1B1C1E] rounded-full overflow-hidden border-4 border-primary p-3 object-contain '>
                                <Image src={profavtr} alt="profbg" className='w-full h-full rounded-full' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 items-center'>
                            <div onClick={()=>setEditProfile(true)} className='text-[#262626] anim flex gap-3  items-center shadow-[5px_5px_14px_0px_#0000004D] bg-primary backdrop-blur-sm rounded-full px-11 py-2'>
                                
                                <p className='font-montserrat font-[800] text-lg'>Save</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='mt-8'>
                        <h1 className='font-montserrat font-[800] text-xl text-white'> Edit Bio</h1>
                        <div className='border-primary border-2 rounded-[0.9rem] mt-4 '>                            
                            <textarea name="" id="" value={profileBio} onChange={(e)=>setProfileBio(e.target.value)} className='outline-none w-full h-40  p-3 font-montserrat bg-transparent text-[#FFFFFF78] font-[700] text-sm leading-tight mt-3'></textarea>
                            <div className='w-[95%]  mx-auto flex justify-end'>
                                <button className='font-montserrat font-[800] anim text-[#262626] bg-primary leading-none text-sm rounded-full py-1.5 px-5 my-4'>Done</button>

                            </div>
                        </div>
                        

                    </div>
                    <div className='mt-8'>
                        <h1 className='font-montserrat font-[800] text-xl text-white'> Social</h1>
                        <div className='mt-4 space-y-4'>
                            <div className='flex items-center justify-between bg-[#111111] rounded-full px-3 shadow-[6px_6px_22px_0px_#0000004F]'>
                                <div className='flex gap-3 items-center'>
                                    <div className='bg-white rounded-full p-2 w-10 h-10'>
                                        <Image src={tlogo}  alt="tlogo" className='invert'/>
                                    </div>
                                    <p className='text-[#FFFFFF80] text-xl font-bebasneue'>Telegram</p>
                                </div>
                                <button className='font-montserrat font-[800] anim text-[#262626] bg-primary leading-none text-sm rounded-full py-1.5 px-5 my-4'>Disconnect</button>

                            </div>

                            <div className='flex items-center justify-between bg-[#111111] rounded-full px-3 shadow-[6px_6px_22px_0px_#0000004F]'>
                                <div className='flex gap-3 items-center'>
                                    <div className='bg-white rounded-full p-2 w-10 h-10'>
                                        <Image src={tlogo}  alt="tlogo" className='invert'/>
                                    </div>
                                    <p className='text-[#FFFFFF80] text-xl font-bebasneue'>Not connected</p>
                                </div>
                                <button className='font-montserrat font-[800] anim text-[#262626] bg-primary leading-none text-sm rounded-full py-1.5 px-5 my-4'>Connect</button>

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

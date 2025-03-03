"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import info from '@/assets/info.svg'
import StakeModel from './StakeModel'

const StakeTop = () => {

    const [points,setPoints] = useState(0);
    const [staked,setStaked] = useState(0);
    const [hoveredInfo, setHoveredInfo] = useState(null); 
    const [isHovered, setIsHovered] = useState(null);
    const [stakeOpen,setStakeOpen] = useState(false);
    const [stakeOption,setStakeOption] = useState(0);

    const setModel = (op) =>{
        if(op==0){
            setStakeOption(0);
            setStakeOpen(true);
        }
        if(op==1){
            setStakeOption(1);
            setStakeOpen(true);
        }
    }

    return (
        <>
            <div className='flex 2xl:px-16 xl:px-14 lg:px-10 md:px-6 px-[5vw] 2xl:gap-16 xl:gap-12 lg:gap-8 md:gap-5 gap-[2.6vw] justify-between my-4  md:flex-row flex-col'>
                <div className='2xl:p-9 xl:p-6 md:p-3.5 p-[5.4vw] w-full shadow-[28.42px_28.42px_56.84px_0px_#00000040] 2xl:rounded-[2.4rem] lg:rounded-[1.6rem] md:rounded-[1rem] rounded-[6vw] bg-[#1B1C1E]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex 2xl:gap-4 xl:gap-3 md:gap-2 gap-[2.9vw] items-center'>
                            <p className='text-white font-montserrat font-[800] 2xl:text-3xl lg:text-xl md:text-sm text-[4.6vw]'>
                                <span className='text-primary'>Total</span> Points
                            </p>
                            <div
                                className="2xl:w-6 lg:w-4 md:w-3 w-[4vw] relative"    
                                onMouseEnter={() => setHoveredInfo(1)}
                                onMouseLeave={() => setHoveredInfo(null)}
                                >
                                <Image src={info} alt="Info Icon" className="w-full" />
                                {hoveredInfo === 1 && (
                                    <div
                                    className="absolute font-montserrat italic font-[900] bottom-full 2xl:max-w-[13rem] lg:max-w-[11rem] md:max-w-[9rem] max-w-[35vw] left-1/2 transform -translate-x-1/2 mb-2 2xl:py-3 md:py-2 py-[1.4vw] bg-[#3F3F3F] text-white text-sm shadow-xl w-max 2xl:rounded-[18px] md:rounded-[13px] rounded-[2.5vw] 2xl:px-6 md:px-4 px-[4vw]"
                                    
                                    ><p className='2xl:text-xs lg:text-[0.6rem] md:text-[0.45rem] text-[2vw] leading-tight z-30 relative'>

                                    Total Zilla tokens you have currently staked.
                                    </p>
                                        
                                    <div className="bg-[#3F3F3F] 2xl:w-5 md:w-3 2xl:h-5 md:h-3 w-[3vw] h-[3vw] absolute 2xl:bottom-[-0.6rem] md:bottom-[-0.3rem] bottom-[-5px] rotate-45 right-[45%]"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <buttom onClick={()=>setModel(0)} className={`${points>0? "bg-primary":"bg-[#555658]"} text-[#262626] round 2xl:text-4xl lg:text-3xl md:text-2xl text-[6.4vw] 2xl:px-9 xl:px-7 md:px-4 px-[7vw] xl:pt-2.5 lg:pt-2  md:pt-1.5 pt-[2vw] md:leading-none leading-[7vw] rounded-full`}>STAKE</buttom>
                        
                    </div>
                    <div className='flex justify-between  items-center 2xl:mt-8 md:mt-7 mt-[8.9vw]'>
                            <input onChange={(e)=>{
                            setPoints(e.target.value)
                        }} 
                        value= {points} className='text-white font-montserrat font-[800] 2xl:text-4xl lg:text-2xl md:text-xl text-[4.6vw] outline-none lg:w-[45%] md:w-[40%] w-[50%] bg-transparent' placeholder='10,000,00k'></input>
                        <div className='flex items-center 2xl:gap-2 md:gap-1.5 gap-[1.1vw] bg-[#111111] shadow-[9.69px_12.92px_23.5px_0px_#00000040] rounded-full md:px-3 px-[3vw] md:py-2 py-[1vw]'>
                            <p className='font-bebasneue text-white 2xl:text-sm lg:text-[0.6rem] md:text-[0.4rem] text-[2.4vw]'><span className='text-primary'>10000</span> points/day</p>
                            <div
                                className="2xl:w-3 lg:w-2.5 md:w-2 w-[2vw] relative"
                                onMouseEnter={() => setHoveredInfo(2)}
                                onMouseLeave={() => setHoveredInfo(null)}
                                >
                                <Image src={info} alt="Info Icon" className="w-full" />
                                {hoveredInfo === 2 && (
                                    
                                    <div
                                    className="absolute font-montserrat italic font-[900] bottom-full 2xl:max-w-[13rem] lg:max-w-[11rem] md:max-w-[9rem] max-w-[35vw] left-1/2 transform -translate-x-1/2 mb-2 2xl:py-3 md:py-2 py-[1.4vw] bg-[#3F3F3F] text-white text-sm shadow-xl w-max 2xl:rounded-[18px] md:rounded-[13px] rounded-[2.5vw] 2xl:px-6 md:px-4 px-[4vw]"
                                    
                                    ><p className='2xl:text-xs lg:text-[0.6rem] md:text-[0.45rem] text-[2vw] leading-tight z-30 relative'>

                                    Points earned per hour for staked Zilla.
                                    </p>
                                        
                                    <div className="bg-[#3F3F3F] 2xl:w-5 md:w-3 2xl:h-5 md:h-3 w-[3vw] h-[3vw] absolute 2xl:bottom-[-0.6rem] md:bottom-[-0.3rem] bottom-[-5px] rotate-45 md:right-[45%] right-[28%]"></div>
                                    </div>
                                )}
                            </div>
                            <div className='bg-white 2xl:w-0.5 md:w-[0.1rem] w-[0.2vw] 2xl:h-5 lg:h-3.5 md:h-2.5 h-[3vw] rounded-full'></div>
                            <p className='font-bebasneue text-primary  2xl:text-sm lg:text-[0.6rem] md:text-[0.4rem] text-[2.4vw]'>x3</p>
                            <div
                                className="2xl:w-3 lg:w-2.5 md:w-2 w-[2vw]   relative"
                                onMouseEnter={() => setHoveredInfo(3)}
                                onMouseLeave={() => setHoveredInfo(null)}
                                >
                                <Image src={info} alt="Info Icon" className="w-full" />
                                {hoveredInfo === 3 && (
                                    

                                    <div
                                    className="absolute font-montserrat italic font-[900] bottom-full 2xl:max-w-[15rem] lg:max-w-[13rem] md:max-w-[11rem] max-w-[39vw] md:left-1/2 left-[-12vw] transform -translate-x-1/2 mb-2 2xl:py-3 md:py-2 py-[1.4vw] bg-[#3F3F3F] text-white text-sm shadow-xl w-max 2xl:rounded-[18px] md:rounded-[13px] rounded-[2.5vw] 2xl:px-6 md:px-4 px-[4vw]"

                                    ><p className='2xl:text-xs lg:text-[0.6rem] md:text-[0.45rem] text-[2vw]  leading-tight z-30 relative'>

                                    Bonus multiplier for staking Zilla without withdrawal.
                                    </p>
                                        
                                    <div className="bg-[#3F3F3F] 2xl:w-5 md:w-3 2xl:h-5 md:h-3 w-[3vw] h-[3vw] absolute 2xl:bottom-[-0.6rem] md:bottom-[-0.3rem] bottom-[-5px] rotate-45 md:right-[45%] right-[21%]"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='2xl:p-9 xl:p-6 md:p-3.5 p-[5.4vw] w-full shadow-[28.42px_28.42px_56.84px_0px_#00000040]  2xl:rounded-[2.4rem] lg:rounded-[1.6rem] md:rounded-[1rem] rounded-[6vw] bg-[#1B1C1E]'>
                    <div className='flex justify-between bg-[#111111] shadow-[9.69px_12.92px_23.5px_0px_#00000040] 2xl:p-4 md:p-3 p-[3vw] 2xl:rounded-[1rem] md:rounded-[0.8rem] rounded-[2.6vw]'>
                        <p className='text-primary 2xl:text-3xl lg:text-xl md:text-xs text-[4.6vw] font-montserrat font-[900]'>APR</p>
                        <p className='2xl:text-3xl lg:text-xl md:text-xs text-[4.6vw] text-white font-montserrat font-[900]'>8%</p>
                    </div>
                    <div className='flex justify-between bg-[#111111] shadow-[9.69px_12.92px_23.5px_0px_#00000040] 2xl:p-4 md:p-3 p-[3vw] 2xl:rounded-[1rem] md:rounded-[0.8rem] rounded-[2.6vw] 2xl:mt-4 md:mt-2.5 mt-[2.6vw]'>
                        <p className='text-primary 2xl:text-3xl lg:text-xl md:text-xs text-[4.6vw] font-montserrat font-[900]'>Rewards</p>
                        <p className='2xl:text-3xl lg:text-xl md:text-xs text-[4.6vw] text-white font-montserrat font-[900]'>123,456</p>
                    </div>
                </div>
                <div className='2xl:p-9 xl:p-6 md:p-3.5 p-[5.4vw] w-full shadow-[28.42px_28.42px_56.84px_0px_#00000040]  2xl:rounded-[2.4rem] lg:rounded-[1.6rem] md:rounded-[1rem] rounded-[6vw] bg-[#1B1C1E]'>
                    <div className='flex lg:gap-4 md:gap-2.5 gap-[2.9vw] items-center'>
                        <p className='text-white font-montserrat font-[800] 2xl:text-3xl md:text-sm text-[4.6vw]'><span className='text-primary'>Staked</span> Amount</p>
                        <div
                                className="2xl:w-6 lg:w-4 md:w-3  w-[4vw] relative"
                                onMouseEnter={() => setHoveredInfo(4)}
                                onMouseLeave={() => setHoveredInfo(null)}
                                >
                                <Image src={info} alt="Info Icon" className="w-full" />
                                {hoveredInfo === 4 && (
                                   
                                    <div
                                    className="absolute font-montserrat italic font-[900] bottom-full 2xl:max-w-[13rem] lg:max-w-[11rem] md:max-w-[9rem] max-w-[35vw] left-1/2 transform -translate-x-1/2 mb-2 2xl:py-3 md:py-2 py-[1.4vw] bg-[#3F3F3F] text-white text-sm shadow-xl w-max 2xl:rounded-[18px] md:rounded-[13px] rounded-[2.5vw] 2xl:px-6 md:px-4 px-[4vw]"
                                    
                                    ><p className='2xl:text-xs lg:text-[0.6rem] md:text-[0.45rem] text-[2vw] leading-tight'>

                                    Total points earned for launchpool rewards.
                                    </p>
                                        
                                    <div className="bg-[#3F3F3F] 2xl:w-5 md:w-3 2xl:h-5 md:h-3 w-[3vw] h-[3vw]  absolute 2xl:bottom-[-0.6rem] md:bottom-[-0.3rem] bottom-[-5px] rotate-45 right-[45%]"></div>
                                    </div>
                                    
                                )}
                            </div>                  
                    </div>
                    <div className='flex justify-between items-center md:mt-7 mt-[8.9vw] gap-[0.2vw]'>
                        <input onChange={(e)=>{
                            setStaked(e.target.value)
                        }} 
                        value= {staked}
                        className='font-montserrat 2xl:text-4xl lg:text-2xl md:text-xl text-[4.6vw] w-[45%] font-[800] text-white bg-transparent outline-none' placeholder='0'></input>
                        <buttom onClick={()=>setModel(1)} className={`text-[#262626] ${staked > 0 ?"bg-primary":"bg-[#555658]"} round 2xl:text-4xl lg:text-3xl md:text-2xl text-[6.4vw] 2xl:px-8 lg:px-8 md:px-4 px-[7vw] lg:pt-2.5 md:pt-2 pt-[2vw] md:leading-none leading-[7vw]  rounded-full`}>withdraw</buttom>
                        
                    </div>
                </div>
            </div> 
            <StakeModel open={stakeOpen} setOpen = {setStakeOpen} option={stakeOption} setOption={setStakeOption}/>
        </>
  )
}

export default StakeTop


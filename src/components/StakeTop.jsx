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
        
            <div className='flex px-[4.6vw] md:gap-0 gap-[2.6vw] justify-between my-[3.33vw] md:flex-row flex-col'>
                <div className='md:p-[1.8vw] p-[5.4vw] md:w-[28vw] w-full shadow-[28.42px_28.42px_56.84px_0px_#00000040] md:rounded-[2vw] rounded-[6vw] bg-[#1B1C1E]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex md:gap-[0.8vw] gap-[2.9vw] items-center'>
                            <p className='text-white font-montserrat font-[800] md:text-[1.5vw] text-[4.6vw]'>
                                <span className='text-primary'>Total</span> Points
                            </p>
                            <div
                                className="md:w-[1.4vw] md:h-[1.4vw] w-[4vw] h-[4vw] relative"    
                                onMouseEnter={() => setHoveredInfo(1)}
                                onMouseLeave={() => setHoveredInfo(null)}
                                >
                                <Image src={info} alt="Info Icon" className="w-full" />
                                {hoveredInfo === 1 && (
                                    <div
                                    className="absolute font-montserrat italic font-[900] bottom-full md:max-w-[11vw] max-w-[50vw] left-1/2 transform -translate-x-1/2 mb-2 md:py-[0.6vw] py-[1.4vw] bg-[#3F3F3F] text-white text-sm shadow-xl w-max rounded-[18px] md:px-[1.3vw] px-[3vw]"
                                    
                                    ><p className='md:text-[0.6vw] text-[2vw] leading-tight z-30 relative'>

                                    Total Zilla tokens you have currently staked.
                                    </p>
                                        
                                    <div className="bg-[#3F3F3F] md:w-[1vw] md:h-[1vw] w-[3vw] h-[3vw] absolute md:bottom-[-0.4vw] bottom-[-5px] rotate-45 right-[45%]"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <buttom onClick={()=>setModel(0)} className={`${points>0? "bg-primary":"bg-[#555658]"} text-[#262626] round md:text-[2.1vw] text-[6.4vw] md:px-[2.6vw] px-[7vw] md:pt-[0.5vw] pt-[2vw] md:leading-[2.6vw] leading-[7vw] rounded-full`}>STAKE</buttom>
                        
                    </div>
                    <div className='flex justify-between items-center md:mt-[1.6vw] mt-[8.9vw]'>
                            <input onChange={(e)=>{
                            setPoints(e.target.value)
                        }} 
                        value= {points} className='text-white font-montserrat font-[800] md:text-[1.5vw] text-[4.6vw] outline-none w-[50%] bg-transparent' placeholder='10,000,00k'></input>
                        <div className='flex items-center md:gap-[0.4vw] gap-[1.1vw] bg-[#111111] shadow-[9.69px_12.92px_23.5px_0px_#00000040] rounded-full md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]'>
                            <p className='font-bebasneue text-white md:text-[0.8vw] text-[2.4vw]'><span className='text-primary'>10000</span> points/day</p>
                            <div
                                className="md:w-[0.7vw] md:h-[0.7vw] w-[2vw] h-[2vw] relative"
                                onMouseEnter={() => setHoveredInfo(2)}
                                onMouseLeave={() => setHoveredInfo(null)}
                                >
                                <Image src={info} alt="Info Icon" className="w-full" />
                                {hoveredInfo === 2 && (
                                    
                                    <div
                                    className="absolute font-montserrat italic font-[900] bottom-full md:max-w-[11vw] max-w-[50vw] md:left-1/2 left-[-8vw] transform -translate-x-1/2 mb-2 md:py-[0.6vw] py-[1.4vw] bg-[#3F3F3F] text-white text-sm shadow-xl w-max rounded-[18px] md:px-[1.3vw] px-[3vw]"
                                    
                                    ><p className='md:text-[0.6vw] text-[2vw] leading-tight z-30 relative'>

                                    Points earned per hour for staked Zilla.
                                    </p>
                                        
                                    <div className="bg-[#3F3F3F] md:w-[1vw] md:h-[1vw] w-[3vw] h-[3vw] absolute md:bottom-[-0.4vw]  bottom-[-5px] rotate-45 md:right-[45%] right-[28%]"></div>
                                    </div>
                                )}
                            </div>
                            <div className='bg-white w-[0.05vw] md:h-[1vw] h-[4vw] rounded-full'></div>
                            <p className='font-bebasneue text-primary  md:text-[0.8vw] text-[2.4vw]'>x3</p>
                            <div
                                className="md:w-[0.7vw] md:h-[0.7vw] w-[2vw] h-[2vw]  relative"
                                onMouseEnter={() => setHoveredInfo(3)}
                                onMouseLeave={() => setHoveredInfo(null)}
                                >
                                <Image src={info} alt="Info Icon" className="w-full" />
                                {hoveredInfo === 3 && (
                                    

                                    <div
                                    className="absolute font-montserrat italic font-[900] bottom-full md:max-w-[11vw] max-w-[50vw] md:left-1/2 left-[-12vw] transform -translate-x-1/2 mb-2 md:py-[0.6vw] py-[1.4vw] bg-[#3F3F3F] text-white text-sm shadow-xl w-max rounded-[18px] md:px-[1.3vw] px-[3vw]"

                                    ><p className='md:text-[0.6vw] text-[2vw] leading-tight z-30 relative'>

                                    Bonus multiplier for staking Zilla without withdrawal.
                                    </p>
                                        
                                    <div className="bg-[#3F3F3F] md:w-[1vw] md:h-[1vw] w-[3vw] h-[3vw] absolute md:bottom-[-0.4vw] bottom-[-5px] rotate-45 md:right-[45%] right-[21%]"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:p-[1.8vw] p-[5.4vw] md:w-[28vw] w-full shadow-[28.42px_28.42px_56.84px_0px_#00000040] md:rounded-[2vw] rounded-[6vw] bg-[#1B1C1E]'>
                    <div className='flex justify-between bg-[#111111] shadow-[9.69px_12.92px_23.5px_0px_#00000040] md:p-[0.8vw] p-[3vw] md:rounded-[0.8vw] rounded-[2.6vw]'>
                        <p className='text-primary md:text-[1.4vw] text-[4.6vw] font-montserrat font-[900]'>APR</p>
                        <p className='md:text-[1.4vw] text-[4.6vw] text-white font-montserrat font-[900]'>8%</p>
                    </div>
                    <div className='flex justify-between bg-[#111111] shadow-[9.69px_12.92px_23.5px_0px_#00000040] md:p-[0.8vw] p-[3vw]  md:rounded-[0.8vw] rounded-[2.6vw] md:mt-[0.8vw] mt-[2.6vw]'>
                        <p className='text-primary md:text-[1.4vw] text-[4.6vw] font-montserrat font-[900]'>Rewards</p>
                        <p className='md:text-[1.4vw] text-[4.6vw] text-white font-montserrat font-[900]'>123,456</p>
                    </div>
                </div>
                <div className='md:p-[1.8vw] p-[5.4vw] md:w-[28vw] w-full shadow-[28.42px_28.42px_56.84px_0px_#00000040] md:rounded-[2vw] rounded-[6vw] bg-[#1B1C1E]'>
                    <div className='flex md:gap-[0.8vw] gap-[2.9vw] items-center'>
                        <p className='text-white font-montserrat font-[800] md:text-[1.5vw] text-[4.6vw]'><span className='text-primary'>Staked</span> Amount</p>
                        <div
                                className="md:w-[1.4vw] md:h-[1.4vw] w-[4vw] h-[4vw] relative"
                                onMouseEnter={() => setHoveredInfo(4)}
                                onMouseLeave={() => setHoveredInfo(null)}
                                >
                                <Image src={info} alt="Info Icon" className="w-full" />
                                {hoveredInfo === 4 && (
                                   
                                    <div
                                    className="absolute font-montserrat italic font-[900] bottom-full md:max-w-[11vw] max-w-[50vw] left-1/2 transform -translate-x-1/2 mb-2 md:py-[0.6vw] py-[1.4vw] bg-[#3F3F3F] text-white text-sm shadow-xl w-max rounded-[18px] md:px-[1.3vw] px-[3vw]"
                                    
                                    ><p className='md:text-[0.6vw] text-[2vw] leading-tight'>

                                    Total points earned for launchpool rewards.
                                    </p>
                                        
                                    <div className="bg-[#3F3F3F] md:w-[1vw] md:h-[1vw] w-[3vw] h-[3vw] absolute md:bottom-[-0.4vw]  bottom-[-5px] rotate-45 right-[45%]"></div>
                                    </div>
                                    
                                )}
                            </div>                  
                    </div>
                    <div className='flex justify-between items-center md:mt-[1.6vw] mt-[8.9vw] gap-[0.2vw]'>
                        <input onChange={(e)=>{
                            setStaked(e.target.value)
                        }} 
                        value= {staked}
                        className='font-montserrat md:text-[1.5vw] text-[4.6vw] w-[50%] font-[800] text-white bg-transparent outline-none' placeholder='0'></input>
                        <buttom onClick={()=>setModel(1)} className={`text-[#262626] ${staked > 0 ?"bg-primary":"bg-[#555658]"} round md:text-[2.1vw] text-[6.4vw] md:px-[2.6vw] px-[7vw] md:pt-[0.5vw] pt-[2vw] md:leading-[2.6vw] leading-[7vw]  rounded-full`}>withdraw</buttom>
                        
                    </div>
                </div>
            </div> 
            <StakeModel open={stakeOpen} setOpen = {setStakeOpen} option={stakeOption} setOption={setStakeOption}/>
        </>
  )
}

export default StakeTop

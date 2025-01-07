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
        
        <div className='flex px-[4.6vw] justify-between my-16'>
            <div className='p-[1.8vw] w-[28vw] shadow-[28.42px_28.42px_56.84px_0px_#00000040] rounded-[2vw] bg-[#1B1C1E]'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                        <p className='text-white font-montserrat font-[800] text-[1.5vw]'>
                            <span className='text-primary'>Total</span> Points
                        </p>
                        <div
                            className="w-[1.4vw] h-[1.4vw] relative"    
                            onMouseEnter={() => setHoveredInfo(1)}
                            onMouseLeave={() => setHoveredInfo(null)}
                            >
                            <Image src={info} alt="Info Icon" className="w-full" />
                            {hoveredInfo === 1 && (
                                <div
                                className="absolute font-montserrat italic font-[900] text-[0.6vw] bottom-full left-1/2 transform -translate-x-1/2 mb-2 py-[0.6vw] bg-[#3F3F3F] text-white text-sm shadow-xl w-max rounded-[18px] px-[1.3vw]"
                                style={{ maxWidth: "11vw" }}
                                >
                                Total Zilla tokens you have currently staked.
                                <div className="bg-[#3F3F3F] w-[1vw] h-[1vw] absolute bottom-[-8px] rotate-45 right-[45%]"></div>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <buttom onClick={()=>setModel(0)} className={`${points>0? "bg-primary":"bg-[#555658]"} text-[#262626] round text-[2.1vw] px-[2.6vw] pt-[0.5vw] leading-[2.6vw] rounded-full`}>STAKE</buttom>
                    
                </div>
                <div className='flex justify-between items-center mt-8'>
                        <input onChange={(e)=>{
                        setPoints(e.target.value)
                    }} 
                    value= {points} className='text-white font-montserrat font-[800] text-[1.5vw] outline-none w-[50%] bg-transparent' placeholder='10,000,00k'></input>
                    <div className='flex items-center gap-2 bg-[#111111] shadow-[9.69px_12.92px_23.5px_0px_#00000040] rounded-full px-[0.7vw] py-[0.4vw]'>
                        <p className='font-bebasneue text-white text-[0.8vw]'><span className='text-primary'>10000</span> points/day</p>
                        <div
                            className="w-[0.7vw] h-[0.7vw] relative"
                            onMouseEnter={() => setHoveredInfo(2)}
                            onMouseLeave={() => setHoveredInfo(null)}
                            >
                            <Image src={info} alt="Info Icon" className="w-full" />
                            {hoveredInfo === 2 && (
                                <div
                                className="absolute font-montserrat italic font-[900] text-[0.6vw] left-1/2 transform -translate-x-1/2 mb-2 py-[0.6vw] bg-[#3F3F3F] text-white text-sm shadow-xl w-max rounded-[0.9vw] px-[1.3vw]"
                                style={{ maxWidth: "11.9vw" }}
                                >
                                Points earned per hour for staked Zilla.
                                <div className="bg-[#3F3F3F] w-[1vw] h-[1vw] absolute top-[-8px] rotate-45 right-[45%]"></div>
                                </div>
                            )}
                        </div>
                        <div className='bg-white w-[1px] h-[1vw] rounded-full'></div>
                        <p className='font-bebasneue text-primary text-[0.8vw]'>x3</p>
                        <div
                            className="w-[0.7vw] h-[0.7vw] relative"
                            onMouseEnter={() => setHoveredInfo(3)}
                            onMouseLeave={() => setHoveredInfo(null)}
                            >
                            <Image src={info} alt="Info Icon" className="w-full" />
                            {hoveredInfo === 3 && (
                                <div
                                className="absolute font-montserrat italic font-[900] text-[0.6vw] left-1/2 transform -translate-x-1/2 mb-2 py-[0.6vw] bg-[#3F3F3F] text-white text-sm shadow-xl w-max rounded-[0.9vw] px-[1.3vw]"
                                style={{ maxWidth: "14vw" }}
                                >
                                Bonus multiplier for staking Zilla without withdrawal.
                                <div className="bg-[#3F3F3F] w-[20px] h-[20px] absolute top-[-8px] rotate-45 right-[45%]"></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-[1.5vw] px-[1.5vw] w-[28vw] shadow-[28.42px_28.42px_56.84px_0px_#00000040] rounded-[2vw] bg-[#1B1C1E]'>
                <div className='flex justify-between bg-[#111111] shadow-[9.69px_12.92px_23.5px_0px_#00000040] p-[0.8vw] rounded-[0.8vw]'>
                    <p className='text-primary text-[1.4vw] font-montserrat font-[900]'>APR</p>
                    <p className='text-[1.4vw] text-white font-montserrat font-[900]'>8%</p>
                </div>
                <div className='flex justify-between bg-[#111111] shadow-[9.69px_12.92px_23.5px_0px_#00000040] p-[0.8vw] rounded-[0.8vw] mt-4'>
                    <p className='text-primary text-[1.4vw] font-montserrat font-[900]'>Rewards</p>
                    <p className='text-[1.4vw] text-white font-montserrat font-[900]'>123,456</p>
                </div>
            </div>
            <div className='p-[1.8vw] w-[28vw] shadow-[28.42px_28.42px_56.84px_0px_#00000040] rounded-[2vw] bg-[#1B1C1E]'>
                <div className='flex gap-4 items-center'>
                    <p className='text-white font-montserrat font-[800] text-[1.5vw]'><span className='text-primary'>Staked</span> Amount</p>
                    <div
                            className="w-[1.4vw] h-[1.4vw] relative"
                            onMouseEnter={() => setHoveredInfo(4)}
                            onMouseLeave={() => setHoveredInfo(null)}
                            >
                            <Image src={info} alt="Info Icon" className="w-full" />
                            {hoveredInfo === 4 && (
                                <div
                                className="absolute font-montserrat italic font-[900] text-[0.6vw] bottom-full left-1/2 transform -translate-x-1/2 mb-2 py-[0.6vw] bg-[#3F3F3F] text-white text-sm shadow-xl w-max rounded-[0.9vw] px-[1.3vw]"
                                style={{ maxWidth:"11vw" }}
                                >
                                Total points earned for launchpool rewards.
                                <div className="bg-[#3F3F3F] w-[1vw] h-[1vw] absolute bottom-[-8px] rotate-45 right-[45%]"></div>
                                </div>
                            )}
                        </div>                  
                </div>
                <div className='flex justify-between items-center mt-8 gap-1'>
                    <input onChange={(e)=>{
                        setStaked(e.target.value)
                    }} 
                    value= {staked}
                    className='font-montserrat text-[1.5vw] w-[50%] font-[800] text-white bg-transparent outline-none' placeholder='0'></input>
                    <buttom onClick={()=>setModel(1)} className={`text-[#262626] ${staked > 0 ?"bg-primary":"bg-[#555658]"} round text-[2vw] px-[1.5vw] pt-[0.5vw] leading-[2.6vw] rounded-full`}>withdraw</buttom>
                    
                </div>
            </div>
        </div>
        <StakeModel open={stakeOpen} setOpen = {setStakeOpen} option={stakeOption} setOption={setStakeOption}/>
        </>
  )
}

export default StakeTop

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
        
        <div className='flex px-[90px] justify-between my-16'>
            <div className='p-[35px] w-[540px] shadow-[28.42px_28.42px_56.84px_0px_#00000040] rounded-[40px] bg-[#1B1C1E]'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                        <p className='text-white font-montserrat font-[800] text-[30px]'>
                            <span className='text-primary'>Total</span> Points
                        </p>
                        <div
                            className="w-[27px] h-[27px] relative"
                            onMouseEnter={() => setHoveredInfo(1)}
                            onMouseLeave={() => setHoveredInfo(null)}
                            >
                            <Image src={info} alt="Info Icon" className="w-full" />
                            {hoveredInfo === 1 && (
                                <div
                                className="absolute font-montserrat italic font-[900] text-[12px] bottom-full left-1/2 transform -translate-x-1/2 mb-2 py-3 bg-[#3F3F3F] text-white text-sm shadow-xl w-max rounded-[18px] px-[25px]"
                                style={{ maxWidth: "230px" }}
                                >
                                Total Zilla tokens you have currently staked.
                                <div className="bg-[#3F3F3F] w-[20px] h-[20px] absolute bottom-[-8px] rotate-45 right-[45%]"></div>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <buttom onClick={()=>setModel(0)} className={`${points>0? "bg-primary":"bg-[#555658]"} text-[#262626] round text-[42px] px-[50px] pt-[10px] leading-[50px] rounded-full`}>STAKE</buttom>
                    
                </div>
                <div className='flex justify-between items-center mt-8'>
                        <input onChange={(e)=>{
                        setPoints(e.target.value)
                    }} 
                    value= {points} className='text-white font-montserrat font-[800] text-[30px] outline-none w-[50%] bg-transparent' placeholder='10,000,00k'></input>
                    <div className='flex items-center gap-2 bg-[#111111] shadow-[9.69px_12.92px_23.5px_0px_#00000040] rounded-[36px] px-[14px] py-[8px]'>
                        <p className='font-bebasneue text-white text-[16px]'><span className='text-primary'>10000</span> points/day</p>
                        <div
                            className="w-[15px] h-[15px] relative"
                            onMouseEnter={() => setHoveredInfo(2)}
                            onMouseLeave={() => setHoveredInfo(null)}
                            >
                            <Image src={info} alt="Info Icon" className="w-full" />
                            {hoveredInfo === 2 && (
                                <div
                                className="absolute font-montserrat italic font-[900] text-[12px] left-1/2 transform -translate-x-1/2 mb-2 py-3 bg-[#3F3F3F] text-white text-sm shadow-xl w-max rounded-[18px] px-[25px]"
                                style={{ maxWidth: "230px" }}
                                >
                                Points earned per hour for staked Zilla.
                                <div className="bg-[#3F3F3F] w-[20px] h-[20px] absolute top-[-8px] rotate-45 right-[45%]"></div>
                                </div>
                            )}
                        </div>
                        <div className='bg-white w-[1px] h-[1vw] rounded-full'></div>
                        <p className='font-bebasneue text-primary text-[16px]'>x3</p>
                        <div
                            className="w-[15px] h-[15px] relative"
                            onMouseEnter={() => setHoveredInfo(3)}
                            onMouseLeave={() => setHoveredInfo(null)}
                            >
                            <Image src={info} alt="Info Icon" className="w-full" />
                            {hoveredInfo === 3 && (
                                <div
                                className="absolute font-montserrat italic font-[900] text-[12px] left-1/2 transform -translate-x-1/2 mb-2 py-3 bg-[#3F3F3F] text-white text-sm shadow-xl w-max rounded-[18px] px-[25px]"
                                style={{ maxWidth: "270px" }}
                                >
                                Bonus multiplier for staking Zilla without withdrawal.
                                <div className="bg-[#3F3F3F] w-[20px] h-[20px] absolute top-[-8px] rotate-45 right-[45%]"></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-[30px] px-[30px] w-[540px] shadow-[28.42px_28.42px_56.84px_0px_#00000040] rounded-[40px] bg-[#1B1C1E]'>
                <div className='flex justify-between bg-[#111111] shadow-[9.69px_12.92px_23.5px_0px_#00000040] p-[16px] rounded-[16px]'>
                    <p className='text-primary text-[27px] font-montserrat font-[900]'>APR</p>
                    <p className='text-[27px] text-white font-montserrat font-[900]'>8%</p>
                </div>
                <div className='flex justify-between bg-[#111111] shadow-[9.69px_12.92px_23.5px_0px_#00000040] p-[16px] rounded-[16px] mt-4'>
                    <p className='text-primary text-[27px] font-montserrat font-[900]'>Rewards</p>
                    <p className='text-[27px] text-white font-montserrat font-[900]'>123,456</p>
                </div>
            </div>
            <div className='p-[35px] w-[540px] shadow-[28.42px_28.42px_56.84px_0px_#00000040] rounded-[40px] bg-[#1B1C1E]'>
                <div className='flex gap-4 items-center'>
                    <p className='text-white font-montserrat font-[800] text-[30px]'><span className='text-primary'>Staked</span> Amount</p>
                    <div
                            className="w-[27px] h-[27px] relative"
                            onMouseEnter={() => setHoveredInfo(4)}
                            onMouseLeave={() => setHoveredInfo(null)}
                            >
                            <Image src={info} alt="Info Icon" className="w-full" />
                            {hoveredInfo === 4 && (
                                <div
                                className="absolute font-montserrat italic font-[900] text-[12px] bottom-full left-1/2 transform -translate-x-1/2 mb-2 py-3 bg-[#3F3F3F] text-white text-sm shadow-xl w-max rounded-[18px] px-[25px]"
                                style={{ maxWidth: "230px" }}
                                >
                                Total points earned for launchpool rewards.
                                <div className="bg-[#3F3F3F] w-[20px] h-[20px] absolute bottom-[-8px] rotate-45 right-[45%]"></div>
                                </div>
                            )}
                        </div>                  
                </div>
                <div className='flex justify-between items-center mt-8 gap-1'>
                    <input onChange={(e)=>{
                        setStaked(e.target.value)
                    }} 
                    value= {staked}
                    className='font-montserrat text-[30px] w-[50%] font-[800] text-white bg-transparent outline-none' placeholder='0'></input>
                    <buttom onClick={()=>setModel(1)} className={`text-[#262626] ${staked > 0 ?"bg-primary":"bg-[#555658]"} round text-[42px] px-[30px] pt-[10px] leading-[50px] rounded-full`}>withdraw</buttom>
                    
                </div>
            </div>
        </div>
        <StakeModel open={stakeOpen} setOpen = {setStakeOpen} option={stakeOption} setOption={setStakeOption}/>
        </>
  )
}

export default StakeTop

"use client"
import React, { useEffect, useState } from 'react'
import StakeCard from './StakeCard'
import { getAllTokens } from '@/helpers/api'
import CommitModel from './CommitModel'

const StakeGrid = () => {
    const [stakeOpen,setStakeOpen] = useState(false);
    const[allTokens,setAllTokens] = useState([])
    
        const fetchTokens = async() =>{
            const tokens = await getAllTokens()
            setAllTokens(tokens);
        }
        useEffect(()=>{
            fetchTokens();
        },[])
    
        const[filter, setFilter] = useState(0)

        
  return (
    <>
        <div className='2xl:w-[74%] xl:w-[80%] lg:w-[85%] md:w-[90%] w-[90%] mx-auto bg-[#18191B] shadow-[20px_20px_40px_0px_#00000040] lg:rounded-[3rem] md::rounded-[2rem] rounded-[3.3vw] overflow-hidden'>
            <div className='flex  md:flex-row flex-col  justify-between md:items-center  bg-[#23252A] lg:py-5 md:py-3  md:px-[3.9vw] '>
                <p className='text-white font-montserrat font-[900] text-start 2xl:text-5xl lg:text-3xl md:text-xl text-[4vw] md:py-0 md:px-0 py-[2.1vw] px-[4.8vw]'>Launch<span className='text-primary'>pool</span></p>
                <div className='flex lg:gap-4 md:gap-2.5 md:justify-center justify-around items-center md:bg-transparent bg-[#363940] md:py-0 md:px-0 py-[2.1vw] px-[4vw]'>
                
                    <p onClick={()=>setFilter(0)} className={`${filter==0?"bg-primary text-[#18191B]" :"bg-[#181818] text-white"} shadow-[3px_9px_23.1px_0px_#00000040]  anim  font-montserrat 2xl:text-lg lg:text-xs md:text-[0.6rem] text-[2.4vw] font-[800] 2xl:px-4 md:px-3 px-[2.8vw] md:py-1 py-[0.6vw]  rounded-full `}>All</p>
                    <p onClick={()=>setFilter(1)} className={`${filter==1?"bg-primary text-[#18191B]" :"bg-[#181818] text-white"}  shadow-[3px_9px_23.1px_0px_#00000040] anim  font-montserrat 2xl:text-lg lg:text-xs md:text-[0.6rem] text-[2.4vw] font-[800] 2xl:px-4 md:px-3 px-[2.8vw] md:py-1 py-[0.6vw]  rounded-full `}>Ongoing</p>
                    <p onClick={()=>setFilter(2)} className={`${filter==2?"bg-primary text-[#18191B]" :"bg-[#181818] text-white"}  shadow-[3px_9px_23.1px_0px_#00000040] anim  font-montserrat 2xl:text-lg lg:text-xs md:text-[0.6rem] text-[2.4vw] font-[800] 2xl:px-4 md:px-3 px-[2.8vw] md:py-1 py-[0.6vw]  rounded-full `}>Completed</p>
                    <p onClick={()=>setFilter(3)} className={`${filter==3?"bg-primary text-[#18191B]" :"bg-[#181818] text-white"}  shadow-[3px_9px_23.1px_0px_#00000040] anim  font-montserrat 2xl:text-lg lg:text-xs md:text-[0.6rem] text-[2.4vw] font-[800] 2xl:px-4 md:px-3 px-[2.8vw] md:py-1 py-[0.6vw] rounded-full `}>Participated</p>
            
                </div>
            </div>
            <div className='flex flex-col 2xl:gap-8 md:gap-6 gap-[3.3vw] lg:my-11 md:my-6 my-[3.8vw] mx-auto 2xl:w-[88%] lg:w-[90%] md:w-[95%] w-[95%]'>
                {allTokens.map((data, index) => (
                    <StakeCard setStakeOpen={setStakeOpen} key={index} data={data}   />
                ))}
            </div>
            <div className='flex justify-center mb-14'>
                <p className='round bg-primary anim text-[#18191B] 2xl:text-5xl md:text-3xl text-[5vw] rounded-full 2xl:px-10 md:px-8 px-[2.4vw] 2xl:pt-3 md:pt-2 pt-[1.5vw] md:leading-none leading-[3.5vw]'>LOAD MORE</p>
            </div>
        </div>
        <CommitModel open={stakeOpen} setOpen={setStakeOpen}/>
    </>
    
  )
}

export default StakeGrid

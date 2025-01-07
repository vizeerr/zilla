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
        <div className='sm:w-[80%] w-[90%] mx-auto bg-[#18191B] shadow-[20px_20px_40px_0px_#00000040] sm:rounded-[2.8vw] rounded-[3.3vw] overflow-hidden'>
            <div className='flex  sm:flex-row flex-col  justify-between sm:items-center  bg-[#23252A] sm:py-[1vw]  sm:px-[3.9vw] '>
                <p className='text-white font-montserrat font-[900] text-start sm:text-[2.6vw] text-[3.8vw] sm:py-0 sm:px-0 py-[2.1vw] px-[4.8vw]'>Launch<span className='text-primary'>pool</span></p>
                <div className='flex sm:gap-[0.8vw] sm:justify-center justify-around items-center sm:bg-transparent bg-[#363940] sm:py-0 sm:px-0 py-[2.1vw] px-[4vw]'>
                
                    <p onClick={()=>setFilter(0)} className={`${filter==0?"bg-primary text-[#18191B]" :"bg-[#181818] text-white"} shadow-[3px_9px_23.1px_0px_#00000040]  anim  font-montserrat sm:text-[1vw] text-[2.9vw] font-[800] sm:px-[1vw] px-[2.8vw] sm:py-[0.3vw] py-[0.6vw]  rounded-full `}>All</p>
                    <p onClick={()=>setFilter(1)} className={`${filter==1?"bg-primary text-[#18191B]" :"bg-[#181818] text-white"}  shadow-[3px_9px_23.1px_0px_#00000040] anim  font-montserrat sm:text-[1vw] text-[2.9vw] font-[800] sm:px-[1vw] px-[2.8vw] sm:py-[0.3vw] py-[0.6vw]  rounded-full `}>Ongoing</p>
                    <p onClick={()=>setFilter(2)} className={`${filter==2?"bg-primary text-[#18191B]" :"bg-[#181818] text-white"}  shadow-[3px_9px_23.1px_0px_#00000040] anim  font-montserrat sm:text-[1vw] text-[2.9vw] font-[800] sm:px-[1vw] px-[2.8vw] sm:py-[0.3vw] py-[0.6vw]  rounded-full `}>Completed</p>
                    <p onClick={()=>setFilter(3)} className={`${filter==3?"bg-primary text-[#18191B]" :"bg-[#181818] text-white"}  shadow-[3px_9px_23.1px_0px_#00000040] anim  font-montserrat sm:text-[1vw] text-[2.9vw] font-[800] sm:px-[1vw] px-[2.8vw] sm:py-[0.3vw] py-[0.6vw] rounded-full `}>Participated</p>
                    
                
                
                
                </div>
            </div>
            <div className='flex flex-col sm:gap-[2vw] gap-[3.3vw] sm:my-[2.6vw] my-[3.8vw] mx-auto sm:w-[88%] w-[95%]'>
                {allTokens.map((data, index) => (
                    <StakeCard setStakeOpen={setStakeOpen} key={index} data={data}   />
                ))}
            </div>
            <div className='flex justify-center mb-[3.1vw]'>
                <p className='round bg-primary anim text-[#18191B] text-[2.2vw] rounded-full px-[1.8vw] pt-[0.6vw] leading-[2.8vw]'>LOAD MORE</p>
            </div>
        </div>
        <CommitModel open={stakeOpen} setOpen={setStakeOpen}/>
    </>
    
  )
}

export default StakeGrid

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
        <div className='w-[80%] mx-auto bg-[#18191B] shadow-[20px_20px_40px_0px_#00000040] rounded-[2.8vw] overflow-hidden'>
            <div className='flex justify-between items-center bg-[#23252A] py-[1vw] px-[3.9vw]'>
                <p className='text-white font-montserrat font-[900] text-[2.6vw] '>Launch<span className='text-primary'>pool</span></p>
                <div className='flex gap-[0.8vw] items-center'>
                    
                    <p onClick={()=>setFilter(0)} className={`${filter==0?"bg-primary text-[#18191B]" :"bg-[#181818] text-white"} shadow-[3px_9px_23.1px_0px_#00000040]  anim  font-montserrat text-[1vw] font-[800] px-[1vw] py-[6px] rounded-full `}>All</p>
                    <p onClick={()=>setFilter(1)} className={`${filter==1?"bg-primary text-[#18191B]" :"bg-[#181818] text-white"}  shadow-[3px_9px_23.1px_0px_#00000040] anim  font-montserrat text-[1vw] font-[800] px-[1vw] py-[6px] rounded-full `}>Ongoing</p>
                    <p onClick={()=>setFilter(2)} className={`${filter==2?"bg-primary text-[#18191B]" :"bg-[#181818] text-white"}  shadow-[3px_9px_23.1px_0px_#00000040] anim  font-montserrat text-[1vw] font-[800] px-[1vw] py-[6px] rounded-full `}>Completed</p>
                    <p onClick={()=>setFilter(3)} className={`${filter==3?"bg-primary text-[#18191B]" :"bg-[#181818] text-white"}  shadow-[3px_9px_23.1px_0px_#00000040] anim  font-montserrat text-[1vw] font-[800] px-[1vw] py-[6px] rounded-full `}>Participated</p>
                    
                
                
                
                </div>
            </div>
            <div className='flex flex-col gap-[2vw] my-[2.6vw] mx-auto w-[88%]'>
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

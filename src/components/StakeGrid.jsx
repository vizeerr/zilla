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
        <div className='md:w-[80%] w-[90%] mx-auto bg-[#18191B] shadow-[20px_20px_40px_0px_#00000040] md:rounded-[2.8vw] rounded-[3.3vw] overflow-hidden'>
            <div className='flex  md:flex-row flex-col  justify-between md:items-center  bg-[#23252A] md:py-[1vw]  md:px-[3.9vw] '>
                <p className='text-white font-montserrat font-[900] text-start md:text-[2.6vw] text-[4vw] md:py-0 md:px-0 py-[2.1vw] px-[4.8vw]'>Launch<span className='text-primary'>pool</span></p>
                <div className='flex md:gap-[0.8vw] md:justify-center justify-around items-center md:bg-transparent bg-[#363940] md:py-0 md:px-0 py-[2.1vw] px-[4vw]'>
                
                    <p onClick={()=>setFilter(0)} className={`${filter==0?"bg-primary text-[#18191B]" :"bg-[#181818] text-white"} shadow-[3px_9px_23.1px_0px_#00000040]  anim  font-montserrat md:text-[1vw] text-[2.4vw] font-[800] md:px-[1vw] px-[2.8vw] md:py-[0.3vw] py-[0.6vw]  rounded-full `}>All</p>
                    <p onClick={()=>setFilter(1)} className={`${filter==1?"bg-primary text-[#18191B]" :"bg-[#181818] text-white"}  shadow-[3px_9px_23.1px_0px_#00000040] anim  font-montserrat md:text-[1vw] text-[2.4vw] font-[800] md:px-[1vw] px-[2.8vw] md:py-[0.3vw] py-[0.6vw]  rounded-full `}>Ongoing</p>
                    <p onClick={()=>setFilter(2)} className={`${filter==2?"bg-primary text-[#18191B]" :"bg-[#181818] text-white"}  shadow-[3px_9px_23.1px_0px_#00000040] anim  font-montserrat md:text-[1vw] text-[2.4vw] font-[800] md:px-[1vw] px-[2.8vw] md:py-[0.3vw] py-[0.6vw]  rounded-full `}>Completed</p>
                    <p onClick={()=>setFilter(3)} className={`${filter==3?"bg-primary text-[#18191B]" :"bg-[#181818] text-white"}  shadow-[3px_9px_23.1px_0px_#00000040] anim  font-montserrat md:text-[1vw] text-[2.4vw] font-[800] md:px-[1vw] px-[2.8vw] md:py-[0.3vw] py-[0.6vw] rounded-full `}>Participated</p>
            
                
                </div>
            </div>
            <div className='flex flex-col md:gap-[2vw] gap-[3.3vw] md:my-[2.6vw] my-[3.8vw] mx-auto md:w-[88%] w-[95%]'>
                {allTokens.map((data, index) => (
                    <StakeCard setStakeOpen={setStakeOpen} key={index} data={data}   />
                ))}
            </div>
            <div className='flex justify-center mb-[3.1vw]'>
                <p className='round bg-primary anim text-[#18191B] md:text-[2.2vw] text-[5vw] rounded-full md:px-[1.8vw] px-[2.4vw] md:pt-[0.6vw] pt-[1.5vw] md:leading-[2.8vw] leading-[3.5vw]'>LOAD MORE</p>
            </div>
        </div>
        <CommitModel open={stakeOpen} setOpen={setStakeOpen}/>
    </>
    
  )
}

export default StakeGrid

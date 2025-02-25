
"use client"
import React, { useState } from 'react'
import cam from "@/assets/cam.png"
import Image from 'next/image'
import LaunchFooter from './LaunchFooter'
import TickerModel from './TickerModel'

const LaunchForm = () => {  
    const [ticker,setTicker] = useState("")
    const [openTic,setOpenTic] =useState(true)
  
    return (
    <>
    
    <div className='md:pt-10 pt-[8.4vw]'>

      <div>
        <h1 className='font-montserrat font-[900] text-white 2xl:text-4xl md:text-3xl text-[4.7vw] text-center'>LAUNCH YOUR <span className='text-primary'>TOKEN</span></h1>
       </div>
      <div className='w-full 2xl:mt-10 mt-8'>

        <div className='bg-[#222227] font-montserrat 2xl:w-[50rem] md:w-[35rem] w-[88vw] 2xl:p-12 md:p-9 p-[4.8vw] 2xl:rounded-[2.8rem] md:rounded-[2.5rem] rounded-[3.4vw] shadow-[26px_25px_51.4px_0px_#00000040] mx-auto'>
          <div className='flex justify-between 2xl:gap-14 md:gap-9 gap-[4.1vw]'>
            <div className='w-full'>
              <div>
                <p className='text-primary 2xl:text-lg md:text-sm text-[2.1vw] font-[800] '>NAME</p>
                <input type="text" placeholder='ENTER TOKEN NAME' className='border-0 2xl:h-[2.8rem] md:h-[2.2rem] h-[6vw] md:md:mt-1 mt-[0.8vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white 2xl:text-sm md:text-[0.7rem] text-[2.3vw] 2xl:px-4 md:px-3 px-[2.4vw] 2xl:rounded-[0.8rem] md:rounded-[0.6rem] rounded-[0.9vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
              <div>
                <div className='flex 2xl:mt-5 md:mt-3 mt-[2vw] items-center 2xl:gap-3 md:gap-2 gap-[1vw]'>
                  <p className='text-primary  2xl:text-lg md:text-sm text-[2.1vw]  font-[800] '>TICKER</p>
                  <p className={` ${ticker.length>10?"block":"hidden"} text-[#FF2F61] font-[600] 2xl:text-sm md:text-[0.55rem] text-[1.4vw] `}>*Ticker cannot be more than 10 charachters</p>
                </div>
                <input type="text" onChange={(e)=>{
                  setTicker(e.target.value)
                }} placeholder='ENTER TOKEN TICKER (10 CHARACTERS)' className='border-0 2xl:h-[2.8rem] md:h-[2.2rem] h-[6vw] md:md:mt-1 mt-[0.8vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white 2xl:text-sm md:text-[0.7rem] text-[2.3vw] 2xl:px-4 md:px-3 px-[2.4vw] 2xl:rounded-[0.8rem] md:rounded-[0.6rem] rounded-[0.9vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
            </div>
            <div className='bg-[#38383F] mt-1 flex flex-col justify-center items-center  2xl:rounded-[1.7rem] md:rounded-[1.3rem] rounded-[3.3vw] 2xl:w-52 md:w-36 w-[25vw] 2xl:h-48 md:h-36 h-[25vw] md:border-[2px] border-[2px] border-[#A8FF2F] md:p-[2.8rem] p-[7.2vw]'>
              <div className='2xl:w-[4.5rem] md:w-[3rem] w-[9.5vw]'>
                <Image unoptimized={true} alt="camera" className='w-full' src={cam}/>
              </div>
              <div>
                <p className='font-bebasneue  font-[400] text-center 2xl:mt-5 md:mt-3 mt-2 mb-0 2xl:text-base md:text-sm text-[2.1vw] mx-auto text-[#65656A] '>JPEG/PNG/WEBP/GIF</p>
                <p className='font-bebasneue  font-[400] text-center 2xl:text-xs md:text-[0.55rem] text-[2.1vw]  m-0 mx-auto text-[#65656A] '>LESS THAN 4MB</p>
              </div>
            </div>

          </div>

          <div>
                <p className='text-primary 2xl:text-lg md:text-sm text-[2.1vw] font-[800]'>DESCRIPTION</p>
                <textarea  placeholder='ENTER TOKEN DESCRIPTION' className='border-0 2xl:h-[7.5rem] md:h-[5rem] h-[16vw] md:mt-1 mt-[0.8vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white 2xl:text-sm md:text-[0.7rem] text-[2.3vw] 2xl:px-4 md:px-3 px-[2.4vw] py-2 2xl:rounded-[0.8rem] md:rounded-[0.6rem] rounded-[1.4vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
            <div className='flex md:flex-row flex-col md:gap-8 w-full'>
              <div className='w-full'>
                <p className='text-primary 2xl:text-lg md:text-sm text-[2.1vw] font-[800] 2xl:mt-5 md:mt-3 mt-[2vw]'>TWITTER</p>
                <input type="text" placeholder='OPTIONAL' className='border-0 2xl:h-[2.8rem] md:h-[2.2rem] h-[6vw] md:md:mt-1 mt-[0.8vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white 2xl:text-sm md:text-[0.7rem] text-[2.3vw] 2xl:px-4 md:px-3 px-[2.4vw] 2xl:rounded-[0.8rem] md:rounded-[0.6rem] rounded-[0.9vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
              <div className='w-full'>
                <p className='text-primary 2xl:text-lg md:text-sm text-[2.1vw] font-[800] 2xl:mt-5 md:mt-3 mt-[2vw]'>TELEGRAM</p>
                <input type="text" placeholder='OPTIONAL' className='border-0 2xl:h-[2.8rem] md:h-[2.2rem] h-[6vw] md:md:mt-1 mt-[0.8vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white 2xl:text-sm md:text-[0.7rem] text-[2.3vw] 2xl:px-4 md:px-3 px-[2.4vw] 2xl:rounded-[0.8rem] md:rounded-[0.6rem] rounded-[0.9vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
            </div>

            <div>
                <p className='text-primary 2xl:text-lg md:text-sm text-[2.1vw] font-[800] 2xl:mt-5 md:mt-3 mt-[2vw]'>WEBSITE</p>
                <input type="text" placeholder='OPTIONAL' className='border-0 2xl:h-[2.8rem] md:h-[2.2rem] h-[6vw] md:md:mt-1 mt-[0.8vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white 2xl:text-sm md:text-[0.7rem] text-[2.3vw] 2xl:px-4 md:px-3 px-[2.4vw] 2xl:rounded-[0.8rem] md:rounded-[0.6rem] rounded-[0.9vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
              
              <div className='w-full flex justify-center 2xl:mt-8 md:mt-6 mt-[7.2vw]'>
                <button onClick={()=>setOpenTic(true)} className='anim border-0 bg-primary shadow-[0px_4px_4px_0px_#00000040] text-[#38383F] mx-auto round font-[500] 2xl:text-5xl md:text-3xl text-[5.8vw] 2xl:w-[12rem] md:w-[8.5rem] w-[28vw] md:leading-none leading-[6vw] 2xl:pt-[0.6rem] md:pt-[0.4rem] pt-[1.2vw] rounded-full'>LAUNCH</button>
              </div>
              <p className="2xl:text-lg md:text-xs text-[2.8vw] font-montserrat font-[800] text-white text-center 2xl:mt-6 md:mt-4 mt-[4vw]">Receive <span className='text-primary'>0.1 ETH</span> when your <span className='text-primary'>token completes its bonding curve</span></p>
        </div>

      </div>
      
      </div>
    
    <TickerModel openTic={openTic} setOpenTic={setOpenTic}/>
    </>
  )
}

export default LaunchForm

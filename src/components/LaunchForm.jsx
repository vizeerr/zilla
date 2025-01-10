"use client"
import React, { useState } from 'react'
import cam from "@/assets/cam.png"
import Image from 'next/image'
import LaunchFooter from './LaunchFooter'

const LaunchForm = () => {  
    const [ticker,setTicker] = useState("")
  return (
    <div className='pt-[1.5vw]'>

      <div>
        <h1 className='font-montserrat font-[900] text-white text-[1.8vw] text-center'>LAUNCH YOUR <span className='text-primary'>TOKEN</span></h1>
        {/* <p className='text-white opacity-45 font-[700] font-montserrat text-[0.8vw]  text-center mt-[1vw]'>No presale, No Team Allocation, Lower Gas</p> */}
      </div>
      <div className='flex justify-center items-center w-full'>

      {/* <LaunchFooter/> */}

        <div className='bg-[#222227] font-montserrat w-[38vw] p-[2vw] rounded-[2.3vw] shadow-[26px_25px_51.4px_0px_#00000040] mx-auto my-[0.95vw] '>
          <div className='flex justify-between gap-[2.5vw]'>
            <div className='w-full'>
              <div>
                <p className='text-primary text-[1vw] font-[800] '>NAME</p>
                <input type="text" placeholder='ENTER TOKEN NAME' className='border-0 h-[2.5vw] mt-[0.2vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[0.8vw] px-[0.9vw] py-[0.25vw] rounded-[0.6vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
              <div>
                <div className='flex mt-[0.6vw] items-center gap-[0.4vw]'>
                  <p className='text-primary text-[1vw] font-[800] '>TICKER</p>
                  <p className={` ${ticker.length>10?"block":"hidden"} text-[#FF2F61] font-[600] `}>*Ticker cannot be more than 10 charachters</p>
                </div>
                <input type="text" onChange={(e)=>{
                  setTicker(e.target.value)
                }} placeholder='ENTER TOKEN TICKER (10 CHARACTERS)' className='border-0 h-[2.5vw] mt-[0.2vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[0.8vw] px-[0.9vw] py-[0.25vw] rounded-[0.6vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
            </div>
            <div className='bg-[#38383F] flex flex-col justify-center items-center mt-[1.25vw] rounded-[1.4vw] w-[8.5vw] h-[8.5vw] border-[0.2vw]  border-[#A8FF2F] p-[2.8vw]'>
              <div className='w-[3vw]'>
                <Image unoptimized={true} alt="camera" width={180} src={cam}/>
              </div>
              <div>
                <p className='font-bebasneue  font-[400] text-center mt-[1.2vw] mb-0 text-[0.57vw] mx-auto text-[#65656A] '>JPEG/PNG/WEBP/GIF</p>
                <p className='font-bebasneue  font-[400] text-center text-[0.57vw] m-0 mx-auto text-[#65656A] '>LESS THAN 4MB</p>
              </div>
            </div>

          </div>

          <div>
                <p className='text-primary text-[1vw] font-[800]'>DESCRIPTION</p>
                <textarea  placeholder='ENTER TOKEN DESCRIPTION' className='border-0 h-[3.5vw] mt-[0.2vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[0.8vw] px-[0.9vw] py-[0.25vw] rounded-[0.6vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
            </div>
            <div className='flex flex-row gap-[3.4vw] w-full'>
              <div className='w-full'>
                <p className='text-primary  text-[1vw] font-[800] mt-[0.8vw]'>TWITTER</p>
                <input type="text" placeholder='OPTIONAL' className='border-0 h-[2.5vw] mt-[0.2vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[0.8vw] px-[0.9vw] py-[0.25vw] rounded-[0.6vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
              <div className='w-full'>
                <p className='text-primary  text-[1vw] font-[800] mt-[0.8vw]'>TELEGRAM</p>
                <input type="text" placeholder='OPTIONAL' className='border-0 h-[2.5vw] mt-[0.2vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[0.8vw] px-[0.9vw] py-[0.25vw] rounded-[0.6vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
            </div>

            <div>
                <p className='text-primary  text-[1vw] font-[800] mt-[0.8vw]'>WEBSITE</p>
                <input type="text" placeholder='OPTIONAL' className='border-0 h-[2.5vw] mt-[0.2vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[0.8vw] px-[0.9vw] py-[0.25vw] rounded-[0.6vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
              <div>
                <p className='text-primary  text-[1vw] font-[800] mt-[0.8vw]'>INITIAL BUY</p>
                <div className='flex justify-center items-center h-[2.5vw] mt-[0.2vw] w-full bg-[#38383F] font-[400] font-bebasneue m-0 text-white  text-[1vw] px-[0.8vw] py-[0.5vw] rounded-[0.6vw] shadow-[20px_20px_33.3px_0px_#00000066]'>
                  <input type="text" placeholder='ENTER AMOUNT' className='border-0 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue text-white text-[0.8vw]'/>
                    <span className='w-[0.3vw] rounded-full  bg-white opacity-20 h-full'></span>
                  <p className='font-bebasneue font-[400] ms-[0.7vw] w-[10vw] text-[1vw] text-white  '>USER BALANCE : <span className='text-primary'>0 ETH</span></p>
                </div>
              </div>
              <div className='w-full flex justify-center mt-[1.7vw]'>
                <button className='anim border-0 bg-primary shadow-[0px_4px_4px_0px_#00000040] text-[#38383F] mx-auto round font-[500] text-[2vw] w-[9vw] leading-[2.2vw] pt-[0.4vw] rounded-full'>LAUNCH</button>
              </div>
              <p className="text-[0.9vw] font-montserrat font-[800] text-white text-center mt-[0.9vw]">Receive <span className='text-primary'>0.1 ETH</span> when your <span className='text-primary'>token completes its bonding curve</span></p>
        </div>

      </div>
      
      </div>
  )
}

export default LaunchForm

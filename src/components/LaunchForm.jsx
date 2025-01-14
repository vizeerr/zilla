
"use client"
import React, { useState } from 'react'
import cam from "@/assets/cam.png"
import Image from 'next/image'
import LaunchFooter from './LaunchFooter'

const LaunchForm = () => {  
    const [ticker,setTicker] = useState("")
  return (
    <div className='md:pt-[2vw] pt-[8.4vw]'>

      <div>
        <h1 className='font-montserrat font-[900] text-white md:text-[2vw] text-[4.7vw] text-center'>LAUNCH YOUR <span className='text-primary'>TOKEN</span></h1>
        {/* <p className='text-white opacity-45 font-[700] font-montserrat md:text-[17px] text-[2.3vw] text-center md:mt-5 mt-1'>No presale, No Team Allocation, Lower Gas</p> */}
      </div>
      <div className='flex flex-row md:px-[0.8vw] justify-center items-center w-full'>

      {/* <LaunchFooter/> */}

        <div className='bg-[#222227] font-montserrat md:w-[41vw] w-[88vw] md:p-[3.1vw] p-[4.8vw] md:rounded-[2.5vw] rounded-[3.4vw] shadow-[26px_25px_51.4px_0px_#00000040] mx-auto md:my-[2vw] my-[5.3vw]'>
          <div className='flex justify-between md:gap-[3vw] gap-[4.1vw]'>
            <div className='w-full'>
              <div>
                <p className='text-primary md:text-[1vw] text-[2.1vw] font-[800] '>NAME</p>
                <input type="text" placeholder='ENTER TOKEN NAME' className='border-0 md:h-[2.5vw] h-[6vw] md:md:mt-[0.2vw] mt-[0.8vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white md:text-[0.8vw] text-[2.3vw] md:px-[0.9vw] px-[2.4vw] py-[5px] md:rounded-[0.6vw] rounded-[0.9vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
              <div>
                <div className='flex md:mt-[0.8vw] mt-[2vw] items-center md:gap-[0.4vw] gap-[1vw]'>
                  <p className='text-primary md:text-[1vw] text-[2.1vw] font-[800] '>TICKER</p>
                  <p className={` ${ticker.length>10?"block":"hidden"} text-[#FF2F61] font-[600] md:text-[0.8vw] text-[1.4vw] `}>*Ticker cannot be more than 10 charachters</p>
                </div>
                <input type="text" onChange={(e)=>{
                  setTicker(e.target.value)
                }} placeholder='ENTER TOKEN TICKER (10 CHARACTERS)' className='border-0 md:h-[2.5vw] h-[6vw] md:md:mt-[0.2vw] mt-[0.8vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white md:text-[0.8vw] text-[2.3vw] md:px-[0.9vw] px-[2.4vw] py-[5px] md:rounded-[0.6vw] rounded-[0.9vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
            </div>
            <div className='bg-[#38383F] flex flex-col justify-center items-center  md:rounded-[1.4vw] rounded-[3.3vw] md:w-[10.5vw] w-[25vw] md:h-[10.5vw] h-[25vw] md:border-[0.2vw] border-[2px] border-[#A8FF2F] md:p-[2.8vw] p-[7.2vw]'>
              <div className='md:w-[4.1vw] w-[9.5vw]'>
                <Image unoptimized={true} alt="camera" className='w-full' src={cam}/>
              </div>
              <div>
                <p className='font-bebasneue  font-[400] text-center md:mt-[1.2vw] mt-2 mb-0 md:text-[0.9vw] text-[2.1vw] mx-auto text-[#65656A] '>JPEG/PNG/WEBP/GIF</p>
                <p className='font-bebasneue  font-[400] text-center md:text-[0.7vw] text-[2.1vw]  m-0 mx-auto text-[#65656A] '>LESS THAN 4MB</p>
              </div>
            </div>

          </div>

          <div>
                <p className='text-primary md:text-[1vw] text-[2.1vw] font-[800]'>DESCRIPTION</p>
                <textarea  placeholder='ENTER TOKEN DESCRIPTION' className='border-0 md:h-[4.5vw] h-[9.7vw] md:mt-[0.2vw] mt-[0.8vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white md:text-[0.8vw] text-[2.3vw] md:px-[0.9vw] px-[2.4vw] py-[0.5vw] md:rounded-[0.6vw] rounded-[1.4vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
            <div className='flex md:flex-row flex-col md:gap-[2vw] w-full'>
              <div className='w-full'>
                <p className='text-primary md:text-[1vw] text-[2.1vw] font-[800] md:mt-[0.8vw] mt-[2vw]'>TWITTER</p>
                <input type="text" placeholder='OPTIONAL' className='border-0 md:h-[2.5vw] h-[6vw] md:mt-[0.2vw] mt-[0.8vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white md:text-[0.8vw] text-[2.3vw] md:px-[0.9vw] px-[2.4vw] py-[0.2vw] md:rounded-[0.6vw] rounded-[0.9vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
              <div className='w-full'>
                <p className='text-primary md:text-[1vw] text-[2.1vw] font-[800] md:mt-[0.8vw] mt-[2vw]'>TELEGRAM</p>
                <input type="text" placeholder='OPTIONAL' className='border-0 md:h-[2.5vw] h-[6vw] md:mt-[0.2vw] mt-[0.8vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white md:text-[0.8vw] text-[2.3vw] md:px-[0.9vw] px-[2.4vw] py-[0.2vw] md:rounded-[0.6vw] rounded-[0.9vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
            </div>

            <div>
                <p className='text-primary md:text-[1vw] text-[2.1vw] font-[800] md:mt-[0.8vw] mt-[2vw]'>WEBSITE</p>
                <input type="text" placeholder='OPTIONAL' className='border-0 md:h-[2.5vw] h-[6vw] md:mt-[0.2vw] mt-[0.8vw] w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white md:text-[0.8vw] text-[2.3vw] md:px-[0.9vw] px-[2.4vw] py-[0.2vw] md:rounded-[0.6vw] rounded-[0.9vw] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
              <div>
                <p className='text-primary md:text-[1vw] text-[2.1vw] font-[800] md:mt-[0.8vw] mt-[2vw]'>INITIAL BUY</p>

                <div className='flex justify-center items-center md:h-[2.5vw] h-[6vw] md:mt-[0.2vw] mt-[0.8vw] w-full bg-[#38383F] font-[400] font-bebasneue m-0 text-white md:text-[1vw] text-[2.1vw] md:px-[0.8vw] px-[2.4vw] md:py-[0.5vw] py-[0.9vw] md:rounded-[0.6vw] rounded-[0.9vw] shadow-[20px_20px_33.3px_0px_#00000066]'>
                  <input type="text" placeholder='ENTER AMOUNT' className='border-0 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue text-white md:text-[0.8vw] text-[2.3vw]'/>
                    <span className='md:w-[0.3vw] w-[0.5vw] rounded-full  bg-white opacity-20 h-full'></span>
                  <p className='font-bebasneue font-[400] md:ms-[0.7vw] ms-[2vw] md:w-[10.4vw] w-[18vw] md:text-[1vw] text-[2.1vw] text-white  '>USER BALANCE : <span className='text-primary'>0 ETH</span></p>
                </div>
              
              </div>
              <div className='w-full flex justify-center md:mt-[2.6vw] mt-[7.2vw]'>
                <button className='anim border-0 bg-primary shadow-[0px_4px_4px_0px_#00000040] text-[#38383F] mx-auto round font-[500] md:text-[2.3vw] text-[5.8vw] md:w-[11.6vw] w-[28vw] md:leading-[2.6vw] leading-[6vw] md:pt-[0.6vw] pt-[1.2vw] rounded-full'>LAUNCH</button>
              </div>
              <p className="md:text-[1vw] text-[2vw] font-montserrat font-[800] text-white text-center md:mt-[2.4vw] mt-[4vw]">Receive <span className='text-primary'>0.1 ETH</span> when your <span className='text-primary'>token completes its bonding curve</span></p>
        </div>

      </div>
      
      </div>
  )
}

export default LaunchForm

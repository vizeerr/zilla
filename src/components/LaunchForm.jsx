"use client"
import React, { useState } from 'react'
import cam from "@/assets/cam.png"
import Image from 'next/image'
import LaunchFooter from './LaunchFooter'

const LaunchForm = () => {  
    const [ticker,setTicker] = useState("")
  return (
    <div className='pt-10'>

      <div>
        <h1 className='font-montserrat font-[900] text-white md:text-[40px] text-[4.7vw] text-center'>LAUNCH YOUR <span className='text-primary'>TOKEN</span></h1>
        <p className='text-white opacity-45 font-[700] font-montserrat md:text-[17px] text-[2.3vw] text-center md:mt-5 mt-1'>No presale, No Team Allocation, Lower Gas</p>
      </div>
      <div className='flex lg:flex-row flex-col-reverse md:px-4 justify-center items-center w-full'>

      {/* <LaunchFooter/> */}

        <div className='bg-[#222227] font-montserrat md:w-[793px] w-[86vw] 2xl:p-[60px] md:p-[30px] p-[20px] md:rounded-[48px] rounded-[14px] shadow-[26px_25px_51.4px_0px_#00000040] mx-auto md:my-10 my-[22px]'>
          <div className='flex justify-between md:gap-[89px] gap-[17px]'>
            <div className='w-full'>
              <div>
                <p className='text-primary md:text-[20px] text-[2.1vw] font-[800] '>NAME</p>
                <input type="text" placeholder='ENTER TOKEN NAME' className='border-0 md:h-[48px] h-[25px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white md:text-[16px] text-[2.3vw] md:px-[18px] px-[10px] py-[5px] md:rounded-[13px] rounded-[4px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
              <div>
                <div className='flex mt-4 items-center gap-2'>
                  <p className='text-primary md:text-[20px] text-[2.1vw] font-[800] '>TICKER</p>
                  <p className={` ${ticker.length>10?"block":"hidden"} text-[#FF2F61] font-[600] `}>*Ticker cannot be more than 10 charachters</p>
                </div>
                <input type="text" onChange={(e)=>{
                  setTicker(e.target.value)
                }} placeholder='ENTER TOKEN TICKER (10 CHARACTERS)' className='border-0 md:h-[48px] h-[25px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white md:text-[16px] text-[2.3vw] md:px-[18px] px-[10px] py-[5px] md:rounded-[13px] rounded-[4px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
            </div>
            <div className='bg-[#38383F] flex flex-col justify-center items-center md:mt-6 mt-2 md:rounded-[27px] rounded-[14px] md:w-[200px] w-[25vw] md:h-[200px] h-[25vw] md:border-[4px] border-[2px] border-[#A8FF2F] md:p-[55px] p-[30px]'>
              <div className='md:w-[80px] w-[9.5vw]'>
                <Image unoptimized={true} alt="camera" width={180} src={cam}/>
              </div>
              <div>
                <p className='font-bebasneue  font-[400] text-center md:mt-6 mt-2 mb-0 md:text-[11px] text-[2.1vw] mx-auto text-[#65656A] '>JPEG/PNG/WEBP/GIF</p>
                <p className='font-bebasneue  font-[400] text-center md:text-[11px] text-[2.1vw]  m-0 mx-auto text-[#65656A] '>LESS THAN 4MB</p>
              </div>
            </div>

          </div>

          <div>
                <p className='text-primary md:text-[20px] text-[2.1vw] font-[800]'>DESCRIPTION</p>
                <textarea  placeholder='ENTER TOKEN DESCRIPTION' className='border-0 md:h-[68px] h-[40px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white md:text-[16px] text-[2.3vw] md:px-[18px] px-[10px] py-[5px] md:rounded-[13px] rounded-[4px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
            <div className='flex md:flex-row flex-col md:gap-[66px] w-full'>
              <div className='w-full'>
                <p className='text-primary md:text-[20px] text-[2.1vw] font-[800] mt-4'>TWITTER</p>
                <input type="text" placeholder='OPTIONAL' className='border-0 md:h-[48px] h-[25px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white md:text-[16px] text-[2.3vw] md:px-[18px] px-[10px] py-[5px] md:rounded-[13px] rounded-[4px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
              <div className='w-full'>
                <p className='text-primary md:text-[20px] text-[2.1vw] font-[800] mt-4'>TELEGRAM</p>
                <input type="text" placeholder='OPTIONAL' className='border-0 md:h-[48px] h-[25px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white md:text-[16px] text-[2.3vw] md:px-[18px] px-[10px] py-[5px] md:rounded-[13px] rounded-[4px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
            </div>

            <div>
                <p className='text-primary md:text-[20px] text-[2.1vw] font-[800] mt-4'>WEBSITE</p>
                <input type="text" placeholder='OPTIONAL' className='border-0 md:h-[48px] h-[25px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white md:text-[16px] text-[2.3vw] md:px-[18px] px-[10px] py-[5px] md:rounded-[13px] rounded-[4px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
              <div>
                <p className='text-primary md:text-[20px] text-[2.1vw] font-[800] mt-4'>INITIAL BUY</p>
                <div className='flex justify-center items-center md:h-[48px] h-[25px] mt-1 w-full bg-[#38383F] font-[400] font-bebasneue m-0 text-white md:text-[20px] text-[2.1vw] md:px-[16px] px-[8px] md:py-[10px] py-[4px] md:rounded-[13px] rounded-[4px] shadow-[20px_20px_33.3px_0px_#00000066]'>
                  <input type="text" placeholder='ENTER AMOUNT' className='border-0 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue text-white md:text-[16px] text-[2.3vw]'/>
                    <span className='md:w-[6px] w-[2px] rounded-full  bg-white opacity-20 h-full'></span>
                  <p className='font-bebasneue font-[400] ms-[15px] md:w-[200px] w-[100px] md:text-[20px] text-[2.1vw] text-white  '>USER BALANCE : <span className='text-primary'>0 ETH</span></p>
                </div>
              </div>
              <div className='w-full flex justify-center md:mt-[50px] mt-[30px]'>
                <button className='anim border-0 bg-primary shadow-[0px_4px_4px_0px_#00000040] text-[#38383F] mx-auto round font-[500] md:text-[45px] text-[5.8vw] md:w-[224px] w-[28vw] md:leading-[50px] leading-[25px] md:pt-3 pt-[5px] rounded-full'>LAUNCH</button>
              </div>
              <p className="text-[1vw] font-montserrat font-[800] text-white text-center mt-[2.4vw]">Receive <span className='text-primary'>0.1 ETH</span> when your <span className='text-primary'>token completes its bonding curve</span></p>
        </div>

      </div>
      
      </div>
  )
}

export default LaunchForm

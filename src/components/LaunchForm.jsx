"use client"
import React, { useState } from 'react'
import cam from "@/assets/cam.png"
import Image from 'next/image'
import LaunchFooter from './LaunchFooter'

const LaunchForm = () => {
    const [ticker,setTicker] = useState("")
  return (
    <div className='mt-10 '>

      <div>
        <h1 className='font-montserrat font-[900] text-white text-[40px] text-center'>LAUNCH YOUR <span className='text-primary'>TOKEN</span></h1>
        <p className='text-white opacity-45 font-[700] font-montserrat text-[17px] text-center mt-5'>No presale, No Team Allocation, Lower Gas</p>
      </div>
      <div className='flex  justify-center items-center w-full'>

      <LaunchFooter/>

        <div className='bg-[#222227] font-montserrat w-[793px] p-[60px] rounded-[48px] shadow-[26px_25px_51.4px_0px_#00000040] mx-auto my-10'>
          <div className='flex justify-between gap-[89px]'>
            <div className='w-full'>
              <div>
                <p className='text-primary text-[20px] font-[800] '>NAME</p>
                <input type="text" placeholder='ENTER TOKEN NAME' className='border-0 h-[48px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[16px] px-[18px] py-[5px] rounded-[13px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
              <div>
                <div className='flex mt-4 items-center gap-2'>
                  <p className='text-primary text-[20px] font-[800] '>TICKER</p>
                  <p className={` ${ticker.length>10?"block":"hidden"} text-[#FF2F61] font-[600] `}>*Ticker cannot be more than 10 charachters</p>
                </div>
                <input type="text" onChange={(e)=>{
                  setTicker(e.target.value)
                }} placeholder='ENTER TOKEN TICKER (10 CHARACTERS)' className='border-0 h-[48px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[16px] px-[18px] py-[5px] rounded-[13px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
            </div>
            <div className='bg-[#38383F] flex flex-col justify-center items-center mt-6 rounded-[27px] w-[200px] h-[200px] border-[4px] border-[#A8FF2F] p-[55px]'>
              <Image unoptimized={true} alt="camera" width={180} src={cam}/>
              <div>

              <p className='font-bebasneue  font-[400] text-center mt-6 mb-0 text-[11px] mx-auto text-[#65656A] '>JPEG/PNG/WEBP/GIF</p>
              <p className='font-bebasneue  font-[400] text-center text-[11px] m-0 mx-auto text-[#65656A] '>LESS THAN 4MB</p>
              </div>
            </div>

          </div>

          <div>
                <p className='text-primary text-[20px] font-[800]'>DESCRIPTION</p>
                <textarea  placeholder='ENTER TOKEN DESCRIPTION' className='border-0 h-[68px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[16px] px-[18px] py-[5px] rounded-[13px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
            <div className='flex gap-[66px] w-full'>
              <div className='w-full'>
                <p className='text-primary text-[20px] font-[800] mt-4'>TWITTER</p>
                <input type="text" placeholder='OPTIONAL' className='border-0 h-[48px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[16px] px-[18px] py-[5px] rounded-[13px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
              <div className='w-full'>
                <p className='text-primary text-[20px] font-[800] mt-4'>TELEGRAM</p>
                <input type="text" placeholder='OPTIONAL' className='border-0 h-[48px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[16px] px-[18px] py-[5px] rounded-[13px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
            </div>

            <div>
                <p className='text-primary text-[20px] font-[800] mt-4'>WEBSITE</p>
                <input type="text" placeholder='OPTIONAL' className='border-0 h-[48px] mt-1 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue m-0 text-white text-[16px] px-[18px] py-[5px] rounded-[13px] shadow-[20px_20px_33.3px_0px_#00000066]'/>
              </div>
              <div>
                <p className='text-primary text-[20px] font-[800] mt-4'>INITIAL BUY</p>
                <div className='flex justify-center items-center h-[48px] mt-1 w-full bg-[#38383F] font-[400] font-bebasneue m-0 text-white text-[20px] px-[16px] py-[10px] rounded-[13px] shadow-[20px_20px_33.3px_0px_#00000066]'>
                  <input type="text" placeholder='ENTER AMOUNT' className='border-0 w-full bg-[#38383F] opacity-60 font-[400] font-bebasneue text-white text-[16px]'/>
                    <span className='w-[6px] rounded-full  bg-white opacity-20 h-full'></span>
                  <p className='font-bebasneue font-[400] ms-[15px] w-[200px] text-[20px] text-white  '>USER BALANCE : <span className='text-primary'>0 ETH</span></p>
                </div>
              </div>
              <div className='w-full flex justify-center mt-[67px]'>
              <button className='anim border-0 bg-primary shadow-[0px_4px_4px_0px_#00000040] text-[#38383F] mx-auto round font-[500] text-[45px] w-[224px] leading-[50px] pt-3 rounded-full'>LAUNCH</button>
              </div>
        </div>

      </div>
      
      </div>
  )
}

export default LaunchForm

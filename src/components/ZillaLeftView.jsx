"use client"
import React, { useState } from 'react'
import copy from "@/assets/copy.svg"
import Image from 'next/image'
import ZillaRightView from './ZillaRightView'

const ZillaLeftView  = () =>{
   const [copiedText,setCopiedText] = useState("0x123...599349");
  

  const handleCopy = async () => {
    await navigator.clipboard.writeText('0x12345697785566544551423404599349');
    setCopiedText('COPIED')
    setTimeout(()=>{
    setCopiedText('0x123...599349')

    },2000)
    };
  return (

    <div className='w-full'>
      <div className='bg-[#1B1C1E] sm:h-[700px]   shadow-[16.21px_16.21px_56.21px_0px_#0000004F] sm:rounded-[50px] rounded-[16px]'>
        <div className=' flex justify-between items-start'>
          
            <p className='font-[900] sm:pt-[38px] pt-[8px] sm:pb-[28px] pb-[10px]  sm:ps-[54px] ps-[12px]  font-montserrat sm:text-[35px] text-[14px] text-white'><span className='text-primary'>Live</span> Price <span className='text-primary'>Chart</span></p>
          
            <div className='bg-primary  sm:rounded-[0_50px] rounded-[0_25px] sm:w-[361px] w-[33vw] sm:py-[20px] py-[5px] text-center'>
                <p className='font-[800] font-montserrat sm:text-[35px] text-[3.2vw] text-[#262626] '>MCap : <span className='font-[900]'>19.9k</span></p>
            </div>
        </div>
        <div className='sm:px-[34px] sm:pb-[35px] px-[10px]'>
       
        <div className='w-full sm:h-[412px] h-[150px]  sm:rounded-[35px] rounded-[15px] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F]'>
        </div>

        <div className='sm:mt-[30px] mt-[10px] flex justify-between sm:gap-[30px] pb-[8px]'>
          <div className='sm:w-[263px] w-[20vw] sm:ps-[25px] ps-[8px] sm:pt-[20px] pt-[8px] sm:pb-[13px] pb-[8px] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] sm:sm:rounded-[20px] rounded-[6px] rounded-[6px]'>
            <p className='font-bebasneue text-primary sm:text-[20px] text-[2.3vw] font-[400]'>PRICE</p>
            <p className='font-montserrat font-[800] mt-[5px] sm:text-[20px] text-[2.3vw] text-white'>$0.000123</p>
          </div>
          <div className='sm:w-[220px] w-[17vw] sm:ps-[25px] ps-[8px] sm:pt-[20px] pt-[8px] sm:pb-[13px] pb-[8px]  bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] sm:rounded-[20px] rounded-[6px]'>
            <p className='font-bebasneue text-primary sm:text-[20px] text-[2.3vw] font-[400]'>24H CHANGE</p>
            <p className='font-montserrat font-[800] mt-[5px] sm:text-[20px] text-[2.3vw] text-white'>+5.67%</p>
          </div>
          <div className='sm:w-[265px] w-[20vw]  sm:ps-[25px] ps-[8px] sm:pt-[20px] pt-[8px] sm:pb-[13px] pb-[8px]  bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] sm:rounded-[20px] rounded-[6px]'>
            <p className='font-bebasneue text-primary sm:text-[20px] text-[2.3vw] font-[400]'>VOLUME</p>
            <p className='font-montserrat font-[800] mt-[5px] sm:text-[20px] text-[2.3vw] text-white'>$1,234,567</p>
          </div>
          <div className='sm:w-[330px] w-[23vw] sm:ps-[25px] ps-[8px] sm:pt-[20px] pt-[8px] sm:pb-[13px] pb-[8px]  bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] sm:rounded-[20px] rounded-[6px]'>
        
            <div className='flex gap-3 items-center'>
              <p className='font-bebasneue text-primary sm:text-[20px] text-[2.3vw] font-[400]'>Contact Address</p>
              <div className='sm:w-auto w-[10px]' >
                <Image src={copy} alt=''onClick={handleCopy}/>
              </div>
            </div>
            <p className='font-montserrat font-[800] mt-[5px] sm:text-[20px] text-[2.3vw] text-white'>{copiedText}</p>
          </div>
        </div>

        </div>
       
      
      </div>

      <div className='sm:hidden block mt-[18px]'>
        <ZillaRightView/>
      </div>

      <div className='bg-[#1B1C1E] sm:px-[34px] px-[15px] sm:mt-[56px] mt-[18px]  sm:pb-[35px] pb-[15px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] sm:rounded-[50px] rounded-[15px]'>
        <div className=' flex justify-between items-center'>
              <p className='font-[900] sm:pt-[38px] sm:pb-[48px] pb-[15px] sm:ps-[20px] pt-[15px]  font-montserrat sm:text-[35px] text-[3.2vw] text-white'><span className='text-primary'>Historical</span> Stage <span className='text-primary'>Tracker</span></p>
        </div>
        <div className='flex justify-around '>
          <p className='sm:w-[240px] w-[100px] text-center  font-montserrat font-[700] sm:text-[25px] text-[2vw] text-white text-opacity-35'>Date & Time (UTC)</p>
          <p className='sm:w-[305px] w-[110px] text-center  font-montserrat font-[700] sm:text-[25px] text-[2vw] text-white text-opacity-35'>Total rewards collected</p>
          <p className='sm:w-[84px] w-[40px] text-center font-montserrat font-[700] sm:text-[25px] text-[2vw] text-white text-opacity-35'>USD</p>
          <p className='sm:w-[215px] w-[100px] text-center font-montserrat   font-[700] sm:text-[25px] text-[2vw] text-white text-opacity-35'>Users Rewarded</p>
        </div>
        <div>
        
        <div className='sm:rounded-[35px] sm:mt-[13px] mt-[10px] rounded-[10px] bg-[#111111] sm:py-[40px] py-[13px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] '>
          <div className='space-y-1  sm:h-[180px] h-[90px]  overflow-x-hidden'>
            {[...Array(18)].map((index) => (
              <ul key={index} className='flex justify-around '>
                <li className='font-bebasneue  sm:w-[230px] w-[100px] text-center font-[400] sm:text-[25px] text-[2vw] text-white'>2023-06-15   <span className='text-primary'>14:30</span> </li>
                <li className='font-bebasneue sm:w-[295px] w-[110px] text-center font-[400] sm:text-[25px] text-[2vw] text-white'>500,000   <span className='text-primary'>Zilla</span> </li>
                <li className='font-bebasneue sm:w-[74px] w-[40px] text-center font-[400] sm:text-[25px] text-[2vw] text-white'>$   <span className='text-primary'>1,234</span> </li>
                <li className='font-bebasneue sm:w-[205px] w-[100px] text-center font-[400] sm:text-[25px] text-[2vw] text-white'>1,234 </li>

              </ul>

            ))}
          </div>
        </div>
        
        
        </div>
      </div>

    </div>

   
  )
}

export default ZillaLeftView

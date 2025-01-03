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

    <div className=''>
      <div className='bg-[#1B1C1E] 2xl:h-[700px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] 2xl:rounded-[50px] lg:rounded-[30px] rounded-[16px]'>
        <div className=' flex justify-between items-start'>
          
            <p className='font-[900] 2xl:pt-[38px] lg:pt-[20px] pt-[8px] 2x:pb-[28px] lg:pb-[20px] pb-[10px]  2xl:ps-[54px] lg:ps-[20px] ps-[12px]  font-montserrat 2xl:text-[35px] lg:text-[18px] text-[14px] text-white'><span className='text-primary'>Live</span> Price <span className='text-primary'>Chart</span></p>
          
            <div className='bg-primary  2xl:rounded-[0_50px] lg:rounded-[0_20px] rounded-[0_25px] 2xl:w-[361px] md:w-[28vw] w-[33vw] 2xl:py-[20px] py-[5px] text-center'>
                <p className='font-[800] font-montserrat 2xl:text-[35px] lg:text-[18px] text-[3.2vw] text-[#262626] '>MCap : <span className='font-[900]'>19.9k</span></p>
            </div>
        </div>
        <div className='2xl:px-[34px] lg:px-[20px] 2xl:pb-[35px] lg:pb-[14px] px-[10px]'>
       
        <div className='w-full 2xl:h-[412px] lg:h-[200px] h-[150px]  2xl:rounded-[35px] rounded-[15px] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F]'>
        </div>

        <div className='2xl:mt-[30px] lg:mt-[20px] mt-[10px] flex justify-between 2xl:gap-[30px] lg:gap-[15px] lg:pb-[0px] pb-[8px]'>
          <div className='2xl:w-[263px] lg:w-[15vw] w-[20vw] 2xl:ps-[25px] lg:ps-[12px] ps-[8px] 2xl:pt-[20px] lg:pt-[12px] pt-[8px] 2xl:pb-[13px] lg:pb-[12px] pb-[8px] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] lg:rounded-[14px] 2xl:rounded-[20px]  rounded-[6px]'>
            <p className='font-bebasneue text-primary 2xl:text-[18px] lg:text-[15px] text-[2.3vw] font-[400]'>PRICE</p>
            <p className='font-montserrat font-[800] mt-[5px] 2xl:text-[18px] lg:text-[15px]  text-[2.3vw] text-white'>$0.000123</p>
          </div>
          <div className='2xl:w-[220px] lg:w-[15vw] w-[17vw] 2xl:ps-[25px] lg:ps-[12px] ps-[8px] 2xl:pt-[20px] lg:pt-[12px] pt-[8px] 2xl:pb-[13px] lg:pb-[12px] pb-[8px] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] lg:rounded-[14px] 2xl:rounded-[20px]  rounded-[6px]'>
            <p className='font-bebasneue text-primary 2xl:text-[18px] lg:text-[15px] text-[2.3vw] font-[400]'>24H CHANGE</p>
            <p className='font-montserrat font-[800] mt-[5px] 2xl:text-[18px] lg:text-[15px] text-[2.3vw] text-white'>+5.67%</p>
          </div>
          <div className='2xl:w-[265px] lg:w-[15vw] w-[20vw]  2xl:ps-[25px] lg:ps-[12px] ps-[8px] 2xl:pt-[20px] lg:pt-[12px] pt-[8px] 2xl:pb-[13px] lg:pb-[12px] pb-[8px] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] lg:rounded-[14px] 2xl:rounded-[20px]  rounded-[6px]'>
            <p className='font-bebasneue text-primary 2xl:text-[18px] lg:text-[15px] text-[2.3vw] font-[400]'>VOLUME</p>
            <p className='font-montserrat font-[800] mt-[5px] 2xl:text-[18px] lg:text-[15px] text-[2.3vw] text-white'>$1,234,567</p>
          </div>
          <div className='2xl:w-[330px] lg:w-[15vw] w-[23vw] 2xl:ps-[25px] lg:ps-[12px] ps-[8px] 2xl:pt-[20px] lg:pt-[12px] pt-[8px] 2xl:pb-[13px] lg:pb-[12px] pb-[8px] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] lg:rounded-[14px] 2xl:rounded-[20px]  rounded-[6px]'>
        
            <div className='flex gap-3 items-center'>
              <p className='font-bebasneue text-primary 2xl:text-[18px] lg:text-[15px] text-[2.3vw] font-[400]'>Contact Address</p>
              <div className='2xl:w-auto w-[10px]' >
                <Image src={copy} alt=''onClick={handleCopy}/>
              </div>
            </div>
            <p className='font-montserrat font-[800] mt-[5px] 2xl:text-[18px] lg:text-[15px] text-[2.3vw] text-white'>{copiedText}</p>
          </div>
        </div>

        </div>
       
      
      </div>

      <div className='lg:hidden block mt-[18px]'>
        <ZillaRightView/>
      </div>

      <div className='bg-[#1B1C1E] 2xl:px-[34px] lg:px-[20px] px-[15px] 2xl:mt-[56px] lg:mt-[20px] mt-[18px]  2xl:pb-[35px] lg:pb-[20px] pb-[15px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] 2xl:rounded-[50px] lg:rounded-[30px] rounded-[15px]'>
        <div className=' flex justify-between items-center'>
              <p className='font-[900] 2xl:pt-[38px] 2xl:pb-[48px] pb-[15px] 2xl:ps-[20px] pt-[15px]  font-montserrat 2xl:text-[35px] lg:text-[18px] text-[3.2vw] text-white'><span className='text-primary'>Historical</span> Stage <span className='text-primary'>Tracker</span></p>
        </div>
        <div className='flex justify-around '>
          <p className='2xl:w-[240px] w-[100px] lg:w-[150px] text-center  font-montserrat font-[700] 2xl:text-[25px] lg:text-[15px] text-[2vw] text-white text-opacity-35'>Date & Time (UTC)</p>
          <p className='2xl:w-[305px] w-[110px] lg:w-[190px] text-center  font-montserrat font-[700]  2xl:text-[25px] lg:text-[15px] text-[2vw] text-white text-opacity-35'>Total rewards collected</p>
          <p className='2xl:w-[84px] w-[40px] lg:w-[90px] text-center font-montserrat font-[700]  2xl:text-[25px] lg:text-[15px] text-[2vw] text-white text-opacity-35'>USD</p>
          <p className='2xl:w-[215px] w-[100px] lg:w-[170px] text-center font-montserrat   font-[700]  2xl:text-[25px] lg:text-[15px] text-[2vw] text-white text-opacity-35'>Users Rewarded</p>
        </div>
        <div>
        
        <div className='2xl:rounded-[35px] 2xl:mt-[13px] mt-[10px] lg:rounded-[20px] rounded-[10px] bg-[#111111] 2xl:py-[40px] lg:py-[15px] py-[13px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] '>
          <div className='space-y-1  2xl:h-[180px] lg:h-[230px] h-[90px]  overflow-x-hidden'>
            {[...Array(18)].map((index) => (
              <ul key={index} className='flex justify-around '>
                <li className='font-bebasneue 2xl:w-[230px] w-[100px] text-center font-[400]  2xl:text-[25px] lg:text-[15px] text-[2vw] text-white'>2023-06-15   <span className='text-primary'>14:30</span> </li>
                <li className='font-bebasneue 2xl:w-[295px] w-[110px] text-center font-[400]  2xl:text-[25px] lg:text-[15px] text-[2vw] text-white'>500,000   <span className='text-primary'>Zilla</span> </li>
                <li className='font-bebasneue 2xl:w-[74px] lg:w-[40px] w-[40px] text-center font-[400]  2xl:text-[25px] lg:text-[15px] text-[2vw] text-white'>$   <span className='text-primary'>1,234</span> </li>
                <li className='font-bebasneue 2xl:w-[205px] w-[100px] text-center font-[400]  2xl:text-[25px] lg:text-[15px] text-[2vw] text-white'>1,234 </li>

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

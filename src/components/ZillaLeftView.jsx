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
      <div className='bg-[#1B1C1E] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[2.6vw] rounded-[3.8vw]'>
        <div className=' flex justify-between items-start'>
          
            <p className='font-[900] md:pt-[1.9vw] pt-[1.9vw] md:pb-[1.4vw] pb-[2.4vw]  md:ps-[2.8vw] ps-[2.9vw]  font-montserrat md:text-[1.8vw] text-[3.3vw] text-white'><span className='text-primary'>Live</span> Price <span className='text-primary'>Chart</span></p>
          
            <div className='bg-primary  md:rounded-[0_2.6vw] rounded-[0_6vw] md:w-[18vw] w-[33vw] md:py-[0.7vw] py-[1.2vw] text-center'>
                <p className='font-[800] font-montserrat md:text-[1.8vw] text-[3.2vw] text-[#262626] '>MCap : <span className='font-[900]'>19.9k</span></p>
            </div>
        </div>
        <div className='md:px-[1.6vw] md:pb-[1.8vw] px-[2.4vw] pb-[2.6vw]'>
       
        <div className='w-full md:h-[21vw] h-[36vw] md:rounded-[1.8vw] rounded-[15px] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F]'>
        </div>

        <div className='md:mt-[1.5vw] mt-[2.4vw] flex justify-between md:gap-[1.5vw] '>
          <div className='md:w-[13.6vw] w-[20vw] md:ps-[1.3vw] ps-[1.9vw] md:pt-[1vw] pt-[1.9vw] md:pb-[0.6vw] pb-[1.4vw] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[1vw]  rounded-[1.4vw]'>
            <p className='font-bebasneue text-primary md:text-[1vw] text-[2.4vw] font-[400]'>PRICE</p>
            <p className='font-montserrat font-[800] mt-[0.2vw] md:text-[0.9vw] text-[2.4vw] text-white'>$0.000123</p>
          </div>
          <div className='md:w-[11vw] w-[17vw] md:ps-[1.3vw] ps-[1.9vw] md:pt-[1vw] pt-[1.9vw] md:pb-[0.6vw] pb-[1.4vw] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[1vw]  rounded-[1.4vw]'>
            <p className='font-bebasneue text-primary md:text-[1vw] text-[2.4vw]  font-[400]'>24H CHANGE</p>
            <p className='font-montserrat font-[800] mt-[0.2vw] md:text-[0.9vw] text-[2.4vw]  text-white'>+5.67%</p>
          </div>
          <div className='md:w-[13vw] w-[20vw] md:ps-[1.3vw] ps-[1.9vw] md:pt-[1vw] pt-[1.9vw] md:pb-[0.6vw] pb-[1.4vw] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[1vw]  rounded-[1.4vw]'>
            <p className='font-bebasneue text-primary md:text-[1vw] text-[2.4vw]  font-[400]'>VOLUME</p>
            <p className='font-montserrat font-[800] mt-[0.2vw] md:text-[1vw] text-[2.4vw]  text-white'>$1,234,567</p>
          </div>
          <div className='md:w-[17vw] w-[23vw] md:ps-[1.3vw] ps-[1.9vw] md:pt-[1vw] pt-[1.9vw] md:pb-[0.6vw] pb-[1.4vw] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[1vw]  rounded-[1.4vw]'>
        
            <div className='flex gap-[0.6vw] items-center'>
              <p className='font-bebasneue text-primary md:text-[1vw] text-[2.4vw] font-[400]'>Contact Address</p>
              <div className='md:w-[1.2vw] w-[2.4vw]' >
                <Image src={copy} alt=''onClick={handleCopy}/>
              </div>
            </div>
            <p className='font-montserrat font-[800] mt-[0.2vw] md:text-[0.9vw] text-[2.4vw]  text-white'>{copiedText}</p>
          </div>
        </div>

        </div>
       
      
      </div>

      <div className='md:hidden block mt-[4.3vw]'>
        <ZillaRightView/>
      </div>

      <div className='bg-[#1B1C1E] md:px-[1.7vw] px-[3.6vw] md:mt-[2vw] mt-[4.3vw] md:pb-[1.8vw] pb-[3.6vw] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[2.6vw] rounded-[3.6vw]'>
        <div className=' flex justify-between items-center'>
              <p className='font-[900] md:pt-[1.9vw] md:pb-[2.5vw] pb-[3.6vw] md:ps-[1vw] pt-[3.6vw]  font-montserrat md:text-[1.8vw] text-[3.2vw] text-white'><span className='text-primary'>Historical</span> Stage <span className='text-primary'>Tracker</span></p>
        </div>
        <div className='flex justify-around '>
          <p className='md:w-[12.5vw] w-[24.2vw] text-center  font-montserrat font-[700] md:text-[1.3vw] text-[2vw] text-white text-opacity-35'>Date & Time (UTC)</p>
          <p className='md:w-[15.8vw] w-[26.6vw] text-center  font-montserrat font-[700] md:text-[1.3vw] text-[2vw] text-white text-opacity-35'>Total rewards collected</p>
          <p className='md:w-[4.3vw] w-[9.7vw] text-center font-montserrat font-[700] md:text-[1.3vw] text-[2vw] text-white text-opacity-35'>USD</p>
          <p className='md:w-[11.1vw] w-[24.2vw] text-center font-montserrat   font-[700] md:text-[1.3vw] text-[2vw] text-white text-opacity-35'>Users Rewarded</p>
        </div>
        <div>
        
        <div className='md:rounded-[1.8vw] md:mt-[0.6vw] mt-[2.4vw] rounded-[2.4vw] bg-[#111111] md:py-[2vw] py-[2.8vw] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] '>
          <div className='space-y-1  md:h-[9.3vw] h-[28vw]  overflow-x-hidden'>
            {[...Array(18)].map((index) => (
              <ul key={index} className='flex justify-around '>
                <li className='font-bebasneue md:w-[11.9vw] w-[24.2vw] text-center font-[400] md:text-[1.3vw] text-[2vw] text-white'>2023-06-15   <span className='text-primary'>14:30</span> </li>
                <li className='font-bebasneue md:w-[15.3vw] w-[26.6vw] text-center font-[400] md:text-[1.3vw] text-[2vw] text-white'>500,000   <span className='text-primary'>Zilla</span> </li>
                <li className='font-bebasneue md:w-[3.8vw]  w-[9.7vw] text-center font-[400] md:text-[1.3vw] text-[2vw] text-white'>$   <span className='text-primary'>1,234</span> </li>
                <li className='font-bebasneue md:w-[10.6vw] w-[24.2vw] text-center font-[400] md:text-[1.3vw] text-[2vw] text-white'>1,234 </li>

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

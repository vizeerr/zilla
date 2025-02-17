"use client"
import React, { useState } from 'react'
import copy from "@/assets/copyblack.png"
import goto from "@/assets/goto.png"
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

      <div className='bg-[#1B1C1E] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] 2xl:rounded-[2.3rem] md:rounded-[2rem] rounded-[3.8vw] 2xl:px-7 md:px-5 2xl:py-6 md:py-4 px-[2.5vw] py-[2.6vw]'>
        <div className='flex justify-between 2xl:gap-6 gap-[1.9vw]'>
      <div className='2xl:w-44 lg:w-32 md:w-28 w-[15.7vw] 2xl:ps-7 md:ps-5 ps-[1.9vw] md:py-4 py-[1.9vw]  bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[1.2rem]  rounded-[1.4vw]'>
            <p className='font-bebasneue text-primary 2xl:text-xl md:text-sm text-[2.4vw]  font-[400]'>Mcap</p>
            <p className='font-montserrat font-[800] md:mt-1 2xl:text-xl md:text-sm text-[2.4vw]  text-white'>19.9k</p>
          </div>
          <div className='2xl:w-44 lg:w-32 md:w-28 w-[19.4vw]  2xl:ps-7 md:ps-5 ps-[1.9vw] md:py-4 py-[1.9vw]  bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[1.2rem]  rounded-[1.4vw]'>
            <p className='font-bebasneue text-primary 2xl:text-xl md:text-sm text-[2.4vw] font-[400]'>PRICE</p>
            <p className='font-montserrat font-[800] md:mt-1 2xl:text-xl md:text-sm text-[2.4vw] text-white'>$0.000123</p>
          </div>
          <div className='2xl:w-44 lg:w-32 md:w-28 w-[19.4vw] 2xl:ps-7 md:ps-5 ps-[1.9vw] md:py-4 py-[1.9vw]  bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[1.2rem]  rounded-[1.4vw]'>
            <p className='font-bebasneue text-primary 2xl:text-xl md:text-sm text-[2.4vw]  font-[400]'>24H CHANGE</p>
            <p className='font-montserrat font-[800] md:mt-1 2xl:text-xl md:text-sm text-[2.4vw]  text-white'>+5.67%</p>
          </div>
          
          <div className='2xl:w-44 lg:w-32 md:w-28 w-[20vw]  md:block hidden 2xl:ps-7 md:ps-5 ps-[1.9vw] md:py-4 py-[1.9vw]  bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[1.2rem]  rounded-[1.4vw]'>
            <p className='font-bebasneue text-primary 2xl:text-xl md:text-sm text-[2.4vw]  font-[400]'>VOLUME</p>
            <p className='font-montserrat font-[800] md:mt-1 2xl:text-xl md:text-sm text-[2.4vw]  text-white'>$1,234,567</p>
          </div>
          
          <div className='2xl:w-60 md:w-44 w-[25.2vw] 2xl:ps-7 md:ps-5 ps-[1.9vw]  md:pb-4 pb-0 bg-primary shadow-[16.21px_16.21px_56.21px_0px_#0000004F] md:rounded-[1.2rem]  rounded-[1.4vw]'>
            <div className='2xl:w-6 2xl:h-6 md:w-4  md:h-4 w-[2.9vw] h-[2.9vw] float-end md:mt-2 mt-0.5 md:me-2 me-0.5'>
              <Image src={goto} alt='' className='w-full' unoptimized/>
            </div>
            <div className='flex md:gap-3 gap-1 items-center md:mt-4 mt-1.5 '>
              <p className='font-bebasneue text-[#262626] 2xl:text-xl md:text-sm text-[2.4vw] font-[400]'>Contact Address</p>
              <div className='2xl:w-6 md:w-4 w-[2.2vw]' >
                <Image src={copy} alt=''onClick={handleCopy}/>
              </div>
            </div>
            <p className='font-montserrat font-[800] md:mt-1 2xl:text-xl md:text-sm text-[2.4vw]  text-[#262626]'>{copiedText}</p>
          </div>
        </div>
        <div className='w-full md:mt-7 mt-2 2xl:h-[61.5em] md:h-[41rem] overflow-hidden  h-[90vw] md:rounded-[1.8rem] rounded-[15px] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F]'>
        <iframe className='w-full h-full' src="https://dexscreener.com/ethereum/0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTimeframesToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=5"></iframe>
        </div>
      </div>

      <div className='xl:hidden block md:mt-6 mt-[4.3vw]'>
        <ZillaRightView/>
      </div>

      <div className='bg-[#1B1C1E] 2xl:px-7 md:px-5 px-[3.6vw] 2xl:mt-14 md:mt-8 mt-[4.3vw] 2xl:pb-8 md:pb-7 pb-[3.6vw] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] 2xl:rounded-[2.8rem] md:rounded-[2rem] rounded-[3.6vw]'>
        <div className=' flex justify-between items-center'>
              <p className='font-[900] 2xl:pt-8 md:pt-7 2xl:pb-10 md:pb-6 pb-[3.6vw] 2xl:ps-4 md:ps-2 pt-[3.6vw]  font-montserrat 2xl:text-3xl md:text-2xl text-[3.2vw] text-white'><span className='text-primary'>Historical</span> Stage <span className='text-primary'>Tracker</span></p>
        </div>
        <div className='flex justify-around '>
          <p className='2xl:w-[15rem] md:w-[11rem] w-[24.2vw]  text-center  font-montserrat font-[700] 2xl:text-2xl md:text-lg text-[2vw] text-white text-opacity-35'>Date & Time <span className='text-primary'>(UTC)</span></p>
          <p className='2xl:w-[20rem] md:w-[14rem] w-[26.6vw]  text-center  font-montserrat font-[700] 2xl:text-2xl md:text-lg text-[2vw] text-white text-opacity-35'>Total rewards collected</p>
          <p className='2xl:w-[5rem] md:w-[3rem]  w-[9.7vw]  text-center font-montserrat font-[700] 2xl:text-2xl md:text-lg text-[2vw] text-white text-opacity-35'>USD</p>
          <p className='2xl:w-[14rem] md:w-[10rem] w-[24.2vw] text-center font-montserrat   font-[700] 2xl:text-2xl md:text-lg text-[2vw] text-white text-opacity-35'>Users Rewarded</p>
        </div>
        <div>
        
        <div className='md:rounded-[1.8rem] 2xl:mt-5 md:mt-4 mt-[2.4vw] rounded-[2.4vw] bg-[#111111] 2xl:py-10 md:py-4 py-[2.8vw] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] '>
          <div className='space-y-1  2xl:h-[14rem] md:h-[10rem] h-[28vw]  overflow-x-hidden'>
            {[...Array(18)].map((index) => (
              <ul key={index} className='flex justify-around '>
                <li className='font-bebasneue 2xl:w-[15rem] md:w-[11rem] w-[24.2vw] text-center font-[400] 2xl:text-2xl md:text-lg text-[2vw] text-white'>2023-06-15   <span className='text-primary'>14:30</span> </li>
                <li className='font-bebasneue 2xl:w-[20rem] md:w-[14rem] w-[26.6vw] text-center font-[400] 2xl:text-2xl md:text-lg text-[2vw] text-white'>500,000   <span className='text-primary'>Zilla</span> </li>
                <li className='font-bebasneue 2xl:w-[5rem] md:w-[3rem]   w-[9.7vw] text-center font-[400] 2xl:text-2xl md:text-lg text-[2vw] text-white'>$   <span className='text-primary'>1,234</span> </li>
                <li className='font-bebasneue 2xl:w-[14rem] md:w-[10rem] w-[24.2vw] text-center font-[400] 2xl:text-2xl md:text-lg text-[2vw] text-white'>1,234 </li>

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

"use client"
import React from 'react'
import copy from "@/assets/copy.svg"
import Image from 'next/image'

const ZillaLeftView  = () =>{
  const handleCopy = async () => {
    await navigator.clipboard.writeText('0x12345697785566544551423404599349');
    // setCopiedText('REFERRAL COPIED')
    // setTimeout(()=>{
    // setCopiedText('REFERRAL DASHBOARD')

    // },2000)
    };
  return (

    <div>
      <div className='bg-[#1B1C1E] h-[700px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] rounded-[50px]'>
        <div className=' flex justify-between items-start'>
          
            <p className='font-[900] pt-[38px] pb-[28px] ps-[54px]  font-montserrat text-[35px] text-white'><span className='text-primary'>Live</span> Price <span className='text-primary'>Chart</span></p>
          
            <div className='bg-primary  rounded-[0_50px] w-[361px] py-[20px] text-center'>
                <p className='font-[800] font-montserrat text-[35px] text-[#262626] '>MCap : <span className='font-[900]'>19.9k</span></p>
            </div>
        </div>
        <div className='px-[34px] pb-[35px]'>
       
        <div className='w-[1167px] h-[412px] rounded-[35px] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F]'>
        </div>

        <div className='mt-[30px] flex justify-around'>
          <div className='w-[263px] ps-[25px] pt-[20px] pb-[13px] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] rounded-[20px]'>
            <p className='font-bebasneue text-primary text-[20px] font-[400]'>PRICE</p>
            <p className='font-montserrat font-[800] mt-[5px] text-[20px] text-white'>$0.000123</p>
          </div>
          <div className='w-[220px] ps-[25px] pt-[20px] pb-[13px] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] rounded-[20px]'>
            <p className='font-bebasneue text-primary text-[20px] font-[400]'>24H CHANGE</p>
            <p className='font-montserrat font-[800] mt-[5px] text-[20px] text-white'>+5.67%</p>
          </div>
          <div className='w-[265px] ps-[25px] pt-[20px] pb-[13px] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] rounded-[20px]'>
            <p className='font-bebasneue text-primary text-[20px] font-[400]'>VOLUME</p>
            <p className='font-montserrat font-[800] mt-[5px] text-[20px] text-white'>$1,234,567</p>
          </div>
          <div className='w-[330px] ps-[25px] pt-[20px] pb-[13px] bg-[#111111] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] rounded-[20px]'>
        
            <div className='flex gap-3 items-center'>
              <p className='font-bebasneue text-primary text-[20px] font-[400]'>Contract Address</p>
              <Image src={copy} alt=''onClick={handleCopy}/>
            </div>
            <p className='font-montserrat font-[800] mt-[5px] text-[20px] text-white'>0x1234...569778            </p>
          </div>
        </div>

        </div>
       
      
      </div>

      <div className='bg-[#1B1C1E] px-[34px] mt-[56px]  pb-[35px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] rounded-[50px]'>
        <div className=' flex justify-between items-center'>
              <p className='font-[900] pt-[38px] pb-[48px] ps-[20px]  font-montserrat text-[35px] text-white'><span className='text-primary'>Historical</span> Stage <span className='text-primary'>Tracker</span></p>
        </div>
        <div className='flex justify-around '>
          <p className='w-[240px] font-montserrat font-[700] text-[25px] text-white text-opacity-35'>Date & Time (UTC)</p>
          <p className='w-[305px] font-montserrat font-[700] text-[25px] text-white text-opacity-35'>Total rewards collected</p>
          <p className='w-[84px] text-center font-montserrat font-[700] text-[25px] text-white text-opacity-35'>USD</p>
          <p className='w-[215px] font-montserrat font-[700] text-[25px] text-white text-opacity-35'>Users Rewarded</p>
        </div>
        <div>
        
        <div className='rounded-[35px] mt-[13px] bg-[#111111] py-[40px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] '>
          <div className='space-y-1  h-[180px]  overflow-x-hidden'>
            {[...Array(18)].map((index) => (
              <ul key={index} className='flex justify-around '>
                <li className='font-bebasneue  w-[230px] text-center font-[400] text-[25px] text-white'>2023-06-15   <span className='text-primary'>14:30</span> </li>
                <li className='font-bebasneue w-[295px] text-center font-[400] text-[25px] text-white'>500,000   <span className='text-primary'>Pumpzilla</span> </li>
                <li className='font-bebasneue w-[74px] text-center font-[400] text-[25px] text-white'>$   <span className='text-primary'>1,234</span> </li>
                <li className='font-bebasneue w-[205px] text-center font-[400] text-[25px] text-white'>1,234 </li>

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

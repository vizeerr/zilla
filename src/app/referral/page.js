import ReferalBottomView from '@/components/ReferalBottomView'
import ReferalUse from '@/components/ReferalUse'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'
import ref1 from '@/assets/ref1.svg'
import ref2 from '@/assets/ref2.svg'
import Image from 'next/image'
import ReferalBody from '@/components/ReferalBody'

const page = () => {
  return ( 
   <div className='bg-[#111111] py-[0.8vw]'>
    <div className='sm:pt-[0.8vw] pt-[8vw] text-center'>
      <p className='font-[900] sm:text-[2vw] text-[6vw] sm:w-full w-[60%] mx-auto font-montserrat text-white'>Earn Together, <span className='text-primary'>Grow Together !</span></p>
      <p className='text-[#FFFFFF66] sm:w-full w-[95%] mx-auto sm:mt-[1vw] mt-[4vw] font-montserrat font-[800] leading-tight sm:text-[1vw] text-[4vw]' >Welcome to the new way of sharing — where both sides win!</p> 
      <p className='text-[#FFFFFF66] sm:w-full w-[90%] mx-auto font-montserrat font-[700] italic sm:mt-[0.4vw] mt-[2.5vw] leading-tight sm:text-[0.8vw] text-[3.4vw]'>For more information, check out our <span className='text-primary sm:text-[1vw] text-[3.7vw]'>Documentation</span> </p>
    </div>
    <div className='flex justify-center sm:items-center sm:gap-0 gap-[2.9vw] sm:my-0 my-[8.9vw]'>
      <div className='flex items-center sm:flex-row flex-col'>
        <div className='bg-[#1B1C1E] sm:py-[1.8vw] py-[5vw] text-center sm:px-[1.3vw] px-[2.5vw] sm:w-[15vw] w-[41vw] sm:rounded-[1.8vw] rounded-[5vw] shadow-[16.21px_16.21px_56.21px_0px_#0000004F]'>
          <p className='sachabo text-white sm:text-[1.6vw] text-[4.1vw] leading-tight'><span className='text-primary'>Earn Zilla tokens</span> when someone buys through your link.</p>
        </div>
        <div className='sm:w-[13.5vw] w-[41vw]'>
            <Image src={ref1} alt='' className='w-full'/>
          </div>
      </div>
      <div className='flex items-center sm:flex-row flex-col-reverse'>
        <div className='sm:w-[13.5vw] w-[41vw]'>  
              <Image src={ref2} alt='' className='w-full'/>
            </div>
          <div className='bg-[#1B1C1E] sm:py-[1.8vw] py-[5vw] text-center sm:px-[1.3vw] px-[2.5vw] sm:w-[15vw] w-[41vw] sm:rounded-[1.8vw] rounded-[5vw] shadow-[16.21px_16.21px_56.21px_0px_#0000004F]'>
            <p className='sachabo text-white sm:text-[1.6vw] text-[4.1vw] leading-tight'><span className='text-primary'>Your referral gets rewarded </span> with Zilla tokens for their purchases.</p>
          </div>
        
        </div>
    </div>
    <ReferalBody/>
    
   </div>
    
  )
}

export default page

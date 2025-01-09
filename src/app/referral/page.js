import ReferalBottomView from '@/components/ReferalBottomView'
import ReferalUse from '@/components/ReferalUse'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'
import ref1 from '@/assets/ref1.svg'
import Image from 'next/image'
import ReferalBody from '@/components/ReferalBody'

const page = () => {
  return ( 
   <div className='bg-[#111111] py-[0.9vw]'>
    <div className='pt-[0.8vw] text-center'>
      <p className='font-[900] text-[2vw] font-montserrat text-white'>Earn Together, <span className='text-primary'>Grow Together !</span></p>
      <p className='text-[#FFFFFF66] mt-[1vw] font-montserrat font-[800] leading-tight text-[1vw]' >Welcome to the new way of sharing — where both sides win!</p> 
      <p className='text-[#FFFFFF66] font-montserrat font-[700] italic mt-[0.4vw] leading-tight text-[0.8vw]'>For more information, check out our <span className='text-primary text-[1vw]'>Documentation</span> </p>
    </div>
    <div className='flex justify-center items-center '>
      <div className='flex items-center'>
        <div className='bg-[#1B1C1E] py-[1.8vw] text-center px-[1.3vw] w-[15vw] rounded-[1.8vw] shadow-[16.21px_16.21px_56.21px_0px_#0000004F]'>
          <p className='sachabo text-white text-[1.6vw] leading-tight'><span className='text-primary'>Earn Zilla tokens</span> when someone buys through your link.</p>
        </div>
        <div className='w-[13.5vw]'>
            <Image src={ref1} alt='' className='w-full'/>
          </div>
      </div>
      <div className='flex items-center '>
      <div className='w-[13.5vw]'>
            <Image src={ref1} alt='' className='w-full'/>
          </div>
        <div className='bg-[#1B1C1E] py-[1.8vw] text-center px-[1.3vw] w-[15vw] rounded-[1.8vw] shadow-[16.21px_16.21px_56.21px_0px_#0000004F]'>
          <p className='sachabo text-white text-[1.6vw] leading-tight'><span className='text-primary'>Earn Zilla tokens</span> when someone buys through your link.</p>
        </div>
        
      </div>
    </div>
    <ReferalBody/>
    
   </div>
    
  )
}

export default page

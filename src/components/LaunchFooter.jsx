import React from 'react'
import line from "@/assets/line.svg"
import Image from 'next/image'

const LaunchFooter = () => {
  return (
    <div className=' flex flex-col sm:w-[700px] w-full justify-center mx-auto sm:mt-20 mt-5 sm:p-0 p-[19px] sm:bg-transparent bg-[#22222769]'>
    <div className='flex sm:gap-[40px] gap-[15px] items-center sm:justify-start justify-center'>
      <div className='sm:w-auto w-[3px]'>
        <Image src={line} alt="" height={160} />
      </div>
      <p className='font-montserrat font-[700] sm:text-[36px] text-[2.8vw] w-[68vw] text-white'>Launch your token and hit  $5K volume to get  
      <br/>
      <span className='text-primary italic'>

       $50 (gas fee + extra) back !
      </span></p>
    </div>
    <div className='bg-[#38383F] sm:w-[645px] w-[59vw] mx-auto sm:mt-[120px] mt-[20px]  sm:rounded-[60px] rounded-[20px] sm:ps-[28px] ps-[10px] sm:py-[40px] py-[15px] relative'>
      <p className='anim  text-[#1B1C1E] sachabo sm:text-[36px] text-[3.2vw] bg-primary rounded-full sm:px-4 sm:pt-6 absolute end-0 top-0 sm:pb-4 leading-[30px] text-center sm:w-[256px] w-[23vw]'> DEVELOPER REWARD</p>
      <p className='font-montserrat font-[900] text-primary sm:p-[5px] sm:text-[40px] text-[3.7vw] bg-[#19191C] sm:px-8 px-2.5 sm:pb-6 pb-2 sm:pt-4 pt-2 sm:w-[275px] w-[25vw] sm:rounded-[28px] rounded-[12px]'>0.144 ETH</p>
      <p className='sachabo text-primary font-[400] sm:mt-4 mt-1 sm:text-[50px] text-[4.7vw] sm:mx-[40px] mx-[10px]'> Directly into your wallet</p>
      <p className='sachabo text-white font-[400] sm:text-[50px] text-[4.7vw] sm:mt-[50px] mt-3 sm:mx-[40px] mx-[10px]'> Achieve the Bonding Curve milestone.</p>

    </div>
  </div>
  )
}

export default LaunchFooter

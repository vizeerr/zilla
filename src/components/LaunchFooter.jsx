import React from 'react'
import line from "@/assets/line.svg"
import Image from 'next/image'

const LaunchFooter = () => {
  return (
    <div className=' flex flex-col 2xl:w-[700px] lg:w-[40%] w-full justify-center mx-auto lg:mt-20 mt-5 lg:p-0 p-[19px] lg:bg-transparent bg-[#22222769]'>
    <div className='flex lg:gap-[40px] gap-[15px] items-center lg:justify-start justify-center'>
      <div className='2xl:w-auto w-[3px] lg:w-[14px]'>
        <Image src={line} alt="" height={160} />
      </div>
      <p className='font-montserrat font-[700] lg:text-[2.4vw] 2xl:text-[36px] text-[2.8vw] w-[68vw] text-white'>Launch your token and hit  $5K volume to get  
      <br/>
      <span className='text-primary italic'>

       $50 (gas fee + extra) back !
      </span></p>
    </div>
    <div className='bg-[#38383F] lg:w-[34vw] 2xl:w-[645px] w-[59vw] mx-auto 2xl:mt-[120px] lg:mt-[40px] mt-[20px] lg:rounded-[30px] 2xl:rounded-[60px] rounded-[20px] 2xl:ps-[28px] ps-[10px] 2xl:py-[40px] py-[15px] relative'>
      <p className='anim  text-[#1B1C1E] sachabo lg:text-[1.8vw] 2xl:text-[36px] text-[3.2vw] bg-primary rounded-full 2xl:px-4 2xl:pt-6 lg:pt-4 absolute end-0 top-0 lg:pb-4 leading-[30px] lg:leading-[20px] text-center 2xl:w-[256px] lg:w-[13vw] w-[23vw]'> DEVELOPER REWARD</p>
      <p className='font-montserrat font-[900] text-primary lg:p-[5px] 2xl:text-[40px] lg:text-[22px] text-[3.7vw] bg-[#19191C] 2xl:px-8 lg:px-5 px-2.5 2xl:pb-6 lg:pb-3 pb-2 lg:pt-4 pt-2 2xl:w-[275px] lg:w-[14vw] w-[25vw] 2xl:rounded-[28px] lg:rounded-[18px] rounded-[12px]'>0.144 ETH</p>
      <p className='sachabo text-primary font-[400] lg:mt-4 mt-1 lg:text-[40px] 2xl:text-[50px] text-[4.7vw] lg:mx-[40px] mx-[10px]'> Directly into your wallet</p>
      <p className='sachabo text-white font-[400] 2xl:text-[50px] lg:text-[40px] text-[4.7vw] 2xl:mt-[50px] lg:mt-[30px] mt-3 lg:mx-[40px] mx-[10px]'> Achieve the Bonding Curve milestone.</p>

    </div>
  </div>
  )
}

export default LaunchFooter

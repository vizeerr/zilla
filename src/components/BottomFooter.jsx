import Link from 'next/link'
import React from 'react'

const BottomFooter = () => {
  return (
    <div className='md:px-4 px-2 md:py-8 py-6 flex items-center justify-evenly bg-[#1E1E25] text-white'>
      <p className='md:text-sm w-full  text-[0.4rem] font-montserrat font-[700] text-[#FFFFFF78]'><span>©</span> Pumpzilla 2025</p>
      <div className="flex w-full justify-center  bg-[#1E1E25]">
            <button className="text-sec font-montserrat font-[800] 2xl:text-2xl md:text-lg text-[2vw] bg-primary rounded-full 2xl:px-6 md:px-5 px-3 2xl:py-2 md:py-1.5 py-1">Load More</button>
      </div>
      <div className=' text-[#FFFFFF78] w-full flex md:gap-2 gap-1 justify-end items-center'>
        <Link href="/privacy-policy" className='anim md:text-sm  text-[0.4rem] underline font-montserrat font-[600]'>Privacy Policy</Link>
        <p className='lg:text-sm text-[0.55rem] '>|</p>
        <Link href="/terms-of-services" className='anim md:text-sm  text-[0.4rem] underline font-montserrat font-[600]'>Terms Of Services</Link>
      </div>
    </div>
  )
}

export default BottomFooter

import Link from 'next/link'
import React from 'react'

const BottomFooter = () => {
  return (
    <div className='p-4 flex items-center justify-between bg-[#1E1E25] text-white'>
      <p className='md:text-sm  text-[0.6rem] font-montserrat font-[700] text-[#FFFFFF78]'><span>©</span> Pumpzilla 2025</p>
      <div className=' text-[#FFFFFF78] text-end justify-end flex md:gap-2 gap-1.5 items-center'>
        <Link href="/privacy-policy" className='anim md:text-sm  text-[0.6rem] underline font-montserrat font-[600]'>Privacy Policy</Link>
        <p className='lg:text-sm text-xs'>|</p>
        <Link href="/terms-of-services" className='anim md:text-sm  text-[0.6rem] underline font-montserrat font-[600]'>Terms Of Services</Link>
      </div>
    </div>
  )
}

export default BottomFooter

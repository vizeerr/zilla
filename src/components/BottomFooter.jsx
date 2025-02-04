import Link from 'next/link'
import React from 'react'

const BottomFooter = () => {
  return (
    <div className='p-3 flex items-center justify-between bg-[#1E1E25] text-white'>
      <p className='w-[15%] text-sm font-montserrat font-[700] text-[#FFFFFF78]'>©️ Pumpzilla 2025</p>
      <div className='text-sm underline font-montserrat font-[700] text-[#FFFFFF78] md:absolute md:left-1/2 md:transform md:-translate-x-1/2 text-center flex gap-2'>
        <Link href="/privacy-policy" className='anim'>Privacy Policy</Link>
        <p>|</p>
        <Link href="/terms-of-services" className='anim'>Terms Of Services</Link>
      </div>
    </div>
  )
}

export default BottomFooter

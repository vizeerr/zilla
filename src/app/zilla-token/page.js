import TopNavbar from '@/components/TopNavbar'
import ZillaBottomView from '@/components/ZillaBottomView'
import ZillaLeftView from '@/components/ZillaLeftView'
import ZillaRightView from '@/components/ZillaRightView'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='text-white font-montserrat bg-[#111111] md:p-[2vw] p-[16px]'>
          <div className='font-montserrat'>
              <h1 className='font-montserrat font-[900] md:text-[2vw] text-[4.4vw]'><span className='md:text-[3.1vw] text-[5.2vw] text-primary'>Z</span><span className='text-primary'>illa</span> : The Power Behind <span className='text-primary'>PumpZilla</span></h1>
          </div>
          {/* <div className='w-full md:block hidden'>
              <div className='mx-auto md:w-[6.1vw] md:h-[0.5vw] w-[118px] h-[10px] bg-white rounded-full my-[0.8vw]'></div>
          </div> */}
          <div className=' gap-[0.7vw] mt-[0.4vw] flex '>
              <div className='bg-primary rounded-[0.2vw] w-[0.3vw] '></div>
              <p className='font-[700] text-white text-opacity-45 font-montserrat md:text-[1vw] text-[2.4vw] m-0 p-0 md:leading-[2.3vw] leading-tight'>
              $Zilla drives innovation with unique mechanisms and rewards. Learn more in our  <button className='text-opacity-100 text-primary anim'>Documentation</button>.
              </p>
          </div>
          
          <div className='md:mt-[2.5vw] mt-[28px] flex md:gap-[2vw] gap-[4.8vw]  justify-center'>
            <ZillaLeftView/>
            <div className='md:block hidden'>
              <ZillaRightView/>
            </div>
          </div>
          {/* <ZillaBottomView/> */}
      </div>
    </>
  )
}

export default page

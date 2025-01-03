import TopNavbar from '@/components/TopNavbar'
import ZillaBottomView from '@/components/ZillaBottomView'
import ZillaLeftView from '@/components/ZillaLeftView'
import ZillaRightView from '@/components/ZillaRightView'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='text-white font-montserrat bg-[#111111] 2xl:p-[40px] lg:p-[30px] p-[16px]'>
          <div className='font-montserrat'>
              <h1 className='font-montserrat font-[900] 2xl:text-[40px] lg:text-[25px] text-[4.4vw]'><span className='2xl:text-[60px] lg:text-[34px] text-[5.2vw] text-primary'>Z</span><span className='text-primary'>illa</span> : The Power Behind <span className='text-primary'>PumpZilla</span></h1>
          </div>
          <div className=' gap-[15px] mt-4 flex '>
              <div className='bg-primary rounded-[5px] lg:w-[2px] w-[6px] '></div>
              <p className='font-[700] text-white text-opacity-45 font-montserrat 2xl:text-[20px] lg:text-[14px] text-[2.4vw] m-0 p-0 2xl:leading-[45px] leading-tight'>
              The <span className='text-opacity-100 font-[800] text-white'>
              core of our ecosystem </span>, $Zilla drives innovation with unique mechanilgs and rewards.
              Learn more in our <button className='text-opacity-100 text-primary anim'>Documentation</button>.
              </p>
          </div>
          <div className='w-full lg:block hidden'>
              <div className='mx-auto lg:w-[70px] lg:h-[5px] w-[118px] h-[10px] bg-white rounded-[21px] my-[30px]'></div>
          </div>
          <div className='lg:mt-12 mt-[28px] flex 2xl:gap-[45px] gap-[20px]  justify-center'>
            <ZillaLeftView/>
            <div className='lg:block hidden'>
              <ZillaRightView/>
            </div>
          </div>
          <ZillaBottomView/>
      </div>
    </>
  )
}

export default page

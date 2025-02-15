import ZillaBottomView from '@/components/ZillaBottomView'
import ZillaLeftView from '@/components/ZillaLeftView'
import ZillaRightView from '@/components/ZillaRightView'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='text-white font-montserrat bg-[#111111] 2xl:p-10 md:p-6 p-[16px] relative overflow-hidden'>
          <div className='font-montserrat'>
              <h1 className='font-montserrat font-[900] 2xl:text-4xl md:text-2xl text-[4.4vw]'><span className='2xl:text-6xl md:text-5xl text-[5.2vw] text-primary'>Z</span><span className='text-primary'>illa</span> : The Power Behind <span className='text-primary'>PumpZilla</span></h1>
          </div>
          
          <div className=' 2xl:gap-3 md:gap-2 gap-2.5 mt-4 flex '>
              <div className='bg-primary rounded-full  2xl:w-[0.4rem] md:w-[0.2rem] w-[1.2vw]'></div>
              <p className='font-[700] text-white text-opacity-45 font-montserrat 2xl:text-xl md:text-sm text-[2.9vw] m-0 p-0 md:leading-loose leading-tight'>
              $Zilla drives innovation with unique mechanisms and rewards. Learn more in our  <button className='text-opacity-100 text-primary anim'>Documentation</button>.
              </p>
          </div>
          
          <div className='md:mt-10 mt-[28px] flex 2xl:gap-8 md:gap-6 gap-[4.8vw]  justify-center'>
            <ZillaLeftView/>
            <div className='xl:block hidden'>
              <ZillaRightView/>
            </div>
          </div>
          <div className='block xl:hidden md:mt-8 mt-[4.3vw]'>
            <ZillaBottomView/>
          </div>

      </div>
    </>
  )
}

export default page

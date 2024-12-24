import TopNavbar from '@/components/TopNavbar'
import ZillaBottomView from '@/components/ZillaBottomView'
import ZillaLeftView from '@/components/ZillaLeftView'
import ZillaRightView from '@/components/ZillaRightView'
import React from 'react'

const page = () => {
  return (
    <>
    
    <div className='sticky top-0 z-40'>
    <TopNavbar/>
  </div>
    <div className='text-white font-montserrat bg-[#111111] p-[40px]'>
        <div className='font-montserrat'>
            <h1 className='font-montserrat font-[900] text-[40px]'><span className='text-[60px] text-primary'>Z</span><span className='text-primary'>illa</span> : The Power Behind <span className='text-primary'>PumpZilla</span></h1>
        </div>
        <div className=' gap-[15px] mt-4 flex '>
            <div className='bg-primary rounded-[5px] w-[6px] '></div>
            <p className='font-[700] text-white text-opacity-45 font-montserrat text-[20px] m-0 p-0 leading-[45px]'>
            The <span className='text-opacity-100 font-[800] text-white'>
            core of our ecosystem </span>, $Zilla drives innovation with unique mechanisms and rewards.
            Learn more in our <button className='text-opacity-100 text-primary anim'>Documentation</button>.
            </p>
        </div>
        <div className='w-full '>
            <div className='mx-auto w-[118px] h-[10px] bg-white rounded-[21px] my-[30px]'></div>
        </div>
        <div className='mt-12 flex gap-[45px]'>
          <ZillaLeftView/>
          <ZillaRightView/>
        </div>
        <ZillaBottomView/>
    </div>
    </>
  )
}

export default page

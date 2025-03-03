import ProfileLeft from '@/components/ProfileLeft'
import ProfileRight from '@/components/ProfileRight'
import React from 'react'

const page = () => {
  return (
    <div className='flex xl:flex-row flex-col 2xl:gap-10 gap-7 md:p-7 p-[3vw] items-stretch  xl:h-screen overflow-hidden'>
        <ProfileLeft />
        <ProfileRight />
      
    </div>
  )
}

export default page

import ProfileLeft from '@/components/profile/ProfileLeft'
import ProfileRight from '@/components/profile/ProfileRight'
import React from 'react'

const page = () => {
  return (
    <div className='flex xl:flex-row flex-col 2xl:gap-10 md:gap-7 gap-[4vw] md:p-7 p-[3vw] items-stretch  xl:h-screen overflow-hidden'>
        <ProfileLeft />
        <ProfileRight />
      
    </div>
  )
}

export default page

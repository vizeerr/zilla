import ProfileLeft from '@/components/ProfileLeft'
import ProfileRight from '@/components/ProfileRight'
import React from 'react'

const page = () => {
  return (
    <div className='flex gap-10 p-9'>
        <ProfileLeft />
        <ProfileRight />
      
    </div>
  )
}

export default page

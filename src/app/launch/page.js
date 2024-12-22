import TopNavbar from '@/components/TopNavbar'
import React from 'react'

import LaunchForm from '@/components/LaunchForm'
import LaunchFooter from '@/components/LaunchFooter'

const page = () => {
  return (
    <div className='bg-[#121215]'>
      <TopNavbar/>
      <LaunchForm/>      
    </div>
  )
}

export default page

import TopNavbar from '@/components/TopNavbar'
import React from 'react'

import DetailedTopView from '@/components/DetailedTopView'
import DetailedBottomView from '@/components/DetailedBottomView'


const page = async ({params}) => {
  
  return (
    <>
    
      <div className='bg-[#111111] p-[20px]'>
        <DetailedTopView token ={params.token}/>
        <DetailedBottomView/>
        
      </div>
    </>
  )
}

export default page

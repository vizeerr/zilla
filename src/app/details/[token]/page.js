import TopNavbar from '@/components/TopNavbar'
import React from 'react'

import DetailedTopView from '@/components/details/DetailedTopView'
import DetailedBottomView from '@/components/details/DetailedBottomView'


const page = async ({params}) => {
  
  return (
    <> 
      <div className='bg-[#111111] w-[90%] mx-auto'>
        <div className=''>
          <DetailedTopView token ={params.token}/>
        </div>
        <DetailedBottomView/>   
      </div>
    </>
  )
}

export default page

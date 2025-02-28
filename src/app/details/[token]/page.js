import TopNavbar from '@/components/TopNavbar'
import React from 'react'

import DetailedTopView from '@/components/DetailedTopView'
import DetailedBottomView from '@/components/DetailedBottomView'


const page = async ({params}) => {
  
  return (
    <> 
      <div className='bg-[#111111]'>
        <div className=' p-[20px]'>
          <DetailedTopView token ={params.token}/>
        </div>
        <DetailedBottomView/>   
      </div>
    </>
  )
}

export default page

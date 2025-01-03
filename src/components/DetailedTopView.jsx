import React from 'react'
import DetailedLefView from './DetailedLefView'
import DetailedRightView from './DetailedRightView'

const DetailedTopView = ({token}) => {
  
  return (
    <div className='flex justify-between mt-10 items-start wxl:gap-[32px] lg:gap-[20px] text-white font-montserrat'>
        <DetailedLefView token={token}/>    
        <div className='lg:block hidden'>
          <DetailedRightView/>
        </div>
    </div>
  )
}

export default DetailedTopView

import React from 'react'
import DetailedLefView from './DetailedLefView'
import DetailedRightView from './DetailedRightView'

const DetailedTopView = ({token}) => {
  
  return (
    <div className='flex justify-between mt-10 items-start gap-[32px] text-white font-montserrat'>
        <DetailedLefView token={token}/>    
        <div className='sm:block hidden'>
          <DetailedRightView/>
        </div>
    </div>
  )
}

export default DetailedTopView

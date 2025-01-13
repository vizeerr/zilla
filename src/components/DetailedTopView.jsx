import React from 'react'
import DetailedLefView from './DetailedLefView'
import DetailedRightView from './DetailedRightView'

const DetailedTopView = ({token}) => {
  
  return (
    <div className='flex justify-between mt-[2vw] items-start md:gap-[1.6vw] text-white font-montserrat'>
        <DetailedLefView token={token}/>    
        <div className='md:block hidden'>
          <DetailedRightView/>
        </div>
    </div>
  )
}

export default DetailedTopView

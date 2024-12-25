import React, { useState } from 'react'


const DetailedTrade = () => {
   
  return (
    <div className='sm:my-0'> 
            <div className='bg-white bg-opacity-5 sm:mt-10 rounded-[7px] overflow-hidden sm:h-[22px] h-[19px]'>
              <div className='bggradient h-full opacity-100 w-[60%] rounded-[7px] '>

              </div>
            </div>

            <div className='flex justify-between items-center mt-4 px-1'>
              <p className='font-bebasneue sm:text-[21px] text-[4.2vw]'>BONDING CURVE PROGRESS</p>
              <p className='text-primary sm:text-[21px] text-[4.2vw] font-[700] font-montserrat'>0.86%</p>
            </div>

            <div className='bg-[#111111] shadow-[8.47px_9.52px_17.57px_0px_#00000040]  mt-3  sm:rounded-[32px] rounded-[28px] px-[15px] py-[30px]'>
              <p className='font-[700] sm:text-[16px] text-[3.2vw] text-center leading-[18px]'>
                
                There are <span className='text-primary font-[900]'>676,991,162.93 PROMOTION 
                tokens and 4,546.3 ETH still available in 
                the bonding curve for sale.</span> 
              
              </p>

              <p className='font-[700] sm:text-[16px] text-[3.2vw] text-center mt-5 leading-[18px]'>
                When the market cap reaches <span className='text-primary font-[900]'>$77,296.81</span>,
                all liquidity from the bonding curve will be 
                moved to UNISWAP and locked.<span className='text-primary font-[900]'> This 
                process accelerates as the price rises.</span>
              </p>
              
              <p className=' sm:text-[16px] text-[3.2vw] text-center text-primary mt-5 font-[900]'>
                For more details, check out our <br/>documentation
                </p>
             

            </div>

            <div className='bg-[#2C2D30]  mt-6 p-4 shadow-[7.41px_7.41px_42.33px_0px_#00000040] rounded-[21px]'>
              <p className='uppercase font-bebasneue sm:text-[19px] text-[4vw] font-[400]'>
                <span className='text-primary'>king of the monsters</span> progress</p>
              <div className=' bg-white bg-opacity-20 rounded-full w-full sm:h-[10px] h-[8px] mt-5'>
                <div className='bg-primary shadow-[0px_0px_12.7px_0px_#A8FF2F87] h-full rounded-full w-[60%]'>

                </div>
              </div>
              <p className='text-[13px] font-montserrat font-[900] text-center mt-4'>Dethrone <span className='font-[700] opacity-40'>the current king at </span> <span className='text-primary font-[900] font-montserrat'>$43,134 market cap.</span></p>
            </div>
      
    </div>
  )
}

export default DetailedTrade

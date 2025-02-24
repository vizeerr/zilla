import React, { useState } from 'react'
import unicorn from "@/assets/unicorn.png"
import kom from "@/assets/kom.png"
import Image from 'next/image'

const DetailedTrade = () => {
  const [bondingPercentage, setBondingPercentage] = useState(100)
  const [kingPercentage, setKingPercentage] = useState(100)
   
  return (
    <div className='sm:my-0'> 
            <div className='bg-white bg-opacity-5  md:rounded-[0.4rem] rounded-[1.3vw] overflow-hidden 2xl:h-6 lg:h-4 md:h-6 h-[4.6vw]'>
              <div className={`bggradient h-full opacity-100 w-[${bondingPercentage}%] md:rounded-md rounded-[1.3vw] `}>
              </div>
            </div>
            <div className='flex  2xl:my-4 md:my-3 my-[3vw]  justify-between items-center md:px-2 px-[1vw]'>
              <p className='font-bebasneue 2xl:text-lg lg:text-sm text-lg text-[4.2vw]'>BONDING CURVE PROGRESS</p>
              <p className='text-primary 2xl:text-lg lg:text-sm text-lg text-[4.2vw] font-[700] font-montserrat'>{bondingPercentage}%</p>
            </div>
            
            {bondingPercentage === 100 && 
            <div className='flex 2xl:gap-2 lg:gap-1 md:gap-2 gap-2 items-center justify-center'>
              <div className='2xl:w-10 xl:w-7 lg:w-7 md:w-11 w-9'>
                <Image src={unicorn} alt='' className="w-full"/>
              </div>
              <p className='font-montserrat 2xl:text-xs xl:text-[0.55rem] lg:text-[0.5rem] md:text-base text-[2.7vw] text-white font-[800] 2xl:mt-1.5 lg:mt-0.5 md:mt-1.5 mt-1'>Uniswap pool created ! View on Uniswap <span className='text-primary italic'>here</span></p>
            </div>
            }
           

            <div className='bg-[#111111] shadow-[8.47px_9.52px_17.57px_0px_#00000040]  lg:mt-3 md:mt-6  mt-[5.3vw] 2xl:rounded-[1.7rem] md:rounded-[1rem] rounded-[6.3vw] lg:px-3 md:px-6 px-[4.8vw] 2xl:py-7 lg:py-4 md:py-6 py-[4.8vw]'>
              <p className='font-[700] 2xl:text-sm lg:text-[0.6rem] md:text-base text-[3.2vw] text-center leading-tight'>
                
                There are <span className='text-primary font-[900]'>676,991,162.93 PROMOTION </span> 
                tokens and  <span className='text-primary font-[900]'>4,546.3 ETH </span>still available in 
                the bonding curve for sale.
              
              </p>

              <p className='font-[700] 2xl:text-sm lg:text-[0.6rem] md:text-base text-[3.2vw] text-center 2xl:mt-4 md:mt-2.5 mt-[4vw] leading-tight'>
                When the market cap reaches <span className='text-primary font-[900]'>$77,296.81</span>,
                all liquidity from the bonding curve will be 
                moved to UNISWAP and locked.<span className='text-primary font-[900]'> This 
                process accelerates as the price rises.</span>
              </p>
              
              <p className=' 2xl:text-sm lg:text-[0.6rem] md:text-base text-[3.2vw] text-center text-primary 2xl:mt-4 md:mt-2.5 mt-[4vw] font-[900]'>
                For more details, check out our <br/>documentation
                </p>
             

            </div>

            <div className='bg-[#2C2D30]  2xl:mt-5 lg:mt-3 md:mt-6 mt-[4vw] md:p-3 p-[3.5vw] shadow-[7.41px_7.41px_42.33px_0px_#00000040] 2xl:rounded-[1.2rem] md:rounded-[0.7rem] rounded-[4.5vw]'>
              <p className='uppercase font-bebasneue 2xl:text-lg lg:text-xs md:text-lg text-[4vw] font-[400]'>
                <span className='text-primary'>king of the monsters</span> progress</p>
              <div className=' bg-white bg-opacity-20 rounded-full w-full 2xl:h-2 lg:h-1.5 md:h-3 h-[2vw] md:mt-3 mt-[4vw]'>
                <div className={`bg-primary shadow-[0px_0px_12.7px_0px_#A8FF2F87] h-full rounded-full w-[${kingPercentage}%]`}>
                </div>
              </div>
              {kingPercentage == 100? 
                <div className='flex items-center justify-center 2xl:mt-3 lg:mt-2 md:mt-4 mt-[3vw] gap-2'>
                  <div className="2xl:w-7 lg:w-5 md:w-8 w-7">
                    <Image src={kom} alt='' className='w-full'/>
                  </div>
                  <p className='2xl:text-xs lg:text-[0.5rem] md:text-sm text-[#FFFFFF63] text-[2.7vw] font-montserrat font-[700] '>Crowned KOTM on 12/18/2024, 4:45:58 AM</p>
                </div>
              :
                <p className='2xl:text-xs lg:text-[0.5rem] md:text-sm text-[2.7vw] font-montserrat font-[900]  md:mt-3 mt-[3vw]'>Dethrone <span className='font-[700] opacity-40'>the current king at </span> <span className='text-primary font-[900] font-montserrat'>$43,134 market cap.</span></p>
         
              }
            </div>
      
    </div>
  )
}

export default DetailedTrade

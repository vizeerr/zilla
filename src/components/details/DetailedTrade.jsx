import React, { useState } from 'react'
import unicorn from "@/assets/unicorn.png"
import kom from "@/assets/kom.png"
import Image from 'next/image'

const DetailedTrade = () => {
  const [bondingPercentage, setBondingPercentage] = useState(60)
  const [kingPercentage, setKingPercentage] = useState(60)
   
  return (
    <div className='sm:my-0'> 
            <div className='flex  2xl:my-3 md:my-2 my-[3vw]  justify-between items-center md:px-2 px-[1vw]'>
              <p className='font-bebasneue 2xl:text-base lg:text-xs text-lg text-[4.2vw]'>BONDING CURVE PROGRESS</p>
              <p className='text-primary 2xl:text-base lg:text-xs text-lg text-[4.2vw] font-[700] font-montserrat'>{bondingPercentage}%</p>
            </div>
            <div className='bg-white bg-opacity-5  md:rounded-[0.4rem] rounded-[1.3vw] overflow-hidden 2xl:h-6 lg:h-4 md:h-6 h-[4.6vw]'>
              <div className={`bggradient h-full opacity-100 w-[${bondingPercentage}%] md:rounded-md rounded-[1.3vw] `}>
              </div>
            </div>
            
            
            {bondingPercentage === 100 && 
            <div className='flex 2xl:gap-2 lg:gap-1 md:gap-2 gap-2 items-center justify-center'>
              <div className='2xl:w-10 xl:w-7 lg:w-7 md:w-11 w-9'>
                <Image src={unicorn} alt='' className="w-full"/>
              </div>
              <p className='font-montserrat 2xl:text-xs xl:text-[0.55rem] lg:text-[0.5rem] md:text-base text-[2.7vw] text-white font-[800] 2xl:mt-1.5 lg:mt-0.5 md:mt-1.5 mt-1'>Uniswap pool created ! View on Uniswap <span className='text-primary italic'>here</span></p>
            </div>
            }
           

            <div className='bg-[#111111] shadow-[8.47px_9.52px_17.57px_0px_#00000040] 2xl:mt-6 lg:mt-4 md:mt-6  mt-[5.3vw] 2xl:rounded-[1.3rem] md:rounded-[1rem] rounded-[6.3vw] lg:px-3 md:px-6 px-[4.8vw] 2xl:py-4 lg:py-4 md:py-6 py-[4.8vw]'>
              <p className='font-[600] 2xl:text-xs lg:text-[0.55rem] md:text-base text-[3.2vw] text-center' style={{"line-height":"normal"}}>
              There are <span className='text-primary'>676,991,162</span> tokens and <span className='text-primary'>4.32</span> ETH available in the bonding curve. When the market cap hits <span className='text-primary'>$77,296</span>, all liquidity shifts to Uniswap. 
              See our <span className='text-primary'>documentation</span> for more.
              </p>
            </div>

            <div className='bg-[#2C2D30]  2xl:mt-5 lg:mt-4 md:mt-6 mt-[4vw] 2xl:p-4 md:p-3 p-[3.5vw] shadow-[7.41px_7.41px_42.33px_0px_#00000040] 2xl:rounded-[1.2rem] md:rounded-[0.8rem] rounded-[4.5vw]'>
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

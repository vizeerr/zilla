import React, { useState } from 'react'
import unicorn from "@/assets/unicorn.png"
import kom from "@/assets/kom.png"
import Image from 'next/image'

const DetailedTrade = () => {
  const [bondingPercentage, setBondingPercentage] = useState(80)
  const [kingPercentage, setKingPercentage] = useState(60)
   
  return (
    <div className='sm:my-0'> 
    <div className='bg-white bg-opacity-5  md:mt-[1.5vw]  md:rounded-[0.3vw] rounded-[1.3vw] overflow-hidden md:h-[1.2vw] h-[4.6vw]'>
              <div className={`bggradient h-full opacity-100 w-[${bondingPercentage}%] md:rounded-[0.3vw] rounded-[1.3vw] `}>
              </div>
            </div>
            <div className='flex  md:my-[0.9vw] my-[4.1vw]  justify-between items-center md:px-[0.2vw] px-[1vw]'>
              <p className='font-bebasneue md:text-[1vw] text-[4.2vw]'>BONDING CURVE PROGRESS</p>
              <p className='text-primary md:text-[1vw] text-[4.2vw] font-[700] font-montserrat'>{bondingPercentage}%</p>
            </div>
            
            {bondingPercentage === 100 && 
            <div className='flex gap-2 items-center justify-center'>
              <div className='w-10'>
                <Image src={unicorn} alt='' className="w-full"/>
              </div>
              <p className='font-montserrat text-xs text-white font-[800] mt-1.5'>Uniswap pool created ! View on Uniswap <span className='text-primary italic'>here</span></p>
            </div>
            }
           

            <div className='bg-[#111111] shadow-[8.47px_9.52px_17.57px_0px_#00000040]  md:mt-[0.6vw]  mt-[5.3vw] md:rounded-[1.6vw] rounded-[6.3vw] md:px-[0.7vw] px-[4.8vw] md:py-[1.5vw] py-[4.8vw]'>
              <p className='font-[700] md:text-[0.8vw] text-[3.2vw] text-center leading-tight'>
                
                There are <span className='text-primary font-[900]'>676,991,162.93 PROMOTION 
                tokens and 4,546.3 ETH still available in 
                the bonding curve for sale.</span> 
              
              </p>

              <p className='font-[700] md:text-[0.8vw] text-[3.2vw] text-center md:mt-[1vw] mt-[4vw] leading-tight'>
                When the market cap reaches <span className='text-primary font-[900]'>$77,296.81</span>,
                all liquidity from the bonding curve will be 
                moved to UNISWAP and locked.<span className='text-primary font-[900]'> This 
                process accelerates as the price rises.</span>
              </p>
              
              <p className=' md:text-[0.8vw] text-[3.2vw] text-center text-primary md:mt-[1vw] mt-[4vw] font-[900]'>
                For more details, check out our <br/>documentation
                </p>
             

            </div>

            <div className='bg-[#2C2D30]  md:mt-[1.2vw] mt-[4vw] md:p-[0.8vw] p-[3.5vw] shadow-[7.41px_7.41px_42.33px_0px_#00000040] md:rounded-[1vw] rounded-[4.5vw]'>
              <p className='uppercase font-bebasneue md:text-[0.9vw] text-[4vw] font-[400]'>
                <span className='text-primary'>king of the monsters</span> progress</p>
              <div className=' bg-white bg-opacity-20 rounded-full w-full md:h-[0.5vw] h-[2vw] md:mt-[1vw] mt-[4vw]'>
                <div className={`bg-primary shadow-[0px_0px_12.7px_0px_#A8FF2F87] h-full rounded-full w-[${kingPercentage}%]`}>
                </div>
              </div>
              {kingPercentage == 100? 
                <div className='flex items-center md:mt-[0.8vw] mt-[3vw] gap-2'>
                  <div>
                    <Image src={kom} alt='' className='w-8'/>
                  </div>
                  <p className='md:text-[0.68vw] text-[#FFFFFF63] text-[2.7vw] font-montserrat font-[700] '>Crowned KOTM on 12/18/2024, 4:45:58 AM</p>
                </div>
              :
                <p className='md:text-[0.68vw] text-[2.7vw] font-montserrat font-[900]  md:mt-[0.8vw] mt-[3vw]'>Dethrone <span className='font-[700] opacity-40'>the current king at </span> <span className='text-primary font-[900] font-montserrat'>$43,134 market cap.</span></p>
         
              }
            </div>
      
    </div>
  )
}

export default DetailedTrade

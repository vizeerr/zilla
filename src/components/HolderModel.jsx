import React from 'react'

const HolderModel = () => {
  return (
    <div className='bg-[#1B1C1E]  shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[3.8vw] 2xl:rounded-[2rem] md:rounded-[1.6rem] md:w-full'>
            <p className='font-[900] 2xl:text-[1.4rem] xl:text-base lg:text-sm md:text-xl text-[3vw] text-[#262626] bg-primary  2xl:py-3.5 md:py-2 py-[1.5vw] w-[53vw] 2xl:w-[22rem] xl:w-[16rem] lg:w-[14rem] md:w-[19rem] text-center 2xl:rounded-[2.2rem_0px] md:rounded-[1.6rem_0] rounded-[3vw_0]'> HOLDER DISTRIBUTION</p>
            <div className='bg-[#D9D9D926] 2xl:my-[2rem] lg:my-3 md:my-5 my-3'>
              <p className='font-[900] text-[3.3vw] 2xl:text-lg xl:text-xs lg:text-[0.6rem] md:text-sm text-center 2xl:py-4 xl:py-2.5 lg:py-1.5 md:py-2.5 py-[3vw]'> 
                <span className='text-primary '>TOP 10</span> USERS’ HOLDING - <span className='text-primary'>30.54%</span></p>
            </div>
            <div>
              <ul className='2xl:px-[1.7rem] md:px-5 px-[10vw]  h-[70vw] 2xl:h-[28rem] xl:h-[16rem] md:h-[13.5rem] overflow-y-auto md:mb-7 mb-[2vw]'>
                <li className='flex items-center justify-between'>
                  <p className='2xl:text-xl xl:text-sm lg:text-[0.7rem] md:text-base text-[3vw] text-primary font-[800] '>034...24RD</p>
                  <p className='2xl:text-3xl xl:text-xl lg:text-base md:text-xl   text-[6.3vw] font-bebasneue '> <span className='2xl:text-base xl:text-xs lg:text-[0.6rem] md:text-sm text-[3vw]'>(BONDING CURVE)</span>   26.42 %  </p>
                </li>

                {Array(29).fill().map((_, i) => (
                  <li key={i} className='flex items-center justify-between'>
                  <p className='2xl:text-xl xl:text-sm lg:text-[0.7rem] md:text-base text-[3vw] text-primary font-[800] '>034...24RD</p>
                  <p className='2xl:text-3xl xl:text-xl lg:text-base md:text-xl   text-[6.3vw] font-bebasneue '> <span className='2xl:text-base xl:text-xs lg:text-[0.6rem] md:text-sm text-[3vw]'>(DEV)</span>   26.42 %  </p>
                </li>
                ))}
                
                
              </ul>
            </div>
          </div>
  )
}

export default HolderModel

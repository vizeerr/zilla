import React from 'react'

const HolderModel = () => {
  return (
    <div className='bg-[#1B1C1E]  shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[3.8vw] 2xl:rounded-[2rem] md:rounded-[1rem] md:w-full'>
            <p className='font-[900] 2xl:text-base lg:text-xs md:text-xl text-[3vw] text-[#262626] bg-primary  2xl:py-2 md:py-1.5 py-[1.5vw] w-[53vw] 2xl:w-[18rem]  lg:w-[12rem] md:w-[19rem] text-center 2xl:rounded-[2.2rem_0px] md:rounded-[1.3rem_0] rounded-[3vw_0]'> HOLDER DISTRIBUTION</p>
            
            <div>
              <ul className='2xl:px-5 md:px-5 2xl:py-4 md:py-2 px-[10vw]  h-[70vw] 2xl:h-[18.5rem]  md:h-[12rem] overflow-y-auto 2xl:mb-7 md:mb-4 mb-[2vw] 2xl:space-y-1 xl:-space-y-2 lg:-space-y-3'>
                <li className='flex items-center justify-between'>
                  <p className='2xl:text-xs lg:text-[0.5rem] md:text-base text-[3vw] text-primary font-[800] '>034...24RD</p>
                  <p className='2xl:text-xs lg:text-[0.5rem] md:text-xl   text-[6.3vw] font-montserrat font-[800]'> <span >(BONDING CURVE)</span>   26.42 %  </p>
                </li>

                {Array(29).fill().map((_, i) => (
                  <li key={i} className='flex items-center justify-between'>
                  <p className='2xl:text-xs lg:text-[0.5rem] md:text-base text-[3vw] text-primary font-[800] '>034...24RD</p>
                  <p className='2xl:text-xs lg:text-[0.5rem]  md:text-xl   text-[6.3vw] font-montserrat font-[800] '> <span className=''>(DEV)</span>   26.42 %  </p>
                </li>
                ))}
                
                
              </ul>
            </div>
          </div>
  )
}

export default HolderModel

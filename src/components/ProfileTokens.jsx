import Image from 'next/image'
import profcopy from '@/assets/profcopy.png'
import React from 'react'

const ProfileTokens = ({dead,state}) => {
  return (
    <div className='bg-[#111111] shadow-[10px_10px_32px_0px_#0000004D] 2xl:rounded-[1rem] rounded-[0.8rem] w-full'>
      <div className='flex justify-between items-center 2xl:px-9 xl:px-6 md:px-4 px-[4vw] 2xl:pt-11 md:pt-9 pt-[6vw] 2xl:pb-8 md:pb-5 pb-[4.5vw] relative'>
        <div className='absolute 2xl:-top-10 md:-top-7 -top-[5.5vw] flex items-center 2xl:gap-4 md:gap-2 gap-[3vw]'>
            <div className='bg-[#414141] 2xl:border-[3px] border-2 border-primary 2xl:w-[4.5rem] md:w-[3.5rem] w-[10.5vw] 2xl:h-[4.5rem] md:h-[3.5rem] h-[10.5vw] rounded-full'>
            </div>
            {
              state==0? <p className='bg-[#A8FF2F] font-bebasneue 2xl:text-lg xl:text-sm md:text-xs text-[3vw] 2xl:px-9 md:px-5 px-[4vw] md:pt-1 md:pb-0.5 py-[0.5vw] rounded-full'>Bal. : 500,000,000</p> :
              <p className='bg-[#A8FF2F] font-bebasneue 2xl:text-lg xl:text-sm md:text-xs text-[3vw] 2xl:px-9 md:px-5 px-[4vw] md:pt-1 md:pb-0.5 py-[0.5vw] rounded-full'>Mcap : 500,000,000</p>
            }
            
        </div>
        {/* <div className=' items-center justify-between w-full'> */}
          <div className=' flex-1'>
              <p className='font-bebasneue 2xl:text-base xl:text-sm md:text-sm text-[2.9vw] text-white'>CAT SWAP PROMOTION <span className='text-primary font-montserrat font-[800] 2xl:text-sm xl:text-[0.7rem] md:text-xs text-[2.5vw]'> ($PROMOTION)</span></p>
              <div className='flex items-center 2xl:gap-4 md:gap-2 gap-[2vw] xl:mt-0.5 md:mt-2 mt-0.5'>
                  <p className='text-primary font-[600] font-montserrat 2xl:text-xs xl:text-[0.6rem] md:text-xs text-[2.5vw] 2xl:border-s-4 border-s-2 border-white 2xl:ps-2 ps-1 py-0.5'>abs34...3hr93</p>
                  <div className='2xl:w-7 md:w-6 w-[5vw] mt-1'>
                      <Image src={profcopy} alt='profcopy' />
                  </div>
              </div>
          </div>
          <div className='flex flex-col 2xl:gap-3 xl:gap-2 md:gap-3 gap-2 '>
              {
                dead && <div className='bg-[#50555D] rounded-full text-center 2xl:px-6 xl:px-4 md:px-3 px-[4vw] 2xl:py-1 xl:py-0.5 md:py-0.5 py-[0.5vw]'>
                <p className='text-white  font-bebasneue  2xl:text-sm xl:text-xs md:text-xs text-[3vw] uppercase mt-0.5'><span className='text-primary'>Zilla</span> Earned : 10,000,000</p>
            </div>
              }

              {
                !dead && state ==1 && <>
                <div className='bg-[#50555D] rounded-full text-center 2xl:px-6 xl:px-4 md:px-3 px-[4vw] 2xl:py-1 xl:py-0.5 md:py-0.5 py-[0.5vw]'>
                    <p className='text-white  font-bebasneue  2xl:text-sm xl:text-xs md:text-xs text-[3vw] uppercase mt-0.5'>token <span className='text-primary'>price</span> : $0.00000025</p>
                </div>
                <div className='bg-[#50555D] rounded-full text-center 2xl:px-6 xl:px-4 md:px-3 px-[4vw] 2xl:py-1 xl:py-0.5 md:py-0.5 py-[0.5vw]'>
                    <p className='text-white  font-bebasneue 2xl:text-sm xl:text-xs md:text-xs text-[3vw] uppercase mt-0.5'>creation <span className='text-primary'>time</span> : 01/01/2025</p>
                </div>
              </>
              }
              {
                !dead && state ==0 && <>
                <div className='bg-[#50555D] rounded-full text-center 2xl:px-6 xl:px-4 md:px-3 px-[4vw] 2xl:py-1 xl:py-0.5 md:py-0.5 py-[0.5vw]'>
                    <p className='text-white  font-bebasneue 2xl:text-sm xl:text-xs md:text-xs text-[3vw] uppercase mt-0.5'>value in <span className='text-primary'>eth</span> : 00.0000</p>
                </div>
                <div className='bg-[#50555D] rounded-full text-center 2xl:px-6 xl:px-4 md:px-3 px-[4vw] 2xl:py-1 xl:py-0.5 md:py-0.5 py-[0.5vw]'>
                    <p className='text-white  font-bebasneue 2xl:text-sm xl:text-xs md:text-xs text-[3vw] uppercase mt-0.5'>value in <span className='text-primary'>eth</span> : 00.0000</p>
                </div>
              </>
              }
              
          </div>
        {/* </div> */}
        
      </div>
    </div>
  )
}

export default ProfileTokens

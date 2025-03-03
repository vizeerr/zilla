import Image from 'next/image'
import profcopy from '@/assets/profcopy.png'
import React from 'react'

const ProfileTokens = () => {
  return (
    <div className='bg-[#111111] shadow-[10px_10px_32px_0px_#0000004D] rounded-[1rem] w-full'>
      <div className='flex justify-between items-center px-10 py-9 relative'>
        <div className='absolute -top-9 flex items-center gap-4'>
            <div className='bg-[#414141] border-[3px] border-primary w-[4.5rem] h-[4.5rem] rounded-full'>
            </div>
            <p className='bg-[#A8FF2F] font-bebasneue text-lg px-9 pt-1 pb-0.5 rounded-full'>Bal. : 500,000,000</p>
        </div>
        <div>
            <p className='font-bebasneue text-lg text-white'>CAT SWAP PROMOTION <span className='text-primary font-montserrat font-[800] text-base'> ($PROMOTION)</span></p>
            <div className='flex items-center gap-4 mt-2'>
                <p className='text-primary font-[600] font-montserrat text-sm border-s-4 border-white ps-2 py-1'>abs34...3hr93</p>
                <div className='w-8 mt-1'>
                    <Image src={profcopy} alt='profcopy' />
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='bg-[#50555D] rounded-full px-8 py-1'>
                <p className='text-white  font-bebasneue text-base uppercase mt-0.5'>value in <span className='text-primary'>eth</span> : 00.0000</p>
            </div>
            <div className='bg-[#50555D] rounded-full px-8 py-1'>
                <p className='text-white  font-bebasneue text-base uppercase mt-0.5'>value in <span className='text-primary'>eth</span> : 00.0000</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileTokens

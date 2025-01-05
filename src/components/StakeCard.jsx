import Image from 'next/image'
import React from 'react'
import rightr from "@/assets/arrowr.png"
import pifico from "@/assets/pifico.jpg"
import Link from 'next/link'

const StakeCard = ({data}) => {

  return (
    <div className='bg-[#111111] shadow-[12px_20px_37.64px_0px_#0000004D] rounded-[40px] p-[30px] flex'>
        <div className='w-[100%]'>
            <div className='flex items-center gap-4'>
                <div className='flex gap-2 py-[10px] px-[25px] items-center bg-[#23252A] rounded-full'>
                    <span className='w-[1.1vw] h-[1.1vw] rounded-full  bg-primary'></span>
                    <p className='font-montserrat font-[900] text-[20px] text-primary'>ONGOING</p>
                </div>
                <Link href={`/details/${data.token_address}`}>
                <div className='anim flex gap-3 items-center bg-[#23252A] rounded-full px-[15px] py-[4px]'>
                     <p className='font-bebasneue text-[20px] text-white'>see more</p>
                    <div className='w-[20px] h-[15px]'>
                        <Image src={rightr} className='w-full'/>
                    </div>
                </div>
                </Link>
            </div>

            <div className='flex gap-8 mt-8'>
                <div className='w-[215px] h-[215px] overflow-hidden rounded-[25px] border-2 border-white '>
                    <Image src={pifico} className='w-full' alt=''/>
                </div>
                <div className='flex flex-col '>
                    <div className='flex items-center gap-3'>
                        <div className='bg-primary rounded-full w-[5px] h-[45px]'></div>
                        <p className='font-montserrat font-[800] text-[36px] text-white'>{data.name}</p>
                    </div>
                    <p className='text-primary text-[20px] font-[800] font-montserrat mt-4'>{data.symbol}</p>
                    <div className='bg-[#23252A] shadow-[9px_9px_17.4px_0px_#00000040] mt-8 px-[30px] pt-[5px] leading-[60px] rounded-full'>
                        <p className='round text-[39px] text-white'>Total Rewards  :  <span className='text-primary'>12,345,678</span></p>
                    </div>
                </div>
            </div>

        </div>
        <div className='w-[80%] mx-auto'>

            <div className='bg-[#23252A] rounded-[25px] p-[24px] w-full h-full flex flex-col justify-around'>
                <div className='flex justify-between items-center'>
                    <p className='round bg-primary text-[#111111] text-[36px] px-[25px] leading-[35px] pt-[10px] rounded-full'>COMMIT</p>
                    <div className='bg-[#1B1C1E] rounded-full px-[32px] py-[8px]'>

                        <div>
                            <p className='text-white font-[800] text-[20px] font-montserrat'><span className='text-primary'>24</span> H : <span className='text-primary'>30</span> M</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <ul className='space-y-3 '>.
                        <li className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <span className='w-[0.7vw] h-[0.7vw] rounded-full  bg-primary'></span>
                                <p className='text-white  text-[22px]  font-bebasneue'>user’s committed points</p>
                            </div>
                            <p className='text-[22px]  font-montserrat font-[800] text-primary'>123,456</p>
                        </li>
                        <li className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <span className='w-[0.7vw] h-[0.7vw] rounded-full  bg-primary'></span>
                                <p className='text-white  text-[22px]  font-bebasneue'>user’s committed points</p>
                            </div>
                            <p className='text-[22px]  font-montserrat font-[800] text-primary'>123,456</p>
                        </li>
                        <li className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <span className='w-[0.7vw] h-[0.7vw] rounded-full  bg-primary'></span>
                                <p className='text-white  text-[22px]  font-bebasneue'>user’s committed points</p>
                            </div>
                            <p className='text-[22px]  font-montserrat font-[800] text-primary'>123,456</p>
                        </li>
                        
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default StakeCard

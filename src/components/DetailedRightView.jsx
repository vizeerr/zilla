"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import sett from "@/assets/sett.svg"
import bgwall from "@/assets/bgwall.svg"
import eth from "@/assets/eth.png"
import SettingModel from './SettingModel'
import DetailedTrade from './DetailedTrade'
import TradeModel from './TradeModel'


const DetailedRightView = () => {
    const [btnState,setBtnState] = useState("sell")
    const [openSet,setOpenSet] = useState(false)
    const [amt,setAmt] = useState(null)
    const [balance,setBalance] = useState(0.000010)
    
    const [prom,setPromo] = useState(false)

  return (
    <>
        <div className='flex flex-col md:gap-[1.6vw] '>
          <div className='bg-[#1B1C1E] text-white md:w-[23vw] overflow-x-hidden relative md:p-[1.6vw] p-[23px] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] md:rounded-[2vw]'>
              <TradeModel/>
            <div className='mt-8'>
              <DetailedTrade/>
            </div>
              
            </div>
   


          <div className='bg-[#1B1C1E]  shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[40px] md:rounded-[2vw] lg:block hidden'>
            <p className='font-[900] md:text-[1.3vw]  text-[#262626] bg-primary  py-[0.6vw] w-[384px] md:w-[20vw] text-center rounded-[2vw_0px]'> HOLDER DISTRIBUTION</p>
            <div className='bg-[#D9D9D926] mt-[1.6vw] mb-[0.8vw]'>
              <p className='font-[900] text-[22px] md:text-[1.1vw] text-center py-[0.6vw]'> 
                <span className='text-primary '>TOP 10</span> USERS’ HOLDING - <span className='text-primary'>30.54%</span></p>
            </div>
            <div>
              <ul className='px-[1.6vw]  h-[410px] md:h-[21vw] overflow-y-auto mb-[1vw]'>
                <li className='flex items-center justify-between'>
                  <p className='text-[20px] md:text-[1vw] text-primary font-[800] '>034...24RD</p>
                  <p className='md:text-[1.5vw]  text-[29px] font-bebasneue '> <span className='text-[21px] md:text-[1vw]'>(BONDING CURVE)</span>   26.42 %  </p>
                </li>
                <li className='flex items-center justify-between'>
                  <p className='text-[20px] md:text-[1vw] text-primary font-[800]'>034...24RD</p>
                  <p className='md:text-[1.5vw]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li>
                <li className='flex items-center justify-between'>
                  <p className='text-[20px] md:text-[1vw] text-primary font-[800]'>034...24RD</p>
                  <p className='md:text-[1.5vw]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='text-[20px] md:text-[1vw] text-primary font-[800]'>034...24RD</p>
                  <p className='md:text-[1.5vw]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='text-[20px] md:text-[1vw] text-primary font-[800]'>034...24RD</p>
                  <p className='md:text-[1.5vw]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='text-[20px] md:text-[1vw] text-primary font-[800]'>034...24RD</p>
                  <p className='md:text-[1.5vw]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='text-[20px] md:text-[1vw] text-primary font-[800]'>034...24RD</p>
                  <p className='md:text-[1.5vw]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='text-[20px] md:text-[1vw] text-primary font-[800]'>034...24RD</p>
                  <p className='md:text-[1.5vw]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='text-[20px] md:text-[1vw] text-primary font-[800]'>034...24RD</p>
                  <p className='md:text-[1.5vw]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='text-[20px] md:text-[1vw] text-primary font-[800]'>034...24RD</p>
                  <p className='md:text-[1.5vw]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='text-[20px] md:text-[1vw] text-primary font-[800]'>034...24RD</p>
                  <p className='md:text-[1.5vw]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='text-[20px] md:text-[1vw] text-primary font-[800]'>034...24RD</p>
                  <p className='md:text-[1.5vw]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='text-[20px] md:text-[1vw] text-primary font-[800]'>034...24RD</p>
                  <p className='md:text-[1.5vw]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='text-[20px] md:text-[1vw] text-primary font-[800]'>034...24RD</p>
                  <p className='md:text-[1.5vw]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li>
                
              </ul>
            </div>
          </div>

        </div>    
    </>
  )
}

export default DetailedRightView

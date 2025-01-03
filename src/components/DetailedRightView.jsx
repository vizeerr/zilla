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
        <div className='flex flex-col 2xl:gap-[32px] lg:gap-[20px] '>
          <div className='bg-[#1B1C1E] text-white 2xl:w-[460px] 2xl:max-w-[460px] lg:max-w-[340px] lg:w-[340px] 2x w-full overflow-x-hidden relative 2xl:p-[32px] lg:p-[15px] p-[23px] shadow-[12.7px_12.7px_44.02px_0px_#0000004F]lg:rounded-[40px] rounded-[16.8px]'>
              <TradeModel/>
            
            <div className='mt-8'>
              <DetailedTrade/>
            </div>
              
            </div>
   


          <div className='bg-[#1B1C1E]  shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[40px] lg:rounded-[20px] 2xl:rounded-[40px] lg:block hidden'>
            <p className='font-[900] 2xl:text-[25px] lg:text-[18px] text-[#262626] bg-primary  py-3 w-[384px] 2xl:w-[384px] lg:w-[290px] text-center rounded-[40px_0px]'> HOLDER DISTRIBUTION</p>
            <div className='bg-[#D9D9D926] mt-8 mb-4'>
              <p className='font-[900] text-[22px] lg:text-[12px] 2xl:text-[22px] text-center   py-3'> 
                <span className='text-primary '>TOP 10</span> USERS’ HOLDING - <span className='text-primary'>30.54%</span></p>
            </div>
            <div>
              <ul className='px-8  h-[410px] 2xl:h-[410px] lg:h-[250px] overflow-y-auto mb-5'>
                <li className='flex items-center justify-between'>
                  <p className='lg:text-[15px] text-[20px] 2xl:text-[20px] text-primary font-[800] '>034...24RD</p>
                  <p className='lg:text-[20px] 2xl:text-[29px]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(BONDING CURVE)</span>   26.42 %  </p>
                </li>
                <li className='flex items-center justify-between'>
                  <p className='lg:text-[15px] text-[20px] 2xl:text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='lg:text-[20px] 2xl:text-[29px]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li>
                <li className='flex items-center justify-between'>
                  <p className='lg:text-[15px] text-[20px] 2xl:text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='lg:text-[20px] 2xl:text-[29px]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='lg:text-[15px] text-[20px] 2xl:text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='lg:text-[20px] 2xl:text-[29px]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='lg:text-[15px] text-[20px] 2xl:text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='lg:text-[20px] 2xl:text-[29px]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='lg:text-[15px] text-[20px] 2xl:text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='lg:text-[20px] 2xl:text-[29px]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='lg:text-[15px] text-[20px] 2xl:text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='lg:text-[20px] 2xl:text-[29px]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='lg:text-[15px] text-[20px] 2xl:text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='lg:text-[20px] 2xl:text-[29px]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='lg:text-[15px] text-[20px] 2xl:text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='lg:text-[20px] 2xl:text-[29px]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='lg:text-[15px] text-[20px] 2xl:text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='lg:text-[20px] 2xl:text-[29px]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='lg:text-[15px] text-[20px] 2xl:text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='lg:text-[20px] 2xl:text-[29px]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='lg:text-[15px] text-[20px] 2xl:text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='lg:text-[20px] 2xl:text-[29px]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='lg:text-[15px] text-[20px] 2xl:text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='lg:text-[20px] 2xl:text-[29px]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='lg:text-[15px] text-[20px] 2xl:text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='lg:text-[20px] 2xl:text-[29px]  text-[29px] font-bebasneue '> <span className='lg:text-[18px] text-[21px] 2xl:text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li>
                
              </ul>
            </div>
          </div>

        </div>    
    </>
  )
}

export default DetailedRightView

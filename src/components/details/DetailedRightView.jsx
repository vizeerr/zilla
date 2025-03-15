"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import sett from "@/assets/sett.svg"
import bgwall from "@/assets/bgwall.svg"
import eth from "@/assets/eth.png"
import SettingModel from '../SettingModel'
import DetailedTrade from './DetailedTrade'
import TradeModel from './TradeModel'
import HolderModel from './HolderModel'
import UniswapModel from './UniswapModel'


const DetailedRightView = () => {
    const [btnState,setBtnState] = useState("sell")
    const [openSet,setOpenSet] = useState(false)
    const [amt,setAmt] = useState(null)
    const [balance,setBalance] = useState(0.000010)
    
    const [prom,setPromo] = useState(false)

  return (
    <>
        <div className='flex flex-col md:gap-[1.6vw] '>
          <div className='bg-[#1B1C1E] text-white 2xl:w-[26rem] xl:w-[17.5rem] lg:w-[17rem] overflow-x-hidden relative 2xl:p-5 md:p-4 p-[23px] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] 2xl:rounded-[2.2rem]  md:rounded-[1.6rem]'>
              <TradeModel/>
              {/* <UniswapModel/> */}
            <div className='2xl:mt-8 md:mt-6'>
              <DetailedTrade/>
            </div>
              
            </div>
            
          <HolderModel/>

        </div>    
    </>
  )
}

export default DetailedRightView

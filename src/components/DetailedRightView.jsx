"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import sett from "@/assets/sett.svg"
import bgwall from "@/assets/bgwall.svg"
import eth from "@/assets/eth.png"
import SettingModel from './SettingModel'
import DetailedTrade from './DetailedTrade'
import TradeModel from './TradeModel'
import HolderModel from './HolderModel'


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
            
          <HolderModel/>

        </div>    
    </>
  )
}

export default DetailedRightView

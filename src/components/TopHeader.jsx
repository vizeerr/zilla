"use client"
import arrowr from "@/assets/arrowr.svg"
import setico from "@/assets/setico.png"
import { useState } from "react"
import Model from "./Model"
import Image from "next/image"
import Link from "next/link"
import HeaderProfile from "./HeaderProfile"

const TopHeader = () => {
    const [open,setOpen] = useState(false);

    
  return (
    <>
    <div className="2xl:pt-10 xl:pt-8 lg:pt-6 md:pt-5 md:py-0 py-[5vw] lg:ps-6  md:ps-3 lg:pe-4 md:pe-4 lg:pb-1 md:pb-2.5 px-[4.1vw] flex items-center justify-between">
        <Link href={"/launch"}>
            <div className='md:w-auto w-[39vw] anim lg:py-5 md:py-2 py-[1.6vw] px-[5vw] lg:px-14 mx:px-5 font-montserrat bg-[#5B5B6C4F] shadow-[12px_12px_40px_0px_#0000005E] xl:rounded-[5rem_0_5rem_0] md:rounded-[6vw_0px_6vw_0px] rounded-[7.2vw_0px_7.2vw_0px]'>
                <p className='font-[800] text-white lg:text-[2.6rem]  md:text-2xl text-[3.5vw] '>LAUNCH YOUR</p>
                <div className="flex items-center xl:gap-10 md:gap-5  gap-[12px] lg:mt-3 md:mt-1">
                <p className='font-[800] text-primary lg:text-[2.6rem] md:text-2xl text-[3.5vw] leading-tight m-0'>TOKEN</p>
                <div className="lg:w-12 md:w-7 w-[4.8vw]">
                    <Image src={arrowr} alt="" className="w-full" />
                </div>
                </div>
                
            </div>
      </Link>
      <div className="flex items-center justify-between xl:gap-12 lg:gap-8 md:gap-2">
        <div className="md:block hidden">
            <HeaderProfile/>
        </div>
        
        <div className="flex flex-col items-end">
            <Link href={"/zilla-token"}>
            <div className="bg-primary anim md:w-auto w-[25vw] md:border-[0.3vw] border-[0.9vw] border-[#3C3C3C] shadow-[10.16px_13.2px_33.51px_0px_#00000040] xl:rounded-[2rem_0] md:rounded-[2.3vw_0px] rounded-[4.5vw_0px] xl:py-2 lg:py-2 md:py-1.5 xl:px-9 lg:px-8 md:px-6 py-[0.7vw] text-center">
                <p className="font-[900] font-montserrat xl:text-sm lg:text-xs md:text-[0.5rem] text-[2.1vw] text-[#3C3C3C]">$ZILLA TOKEN</p>
            </div>
            </Link>
            <div onClick={()=>setOpen(true)} className="anim shadow-[12.65px_16.44px_41.74px_0px_#00000040] flex items-center xl:gap-5 lg:gap-3 md:gap-2 gap-[2vw] bg-[#36373E] xl:mt-3 lg:mt-2 mt-[1.2vw] md:rounded-full rounded-[4.8vw] xl:ps-6 lg:ps-5 md:ps-4 xl:pe-10 lg:pe-8 md:pe-8 px-[3.3vw] xl:pt-2.5 lg:pt-2 md:pt-2 md:py-2 py-[0.9vw] md:w-auto w-[32vw] ">
                
                <div className="xl:w-14 lg:w-12 md:w-8 w-[6.5vw]">
                    <Image className="w-full" unoptimized={true} src={setico} alt="" />
                </div>
                <p className="round text-white font-[500] xl:text-4xl lg:text-3xl md:text-xl text-[3.8vw]">HOW IT <span className="text-primary">WORKS</span></p>

            </div>
        </div>

      </div>
    </div>
    <div className="md:hidden block my-[4.8vw]">
        <HeaderProfile/>
    </div>
    <Model open={open} setOpen={setOpen}/>
    </>
  )
}

export default TopHeader

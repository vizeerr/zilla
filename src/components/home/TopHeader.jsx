"use client"
import arrowr from "@/assets/arrowr.svg"
import setico from "@/assets/setico.png"
import { useState } from "react"
import Model from "../Model"
import Image from "next/image"
import Link from "next/link"
import HeaderProfile from "./HeaderProfile"

const TopHeader = () => {
    const [open,setOpen] = useState(false);

    
  return (
    <>
    <div className=" md:pt-[2rem] md:py-0 py-[5vw] md:px-[2.1vw] px-[4.1vw] flex items-center justify-between">
        <Link href={"/launch"}>
            <div className='2xl:w-[40rem] lg:w-[24rem] md:w-[16rem] w-[40vw] anim 2xl:py-6 lg:py-4 py-[1.6vw] px-[4vw] 2xl:px-20 lg:px-12 md:px-8 font-montserrat bg-[#5B5B6C4F] shadow-[12px_12px_40px_0px_#0000005E] 2xl:rounded-[6rem_0px_6rem_0px]  lg:rounded-[4rem_0px_4rem_0px] md:rounded-[2.5rem_0px_2.5rem_0px] rounded-[6vw_0px_6vw_0px]'>
                <p className='text-nowrap font-[800] text-white 2xl:text-6xl lg:text-4xl  md:text-2xl text-[3.4vw] m-0 leading-tight'>LAUNCH YOUR</p>
                <div className="flex items-center 2xl:gap-10 lg:gap-6 gap-[12px] 2xl:mt-5 lg:mt-2">
                <p className='font-[800] text-primary 2xl:text-6xl lg:text-4xl md:text-2xl text-[3.4vw] leading-tight m-0'>TOKEN</p>
                <div className="2xl:w-16 lg:w-12 md:w-8 w-[4.8vw]">
                    <Image src={arrowr} alt="" className="w-full" />
                </div>
                </div>
                
            </div>
      </Link>
      <div className="flex items-center justify-between xl:gap-8 lg:gap-4">
        <Link href={"/profile"} className="md:block hidden me-[2vw] anim">
            <HeaderProfile/>
        </Link>
        
        <div className="flex flex-col items-end">
            <Link href={"/zilla-token"}>
            <div className="bg-primary anim md:w-auto 2xl:px-12 lg:px-8 md:px-7 w-[25vw] md:border-[0.3rem] border-[2px] border-[#3C3C3C] shadow-[10.16px_13.2px_33.51px_0px_#00000040] 2xl:rounded-[2.3rem_0px] lg:rounded-[1.7rem_0px] rounded-[4.5vw_0px] lg:py-2.5 md:py-2 py-[0.7vw] text-center">
                <p className="font-[900] font-montserrat 2xl:text-lg lg:text-xs md:text-[0.7rem] text-[2.1vw] text-[#3C3C3C]">$ZILLA TOKEN</p>
            </div>
            </Link>
            <div onClick={()=>setOpen(true)} className="anim shadow-[12.65px_16.44px_41.74px_0px_#00000040] flex items-center 2xl:gap-7 lg:gap-4 gap-[2vw] bg-[#36373E] md:mt-3 mt-[1.2vw] md:rounded-full rounded-[4.8vw] 2xl:px-10 lg:px-7 px-[3.3vw] lg:pt-4 md:pt-2.5 md:py-[0.6rem] py-[0.9vw] md:w-auto w-[32vw] ">
                
                <div className="2xl:w-[4.7rem] lg:w-[3.8rem] md:w-[2.5rem] w-[6.5vw]">
                    <Image className="w-full" unoptimized={true} src={setico} alt="" />
                </div>
                <p className="round text-white font-[500] 2xl:text-5xl lg:text-4xl md:text-3xl text-[3.8vw]">HOW IT <span className="text-primary">WORKS</span></p>

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

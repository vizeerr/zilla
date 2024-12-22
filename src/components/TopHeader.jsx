"use client"
import arrowr from "@/assets/arrowr.svg"
import pif from "@/assets/pif.png"
import pifico from "@/assets/pifico.jpg"
import xlogo from "@/assets/tlogo.svg"
import tlogo from "@/assets/xlogo.svg"
import wlogo from "@/assets/wlogo.svg"
import clock from "@/assets/clock.svg"
import setico from "@/assets/setico.png"
import { useState } from "react"
import Model from "./Model"
import Image from "next/image"
import Link from "next/link"

const TopHeader = () => {
    const [open,setOpen] = useState(false);

    
  return (
    <>
    <div className=" mt-8 ps-[43px] pe-5 flex items-center justify-between">
    <Link href={"/launch"}>
      <div className='w-[673px] anim py-5 px-20 font-montserrat bg-[#5B5B6C4F] shadow-[12px_12px_40px_0px_#0000005E] rounded-[120px_0px_120px_0px]'>
        <p className='font-[800] text-white text-[65px] m-0 leading-tight'>LAUNCH YOUR</p>
        <div className="flex items-center gap-16">
        <p className='font-[800] text-primary text-[65px] leading-tight m-0'>TOKEN</p>
        <Image src={arrowr} alt="" />
        </div>
        
      </div>
      </Link>
      <div className="flex items-center justify-between gap-10">
        <div className="relative">
                <Image  src={pif} width={80} unoptimized={true} className="absolute top-[-30px] start-[-40px]" alt=""  />
            <div className="bg-[#2E2F37]  flex w-[220px] justify-between rounded-[15px]">
            
                <div className="ps-3 pe-2 py-2">
                    <div className="flex items-center gap-1 justify-end mb-2">
                            <Image src={clock} alt="" />
                            <p className="font-montserrat font-[700] text-[#6E6E6E] text-[8.3px]">9h 32min ago</p>
                    </div>
                    
                    
                    <div className="flex items-end justify-end gap-4">
                        
                        <div className="flex flex-col ms-2 gap-2 items-start">
                            <div className="bg-[#111111] w-[18px] h-[18px] flex justify-center items-center rounded-full">
                                <Image src={wlogo} width={8.61} className="" alt="" />
                            </div>
                            <div className="bg-[#111111] w-[18px] h-[18px] flex justify-center items-center rounded-full">
                                <Image src={xlogo} width={8.61} className="" alt="" />
                            </div>
                            <div className="bg-[#111111] w-[18px] h-[18px] flex justify-center items-center rounded-full">
                                <Image src={tlogo} width={8.61}  alt="" />
                            </div>
                        </div>

                        <div className="h-[111px] w-[126px] overflow-hidden rounded-xl">
                            <Image src={pifico} alt=""/>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-1 mt-2">
                        <p className="font-bebasneue text-[12px] font-[300] text-white">CAT SWAP PROMOTION </p>
                        <span className=" font-[800] text-[12px] font-montserrat mb-[4px] text-primary ">(PROMOTION)</span>

                    </div>

                    <p className="text-white opacity-30 font-[700] font-montserrat text-[8px] mb-2">Created by 0cf7..by68g</p>
                    
                    <div className="flex justify-between items-end mt-1.5">
                        <div className="bg-[#212122] text-center px-2.5 py-1 rounded-lg  w-full">
                            <p className="text-primary text-[13px] font-montserrat font-[800]">Market Cap :
                            <span className="font-montserrat text-[13px] font-[800]  text-white "> 19.99k </span> </p>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="flex justify-center w-[25px] items-center bg-primary rounded-[0_15px_15px_0]">
                    <p className=" rotate-90 text-nowrap text-sec text-[15px]  font-[900]">KING OF THE MONSTERS</p>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-end">
            <Link href={"/zilla-token"}>
            <div className="bg-primary anim w-[275px] border-[6px] border-[#3C3C3C] shadow-[10.16px_13.2px_33.51px_0px_#00000040] rounded-[45px_0px] py-3 text-center">
                <p className="font-[900] font-montserrat text-[21px] text-[#3C3C3C]">$ZILLA TOKEN</p>
            </div>
            </Link>
            <div onClick={()=>setOpen(true)} className="anim shadow-[12.65px_16.44px_41.74px_0px_#00000040] flex items-center gap-8 bg-[#36373E] mt-4 rounded-full px-10 pt-4 py-3 w-[405px] ">
                <Image width={91} unoptimized={true} src={setico} alt="" />
                <p className="round text-white font-[500] text-[50px]">HOW IT <span className="text-primary">WORKS</span></p>

            </div>
        </div>

      </div>
    </div>
    <Model open={open} setOpen={setOpen}/>
    </>
  )
}

export default TopHeader


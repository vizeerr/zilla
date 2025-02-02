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
    <div className=" md:pt-[1.6vw] md:py-0 py-[5vw] md:ps-[2.1vw] md:pe-[1vw] px-[4.1vw] flex items-center justify-between">
        <Link href={"/launch"}>
            <div className='md:w-[35vw] w-[39vw] anim md:py-[1vw] py-[1.6vw] px-[5vw] md:px-[4vw] font-montserrat bg-[#5B5B6C4F] shadow-[12px_12px_40px_0px_#0000005E] md:rounded-[6vw_0px_6vw_0px] rounded-[7.2vw_0px_7.2vw_0px]'>
                <p className='font-[800] text-white md:text-[3.3vw] text-[3.5vw] m-0 leading-tight'>LAUNCH YOUR</p>
                <div className="flex items-center md:gap-[2.5vw] gap-[12px]">
                <p className='font-[800] text-primary md:text-[3.3vw] text-[3.5vw] leading-tight m-0'>TOKEN</p>
                <div className="md:w-[4vw] w-[4.8vw]">
                    <Image src={arrowr} alt="" className="w-full" />
                </div>
                </div>
                
            </div>
      </Link>
      <div className="flex items-center justify-between 2xl:gap-10 lg:gap-8">
        {/* <div className="relative md:block hidden">
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
        </div> */}
        
        <div className="flex flex-col items-end">
            <Link href={"/zilla-token"}>
            <div className="bg-primary anim md:w-[14.3vw] w-[25vw] md:border-[0.3vw] border-[0.9vw] border-[#3C3C3C] shadow-[10.16px_13.2px_33.51px_0px_#00000040] md:rounded-[2.3vw_0px] rounded-[4.5vw_0px] md:py-[0.6vw] py-[0.7vw] text-center">
                <p className="font-[900] font-montserrat md:text-[1vw] text-[2.1vw] text-[#3C3C3C]">$ZILLA TOKEN</p>
            </div>
            </Link>
            <div onClick={()=>setOpen(true)} className="anim shadow-[12.65px_16.44px_41.74px_0px_#00000040] flex items-center md:gap-[1.6vw] gap-[2vw] bg-[#36373E] md:mt-[0.8vw] mt-[1.2vw] md:rounded-full rounded-[4.8vw] md:px-[2vw] px-[3.3vw] md:pt-[0.8vw] md:py-[0.6vw] py-[0.9vw] md:w-[21vw] w-[32vw] ">
                
                <div className="md:w-[4.7vw] w-[6.5vw]">
                    <Image className="w-full" unoptimized={true} src={setico} alt="" />
                </div>
                <p className="round text-white font-[500] md:text-[2.6vw] text-[3.8vw]">HOW IT <span className="text-primary">WORKS</span></p>

            </div>
        </div>

      </div>
    </div>
    
    <Model open={open} setOpen={setOpen}/>
    </>
  )
}

export default TopHeader

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
    <div className=" pt-8 sm:ps-[43px] sm:pe-5 px-[15px] flex items-center justify-between">
        <Link href={"/launch"}>
            <div className='sm:w-[673px] w-[39vw] anim sm:py-5 py-[8px] px-[18px] sm:px-20 font-montserrat bg-[#5B5B6C4F] shadow-[12px_12px_40px_0px_#0000005E] sm:rounded-[120px_0px_120px_0px] rounded-[30px_0px_30px_0px]'>
                <p className='font-[800] text-white sm:text-[65px] text-[3.5vw] m-0 leading-tight'>LAUNCH YOUR</p>
                <div className="flex items-center sm:gap-16 gap-[12px]">
                <p className='font-[800] text-primary sm:text-[65px] text-[3.5vw] leading-tight m-0'>TOKEN</p>
                <div className="sm:w-full w-[20px]">
                    <Image src={arrowr} alt="" />
                </div>
                </div>
                
            </div>
      </Link>
      <div className="flex items-center justify-between gap-10">
        <div className="relative sm:block hidden">
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
            <div className="bg-primary anim sm:w-[275px] w-[28vw] sm:border-[6px] border-[4px] border-[#3C3C3C] shadow-[10.16px_13.2px_33.51px_0px_#00000040] sm:rounded-[45px_0px] rounded-[25px_0px] sm:py-3 py-[5px] text-center">
                <p className="font-[900] font-montserrat sm:text-[21px] text-[2.2vw] text-[#3C3C3C]">$ZILLA TOKEN</p>
            </div>
            </Link>
            <div onClick={()=>setOpen(true)} className="anim shadow-[12.65px_16.44px_41.74px_0px_#00000040] flex items-center sm:gap-8 gap-[10px] bg-[#36373E] sm:mt-4 mt-2 sm:rounded-full rounded-[20px] sm:px-10 px-[14px] sm:pt-4  sm:py-3 py-[5px] sm:w-[405px] w-[36vw] ">
                
                <div className="sm:w-[91px] w-[6.9vw]">
                    <Image width={91} unoptimized={true} src={setico} alt="" />
                </div>
                <p className="round text-white font-[500] sm:text-[50px] text-[5vw]">HOW IT <span className="text-primary">WORKS</span></p>

            </div>
        </div>

      </div>
    </div>
    <div className="sm:hidden block">
        <div className="w-[70vw] relative rounded-[19px]  shadow-[5.13px_5.98px_8.16px_0px_#00000040] bg-[#2E2F37]  mx-auto mt-8">
        <Image  src={pif} width={40} unoptimized={true} className="absolute top-[-15px] end-[-15px] " alt=""  />
           <div className="overflow-hidden rounded-[19px]">
           
            <div className="flex items-center gap-1 pt-[7px] px-[12px]">
                <div className="flex items-center gap-1 px-[5px] py-[1.8px] bg-[#1B1B21] rounded-full">
                    <div className="w-[9px]">
                        <Image src={clock} alt="" style={{"width":"100%"}}/>
                    </div>
                    <p className="font-montserrat font-[800] text-[1.6vw] text-white">1 hr 25 mins ago</p>
                </div>
                <div className="flex gap-1 items-center">
                            <div className="bg-[#111111] w-[12px] h-[12px] flex justify-center items-center rounded-full">
                                <Image src={wlogo} width={5.5} className="" alt="" />
                            </div>
                            <div className="bg-[#111111] w-[12px] h-[12px] flex justify-center items-center rounded-full">
                                <Image src={xlogo} width={5} className="" alt="" />
                            </div>
                            <div className="bg-[#111111] w-[12px] h-[12px] flex justify-center items-center rounded-full">
                                <Image src={tlogo} width={6}  alt="" />
                            </div>
                        </div>
            </div>
            <div className="flex items-start justify-center gap-[12px] my-[7px] px-[15px]">
                <div className="w-[17vw] h-[17vw] rounded-[9px] overflow-hidden">   
                    <Image src={pifico} alt=""/>
                </div>
                <div>
                    <div className="flex items-center justify-center gap-1 mt-1">
                        <p className="font-bebasneue text-[2.8vw] font-[300] text-white">CAT SWAP PROMOTION </p>
                        <span className=" font-[800] text-[2.8vw] font-montserrat mb-[4px] text-primary ">(PROMOTION)</span>

                    </div>
                    <p className="text-white opacity-30 font-[700] font-montserrat text-[8px] mb-2">Created by 0cf7..by68g</p>
                    
                    <div className="flex justify-between items-end mt-1.5">
                        <div className="bg-[#212122] text-center px-2.5 py-1 rounded-[9px] shadow-[3.6px_3.6px_8.27px_0px_#000000C9]  w-full">
                            <p className="text-primary text-[2.8vw] font-montserrat font-[800]">Market Cap :
                            <span className="font-montserrat text-[2.8vw] font-[800]  text-white "> 19.99k </span> </p>
                        </div>
                        
                    </div>

                </div>
            </div>
            <div className="bg-primary text-center mt-[12px]">
                <p className="font-montserrat text-[#262626] text-[3vw] font-[900]" >KING OF THE MONSTERS</p>
            </div>
            </div>
        </div>
    </div>
    <Model open={open} setOpen={setOpen}/>
    </>
  )
}

export default TopHeader


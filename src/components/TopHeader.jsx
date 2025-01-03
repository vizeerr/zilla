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
    <div className=" pt-8 2xl:ps-[43px] 2xl:pe-5 px-[15px] lg:px-[24px] flex items-center justify-between">
        <Link href={"/launch"}>
            <div className='2xl:w-[673px] w-[39vw] anim 2xl:py-5 lg:py-[14px] py-[8px] lg:px-[28px] lg:w-[35vw] px-[18px] 2xl:px-20 font-montserrat bg-[#5B5B6C4F] shadow-[12px_12px_40px_0px_#0000005E] 2xl:rounded-[120px_0px_120px_0px] lg:rounded-[60px_0px_60px_0] rounded-[30px_0px_30px_0px]'>
                <p className='font-[800] text-white 2xl:text-[65px] text-[3.5vw] m-0 leading-tight'>LAUNCH YOUR</p>
                <div className="flex items-center 2xl:gap-16 gap-[12px]">
                <p className='font-[800] text-primary 2xl:text-[65px] text-[3.5vw] leading-tight m-0'>TOKEN</p>
                <div className="2xl:w-full w-[20px]">
                    <Image src={arrowr} alt="" />
                </div>
                </div>
                
            </div>
      </Link>
      <div className="flex items-center justify-between 2xl:gap-10 lg:gap-8">
        <div className="relative lg:block hidden">
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
            <div className="bg-primary anim 2xl:w-[275px] lg:w-[22vw] w-[28vw] 2xl:border-[6px] border-[4px] border-[#3C3C3C] shadow-[10.16px_13.2px_33.51px_0px_#00000040] 2xl:rounded-[45px_0px] rounded-[25px_0px] lg:rounded-[40px_0px] 2xl:py-3 py-[5px] text-center">
                <p className="font-[900] font-montserrat 2xl:text-[21px] text-[2.2vw] text-[#3C3C3C]">$ZILLA TOKEN</p>
            </div>
            </Link>
            <div onClick={()=>setOpen(true)} className="anim shadow-[12.65px_16.44px_41.74px_0px_#00000040] flex items-center 2xl:gap-8 gap-[10px] bg-[#36373E] 2xl:mt-4 mt-2 2xl:rounded-full rounded-[20px] lg:rounded-[30px] 2xl:px-10 px-[14px] lg:px-[20px] 2xl:pt-4  2xl:py-3 py-[5px] 2xl:w-[405px] lg:w-[32vw] w-[36vw] ">
                
                <div className="2xl:w-[91px] w-[6.9vw]">
                    <Image width={91} unoptimized={true} src={setico} alt="" />
                </div>
                <p className="round text-white font-[500] 2xl:text-[50px] text-[5vw]">HOW IT <span className="text-primary">WORKS</span></p>

            </div>
        </div>

      </div>
    </div>
    <div className="lg:hidden block">
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


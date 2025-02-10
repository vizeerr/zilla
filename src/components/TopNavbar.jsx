"use client"
import logo from "@/assets/logo.png"
import xlogo from "@/assets/xlogo.png"
import tlogo from "@/assets/tlogo.png"
import glogo from "@/assets/glogo.png"
import dlogo from "@/assets/dlogo.png"

import poly from "@/assets/polygon1.svg"
import power from "@/assets/power.svg"
import profile from "@/assets/profile.svg"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useState } from "react"
 

const TopNavbar = () => {

  const [connect,setConnect] = useState(false);
  const [connMenu,setConnMenu] = useState(false);

 
  const pathname = usePathname()  

  return (
    
    <div className="sticky top-0  z-20">
      <div className="bg-primary flex items-center justify-between 2xl:py-3 lg:py-2 py-[1vw]">
        <div className="2xl:ps-9 lg:ps-6 ps-[2.1vw] w-[22vw] 2xl:w-64 lg:w-44 md:w-32">
          <Link href={"/"}>
            <Image className="w-full"  src={logo} alt="" />
          </Link>
        </div>
        <div className="flex items-center 2xl:gap-4 md:gap-3 gap-[1vw] md:pe-4 pe-[2.5vw]">
          <div className="md:flex hidden items-center  2xl:gap-4 md:gap-3 gap-[1.2vw]">
            <Link href={"/launch"} className={`${pathname == "/launch" ? 'bg-white text-[#262626]' :"bg-sec text-white"} 2xl:px-7 lg:px-6 md:px-5 anim rounded-full font-bebasneue 2xl:text-xl lg:text-lg md:text-base  pt-[0.2vw] pb-[0.1vw]  `}>
            <button href={"/launch"} >LAUNCH</button>
            </Link>
            <Link href={"/zilla-token"} className={`${pathname == "/zilla-token" ? 'bg-white text-[#262626]' :"bg-sec text-white"} 2xl:px-7 lg:px-6 md:px-5 anim rounded-full font-bebasneue 2xl:text-xl lg:text-lg md:text-base   pt-[0.2vw] pb-[0.1vw]  `} >
            <button >$ZILLA</button>
            </Link>
            
            <Link href={"/stake"} className={`${pathname == "/stake" ? 'bg-white text-[#262626]' :"bg-sec text-white"} 2xl:px-7 lg:px-6 md:px-5 anim rounded-full font-bebasneue 2xl:text-xl lg:text-lg md:text-base   pt-[0.2vw] pb-[0.1vw]  `}>
            <button>STAKE</button>
            </Link>
            <Link href={"/referral"} className={`${pathname == "/referral" ? 'bg-white text-[#262626]' :"bg-sec text-white"} 2xl:px-7 lg:px-6 md:px-5 anim rounded-full font-bebasneue 2xl:text-xl lg:text-lg md:text-base   pt-[0.2vw] pb-[0.1vw]  `}>
            <button>REFERRAL</button>
            </Link>
          </div>

          <div className="2xl:w-10 lg:w-8 md:w-6 anim 2xl:h-10 lg:h-8 2xl:p-2.5 lg:p-2.5 md:p-1.5 md:h-6 w-[5vw] h-[5vw] bg-sec flex justify-center items-center rounded-full p-[5px]">
            <Link href ={"/"} >
              <Image src={xlogo} alt="" />
            </Link>
          </div>
          <div className="2xl:w-10 lg:w-8 md:w-6 anim 2xl:h-10 lg:h-8 2xl:p-2.5 lg:p-2 md:p-1.5 md:h-6  w-[5vw] h-[5vw] bg-sec flex justify-center items-center rounded-full p-[5px]">
            <Link href={""} >
              <Image src={tlogo} alt="" />
            </Link>
          </div>
          <div className="2xl:w-10 lg:w-8 md:w-6 anim 2xl:h-10 lg:h-8 2xl:p-2.5 lg:p-2 md:p-1.5 md:h-6 w-[5vw] h-[5vw] bg-sec flex justify-center items-center rounded-full p-[5px]">
            <Link href ={"/"} >
              <Image src={dlogo} alt="" />
            </Link>
          </div>
          <div className="2xl:w-10 lg:w-8 md:w-6 anim 2xl:h-10 lg:h-8 2xl:p-2.5 lg:p-2 md:p-1.5 md:h-6 w-[5vw] h-[5vw] bg-sec flex justify-center items-center rounded-full p-[5px]">
            <Link href ={"/"} >
              <Image src={glogo} alt="" />
            </Link>
          </div>
        {!connect?
          <button onClick={()=>setConnect(true)} className="xl:border-[3px] md:border-[2px] border-[1px] anim border-sec rounded-full font-montserrat lg:py-2 md:py-1 lg:px-5 md:px-4   font-[800] bg-white anim text-tertiary 2xl:text-sm lg:text-xs md:text-[0.6rem]  text-[1.8vw] px-[1.2vw] py-[0.5vw] ">CONNECT WALLET</button>
        : <div className="relative flex items-center lg:gap-5 md:gap-3 gap-2 text-white bg-[#262626] xl:border-[3px] md:border-[2px] border-[1px]  border-sec rounded-full font-montserrat lg:py-1.5 md:py-1 2xl:px-8 lg:px-7 md:px-[1.7rem] font-[800] px-[2.7vw] py-[0.5vw]">
            <p  onClick = {()=>setConnMenu(!connMenu)} className="2xl:text-sm lg:text-xs md:text-[0.6rem]  text-[1.4vw]">0x45...67fr</p>
            <div onClick = {()=>setConnMenu(!connMenu)} className={`${connMenu? "rotate-180":"rotate-0"} 2xl:w-4 lg:w-3 md:w-2 w-1.5`}>
              <Image src={poly} alt="" className="w-full" />
            </div>
            {connMenu &&
            <div className="absolute lg:top-[2.6rem] md:top-[2rem] top-[1.3rem] shadow-lg 2xl:w-44 lg:w-40 md:w-32 w-16 end-0 flex items-center  bg-sec 2xl:py-1.5 2x:px-4 py-1 lg:px-2 px-1 md:rounded-[0.7rem] rounded-[0.5rem]">
              <div className="bg-sec w-3 h-3 absolute top-[-0.3vw] end-[45%] rotate-45"></div>
              <div onClick={()=>setConnect(false)} className="flex flex-col items-center w-1/2 py-1 hover:bg-[#37383A] rounded-md">
                <div className="2xl:w-5 2xl:h-5 lg:w-4 lg:h-4 md:w-3 md:h-3 w-2 h-2">
                  <Image src={power} alt="" />
                </div>
                <p className="2xl:text-[0.6rem] lg:text-[0.5rem] md:text-[0.4rem] text-[0.2rem] md:mt-1.5 mt-0.5">Disconnect</p>
              </div>
              <div className="flex flex-col items-center py-1 hover:bg-[#37383A] w-1/2 rounded-md">
              <div className="2xl:w-5 2xl:h-5 lg:w-4 lg:h-4 md:w-3 md:h-3 w-2 h-2">
                <Image src={profile} alt="" />
              </div>
                <p className="2xl:text-[0.6rem] lg:text-[0.5rem] md:text-[0.4rem] text-[0.2rem] md:mt-1.5 mt-0.5">Profile</p>
              </div>
            </div>
            }
        </div>
        }
        </div>

      </div>
      <div className="py-[1.2vw] md:hidden flex justify-center gap-[3.1vw] bg-[#3C3C3C]">
        <Link href={"/launch"}>
          <button className={`${pathname == "/launch" ? 'bg-white text-[#262626]' :"bg-sec text-white"} px-[4.3vw] anim rounded-full font-bebasneue  text-[2.9vw] pt-[0.9vw] pb-[0.4vw]  `}>LAUNCH</button>
          </Link>
          <Link href={"/zilla-token"}>
          <button className={`${pathname == "/zilla-token" ? 'bg-white text-[#262626]' :"bg-sec text-white"} px-[4.3vw] anim rounded-full font-bebasneue  text-[2.9vw] pt-[0.9vw] pb-[0.4vw]  `}>$ZILLA</button>
          </Link>
          
          <Link href={"/stake"}>
          <button className={`${pathname == "/stake" ? 'bg-white text-[#262626]' :"bg-sec text-white"} px-[4.3vw] anim rounded-full font-bebasneue  text-[2.9vw] pt-[0.9vw] pb-[0.4vw]  `}>STAKE</button>
          </Link>
          <Link href={"/referral"}>
          <button className={`${pathname == "/referral" ? 'bg-white text-[#262626]' :"bg-sec text-white"} px-[4.3vw] anim rounded-full font-bebasneue  text-[2.9vw] pt-[0.9vw] pb-[0.4vw]  `}>REFERRAL</button>
          </Link>
      </div>
    </div>
    
    
  )
}

export default TopNavbar
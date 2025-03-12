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
        <div className="lg:ps-6 ps-[2.1vw] w-[20vw] lg:w-44 md:w-32">
          <Link href={"/"}>
            <Image className="w-full"  src={logo} alt="" />
          </Link>
        </div>
        <div className="flex items-center md:gap-3 gap-[1vw] md:pe-4 pe-[2.5vw]">
          <div className="md:flex hidden items-center md:gap-3 gap-[1.2vw]">
            <Link href={"/launch"} className={`${pathname == "/launch" ? 'bg-white text-[#262626]' :"bg-sec text-white"}  lg:px-6 md:px-5 anim rounded-full font-bebasneue 2xl:text-lg lg:text-base md:text-sm   pt-0.5  `}>
            <button href={"/launch"} >LAUNCH</button>
            </Link>
            <Link href={"/zilla-token"} className={`${pathname == "/zilla-token" ? 'bg-white text-[#262626]' :"bg-sec text-white"}  lg:px-6 md:px-5 anim rounded-full font-bebasneue 2xl:text-lg lg:text-base md:text-sm  pt-0.5  `} >
            <button >$ZILLA</button>
            </Link>
            
            <Link href={"/stake"} className={`${pathname == "/stake" ? 'bg-white text-[#262626]' :"bg-sec text-white"}  lg:px-6 md:px-5 anim rounded-full font-bebasneue 2xl:text-lg lg:text-base md:text-sm  pt-0.5  `}>
            <button>STAKE</button>
            </Link>
            <Link href={"/referral"} className={`${pathname == "/referral" ? 'bg-white text-[#262626]' :"bg-sec text-white"}  lg:px-6 md:px-5 anim rounded-full font-bebasneue 2xl:text-lg lg:text-base md:text-sm  pt-0.5  `}>
            <button>REFERRAL</button>
            </Link>
          </div>

          <div className="lg:w-8 md:w-6 anim lg:h-8 lg:p-2 md:p-1.5 md:h-6 w-[4vw] h-[4vw] bg-sec flex justify-center items-center rounded-full p-[1vw]">
            <Link href ={"/"} >
              <Image src={xlogo} alt="" />
            </Link>
          </div>
          <div className="lg:w-8 md:w-6 anim lg:h-8 lg:p-2 md:p-1.5 md:h-6 w-[4vw] h-[4vw] bg-sec flex justify-center items-center rounded-full p-[1vw]">
            <Link href={""} className="me-[0.02rem]">
              <Image src={tlogo}  alt="" />
            </Link>
          </div>
          <div className="lg:w-8 md:w-6 anim lg:h-8 lg:p-2 md:p-1.5 md:h-6 w-[4vw] h-[4vw] bg-sec flex justify-center items-center rounded-full p-[1vw]">
            <Link href ={"/"} >
              <Image src={dlogo} alt="" />
            </Link>
          </div>
          <div className="lg:w-8 md:w-6 anim lg:h-8 lg:p-2 md:p-1.5 md:h-6 w-[4vw] h-[4vw] bg-sec flex justify-center items-center rounded-full p-[1vw]">
            <Link href ={"/"} >
              <Image src={glogo} alt="" />
            </Link>
          </div>
        {!connect?
          <button onClick={()=>setConnect(true)} className="xl:border-[3px] md:border-[2px] border-[1px] anim border-sec rounded-full font-montserrat lg:py-1.5  md:px-4   font-[800] bg-white anim text-tertiary lg:text-xs md:text-[0.6rem]  text-[1.6vw] px-[1.4vw] pt-[0.6vw] pb-[0.4vw] ">CONNECT WALLET</button>
        : <div className="cursor-pointer relative flex items-center lg:gap-4 md:gap-3 gap-3 text-white bg-[#262626] xl:border-[3px] md:border-[2px] border-[1px]  border-sec rounded-full font-montserrat lg:py-1.5 md:py-1 lg:px-7 md:px-[1.9rem] font-[800] px-[2.7vw] py-[0.5vw]">
            <p  onClick = {()=>setConnMenu(!connMenu)} className="lg:text-xs md:text-[0.6rem]  text-[1.6vw]">0x45...67fr</p>
            <div onClick = {()=>setConnMenu(!connMenu)} className={`${connMenu? "rotate-180":"rotate-0"} lg:w-3 md:w-2 w-1.5`}>
              <Image src={poly} alt="" className="w-full" />
            </div>
            {connMenu &&
            <div className=" absolute lg:top-[2.6rem] md:top-[2rem] top-[1.3rem] shadow-xl lg:w-[9.5rem] md:w-32 w-[19vw] end-0 flex items-center  bg-sec md:py-2 py-[0.8vw] md:px-2 px-[0.8vw] md:rounded-[0.6rem] rounded-[0.5rem]">
              <div className="bg-sec w-2 h-2 absolute top-[-0.2vw] end-[45%] rotate-45"></div>
                <div onClick={()=>setConnect(false)} className="flex flex-col items-center w-1/2 py-1 hover:bg-[#37383A] rounded-md">
                  <div className=" md:w-3.5 w-2">
                    <Image src={power} alt="" />
                  </div>
                  <p className="lg:text-[0.5rem] md:text-[0.4rem] text-[0.3rem] md:mt-1.5 mt-0.5">Disconnect</p>
                </div>
                <div className="flex flex-col items-center py-1 hover:bg-[#37383A] w-1/2 rounded-md">
                  <div className="md:w-3.5 w-2">
                    <Image src={profile} alt="" />
                  </div>
                  <p className="lg:text-[0.5rem] md:text-[0.4rem] text-[0.3rem] md:mt-1.5 mt-0.5">Profile</p>
                </div>
            </div>
            }
        </div>
        }
        </div>

      </div>
      <div className="py-[1.2vw] md:hidden flex justify-center gap-[3.1vw] bg-[#3C3C3C]">
        <Link href={"/launch"}>
          <button className={`${pathname == "/launch" ? 'bg-white text-[#262626]' :"bg-sec text-white"} px-[4.5vw] anim rounded-full font-bebasneue  text-[3vw] pt-[0.7vw] pb-[0.3vw]  `}>LAUNCH</button>
          </Link>
          <Link href={"/zilla-token"}>
          <button className={`${pathname == "/zilla-token" ? 'bg-white text-[#262626]' :"bg-sec text-white"} px-[4.5vw] anim rounded-full font-bebasneue  text-[3vw] pt-[0.7vw] pb-[0.3vw]   `}>$ZILLA</button>
          </Link>
          
          <Link href={"/stake"}>
          <button className={`${pathname == "/stake" ? 'bg-white text-[#262626]' :"bg-sec text-white"} px-[4.5vw] anim rounded-full font-bebasneue  text-[3vw] pt-[0.7vw] pb-[0.3vw]   `}>STAKE</button>
          </Link>
          <Link href={"/referral"}>
          <button className={`${pathname == "/referral" ? 'bg-white text-[#262626]' :"bg-sec text-white"} px-[4.5vw] anim rounded-full font-bebasneue  text-[3vw] pt-[0.7vw] pb-[0.3vw]   `}>REFERRAL</button>
          </Link>
      </div>
    </div>
    
    
  )
}

export default TopNavbar
"use client"
import logo from "@/assets/logo.svg"
import xlogo from "@/assets/tlogo.svg"
import tlogo from "@/assets/xlogo.svg"
import poly from "@/assets/polygon 1.svg"
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
        <div className="flex items-center 2xl:gap-4 md:gap-3 gap-[1.2vw] md:pe-4 pe-[2.5vw]">
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

          <div className="2xl:w-10 lg:w-8 md:w-6 anim 2xl:h-10 lg:h-8 2xl:p-2.5 lg:p-2 md:p-1.5 md:h-6 w-[3.7vw] h-[3.7vw] bg-sec flex justify-center items-center rounded-full p-[0.9vw]">
            <Link href ={"/"} >
              <Image src={xlogo} alt="" />
            </Link>
          </div>
          <div className="2xl:w-10 lg:w-8 md:w-6 anim 2xl:h-10 lg:h-8 2xl:p-2.5 lg:p-2 md:p-1.5 md:h-6  w-[3.7vw] h-[3.7vw] bg-sec flex justify-center items-center rounded-full p-[0.9vw]">
            <Link href={""} >
              <Image src={tlogo} alt="" />
            </Link>
          </div>
        {!connect?
          <button onClick={()=>setConnect(true)} className="xl:border-[3px] md:border-[2px] border-[1px] anim border-sec rounded-full font-montserrat lg:py-2 md:py-1 lg:px-5 md:px-4   font-[800] bg-white text-tertiary 2xl:text-sm lg:text-xs md:text-[0.6rem]  text-[1.4vw] px-[1.2vw] py-[0.5vw] ">CONNECT WALLET</button>
        : <div className="relative flex items-center lg:gap-5 md:gap-3 text-white bg-[#262626] xl:border-[3px] md:border-[2px] border-[1px]  border-sec rounded-full font-montserrat lg:py-1.5 md:py-1 lg:px-7 md:px-6 font-[800] px-[1.2vw] py-[0.5vw]">
            <p  onClick = {()=>setConnMenu(!connMenu)} className="">0x45...67fr</p>
            <div onClick = {()=>setConnMenu(!connMenu)} className={`${connMenu? "rotate-180":"rotate-0"} 2xl:text-sm lg:text-xs md:text-[0.6rem]  text-[1.4vw]`}>
              <Image src={poly} alt="" />
            </div>
            {connMenu &&
            <div className="absolute top-[2.6vw] shadow-lg w-[180px] end-0 flex items-center  bg-sec py-1.5 px-4 rounded-[0.7rem]">
              <div className="bg-sec w-3 h-3 absolute top-[-0.3vw] end-[45%] rotate-45"></div>
              <div onClick={()=>setConnect(false)} className="flex flex-col items-center w-1/2 py-1 hover:bg-[#37383A] rounded-md">
                <div className="w-[26px] h-[26px]">
                  <Image src={power} alt="" />
                </div>
                <p className="text-[0.6rem] mt-1">Disconnect</p>
              </div>
              <div className="flex flex-col items-center py-1 hover:bg-[#37383A] w-1/2 rounded-md">
                <Image src={profile} alt="" />
                <p className="text-[0.6rem] mt-1">Profile</p>
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
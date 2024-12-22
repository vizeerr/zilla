"use client"
import logo from "@/assets/logo.svg"
import xlogo from "@/assets/tlogo.svg"
import tlogo from "@/assets/xlogo.svg"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'
 

const TopNavbar = () => {
 
  const pathname = usePathname()  

  return (
    
    <div className="">
      <div className="bg-primary flex items-center justify-between py-3">
        <div className="px-10">
          <Image className=""  src={logo} alt="" />
        </div>
        <div className="flex items-center gap-4 pe-4">
          <Link href={"/launch"}>
          <button className={`${pathname == "/launch" ? 'bg-white text-[#262626]' :"bg-sec text-white"} px-[30px] anim rounded-full font-bebasneue  text-[23px] pt-1 pb-0.5  `}>LAUNCH</button>
          </Link>
          <Link href={"/zilla-token"}>
          <button className={`bg-sec text-white px-[30px] anim rounded-full font-bebasneue  text-[23px] pt-1 pb-0.5  `}>$ZILLA</button>
          </Link>
          
          <Link href={"/zilla-token"}>
          <button className={`bg-sec text-white px-[30px] anim rounded-full font-bebasneue  text-[23px] pt-1 pb-0.5  `}>STAKE</button>
          </Link>
          <Link href={"/referral"}>
          <button className={`bg-sec text-white px-[30px] anim rounded-full font-bebasneue  text-[23px] pt-1 pb-0.5  `}>REFERRAL</button>
          </Link>
          <button className="w-[45.73px] anim h-[45.73px] rounded-full bg-sec p-3">
            <Image src={xlogo} alt="" />
          </button>
          <button className="w-[45.73px] anim h-[45.73px] rounded-full bg-sec p-3">
            <Image src={tlogo} alt="" />
          </button>
          <button className="border-[3px] anim border-sec rounded-full font-montserrat py-[7px] px-[20px] font-[800] bg-white text-tertiary text-[13px] ">CONNECT WALLET</button>
        </div>

      </div>
    </div>
    
    
  )
}

export default TopNavbar

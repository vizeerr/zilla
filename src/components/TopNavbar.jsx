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
    
    <div className="sticky top-0  z-20">
      <div className="bg-primary flex items-center justify-between sm:py-3 py-1">
        <div className="sm:ps-10 ps-[8px] w-[100px] sm:w-auto">
          <Link href={"/"}>
            <Image className=""  src={logo} alt="" />
          </Link>
        </div>
        <div className="flex items-center sm:gap-4 gap-1 sm:pe-4 pe-[8px]">
          <div className="sm:flex hidden items-center sm:gap-4 gap-1 sm:pe-4 pe-[8px]">
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
          </div>
          <div className="sm:w-[45.73px] anim sm:h-[45.73px] sm:p-3 w-[15.5px] h-[15.5px] bg-sec flex justify-center items-center rounded-full p-1">
          <Link href ={"/"} >
           <Image src={xlogo} alt="" />
          </Link>
          </div>
          <div className="sm:w-[45.73px] anim sm:h-[45.73px] sm:p-3 w-[15.5px] h-[15.5px] bg-sec flex justify-center items-center rounded-full p-1">
            <Link href={""} >
              <Image src={tlogo} alt="" />
            </Link>
          </div>
          <button className="sm:border-[3px] border-[1px] anim border-sec rounded-full font-montserrat sm:py-[7px] sm:px-[20px] font-[800] bg-white text-tertiary sm:text-[13px] text-[7px] px-[5px] py-[2px] ">CONNECT WALLET</button>
        </div>

      </div>
      <div className="py-[5px] sm:hidden flex justify-center gap-[13px] bg-[#3C3C3C]">
        <Link href={"/launch"}>
          <button className={`${pathname == "/launch" ? 'bg-white text-[#262626]' :"bg-sec text-white"} px-[18px] anim rounded-full font-bebasneue  text-[12px] pt-1 pb-0.5  `}>LAUNCH</button>
          </Link>
          <Link href={"/zilla-token"}>
          <button className={`bg-sec text-white px-[18px] anim rounded-full font-bebasneue  text-[12px] pt-1 pb-0.5  `}>$ZILLA</button>
          </Link>
          
          <Link href={"/zilla-token"}>
          <button className={`bg-sec text-white px-[18px] anim rounded-full font-bebasneue  text-[12px] pt-1 pb-0.5  `}>STAKE</button>
          </Link>
          <Link href={"/referral"}>
          <button className={`bg-sec text-white px-[18px] anim rounded-full font-bebasneue  text-[12px] pt-1 pb-0.5  `}>REFERRAL</button>
          </Link>
      </div>
    </div>
    
    
  )
}

export default TopNavbar

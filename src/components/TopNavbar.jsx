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
      <div className="bg-primary flex items-center justify-between 2xl:py-3 py-1">
        <div className="2xl:ps-10 xl:px-4 ps-[8px]  w-[100px] 2xl:w-auto xl:w-[12vw]">
          <Link href={"/"}>
            <Image className=""  src={logo} alt="" />
          </Link>
        </div>
        <div className="flex items-center 2xl:gap-4 xl:gap-2 gap-1 2xl:pe-4 xl:pe-4 pe-[8px]">
          <div className="xl:flex hidden items-center 2xl:gap-4  xl:gap-2 gap-1 2xl:pe-4  ">
            <Link href={"/launch"}>
            <button className={`${pathname == "/launch" ? 'bg-white text-[#262626]' :"bg-sec text-white"} 2xl:px-[30px] xl:px-[20px] anim rounded-full font-bebasneue xl:text-[15px] 2xl:text-[23px] pt-1 pb-0.5  `}>LAUNCH</button>
            </Link>
            <Link href={"/zilla-token"}>
            <button className={`${pathname == "/zilla-token" ? 'bg-white text-[#262626]' :"bg-sec text-white"} 2xl:px-[30px] xl:px-[20px] anim rounded-full font-bebasneue xl:text-[15px] 2xl:text-[23px] pt-1 pb-0.5  `}>$ZILLA</button>
            </Link>
            
            <Link href={"/stake"}>
            <button className={`${pathname == "/stake" ? 'bg-white text-[#262626]' :"bg-sec text-white"} 2xl:px-[30px] xl:px-[20px] anim rounded-full font-bebasneue xl:text-[15px] 2xl:text-[23px] pt-1 pb-0.5  `}>STAKE</button>
            </Link>
            <Link href={"/referral"}>
            <button className={`${pathname == "/referral" ? 'bg-white text-[#262626]' :"bg-sec text-white"} 2xl:px-[30px] xl:px-[20px] anim rounded-full font-bebasneue xl:text-[15px] 2xl:text-[23px] pt-1 pb-0.5  `}>REFERRAL</button>
            </Link>
          </div>
          <div className="2xl:w-[45.73px] anim 2xl:h-[45.73px] 2xl:p-3 xl:p-2 xl:w-[28px] xl:h-[28px] w-[15.5px] h-[15.5px] bg-sec flex justify-center items-center rounded-full p-1">
          <Link href ={"/"} >
           <Image src={xlogo} alt="" />
          </Link>
          </div>
          <div className="2xl:w-[45.73px] anim 2xl:h-[45.73px] 2xl:p-3 xl:p-2 xl:w-[28px] xl:h-[28px] w-[15.5px] h-[15.5px] bg-sec flex justify-center items-center rounded-full p-1">
            <Link href={""} >
              <Image src={tlogo} alt="" />
            </Link>
          </div>
          <button className="2xl:border-[3px] xl:border-[2px] border-[1px] anim border-sec rounded-full font-montserrat 2xl:py-[7px] xl:py-[4px] 2xl:px-[20px] xl:px-[10px] font-[800] bg-white text-tertiary 2xl:text-[13px] xl:text-[9px] text-[7px] px-[5px] py-[2px] ">CONNECT WALLET</button>
        </div>

      </div>
      <div className="py-[5px] xl:hidden flex justify-center gap-[13px] bg-[#3C3C3C]">
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

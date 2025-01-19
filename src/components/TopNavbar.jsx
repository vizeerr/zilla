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
      <div className="bg-primary flex items-center justify-between md:py-[0.6vw] py-[1vw]">
        <div className="md:ps-[2vw] ps-[2.1vw] w-[20.9vw] md:w-[13vw]">
          <Link href={"/"}>
            <Image className="w-full"  src={logo} alt="" />
          </Link>
        </div>
        <div className="flex items-center md:gap-[0.8vw] gap-[1.2vw] md:pe-[0.8vw] pe-[2.5vw]">
          <div className="md:flex hidden items-center  md:gap-[0.8vw] gap-[1.2vw]">
            <Link href={"/launch"} className={`${pathname == "/launch" ? 'bg-white text-[#262626]' :"bg-sec text-white"} md:px-[1.6vw] anim rounded-full font-bebasneue md:text-[1.1vw]  pt-[0.2vw] pb-[0.1vw]  `}>
            <button href={"/launch"} >LAUNCH</button>
            </Link>
            <Link href={"/zilla-token"} className={`${pathname == "/zilla-token" ? 'bg-white text-[#262626]' :"bg-sec text-white"} md:px-[1.6vw] anim rounded-full font-bebasneue md:text-[1.1vw] pt-[0.2vw] pb-[0.1vw]  `} >
            <button >$ZILLA</button>
            </Link>
            
            <Link href={"/stake"} className={`${pathname == "/stake" ? 'bg-white text-[#262626]' :"bg-sec text-white"} md:px-[1.6vw] anim rounded-full font-bebasneue md:text-[1.1vw] pt-[0.2vw] pb-[0.1vw]  `}>
            <button>STAKE</button>
            </Link>
            <Link href={"/referral"} className={`${pathname == "/referral" ? 'bg-white text-[#262626]' :"bg-sec text-white"} md:px-[1.6vw] anim rounded-full font-bebasneue md:text-[1.1vw] pt-[0.2vw] pb-[0.1vw]  `}>
            <button>REFERRAL</button>
            </Link>
          </div>

          <div className="md:w-[2.1vw] anim md:h-[2.1vw] md:p-[0.6vw] w-[3.7vw] h-[3.7vw] bg-sec flex justify-center items-center rounded-full p-[0.9vw]">
            <Link href ={"/"} >
              <Image src={xlogo} alt="" />
            </Link>
          </div>
          <div className="md:w-[2.1vw] anim md:h-[2.1vw] md:p-[0.6vw] w-[3.7vw] h-[3.7vw] bg-sec flex justify-center items-center rounded-full p-[0.9vw]">
            <Link href={""} >
              <Image src={tlogo} alt="" />
            </Link>
          </div>
          <button className="xl:border-[3px] md:border-[1.5px] border-[1px] anim border-sec rounded-full font-montserrat md:py-[0.4vw] md:px-[1vw] font-[800] bg-white text-tertiary md:text-[0.7vw] text-[1.4vw] px-[1.2vw] py-[0.5vw] ">CONNECT WALLET</button>
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
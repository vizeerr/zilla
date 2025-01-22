import React from 'react'
import pif from "@/assets/pif.png"
import pifico from "@/assets/pifico.jpg"
import xlogo from "@/assets/tlogo.svg"
import tlogo from "@/assets/xlogo.svg"
import wlogo from "@/assets/wlogo.svg"
import clock from "@/assets/clockprim.svg"
import Image from "next/image"
const HeaderProfile = () => {
  return (
    <div className="md:w-auto w-[72.5vw] md:rounded-[1.3vw] rounded-[4.4vw] relative bg-[#2E2F37] shadow-[7.41px_8.65px_11.79px_0px_#00000040] mx-auto  ">
            <div className="2xl:w-16 lg:w-10 md:w-7 w-[10.2vw] 2xl:h-16 lg:h-10 md:h-7 h-[10.2vw] absolute md:top-[-1.5vw] top-[-5vw] md:end-[-1.5vw] end-[-5vw]">
                <Image src={pif} className="w-full"/>
            </div>
            <div>
                <div className="flex items-center gap-[0.4vw] 2xl:gap-1.5 lg:gap-1 md:gap-0.5 2xl:px-3 lg:px-1.5 md:px-1 px-[2vw] 2xl:pt-3 lg:pt-1 md:pt-1 pt-[1.5vw]">
                    <div className="2xl:py-1 lg:py-0.5 md:py-0.5 py-[0.6vw] 2xl:px-2.5 lg:px-1.5 md:px-1 px-[0.9vw] flex 2xl:gap-1.5 lg:gap-1 gap-[0.5vw] items-center bg-[#1B1B21] rounded-full">
                        <div className='2xl:w-5 lg:w-2 md:w-1.5 w-[2.2vw]'>
                            <Image src={clock} className='w-full'/>
                        </div>
                        <p className="font-montserrat font-[800] 2xl:text-[0.6rem] lg:text-[0.3rem] md:text-[0.25rem] text-[1.4vw] text-white">1 hr 25 mins ago</p>
                    </div>
                    <div className="2xl:w-5 lg:w-2.5 md:w-2 w-[3.1vw] 2xl:h-5 lg:h-2.5 md:h-2 h-[3.1vw] bg-[#1B1B21] rounded-full 2xl:md-1 lg:p-0.5 md:p-[0.1rem] p-[0.7vw]">
                        <Image src={wlogo} className="w-full"/>
                    </div>
                    <div className="2xl:w-5 lg:w-2.5 md:w-2 w-[3.1vw] 2xl:h-5 lg:h-2.5 md:h-2 h-[3.1vw] bg-[#1B1B21] rounded-full 2xl:md-1 lg:p-0.5 md:p-[0.1rem] p-[0.7vw]">
                        <Image src={xlogo} className="w-full"/>
                    </div>
                    <div className="2xl:w-5 lg:w-2.5 md:w-2 w-[3.1vw] 2xl:h-5 lg:h-2.5 md:h-2 h-[3.1vw] bg-[#1B1B21] rounded-full 2xl:md-1 lg:p-0.5 md:p-[0.1rem] p-[0.7vw]">
                        <Image src={tlogo} className="w-full"/>
                    </div>
                </div>
                <div className="2xl:mt-3 lg:mt-1.5 md:mt-1 mt-[1.8vw] flex items-center 2xl:gap-4 lg:gap-3 md:gap-2 gap-[3vw] md:px-[1vw] px-[3.3vw]">
                    <div className="2xl:w-28 lg:w-16 md:w-11 w-[18vw] 2xl:h-28 lg:h-16 md:h-11 h-[18vw] md:rounded-[0.6vw] rounded-[2.1vw] overflow-hidden">
                        <Image src={pifico} className="w-full"/>
                    </div>
                    <div>
                        <p className="font-bebasneue font-[400] 2xl:text-xl lg:text-[0.6rem] md:text-[0.5rem] text-[3.1vw] text-white leading-none">CAT SWAP PROMOTION <span className="text-primary font-montserrat font-[800] md:text-[0.9vw] text-[2.9vw]">(PROMOTION)</span></p>
                        <p className="font-[700] text-[#6D6D73] 2xl:text-xs lg:text-[0.4rem] md:text-[0.3rem] text-[2.3vw] leading-none 2xl:mt-0 lg:mt-1 md:mt-1 mt-[0.8vw]">Created by 0xcb455..4586</p>
                        <div className="bg-[#1B1B21] shadow-[5.2px_5.2px_11.96px_0px_#000000C9] 2xl:py-2 lg:py-1 md:py-0.5 py-[0.8vw] w-full text-center md:rounded-[0.7vw] rounded-[2vw] 2xl:mt-3 lg:mt-2 md:mt-1.5 mt-[1.4vw]">
                            <p className="text-primary 2xl:text-sm lg:text-[0.5rem] md:text-[0.4rem] text-[2.4vw] font-[800] ">MARKET CAP : 19.99K</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="bg-primary py-[0.15vw] text-center 2xl:mt-3 lg:mt-1.5 md:mt-1.5 mt-[2vw] md:rounded-b-[1.3vw] rounded-b-[4.4vw]">
                <p className="font-montserrat font-[900] 2xl:text-lg lg:text-xs md:text-[0.5rem] text-[3.1vw] text-[#262626]">KING OF THE MONSTERS</p>
            </div>
        </div>
  )
}

export default HeaderProfile

import React from 'react'
import pif from "@/assets/pif.png"
import pifico from "@/assets/pifico.jpg"
import xlogo from "@/assets/xlogo.png"
import tlogo from "@/assets/tlogo.png"
import wlogo from "@/assets/wlogo.png"
import clock from "@/assets/clock2.png"
import Image from "next/image"
const HeaderProfile = () => {
  return (
    <div className="2xl:w-[24rem] lg:w-[18rem] md:w-[15rem] w-[72.5vw] md:rounded-[1.3rem] rounded-[4.4vw] relative bg-[#2E2F37] shadow-[7.41px_8.65px_11.79px_0px_#00000040] mx-auto  ">
            <div className="md:w-12 w-[10.2vw] md:h-12 h-[1 0.2vw] absolute md:top-[-1.5rem] top-[-5vw] md:end-[-1.5rem] end-[-5vw]">
                <Image src={pif} className="w-full"/>
            </div>
            <div>
                <div className="flex items-center  gap-[0.5vw] 2xl:px-2.5 md:px-1.5 px-[2vw] 2xl:pt-2.5 md:pt-1 pt-[1.5vw]">
                    <div className="md:py-1 py-[0.6vw] md:px-1.5 px-[1.6vw] flex md:gap-1 gap-[1vw] items-center bg-[#1B1B21] rounded-full">
                        <div className='lg:w-3.5 md:w-3 w-[2.2vw]'>
                            <Image src={clock} className='w-full'/>
                        </div>
                        <p className="font-montserrat font-[800] 2xl:text-[0.5rem] lg:text-[0.45rem] md:text-[0.38rem] mt-0.5  text-[1.4vw] text-white">1 hr 25 mins ago</p>
                    </div>
                    <div className="md:w-4  w-[3.6vw] md:h-4 h-[3.5vw] bg-[#1B1B21] rounded-full md:p-[3px] p-[4px]">
                        <Image src={wlogo} className="w-full"/>
                    </div>
                    <div className="md:w-4 w-[3.4vw] md:h-4 h-[3.5vw] bg-[#1B1B21] rounded-full md:p-[4px] p-[4px]">
                        <Image src={xlogo} className="w-full"/>
                    </div>
                    <div className="md:w-4 w-[3.5vw] md:h-4 h-[3.5vw] bg-[#1B1B21] rounded-full md:p-[4px] p-[4px]">
                        <Image src={tlogo} className="w-full"/>
                    </div>
                </div>
                <div className="md:mt-2.5 mt-[1.8vw] flex items-center lg:gap-3.5 md:gap-2 gap-[3vw] 2xl:px-4 md:px-2 px-[3.3vw]">
                    <div className="2xl:w-24 lg:w-20 md:w-16 w-[18vw] 2xl:h-24 lg:h-20 md:h-16 h-[18vw] md:rounded-[0.6rem] rounded-[2.1vw] overflow-hidden">
                        <Image src={pifico} className="w-full"/>
                    </div>
                    <div>
                        <p className="font-bebasneue font-[400] 2xl:text-base lg:text-sm md:text-xs text-[2.8vw] text-nowrap text-white leading-none">CAT SWAP PROMOTION <span className="text-primary font-montserrat font-[800] 2xl:text-[0.9rem] lg:text-[0.6rem] md:text-[0.5rem] text-[2.4vw]">($PROMOTION)</span></p>
                        <p className="font-[800] font-montserrat text-[#6D6D73] 2xl:text-[0.6rem] md:text-[0.5rem] text-[1.9vw] leading-none md:mt-[0.3rem] mt-[0.8vw]">Created by 0xcb455..4586</p>
                        <div className="bg-[#1B1B21] shadow-[5.2px_5.2px_11.96px_0px_#000000C9] md:py-2 py-[0.8vw] w-full text-center md:rounded-[0.6rem] rounded-[2vw] md:mt-2.5 mt-[1.6vw]">
                            <p className="text-primary 2xl:text-xs font-montserrat lg:text-[0.6rem] md:text-[0.5rem] text-[2.2vw] font-[800] md:mt-0 mt-[0.45vw]">MARKET CAP : 19.99K</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="bg-primary py-[0.15vw] text-center md:mt-2.5 mt-[2vw] md:rounded-b-[1.3rem] rounded-b-[4.4vw]">
                <p className="font-montserrat font-[900] 2xl:text-base lg:text-sm md:text-xs  text-[3.1vw] text-[#262626]">KING OF THE MONSTERS</p>
            </div>
        </div>
  )
}

export default HeaderProfile
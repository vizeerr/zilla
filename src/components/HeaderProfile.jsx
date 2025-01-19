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
    <div className="md:w-[22.5vw] w-[72.5vw] md:rounded-[1.3vw] rounded-[4.4vw] relative bg-[#2E2F37] shadow-[7.41px_8.65px_11.79px_0px_#00000040] mx-auto  ">
            <div className="md:w-[3.2vw] w-[10.2vw] md:h-[3.2vw] h-[10.2vw] absolute md:top-[-1.5vw] top-[-5vw] md:end-[-1.5vw] end-[-5vw]">
                <Image src={pif} className="w-full"/>
            </div>
            <div>
                <div className="flex items-center gap-[0.4vw] md:px-[0.6vw] px-[2vw] md:pt-[0.5vw] pt-[1.5vw]">
                    <div className="md:py-[0.1vw] py-[0.6vw] md:px-[0.3vw] px-[0.9vw] flex md:gap-[0.2vw] gap-[0.5vw] items-center bg-[#1B1B21] rounded-full">
                        <div className='md:w-[0.8vw] w-[2.2vw]'>
                            <Image src={clock} className='w-full'/>
                        </div>
                        <p className="font-montserrat font-[800] md:text-[0.5vw] text-[1.4vw] text-white">1 hr 25 mins ago</p>
                    </div>
                    <div className="md:w-[0.9vw] w-[3.1vw] md:h-[0.9vw] h-[3.1vw] bg-[#1B1B21] rounded-full md:p-[0.2vw] p-[0.7vw]">
                        <Image src={wlogo} className="w-full"/>
                    </div>
                    <div className="md:w-[0.9vw] w-[3.1vw] md:h-[0.9vw] h-[3.1vw] bg-[#1B1B21] rounded-full md:p-[0.2vw] p-[0.8vw]">
                        <Image src={xlogo} className="w-full"/>
                    </div>
                    <div className="md:w-[0.9vw] w-[3.1vw] md:h-[0.9vw] h-[3.1vw] bg-[#1B1B21] rounded-full md:p-[0.2vw] p-[0.8vw]">
                        <Image src={tlogo} className="w-full"/>
                    </div>
                </div>
                <div className="md:mt-[0.6vw] mt-[1.8vw] flex items-center md:gap-[0.9vw] gap-[3vw] md:px-[1vw] px-[3.3vw]">
                    <div className="md:w-[5.5vw] w-[18vw] md:h-[5.5vw] h-[18vw] md:rounded-[0.6vw] rounded-[2.1vw] overflow-hidden">
                        <Image src={pifico} className="w-full"/>
                    </div>
                    <div>
                        <p className="font-bebasneue font-[400] md:text-[1vw] text-[3.1vw] text-white leading-none">CAT SWAP PROMOTION <span className="text-primary font-montserrat font-[800] md:text-[0.9vw] text-[2.9vw]">(PROMOTION)</span></p>
                        <p className="font-[700] text-[#6D6D73] md:text-[0.5vw] text-[2.3vw] leading-none md:mt-[0.3vw] mt-[0.8vw]">Created by 0xcb455..4586</p>
                        <div className="bg-[#1B1B21] shadow-[5.2px_5.2px_11.96px_0px_#000000C9] md:py-[0.4vw] py-[0.8vw] w-full text-center md:rounded-[0.7vw] rounded-[2vw] md:mt-[0.6vw] mt-[1.4vw]">
                            <p className="text-primary md:text-[0.7vw] text-[2.4vw] font-[800] ">MARKET CAP : 19.99K</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="bg-primary py-[0.15vw] text-center md:mt-[0.6vw] mt-[2vw] md:rounded-b-[1.3vw] rounded-b-[4.4vw]">
                <p className="font-montserrat font-[900] md:text-[1vw] text-[3.1vw] text-[#262626]">KING OF THE MONSTERS</p>
            </div>
        </div>
  )
}

export default HeaderProfile

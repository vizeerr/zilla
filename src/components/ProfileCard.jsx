import Image from 'next/image'
import React from 'react'
import pif from "@/assets/pif.png"
import pifico from "@/assets/pifico.jpg"
import xlogo from "@/assets/tlogo.svg"
import tlogo from "@/assets/xlogo.svg"
import wlogo from "@/assets/wlogo.svg"
import clock from "@/assets/clock.svg"

const ProfileCard = () => {
  return (
    <div className="relative">
                <div className=" w-[9vw]">
                    <Image  src={pif} alt="" width={100} />
                </div>
                <div className="bg-[#2E2F37]  flex w-[220px] justify-between rounded-[15px]">
                
                    <div className="ps-3 pe-2 py-2">
                        <div className="flex items-center gap-1 justify-end mb-2">
                                <Image src={clock} alt="" />
                                <p className="font-montserrat font-[700] text-[#6E6E6E] text-[8.3px]">9h 32min ago</p>
                        </div>
                        
                        
                        <div className="flex items-end justify-end gap-4">
                            
                            <div className="flex flex-col ms-2 gap-2 items-start">
                                <div className="bg-[#111111] w-[18px] h-[18px] flex justify-center items-center rounded-full">
                                    <Image src={wlogo} width={8.61} className="" alt="" />
                                </div>
                                <div className="bg-[#111111] w-[18px] h-[18px] flex justify-center items-center rounded-full">
                                    <Image src={xlogo} width={8.61} className="" alt="" />
                                </div>
                                <div className="bg-[#111111] w-[18px] h-[18px] flex justify-center items-center rounded-full">
                                    <Image src={tlogo} width={8.61}  alt="" />
                                </div>
                            </div>
    
                            <div className="h-[111px] w-[126px] overflow-hidden rounded-xl">
                                <Image src={pifico} alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-1 mt-2">
                            <p className="font-bebasneue text-[12px] font-[300] text-white">CAT SWAP PROMOTION </p>
                            <span className=" font-[800] text-[12px] font-montserrat mb-[4px] text-primary ">($PROMOTION)</span>
    
                        </div>
    
                        <p className="text-white opacity-30 font-[700] font-montserrat text-[8px] mb-2">Created by 0cf7..by68g</p>
                        
                        <div className="flex justify-between items-end mt-1.5">
                            <div className="bg-[#212122] text-center px-2.5 py-1 rounded-lg  w-full">
                                <p className="text-primary text-[13px] font-montserrat font-[800]">Market Cap :
                                <span className="font-montserrat text-[13px] font-[800]  text-white "> 19.99k </span> </p>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="flex justify-center w-[25px] items-center bg-primary rounded-[0_15px_15px_0]">
                        <p className=" rotate-90 text-nowrap text-sec text-[15px]  font-[900]">KING OF THE MONSTERS</p>
                    </div>
                </div>
            </div>
  )
}

export default ProfileCard

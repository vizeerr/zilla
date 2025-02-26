import { motion } from "framer-motion";
import React, { useState } from 'react';
import cross from "@/assets/cross.png";
import eth from "@/assets/eth.png";
import pif from "@/assets/pif.png";
import cam from "@/assets/cam.png"
import Image from "next/image";
const TickerModel = ({openTic,setOpenTic}) => {
    const [ticker,setTicker] = useState(false)
    const handleClose = (e) => {
        if (e.target.id === "background") {
          setOpenTic(false);
        }
    }

      
  return (
    <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: openTic ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`${
            openTic ? "flex " : "hidden"
          } bg-[#00000080] fixed z-20  justify-center items-center w-full h-screen  top-0`}
          onClick={(e) => handleClose(e)}
          id="background">
            
            <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: openTic ? 1 : 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                    id="box"
                    className={`${
                        openTic ? "block" : "hidden"
                    } bg-[#1B1C1E] 2xl:w-[50rem] lg:w-[39rem] md:w-[40rem] w-[98vw] h-min md:rounded-[1.7rem] rounded-[2.5vw]`}>

                    <div className="w-full flex justify-end md:pt-3 pt-3 md:pe-3 pe-3">
                        <div className="2xl:w-9 md:w-7 w-[4.5vw] cursor-pointer anim">
                
                            <Image
                                src={cross}
                                className=" w-full "
                                onClick={() => setOpenTic(false)}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="2xl:px-16 md:px-10 px-[7vw]">
                        
                        <p className="2xl:text-3xl md:text-2xl text-[3.6vw] text-white font-[700] font-montserrat text-center" >Choose How Many <span className="text-primary">Ticker</span>  You Want to Buy</p>
                        <p className="md:mt-6 mt-[4.5vw] font-montserrat leading-tight text-center font-[600] text-white border-s-primary md:border-s-[6px] border-s-[3px] md:py-1  2xl:text-lg md:text-sm text-2xl text-[2.3vw]"><span className="text-primary">Disclaimer</span > : <span className="opacity-40"> Its optional, but buying a small amount of coins can help</span> protect your coin from snipers</p>
                        
                        <div className="w-full flex justify-end md:my-5 my-[2.9vw]">
                            <p onClick={()=>setTicker(!ticker)} className="bg-primary text-[#222227] 2xl:text-base md:text-sm text-[2.3vw] font-bebasneue 2xl:w-32 md:w-28 w-[18.9vw] py-0.5 text-center rounded-full">Switch To {ticker?"ETH":"ticker"}</p>
                        </div>
                        <div className="bg-[#111111] shadow-2xl md:px-8 px-[5.3vw] w-full md:py-6 py-[2.6vw] rounded-xl">
                            <div className="flex justify-between items-center">
                                <input type="number" className="w-full bg-transparent text-white font-montserrat font-[700] 2xl:text-5xl md:text-4xl text-[5vw] border-0 focus:outline-none" placeholder="0" />
                                <div className="2xl:w-16 md:w-10 w-[5.8vw]">
                                    {ticker? 
                                    <Image src={pif} alt={""}/>
        
                                    :
                                    <Image src={eth} alt={""}/>
                                    }
                                </div>
                            </div>
                            <div>
                            <div className="flex items-center justify-between 2xl:mt-2 md:mt-1">
                                <p className="text-[#4E4F54] 2xl:text-base md:text-sm text-[2.5vw] font-bebasneue">{ticker?"COST : [x] ETH":"you receive : [x] Ticker"}</p>
                                <p className="text-[#4E4F54] 2xl:text-base md:text-sm text-[2.5vw] font-bebasneue">0.0000 ETH</p>

                            </div>
                        </div>

                        </div>

                        
                    </div>
                    <div className="">
                        <p className="text-[#1B1C1E] anim bg-primary round 2xl:text-7xl md:text-5xl text-[8vw] leading-none md:pt-3 pt-[1.4vw] text-center mx-auto 2xl:w-[25rem] md:w-[17rem] w-[43vw] 2xl:my-12 my-7 rounded-full">create coin</p>
                    </div>

            </motion.div>
            
      
    </motion.div>
  )
}

export default TickerModel

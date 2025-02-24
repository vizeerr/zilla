import Image from 'next/image'
import React, { useState } from 'react'
import sett from "@/assets/sett.png"
import bgwall from "@/assets/bgwall.png"
import eth from "@/assets/eth.png"
import SettingModel from './SettingModel'

const TradeModel = () => {
     const [btnState,setBtnState] = useState("sell")
        const [openSet,setOpenSet] = useState(false)
        const [amt,setAmt] = useState(null)
        const [balance,setBalance] = useState(0.000010)
        
        const [prom,setPromo] = useState(false)
  return (
    <div className = " w-full">
      <div className='md:gap-8 gapp-0 flex md:justify-center justify-between'>
              <button onClick={()=>setBtnState('buy')} className= {`${btnState=="buy"? "bg-primary text-[#1B1C1E]" :"text-[#666666] bg-[#2C2D30]"} border-0  anim md:w-full w-[29vw] md:py-2  py-[8px] shadow-[4.23px_4.23px_11.96px_0px_#00000054] 2xl:rounded-[0.9rem] md:rounded-[0.6rem] rounded-[2.9vw] font-[800] 2xl:text-lg md:text-xs text-[3.4vw]`}> BUY</button>
              <button  onClick={()=>setBtnState('sell')} className= {`${btnState=="sell"? "bg-primary text-[#1B1C1E]" :"text-[#666666] bg-[#2C2D30]"} border-0  anim md:w-full w-[28vw] md:py-2  py-[8px]  shadow-[4.23px_4.23px_11.96px_0px_#00000054] 2xl:rounded-[0.9rem] md:rounded-[0.6rem] rounded-[2.9vw] font-[800] 2xl:text-lg md:text-xs text-[3.4vw]`}> SELL</button>

            </div>

            <div  className= {`${btnState=="buy"?"justify-between" : "justify-end"} flex   items-center w-full 2xl:mt-8 md:mt-5 mt-[3.8vw]`}>
                <div onClick={()=>setPromo(!prom)} className={`${btnState=="buy"? "block" : "hidden"} bg-[#66666663]  anim 2xl:px-4 md:px-3 px-[2.5vw] text-white text-center rounded-full pt-[0.5vw] md:pt-1`}>
                    <p className='font-bebasneue font-[400] 2xl:text-sm lg:text-[0.55rem] md:text-xs text-[3.1vw]'>SWITCH TO <span className='text-primary'>{prom?"ETH":"PROMOTION"}</span></p>
                </div>
                <div className='flex items-center 2xl:gap-4 md:gap-2 gap-2'>
                <p className='text-[#FFFFFF4D] font-[700] 2xl:text-sm lg:text-[0.55rem] md:text-xs text-[2.8vw]'>{btnState == "sell" ? "0.000010 PROMOTION":"0.00 ETH"}</p>
                <div className='2xl:w-6 lg:w-4 md:w-5 w-[4vw]'>
                    <Image onClick={()=>{setOpenSet(true)}} src={sett} alt='' className='anim'/>
                </div>
                </div>
            </div>
            <SettingModel openSet={openSet} setOpenSet = {setOpenSet} />

            {btnState == 'sell'? 
            
            <div className=''> 
                <div className='bg-[#111111] 2xl:rounded-[1.3rem] md:rounded-[0.8rem] rounded-[5.3vw] lg:mt-4 md:mt-6 mt-[4vw] 2xl:p-5 lg:p-3 md:p-5 p-[4.8vw] flex justify-between items-center shadow-[12.7px_12.7px_14.81px_0px_#00000040]'>
                    <div>
                    <input type='number' onChange={(e)=>{
                            setAmt(e.target.value)
                        }} className='font-bebasneue 2xl:text-2xl lg:text-lg md:text-2xl text-[5.8vw] font-[400] bg-transparent outline-none' placeholder='Enter amount'/> 
                        <p className=' opacity-30 text-[2.4vw] 2xl:text-[0.6rem] md:text-[0.4rem] font-[400]'>0 ETH</p>
                    </div>

                    <div className='2xl:w-11 md:w-8 w-[48.5px] 2xl:h-11 md:h-8 h-[48.5px] rounded-full overflow-hidden'>
                        <Image src={bgwall} alt=''/>
                    </div>
                </div> 
                  
                
                <div className='2xl:mt-10 lg:mt-4 md:mt-6 mt-5 '>
                    <div className='flex flex-wrap '>
                        <div className='flex w-full justify-evenly px-1.5 md:gap-2 gap-[2vw]'>
                            <div className='bg-[#2C2D30]  anim rounded-full  w-full text-center pt-[0.5vw] 2xl:pt-1.5 md:pt-0.5 '>
                                <p className='font-bebasneue font-[400] 2xl:text-xs lg:text-[0.6rem] md:text-sm text-[3.1vw]  opacity-50'>25%</p>
                            </div>
                            <div className='bg-[#2C2D30]  anim rounded-full  w-full text-center pt-[0.5vw] 2xl:pt-1.5 md:pt-0.5 '>
                                <p className='font-bebasneue font-[400] 2xl:text-xs lg:text-[0.6rem] md:text-sm text-[3.1vw]  opacity-50'>50%</p>
                            </div>
                            <div className='bg-[#2C2D30]  anim rounded-full  w-full text-center pt-[0.5vw] 2xl:pt-1.5 md:pt-0.5 '>
                                <p className='font-bebasneue font-[400] 2xl:text-xs lg:text-[0.6rem] md:text-sm text-[3.1vw]  opacity-50'>75%</p>
                            </div>
                            <div className='bg-[#2C2D30]  anim rounded-full  w-full text-center pt-[0.5vw] 2xl:pt-1.5 md:pt-0.5 '>
                                <p className='font-bebasneue font-[400] 2xl:text-xs lg:text-[0.6rem] md:text-sm text-[3.1vw]  opacity-50'>100%</p>
                            </div>
                            <div className='bg-[#2C2D30]  anim rounded-full  w-full text-center pt-[0.5vw] 2xl:pt-1.5 md:pt-0.5 '>
                                <p className='font-bebasneue font-[400] 2xl:text-xs lg:text-[0.6rem] md:text-sm text-[3.1vw]  opacity-50'>RESET</p>
                            </div>
                        </div>
                    </div>
                    <p className='2xl:w-40 xl:w-28 lg:w-24 md:w-36 w-[32vw] mx-auto round mt-7 bg-primary anim lg:leading-[2vw] leading-[9vw] lg:pt-[0.6vw] md:pt-2 pt-[2vw] text-[#262626] 2xl:text-[3rem] lg:text-[1.87rem] md:text-4xl  text-[11vw] text-center md:px-[1.8vw] px-[6vw] lg:rounded-[0.7vw] md:rounded-[0.8rem] rounded-[3vw] shadow-[5.21px_5.21px_7.76px_0px_#00000040]'>
                    SWAP
                    </p>
                    
                </div>

            </div> :
            <div>
                <div className='bg-[#111111] 2xl:rounded-[1.3rem] md:rounded-[0.8rem] rounded-[5.3vw] lg:mt-4 md:mt-6 mt-[4vw] 2xl:p-5 lg:p-3 md:p-5 p-[4.8vw] flex justify-between items-center shadow-[12.7px_12.7px_14.81px_0px_#00000040]'>
                    <div>
                        <input type='number' onChange={(e)=>{
                            setAmt(e.target.value)
                        }} className='font-bebasneue 2xl:text-2xl lg:text-lg md:text-2xl text-[5.8vw] font-[400] bg-transparent outline-none' placeholder='Enter amount'/> 
                        <p className='  opacity-30 text-[2.4vw] 2xl:text-[0.6rem] md:text-[0.4rem] font-[400]'> {balance} {prom? "PROMOTION":"ETH"}</p>
                    </div>
                    <div className='2xl:w-11 md:w-8 w-[48.5px] 2xl:h-11 md:h-8 h-[48.5px] rounded-full overflow-hidden'>
                        <Image src={eth } alt=''/>
                    </div>
                </div>
                <div className='flex justify-end md:mt-[1vw] mt-[4.8vw] items-center'>
                    
                    <p className={`${amt>balance? "block" :"hidden"} font-bebasneue md:text-[0.7vw] text-[3.1vw] text-[#FF2F61]`}>insufficient balance</p>
                </div>
                

                <div className='2xl:mt-5 lg:mt-2 md:mt-3 mt-2 '>
                    <div className='flex flex-wrap '>
                        <div className='flex w-full justify-evenly px-1.5 md:gap-2 gap-[2vw]'>
                            <div className='bg-[#2C2D30]  anim rounded-full  w-full text-center pt-[0.5vw] 2xl:pt-1.5 md:pt-0.5 '>
                                <p className='font-bebasneue font-[400] 2xl:text-xs lg:text-[0.6rem] md:text-sm text-[3.1vw]  opacity-50'>0.02ETH</p>
                            </div>

                            <div className='bg-[#2C2D30]  anim rounded-full  w-full text-center pt-[0.5vw] 2xl:pt-1.5 md:pt-0.5 '>
                                <p className='font-bebasneue font-[400] 2xl:text-xs lg:text-[0.6rem] md:text-sm text-[3.1vw]  opacity-50'>0.05ETH</p>
                            </div>
                            <div className='bg-[#2C2D30]  anim rounded-full  w-full text-center pt-[0.5vw] 2xl:pt-1.5 md:pt-0.5 '>
                                <p className='font-bebasneue font-[400] 2xl:text-xs lg:text-[0.6rem] md:text-sm text-[3.1vw]  opacity-50'>0.1ETH</p>
                            </div>
                            <div className='bg-[#2C2D30]  anim rounded-full  w-full text-center pt-[0.5vw] 2xl:pt-1.5 md:pt-0.5 '>
                                <p className='font-bebasneue font-[400] 2xl:text-xs lg:text-[0.6rem] md:text-sm text-[3.1vw]  opacity-50'>0.2ETH</p>
                            </div>
                            <div className='bg-[#2C2D30]  anim rounded-full  w-full text-center pt-[0.5vw] 2xl:pt-1.5 md:pt-0.5 '>
                                <p className='font-bebasneue font-[400] 2xl:text-xs lg:text-[0.6rem] md:text-sm text-[3.1vw]  opacity-50'>RESET</p>
                            </div>
                        </div>
                    </div>
                    <p className='2xl:w-40 xl:w-28 lg:w-24 md:w-36 w-[32vw] mx-auto round mt-7 bg-primary anim lg:leading-[2vw] leading-[9vw] lg:pt-[0.6vw] md:pt-2 pt-[2vw] text-[#262626] 2xl:text-[3rem] lg:text-[1.87rem] md:text-4xl  text-[11vw] text-center md:px-[1.8vw] px-[6vw] lg:rounded-[0.7vw] md:rounded-[0.8rem] rounded-[3vw] shadow-[5.21px_5.21px_7.76px_0px_#00000040]'>
                    SWAP
                    </p>
                    
                </div>

            </div>

            }
    </div>
  )
}

export default TradeModel

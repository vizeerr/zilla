import Image from 'next/image'
import React, { useState } from 'react'
import sett from "@/assets/sett.svg"
import bgwall from "@/assets/bgwall.svg"
import eth from "@/assets/eth.png"
import SettingModel from './SettingModel'

const TradeModel = () => {
     const [btnState,setBtnState] = useState("sell")
        const [openSet,setOpenSet] = useState(false)
        const [amt,setAmt] = useState(null)
        const [balance,setBalance] = useState(0.000010)
        
        const [prom,setPromo] = useState(false)
  return (
    <div>
      <div className='md:gap-[1.1vw]  flex md:justify-center justify-between'>
              <button onClick={()=>setBtnState('buy')} className= {`${btnState=="buy"? "bg-primary text-[#1B1C1E]" :"text-[#666666] bg-[#2C2D30]"} border-0  anim md:w-full w-[28vw] 2xl:py-[0.5vw]  py-[8px] shadow-[4.23px_4.23px_11.96px_0px_#00000054] md:rounded-[0.9vw] rounded-[12px] font-[800] md:text-[1vw] text-[3.4vw]`}> BUY</button>
              <button  onClick={()=>setBtnState('sell')} className= {`${btnState=="sell"? "bg-primary text-[#1B1C1E]" :"text-[#666666] bg-[#2C2D30]"} border-0  anim md:w-full w-[28vw] 2xl:py-[0.5vw]  py-[8px]  shadow-[4.23px_4.23px_11.96px_0px_#00000054] md:rounded-[0.9vw] rounded-[12px] font-[800] md:text-[1vw] text-[3.4vw]`}> SELL</button>

            </div>

            <div  className= {`${btnState=="buy"?"justify-between" : "justify-end"} flex  items-center w-full md:mt-[1.6vw] mt-[3.8vw]`}>
                <div onClick={()=>setPromo(!prom)} className={`${btnState=="buy"? "block" : "hidden"} bg-[#66666663]  anim w-[128px] md:w-[6.6vw] text-white text-center rounded-full pt-[0.2vw]`}>
                    <p className='font-bebasneue font-[400] md:text-[0.7vw] text-[14px]'>SWITCH TO <span className='text-primary'>{prom?"ETH":"PROMOTION"}</span></p>
                </div>
                <div className='w-full'>
                    <Image onClick={()=>{setOpenSet(true)}} src={sett} alt='' className='anim'/>
                </div>
            </div>
            <SettingModel openSet={openSet} setOpenSet = {setOpenSet} />

            {btnState == 'sell'? 
            
            <div className=''> 
                <div className='bg-[#111111] md:rounded-[1.2vw] mt-4 md:p-[1vw] p-5 flex justify-between items-center shadow-[12.7px_12.7px_14.81px_0px_#00000040]'>
                    <div>
                    <input type='number' onChange={(e)=>{
                            setAmt(e.target.value)
                        }} className='font-bebasneue md:text-[1.2vw] text-[24px] font-[400] bg-transparent outline-none' placeholder='Enter amount'/> 
                        <p className=' opacity-30 text-[10px] md:text-[0.5vw] font-[400]'>User balance : {balance} PROMOTION</p>
                    </div>

                    <div className='md:w-[2.5vw] w-[48.5px] md:h-[2.5vw] h-[48.5px] rounded-full overflow-hidden'>
                        <Image src={bgwall} alt=''/>
                    </div>
                </div> 
                  <div className='flex justify-between md:mt-[1vw] mt-[20px] items-center'>
                    <p className='opacity-40 font-[700] md:text-[0.6vw] text-[13px]'>≈ 0 USD</p>
                  </div>
                
                <div className='flex justify-between items-center  md:mt-[3.1vw] mt-[20px]'>
                    <div className='flex flex-wrap md:gap-[0.2vw] gap-[4px]'>
                        <div className='flex md:gap-[0.4vw] gap-1'>
                            <div className='bg-[#2C2D30]  anim rounded-full md:w-[3.5vw] w-[13.8vw] text-center pt-[0.2vw] '>
                            <p className='font-bebasneue font-[400] md:text-[0.7vw] text-[3vw] opacity-50'>25%</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full md:w-[3.5vw] w-[13.8vw] text-center pt-[0.2vw]'>
                            <p className='font-bebasneue font-[400] md:text-[0.7vw] text-[3vw] opacity-50'>50%</p>
                            </div>
                        </div>
                        <div className='flex md:gap-[0.4vw] gap-1 '>
                            <div className='bg-[#2C2D30] anim rounded-full md:w-[3.5vw] w-[13.8vw] text-center pt-[0.2vw]'>
                                <p className='font-bebasneue font-[400] md:text-[0.7vw] opacity-50'>75%</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full md:w-[3.5vw] w-[13.8vw] text-center pt-[0.2vw]'>
                                <p className='font-bebasneue font-[400] md:text-[0.7vw] opacity-50'>100%</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full md:w-[3.5vw] w-[13.8vw] text-center pt-[0.2vw]'>
                                <p className='font-bebasneue font-[400] md:text-[0.7vw] opacity-50'>RESET</p>
                            </div>
                        </div>
                    </div>
                    <p className='round anim bg-primary leading-[2vw] pt-[0.6vw] text-[#262626] md:text-[2.7vw] text-[11vw] text-center px-[1.8vw] rounded-[0.7vw] shadow-[5.21px_5.21px_7.76px_0px_#00000040]'>
                    SWAP
                    </p>
                </div>

            </div> :
            <div>
                <div className='bg-[#111111] md:rounded-[1.2vw] mt-[0.8vw] md:p-[1vw] p-5 flex justify-between items-center shadow-[12.7px_12.7px_14.81px_0px_#00000040]'>
                    <div>
                        <input type='number' onChange={(e)=>{
                            setAmt(e.target.value)
                        }} className='font-bebasneue md:text-[1.2vw] text-[24px] font-[400] bg-transparent outline-none' placeholder='Enter amount'/> 
                        <p className=' opacity-30 text-[10px] md:text-[0.5vw]  font-[400]'>User balance : {balance} {prom? "PROMOTION":"ETH"}</p>
                    </div>
                    <div className='md:w-[2.5vw] w-[48.5px] md:h-[2.5vw] h-[48.5px] rounded-full overflow-hidden'>
                        <Image src={eth } alt=''/>
                    </div>
                </div>
                <div className='flex justify-between md:mt-[1vw] mt-[20px] items-center'>
                    <p className='opacity-40 font-[700] md:text-[0.6vw] text-[13px]'>≈ 123,456 {prom? "PROMOTION":"ETH"}</p>
                    <p className={`${amt>balance? "block" :"hidden"} font-bebasneue md:text-[0.7vw] text-[#FF2F61]`}>insufficient balance</p>
                </div>
                <div className='flex justify-between items-center gap-[1.3vw] md:mt-[3.1vw] mt-[20px]'>
                    <div className='flex flex-wrap md:gap-[0.2vw] gap-[4px]'>
                        <div className='flex md:gap-[0.4vw] gap-1'>
                            <div className='bg-[#2C2D30] anim rounded-full md:w-[3.5vw] w-[13.8vw] text-center pt-[0.2vw]'>
                            <p className='font-bebasneue font-[400] md:text-[0.7vw] opacity-50'>RESET</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full md:w-[3.5vw] w-[13.8vw] text-center pt-[0.2vw]'>
                            <p className='font-bebasneue font-[400] md:text-[0.7vw] opacity-50'>0.10 ETH</p>
                            </div>
                        </div>
                        <div className='flex 2xl:gap-2 gap-1'>
                            <div className='bg-[#2C2D30] anim rounded-full md:w-[3.5vw] w-[13.8vw] text-center pt-[0.2vw]'>
                                <p className='font-bebasneue font-[400] md:text-[0.7vw] opacity-50'>0.05 ETH</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full md:w-[3.5vw] w-[13.8vw] text-center pt-[0.2vw]'>
                                <p className='font-bebasneue font-[400] md:text-[0.7vw] opacity-50'>0.01 ETH</p>
                            </div>
                        </div>
                    </div>
                    <p className='round bg-primary anim leading-[2vw] pt-[0.6vw] text-[#262626] md:text-[2.7vw] text-[11vw] text-center px-[1.8vw] rounded-[0.7vw] shadow-[5.21px_5.21px_7.76px_0px_#00000040]'>
                    SWAP
                    </p>
                </div>
            </div>

            }
    </div>
  )
}

export default TradeModel

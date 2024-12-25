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
      <div className='sm:gap-[23px]  flex sm:justify-center justify-between'>
              <button onClick={()=>setBtnState('buy')} className= {`${btnState=="buy"? "bg-primary text-[#1B1C1E]" :"text-[#666666] bg-[#2C2D30]"} border-0  anim sm:w-full w-[28vw] sm:py-[10px]  py-[8px] shadow-[4.23px_4.23px_11.96px_0px_#00000054] sm:rounded-[18px] rounded-[12px] font-[800] sm:text-[21px] text-[3.4vw]`}> BUY</button>
              <button  onClick={()=>setBtnState('sell')} className= {`${btnState=="sell"? "bg-primary text-[#1B1C1E]" :"text-[#666666] bg-[#2C2D30]"} border-0  anim sm:w-full w-[28vw] sm:py-[10px]  py-[8px]  shadow-[4.23px_4.23px_11.96px_0px_#00000054] sm:rounded-[18px] rounded-[12px] font-[800] sm:text-[21px] text-[3.4vw]`}> SELL</button>

            </div>

            <div  className= {`${btnState=="buy"?"justify-between" : "justify-end"} flex  items-center w-full sm:mt-8 mt-4`}>
                <div onClick={()=>setPromo(!prom)} className={`${btnState=="buy"? "block" : "hidden"} bg-[#66666663]  anim w-[128px] text-white text-center rounded-full pt-1`}>
                    <p className='font-bebasneue font-[400]  text-[14px]'>SWITCH TO <span className='text-primary'>{prom?"ETH":"PROMOTION"}</span></p>
                </div>
              <Image onClick={()=>{setOpenSet(true)}} src={sett} alt='' className='anim'/>
            </div>
            <SettingModel openSet={openSet} setOpenSet = {setOpenSet} />

            {btnState == 'sell'? 
            
            <div className=''> 
                <div className='bg-[#111111] rounded-[24px] mt-4 p-5 flex justify-between items-center shadow-[12.7px_12.7px_14.81px_0px_#00000040]'>
                    <div>
                    <input type='number' onChange={(e)=>{
                            setAmt(e.target.value)
                        }} className='font-bebasneue text-[24px] font-[400] bg-transparent outline-none' placeholder='Enter amount'/> 
                        <p className=' opacity-30 text-[10px] font-[400]'>User balance : {balance} PROMOTION</p>
                    </div>

                    <div className='w-[48.5px] h-[48.5px] rounded-full overflow-hidden'>
                        <Image src={bgwall} alt=''/>
                    </div>
                </div> 
                  <div className='flex justify-between mt-[20px] items-center'>
                    <p className='opacity-40 font-[700] text-[13px]'>≈ 0 USD</p>
                  </div>
                
                <div className='flex justify-between items-center  sm:mt-[60px] mt-[20px]'>
                    <div className='flex flex-wrap  sm:gap-[5px] gap-[4px]'>
                        <div className='flex sm:gap-2 gap-1'>
                            <div className='bg-[#2C2D30]  anim rounded-full sm:w-[68px] w-[13.8vw] text-center pt-[3px] '>
                            <p className='font-bebasneue font-[400] sm:text-[15px] text-[3vw] opacity-50'>25%</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full sm:w-[68px] w-[13.8vw] text-center pt-[3px]'>
                            <p className='font-bebasneue font-[400] sm:text-[15px] text-[3vw] opacity-50'>50%</p>
                            </div>
                        </div>
                        <div className='flex sm:gap-2 gap-1 '>
                            <div className='bg-[#2C2D30] anim rounded-full sm:w-[68px] w-[13.8vw] text-center pt-[3px]'>
                                <p className='font-bebasneue font-[400] sm:text-[15px] text-[3vw] opacity-50'>75%</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full sm:w-[68px] w-[13.8vw] text-center pt-[3px]'>
                                <p className='font-bebasneue font-[400] sm:text-[15px] text-[3vw] opacity-50'>100%</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full sm:w-[68px] w-[13.8vw] text-center pt-[3px]'>
                                <p className='font-bebasneue font-[400] sm:text-[15px] text-[3vw] opacity-50'>RESET</p>
                            </div>
                        </div>
                    </div>
                    <p className='round anim bg-primary leading-[40px] pt-[12px] text-[#262626] sm:text-[52px] text-[11vw] text-center px-[35px] rounded-[15px] shadow-[5.21px_5.21px_7.76px_0px_#00000040]'>
                    SWAP
                    </p>
                </div>

            </div> :
            <div>
                <div className='bg-[#111111] rounded-[24px] mt-4 p-5 flex justify-between items-center shadow-[12.7px_12.7px_14.81px_0px_#00000040]'>
                    <div>
                        <input type='number' onChange={(e)=>{
                            setAmt(e.target.value)
                        }} className='font-bebasneue text-[24px] font-[400] bg-transparent outline-none' placeholder='Enter amount'/> 
                        <p className=' opacity-30 text-[10px] font-[400]'>User balance : {balance} {prom? "PROMOTION":"ETH"}</p>
                    </div>
                    <div className='w-[49px] h-[49px] rounded-full overflow-hidden'>
                        <Image src={eth } alt=''/>
                    </div>
                </div>
                <div className='flex justify-between mt-[20px] items-center'>
                    <p className='opacity-40 font-[700] text-[13px]'>≈ 123,456 {prom? "PROMOTION":"ETH"}</p>
                    <p className={`${amt>balance? "block" :"hidden"} font-bebasneue sm:text-[15px] text-[3vw] text-[#FF2F61]`}>insufficient balance</p>
                </div>
                <div className='flex justify-between items-center gap-[25px] sm:mt-[60px] mt-[20px]'>
                    <div className='flex flex-wrap sm:gap-[5px] gap-[4px]'>
                        <div className='flex sm:gap-2 gap-1'>
                            <div className='bg-[#2C2D30] anim rounded-full sm:w-[68px] w-[13.8vw] text-center pt-[3px]'>
                            <p className='font-bebasneue font-[400] sm:text-[15px] text-[3vw] opacity-50'>RESET</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full sm:w-[68px] w-[13.8vw] text-center pt-[3px]'>
                            <p className='font-bebasneue font-[400] sm:text-[15px] text-[3vw] opacity-50'>0.10 ETH</p>
                            </div>
                        </div>
                        <div className='flex sm:gap-2 gap-1'>
                            <div className='bg-[#2C2D30] anim rounded-full sm:w-[68px] w-[13.8vw] text-center pt-[3px]'>
                                <p className='font-bebasneue font-[400] sm:text-[15px] text-[3vw] opacity-50'>0.05 ETH</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full sm:w-[68px] w-[13.8vw] text-center pt-[3px]'>
                                <p className='font-bebasneue font-[400] sm:text-[15px] text-[3vw] opacity-50'>0.01 ETH</p>
                            </div>
                        </div>
                    </div>
                    <p className='round bg-primary anim leading-[40px] pt-[12px] text-[#262626] sm:text-[52px] text-[11vw] text-center px-[35px] rounded-[15px] shadow-[5.21px_5.21px_7.76px_0px_#00000040]'>
                    SWAP
                    </p>
                </div>
            </div>

            }
    </div>
  )
}

export default TradeModel

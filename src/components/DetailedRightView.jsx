"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import sett from "@/assets/sett.svg"
import bgwall from "@/assets/bgwall.svg"
import eth from "@/assets/eth.png"
import SettingModel from './SettingModel'


const DetailedRightView = () => {
    const [btnState,setBtnState] = useState("sell")
    const [openSet,setOpenSet] = useState(false)
    const [amt,setAmt] = useState(null)
    const [balance,setBalance] = useState(0.000010)
    
    const [prom,setPromo] = useState(false)

  return (
    <>
        <div className='flex flex-col gap-[32px] '>
          <div className='bg-[#1B1C1E] w-[460px] overflow-x-hidden relative p-[32px] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[40px]'>
            <div className='gap-[23px] flex'>
              <button onClick={()=>setBtnState('buy')} className= {`${btnState=="buy"? "bg-primary text-[#1B1C1E]" :"text-[#666666] bg-[#2C2D30]"} border-0  anim w-full py-[10px]   shadow-[4.23px_4.23px_11.96px_0px_#00000054] rounded-[18px] font-[800] text-[21px]`}> BUY</button>
              <button  onClick={()=>setBtnState('sell')} className= {`${btnState=="sell"? "bg-primary text-[#1B1C1E]" :"text-[#666666] bg-[#2C2D30]"} border-0  anim w-full py-[10px]   shadow-[4.23px_4.23px_11.96px_0px_#00000054] rounded-[18px] font-[800] text-[21px]`}> SELL</button>

            </div>

            <div  className= {`${btnState=="buy"?"justify-between" : "justify-end"} flex  items-center w-full mt-8`}>
                <div onClick={()=>setPromo(!prom)} className={`${btnState=="buy"? "block" : "hidden"} bg-[#66666663]  anim w-[128px] text-white text-center rounded-full pt-1`}>
                    <p className='font-bebasneue font-[400]  text-[14px]'>SWITCH TO <span className='text-primary'>{prom?"ETH":"PROMOTION"}</span></p>
                </div>
              <Image onClick={()=>{setOpenSet(true)}} src={sett} alt='' className='anim'/>
            </div>
            <SettingModel openSet={openSet} setOpenSet = {setOpenSet} />

            {btnState == 'sell'? 
            
            <div> 
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
                
                <div className='flex justify-between items-center  mt-[60px]'>
                    <div className='flex flex-wrap  gap-[5px]'>
                        <div className='flex gap-2'>
                            <div className='bg-[#2C2D30]  anim rounded-full w-[68px] text-center pt-[3px] '>
                            <p className='font-bebasneue font-[400] text-[15px] opacity-50'>25%</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full w-[68px] text-center pt-[3px]'>
                            <p className='font-bebasneue font-[400] text-[15px] opacity-50'>50%</p>
                            </div>
                        </div>
                        <div className='flex gap-2 '>
                            <div className='bg-[#2C2D30] anim rounded-full w-[68px] text-center pt-[3px]'>
                                <p className='font-bebasneue font-[400] text-[15px] opacity-50'>75%</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full w-[68px] text-center pt-[3px]'>
                                <p className='font-bebasneue font-[400] text-[15px] opacity-50'>100%</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full w-[68px] text-center pt-[3px]'>
                                <p className='font-bebasneue font-[400] text-[15px] opacity-50'>RESET</p>
                            </div>
                        </div>
                    </div>
                    <p className='round anim bg-primary leading-[40px] pt-[12px] text-[#262626] text-[52px] text-center px-[35px] rounded-[15px] shadow-[5.21px_5.21px_7.76px_0px_#00000040]'>
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
                    <p className={`${amt>balance? "block" :"hidden"} font-bebasneue text-[15px] text-[#FF2F61]`}>insufficient balance</p>
                </div>
                <div className='flex justify-between items-center gap-[25px] mt-[30px]'>
                    <div className='flex flex-wrap  gap-[5px]'>
                        <div className='flex gap-2'>
                            <div className='bg-[#2C2D30] anim rounded-full w-[68px] text-center pt-[3px]'>
                            <p className='font-bebasneue font-[400] text-[15px] opacity-50'>RESET</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full w-[68px] text-center pt-[3px]'>
                            <p className='font-bebasneue font-[400] text-[15px] opacity-50'>0.10 ETH</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='bg-[#2C2D30] anim rounded-full w-[68px] text-center pt-[3px]'>
                                <p className='font-bebasneue font-[400] text-[15px] opacity-50'>0.05 ETH</p>
                            </div>
                            <div className='bg-[#2C2D30] anim rounded-full w-[68px] text-center pt-[3px]'>
                                <p className='font-bebasneue font-[400] text-[15px] opacity-50'>0.01 ETH</p>
                            </div>
                        </div>
                    </div>
                    <p className='round bg-primary anim leading-[40px] pt-[12px] text-[#262626] text-[52px] text-center px-[35px] rounded-[15px] shadow-[5.21px_5.21px_7.76px_0px_#00000040]'>
                    SWAP
                    </p>
                </div>
            </div>

            }
           

            
            <div className='bg-white bg-opacity-5 mt-10 rounded-[7px] overflow-hidden h-[22px]'>
              <div className='bggradient h-full opacity-100 w-[60%] rounded-[7px] '>

              </div>
            </div>

            <div className='flex justify-between items-center mt-4 px-1'>
              <p className='font-bebasneue text-[21px]'>BONDING CURVE PROGRESS</p>
              <p className='text-primary text-[21px] font-[700] font-montserrat'>0.86%</p>
            </div>

            <div className='bg-[#111111] shadow-[8.47px_9.52px_17.57px_0px_#00000040]  mt-3  rounded-[32px] px-[15px] py-[30px]'>
              <p className='font-[700] text-[16px] text-center leading-[18px]'>
                
                There are <span className='text-primary font-[900]'>676,991,162.93 PROMOTION 
                tokens and 4,546.3 ETH still available in 
                the bonding curve for sale.</span> 
              
              </p>

              <p className='font-[700] text-[16px] text-center mt-5 leading-[18px]'>
                When the market cap reaches <span className='text-primary font-[900]'>$77,296.81</span>,
                all liquidity from the bonding curve will be 
                moved to UNISWAP and locked.<span className='text-primary font-[900]'> This 
                process accelerates as the price rises.</span>
              </p>
              
              <p className=' text-[16px] text-center text-primary mt-5 font-[900]'>
                For more details, check out our <br/>documentation
                </p>
             

            </div>

            <div className='bg-[#2C2D30]  mt-6 p-4 shadow-[7.41px_7.41px_42.33px_0px_#00000040] rounded-[21px]'>
              <p className='uppercase font-bebasneue text-[19px] font-[400]'>
                <span className='text-primary'>king of the monsters</span> progress</p>
              <div className=' bg-white bg-opacity-20 rounded-full w-full h-[10px] mt-5'>
                <div className='bg-primary shadow-[0px_0px_12.7px_0px_#A8FF2F87] h-full rounded-full w-[60%]'>

                </div>
              </div>
              <p className='text-[13px] font-montserrat font-[900] text-center mt-4'>Dethrone <span className='font-[700] opacity-40'>the current king at </span> <span className='text-primary font-[900] font-montserrat'>$43,134 market cap.</span></p>
            </div>
          </div>
          

          <div className='bg-[#1B1C1E]  shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[40px]'>
            <p className='font-[900] text-[25px] text-[#262626] bg-primary  py-3 w-[384px] text-center rounded-[40px_0px]'> HOLDER DISTRIBUTION</p>
            <div className='bg-[#D9D9D926] mt-8 mb-4'>
              <p className='font-[900] text-[22px] text-center   py-3'> 
                <span className='text-primary '>TOP 10</span> USERS’ HOLDING - <span className='text-primary'>30.54%</span></p>
            </div>
            <div>
              <ul className='px-8  h-[410px] overflow-y-auto mb-5'>
                <li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800] '>034...24RD</p>
                  <p className='text-[29px] font-bebasneue '> <span className='text-[21px]'>(BONDING CURVE)</span>   26.42 %  </p>
                </li>
                <li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue '> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li>
                <li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> 
                <li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> <li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li> 
                <li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li>
                <li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li><li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li><li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li><li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li><li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li><li className='flex items-center justify-between'>
                  <p className='text-[20px] text-primary font-[800]'>034...24RD</p>
                  <p className='text-[29px] font-bebasneue'> <span className='text-[21px]'>(DEV)</span>   26.42 %  </p>
                </li>
                
              </ul>
            </div>
          </div>

        </div>    
    </>
  )
}

export default DetailedRightView

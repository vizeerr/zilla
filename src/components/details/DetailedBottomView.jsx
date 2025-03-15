"use client"
import React, { useEffect, useRef, useState } from 'react'
import smile from "@/assets/smile.png"
import pin from "@/assets/pin.svg"
import eth from "@/assets/eth.png"
import blkimg from "@/assets/blkimg.png"
import Image from 'next/image'

import { AnimatePresence, motion } from "framer-motion";
import TradeModel from './TradeModel'
import CommentModel from './CommentModel'
const DetailedBottomView = () => {

  const [tab,setTab] = useState("cmmt")
  const [toogle,setToogle] = useState(false)
  const [tradeOpen,setTradeOpen] = useState(false)
  const [sort,setSort] = useState("asc")
  const [openCmt,setOpenCmt] =useState(false)

  const [tradeVale,setTradeVal] = useState(0.01)
  const modalRef = useRef(null);
      useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setTradeOpen(false);
            }
        };
        if (tradeOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [tradeOpen, setTradeOpen]);

  return (
  <div className='relative overflow-hidden'>
    <div className=''>
      <div className='bg-[#1B1C1E] relative w-full rounded-[2.1vw] lg:hidden md:mt-0  overflow-hidden'>
        <div className='flex justify-between w-full'>
          <p onClick={()=>setTab("cmmt")} className={`${tab=="cmmt"? "bg-primary text-[#262626]":" bg-[#38383F] text-white"}  font-[900] md:text-xl text-[3vw] font-montserrat md:py-2.5  py-[0.9vw] px-[4.8vw] text-center rounded-[3.6vw_0px]`}> COMMENTS</p>
          <p onClick={()=>setTab("trade")} className={`${tab=="trade"? "bg-primary text-[#262626]":" bg-[#38383F] text-white"} font-[900] md:text-xl text-[3vw] font-montserrat  md:py-2.5 py-[0.9vw] px-[4.8vw] text-center rounded-[0px_3.6vw]`}> TRADING HISTORY</p>
        </div>
        <div className='relative'>

        
        <AnimatePresence mode="wait">
        
          <motion.div
          
          key="cmt"
          initial={{ opacity: 0}}
        animate={{ opacity: tab=="trade"?0:1}}
        exit={{ opacity: 0}}
        transition={{ duration: 0.3 }}

          className='md:mt-7 mt-[7.2vw] h-[70vw] overflow-y-auto pb-[2.4vw] px-[2.9vw] flex flex-col gap-[3vw]'>
                
                <div className='bg-[#111111] rounded-[3.6vw]'>
                  <p className='font-[900] md:text-base text-[2.5vw] text-[#111111] bg-white  py-[0.4vw] w-[20vw] text-center rounded-[3.6vw_0]'> Your ID</p>
                
                  <textarea name="" id="" placeholder='WRITE YOUR COMMENTS' className='md:h-[4rem] h-[12.1vw] w-full font-bebasneue font-[400] md:text-lg text-[3vw] p-[2.9vw] outline-none bg-transparent text-white opacity-30'></textarea>
                  <div className='flex justify-between items-center px-[2.9vw] mb-[4.8vw]'>
                    <p className='font-bebasneue font-[400] md:text-base text-[3vw] text-white opacity-30'>0/256</p>
                    <div className='flex gap-[1.9vw] items-center'>
                      <div className='md:w-6 w-[15px]'>
                        <Image src={smile} alt=''/>
                      </div>
                      <button className='border-0 bg-primary font-montserrat text-[#262626] md:text-base text-[2.5vw] font-[800] px-[1.9vw] py-[0.9vw] rounded-[1.6vw]'>SUBMIT</button>
                    </div>
                  </div>
                </div>
                {Array(15).fill().map((_, i) => (

                  <div key={i} className='bg-[#111111] rounded-[1.9vw] '>
                  <div className='items-center flex justify-between'>
                    <div className='flex items-center gap-[1.9vw]'>
                      <p className='font-[900] md:text-base text-[2.5vw] text-[#111111] bg-white  py-[0.4vw] w-[20vw] text-center rounded-[2.4vw_0px]'> TNFv...6GVT</p>
                      
                      <div className='flex gap-[0.9vw] items-center'>
                        <div className=' md:w-3 w-[2.1vw]'>
                          <Image src={pin} alt='' className='w-full'/>
                        </div>
                        <p className='font-[800] text-primary md:text-[0.6rem] text-[2.1vw]'>DEV</p>
                      </div>
                    </div>
                    <p className='text-primary font-[800] md:text-xs text-[1.4vw] pe-[3.8vw] pt-[1.9vw] font-montserrat'>21 minutes ago</p>
                  </div>
                  <p className='font-[800] md:text-sm text-[2.5vw] leading-tight text-white px-[2.9vw] my-[2.9vw] font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                  
                </div>
                ))}

                
          </motion.div>

          <motion.div 
          key="trade"
          initial={{ opacity: 0, x: 250 }}
        animate={{ opacity: tab=="trade"?1:0, x: tab=="trade"?0:250}}
        exit={{ opacity: 0, x: 250 }}
        transition={{ duration: 0.3 }}
          className='px-[1.9vw] absolute top-0'>
            <div className=' flex gap-[1.2vw] items-center pb-[3.6vw] '>
                  <div className='bg-[#111111] py-[1.4vw] px-[1.9vw] rounded-[1.8vw] flex items-center gap-[1.6vw] shadow-[10px_10px_23px_0px_#0000004D]'>
                    <p className='uppercase text-white  font-[800] md:text-sm  text-[2.1vw] '>Filter By Size</p>
                    <div onClick={()=>setToogle(!toogle)} className={`${toogle? "bg-primary justify-end" : "bg-[#18191B] justify-start" } tranis w-[6.5vw] flex items-center  rounded-[2.1vw] h-[2.1vw] `}>
                      <div className= {`${toogle?"bg-white":"bg-[#38383F]"} tranis w-[2.6vw] h-[2.6vw] rounded-full`}>

                      </div>
                    </div>
                  </div>
                  <div className='bg-[#111111] md:py-1.5 py-[1.4vw] px-[1.9vw] rounded-[1.82vw]  items-center flex gap-[1.6vw] shadow-[10px_10px_23px_0px_#0000004D]'>
                    <div className='flex items-center gap-[0.9vw]'>
                      <input type='number' className='uppercase text-white bg-transparent font-[800] w-[5.8vw] md:text-sm text-[2.1vw] ' placeholder='0' value={tradeVale} onChange={(e)=>{
                        setTradeVal(e.target.value)
                      }}/> 
                      <p className=' uppercase text-white bg-transparent font-[800] md:text-sm text-[2.1vw]'>
                      ETH
                      </p>
                    </div>
                    <div className='w-[3.6vw]'>
                      <Image src={eth} alt='' className='rounded-full w-full'/>
                    </div>
                  </div>
                  <div className='border-primary border-s-[3px] ps-[0.9vw]'>
                    <p className='font-bebasneue md:text-sm  text-[2.4vw] '>
                    <span className='text-white'>153 </span>
                      <span className='text-opacity-30 text-white'>trades of size greater lian 0.01 ETH</span>
                    </p>
                  </div>
                </div>
                <div className='h-[60vw] rounded-[13px_13px_0px_0px] overflow-x-hidden'>
                  <table className="w-full md:text-sm text-[2.1vw] font-montserrat font-[800] border-collapse border-spacing-0">
                  <thead className="uppercase ">
                    <tr className="text-white text-opacity-40 bg-[#38383F] sticky top-[-1px] m-0 border-none shadow-none">
                      <th className=' w-[43vw]'>ACCOUNT</th>
                      <th className=' w-[31vw]'>TYPE</th>
                      <th className=' w-[36vw]'>ETH</th>
                      <th className='w-[46vw]'>PROMOTION</th>
                      <th className=' w-[36vw]'>DATE</th>
                      <th className='w-[55vw]'>TRANSACTION</th>
                    </tr>
                  </thead>
                  <tbody className=" bg-[#111111] font-montserrat">
                  {[...Array(18)].map((_, index) => (
                    <tr key={index} className="text-white">
                      <td className="font-[700] text-center">TEG3....4efD</td>
                      <td className="text-[#FFFF00]  text-center">SELL</td>
                      <td className="font-[700]  text-center">12,3456</td>
                      <td className=' font-[400] text-center'>571,201.94</td>
                      <td className="font-[700]  text-center">1 min ago</td>
                      <td className="text-primary font-[700]  text-center">38HFH38RH..5347</td>
                    </tr>
                  ))}
                  </tbody>
                  </table>
                </div>

          </motion.div>
        

        </AnimatePresence>
        </div>

      </div>

        <AnimatePresence mode='wait'>
          <motion.div 
          
          key="trademodel"
          initial={{ opacity: 1, y:1000}}
        animate={{ y:tradeOpen?0:1000}}
        
        transition={{ duration: 0.3 }}
        ref={modalRef} 
          className='absolute bottom-0 left-0 z-10 w-full bg-[#1B1C1E] shadow-[-4px_-6px_12.52px_0px_#0000004F] rounded-[22px_22px_0_0]'>
              <div onClick={()=>setTradeOpen(false)} className='flex justify-center mt-5'>
                <div className='bg-white bg-opacity-20 h-[5px] rounded-full w-[50px]'>
                </div>
              </div>  
              <div className='bg-[#1B1C1E] text-white w-full  relative p-[4.3vw] shadow-[12.7px_12.7px_44.02px_0px_#0000004F]  rounded-[5.3vw]'>
                <TradeModel/>
              </div>
          </motion.div>
        </AnimatePresence>
      
      <div className='my-[4vw] md:hidden flex justify-center'>
        <button onClick={()=>setTradeOpen(true)} className={`${tradeOpen?"bg-[#666666] text-white":"bg-primary text-[#2C2D30]"} text-[3.6vw] py-[1vw] w-[28vw] font-montserrat font-[900] rounded-full`}>TRADE</button>
      </div>
      
      <div className='lg:flex hidden justify-around  2xl:gap-8 gap-6'>
    
      <div className='bg-[#1B1C1E] mt-[1.6vw] 2xl:w-[44%] w-[50%] rounded-[2vw] ' >
        <div className='flex justify-between items-center pe-4'>
          <p className="bg-primary text-[#262626] font-[900]  2xl:text-base  text-sm font-montserrat  2xl:py-2 md:py-1.5  2xl:w-[11rem] w-[9rem]  text-center 2xl:rounded-[2.2rem_0px] rounded-[1.4rem_0]"> COMMENTS</p>
          <div className='flex gap-2 mt-2.5'>
            <div className='rounded-full bg-[#111111] xl:px-4 px-2.5 xl:py-1.5 py-1.5' onClick={()=>setSort(sort=="asc"?"desc":"asc")}>
              <p className='font-montserrat anim font-[700] 2xl:text-xs xl:text-[0.6rem] text-[0.4rem] text-white uppercase'>SORT : <span className='font-normal  font-bebasneue'>(TIME)</span> <span className='text-primary'>{sort}</span></p>
            </div>
            <button onClick={()=>setOpenCmt(true)} className='bg-primary anim rounded-full text-[#1B1C1E] font-montserrat font-[800] 2xl:text-xs xl:text-[0.6rem] text-[0.4rem]  xl:px-4 px-2 xl:py-1.5 py-1'>
            POST A REPLY
            </button>
          </div>
        </div>
        
          <div className='mt-7 2xl:h-[39.4vw] h-[25rem] overflow-y-auto pb-[2rem] 2xl:px-7 md:px-5 flex flex-col gap-5'>
    
                <div className='bg-[#111111] rounded-[1.2rem] pb-4]'>
                  <div className='items-center flex justify-between'>
                    <div className='flex items-center gap-2'>
                      <p className='font-[900] 2xl:text-[0.6rem] text-[0.55rem] text-[#111111] bg-white  2xl:py-1 py-1 2xl:px-5 px-5 text-center 2xl:rounded-[2.3rem_0px] rounded-[1.4rem_0]'> TNFv...6GVT</p>
                      
                      <div className='flex gap-1 items-center'>
                        <div className='2xl:w-3 w-2'>
                          <Image src={pin} alt='' className='w-full'/>
                        </div>
                        <p className='font-[800] text-primary 2xl:text-[0.5rem] text-[0.4rem]'>DEV</p>
                      </div>
                    </div>
                    <p className='text-primary font-[800] 2xl:text-[0.6rem] text-[0.5rem] 2xl:pe-7 pe-5 pt-2 font-montserrat'>21 minutes ago</p>
                  </div>
                  <div className='flex items-center justify-center 2xl:px-7 px-5 2xl:my-5 my-3 2xl:gap-4 gap-3'>
                    <div className='2xl:w-24 w-20 h-auto'>
                      <Image src={blkimg} alt='' className='w-full'/>
                    </div>
                    <p className='w-full font-[800] 2xl:text-[0.6rem] text-[0.5rem] leading-tight text-white font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                  </div>
                  
                </div>

                {Array(19).fill().map((_, i) => (

                  <div key={i} className='bg-[#111111] rounded-[1.2rem] pb-4]'>
                  <div className='items-center flex justify-between'>
                    <div className='flex items-center gap-2'>
                      <p className='font-[900] 2xl:text-[0.6rem] text-[0.6rem] text-[#111111] bg-white  2xl:py-1 py-1 2xl:px-5 px-7 text-center 2xl:rounded-[2.3rem_0px] rounded-[1.4rem_0]'> TNFv...6GVT</p>
                    </div>
                    <p className='text-primary font-[800] 2xl:text-[0.6rem] text-[0.5rem] 2xl:pe-7 pe-5 pt-2 font-montserrat'>21 minutes ago</p>
                  </div>
                  <div className='flex items-center justify-center 2xl:px-7 px-5 2xl:my-5 my-3 2xl:gap-4 gap-3'>
                    <p className='w-full font-[800] 2xl:text-[0.6rem] text-[0.5rem] leading-tight text-white font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                  </div>
                </div>
                ))}

          </div>

      </div>

      <div className="bg-[#1B1C1E]  mt-[1.6vw] w-[56.4vw]  rounded-[2rem]">
        <div className='flex items-start justify-between 2xl:pe-7 pe-5'>
          <p className={`bg-primary text-[#262626] font-[900] 2xl:text-base md:text-sm font-montserrat 2xl:py-2 md:py-1.5 2xl:w-[14rem] w-[12rem] text-center 2xl:rounded-[2.2rem_0px] rounded-[1.7rem_0px]`}> TRADING HISTORY</p>
          <div className='flex mt-2 2xl:gap-4 xl:gap-3 gap-1.5 items-center justify-end'>
                  <div className='bg-[#111111]  2xl:px-4 px-3 2xl:py-3.5 xl:py-2 py-1.5 2xl:rounded-[0.8rem] rounded-[0.5rem] flex 2xl:gap-4 gap-2.5 shadow-[10px_10px_23px_0px_#0000004D]'>
                    <p className='uppercase text-white  font-[800]  2xl:text-[0.6rem] md:text-[0.5rem]'>Filter By Size</p>
                    <div onClick={()=>setToogle(!toogle)} className={`${toogle? "bg-primary justify-end" : "bg-[#595959] justify-start" } tranis 2xl:w-10  w-7 flex items-center  rounded-full 2xl:h-3  h-2.5`}>
                      <div className= {`${toogle?"bg-white":"bg-[#8A8A98]"} tranis 2xl:w-4 w-3 2xl:h-4  h-3 rounded-full`}>

                      </div>
                    </div>
                  </div>
                  <div className='bg-[#111111] 2xl:px-6  px-2.5 2xl:py-2.5  py-1 items-center 2xl:rounded-[0.8rem] rounded-[0.5rem] flex 2xl:gap-4 gap-1.5 shadow-[10px_10px_23px_0px_#0000004D]'>
                    <div className='flex items-center 2xl:gap-1 gap-1'>
                      <input type='number' className='uppercase text-white bg-transparent font-[800] 2xl:w-5 w-3  2xl:text-[0.6rem]  md:text-[0.5rem]' placeholder='0' value={tradeVale} onChange={(e)=>{
                        setTradeVal(e.target.value)
                      }}/>
                      <p className=' uppercase text-white bg-transparent font-[800] 2xl:text-[0.6rem]  md:text-[0.5rem]'>
                      ETH
                      </p>
                    </div>
                    <Image src={eth} alt='' className='rounded-full 2xl:w-5 w-4'/>
                  </div>
                  <div className='border-primary 2xl:border-s-[3px] border-s-[2px]  2xl:ps-2 ps-1 2xl:py-1 md:py-0.5'>
                    <p className='font-bebasneue  2xl:text-[0.8rem]  text-[0.6rem] '>
                    <span className='text-white'>153 </span>
                      <span className='text-opacity-30 text-white'>trades of size greater lian 0.01 ETH</span>
                    </p>
                  </div>
                </div>
        </div>
            
        <div className='2xl:mt-7 md:mt-5 2xl:h-[46.5rem] h-[24rem] overflow-y-auto  2xl:px-7 px-5 flex flex-col gap-7'>
                
                
                <div className=' rounded-[1.4rem_1.4rem_0px_0px] overflow-x-hidden'>
                  <table className="w-full 2xl:text-[0.8rem] text-[0.6rem] font-montserrat font-[800] border-collapse border-spacing-0">
                  <thead className="uppercase ">
                    <tr className="text-white text-opacity-40 bg-[#38383F] sticky top-[-1px] m-0 border-none shadow-none">
                      <th className='  w-[9.6rem]'>ACCOUNT</th>
                      <th className='  w-[6.5rem]'>TYPE</th>
                      <th className='  w-[7.3em]'>ETH</th>
                      <th className=' w-[9.8rem]'>PROMOTION</th>
                      <th className='  w-[7.8rem]'>DATE</th>
                      <th className=' w-[12.8rem]'>TRANSACTION</th>
                    </tr>
                  </thead>
                  <tbody className=" bg-[#111111] font-montserrat ">
                  {[...Array(18)].map((_, index) => (
                    <tr key={index} className="text-white">
                      <td className="font-[700] text-center">TEG3....4efD</td>
                      <td className="text-[#FFFF00]  text-center">SELL</td>
                      <td className="font-[700]  text-center">12,3456</td>
                      <td className=' font-[700] text-center'>571,201.94</td>
                      <td className="font-[700]  text-center">1 min ago</td>
                      <td className="font-[700]  text-center">38HFH38RH..5347</td>
                    </tr>
                  ))}
                  </tbody>
                  </table>
                </div>
        </div>  
      </div>

      </div>
    </div>
  <CommentModel openCmt={openCmt} setOpenCmt={setOpenCmt}/>
  </div>

  )
}

export default DetailedBottomView

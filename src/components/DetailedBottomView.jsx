"use client"
import React, { useEffect, useRef, useState } from 'react'
import smile from "@/assets/smile.png"
import pin from "@/assets/pin.svg"
import eth from "@/assets/eth.svg"
import Image from 'next/image'

import { AnimatePresence, motion } from "framer-motion";
import { Anuphan } from 'next/font/google'
import DetailedTrade from './DetailedTrade'
import TradeModel from './TradeModel'
const DetailedBottomView = () => {

  const [tab,setTab] = useState("cmmt")
  const [toogle,setToogle] = useState(false)
  const [tradeOpen,setTradeOpen] = useState(false)

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

    <div className='bg-[#1B1C1E] relative w-full rounded-[2.1vw] lg:hidden  mt-[7.2vw] overflow-hidden'>
      <div className='flex justify-between w-full'>
        <p onClick={()=>setTab("cmmt")} className={`${tab=="cmmt"? "bg-primary text-[#262626]":" bg-[#38383F] text-white"}  font-[900] text-[3vw] font-montserrat   py-[0.9vw] px-[4.8vw] text-center rounded-[3.6vw_0px]`}> COMMENTS</p>
        <p onClick={()=>setTab("trade")} className={`${tab=="trade"? "bg-primary text-[#262626]":" bg-[#38383F] text-white"} font-[900] text-[3vw] font-montserrat   py-[0.9vw] px-[4.8vw] text-center rounded-[0px_3.6vw]`}> TRADING HISTORY</p>
      </div>
      <div className='relative'>

      
      <AnimatePresence mode="wait">
      
        <motion.div
        
        key="cmt"
        initial={{ opacity: 0}}
      animate={{ opacity: tab=="trade"?0:1}}
      exit={{ opacity: 0}}
      transition={{ duration: 0.3 }}

        className='mt-[7.2vw] h-[70vw] overflow-y-auto pb-[2.4vw] px-[2.9vw] flex flex-col gap-[4.6vw]'>
              
              <div className='bg-[#111111] rounded-[3.6vw]'>
                <p className='font-[900] text-[2.5vw] text-[#111111] bg-white  py-[0.4vw] w-[20vw] text-center rounded-[3.6vw_0]'> Your ID</p>
              
                <textarea name="" id="" placeholder='WRITE YOUR COMMENTS' className='h-[12.1vw] w-full font-bebasneue font-[400] text-[3vw] p-[2.9vw] outline-none bg-transparent text-white opacity-30'></textarea>
                <div className='flex justify-between items-center px-[2.9vw] mb-[4.8vw]'>
                  <p className='font-bebasneue font-[400] text-[3vw] text-white opacity-30'>0/256</p>
                  <div className='flex gap-[1.9vw] items-center'>
                    <Image src={smile} alt='' width={15} height={15}/>
                    <button className='border-0 bg-primary font-montserrat text-[#262626] text-[2.5vw] font-[800] px-[1.9vw] py-[0.9vw] rounded-[1.6vw]'>SUBMIT</button>
                  </div>
                </div>
              </div>
      
              <div className='bg-[#111111] rounded-[1.9vw] '>
                <div className='items-center flex justify-between'>
                  <div className='flex items-center gap-[1.9vw]'>
                    <p className='font-[900] text-[2.5vw] text-[#111111] bg-white  py-[0.4vw] w-[20vw] text-center rounded-[2.4vw_0px]'> TNFv...6GVT</p>
                    
                    <div className='flex gap-[0.9vw] items-center'>
                      <div className='w-[2.1vw]'>
                        <Image src={pin} alt='' className='w-full'/>
                      </div>
                      <p className='font-[800] text-primary text-[2.1vw]'>DEV</p>
                    </div>
                  </div>
                  <p className='text-primary font-[800] text-[1.4vw] pe-[3.8vw] pt-[1.9vw] font-montserrat'>21 minutes ago</p>
                </div>
                <p className='font-[800] text-[2.5vw] leading-tight text-white px-[2.9vw] my-[2.9vw] font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
              </div>

              <div className='bg-[#111111] rounded-[1.9vw] '>
                <div className='items-center flex justify-between'>
                  <div className='flex items-center gap-[1.9vw]'>
                    <p className='font-[900] text-[2.5vw] text-[#111111] bg-white  py-[0.4vw] w-[20vw] text-center rounded-[2.4vw_0px]'> TNFv...6GVT</p>
                    
                    <div className='flex gap-[0.9vw] items-center'>
                      <div className='w-[2.1vw]'>
                        <Image src={pin} alt='' className='w-full'/>
                      </div>
                      <p className='font-[800] text-primary text-[2.1vw]'>DEV</p>
                    </div>
                  </div>
                  <p className='text-primary font-[800] text-[1.4vw] pe-[3.8vw] pt-[1.9vw] font-montserrat'>21 minutes ago</p>
                </div>
                <p className='font-[800] text-[2.5vw] leading-tight text-white px-[2.9vw] my-[2.9vw] font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
              </div>

              <div className='bg-[#111111] rounded-[1.9vw] '>
                <div className='items-center flex justify-between'>
                  <div className='flex items-center gap-[1.9vw]'>
                    <p className='font-[900] text-[2.5vw] text-[#111111] bg-white  py-[0.4vw] w-[20vw] text-center rounded-[2.4vw_0px]'> TNFv...6GVT</p>
                    
                    <div className='flex gap-[0.9vw] items-center'>
                      <div className='w-[2.1vw]'>
                        <Image src={pin} alt='' className='w-full'/>
                      </div>
                      <p className='font-[800] text-primary text-[2.1vw]'>DEV</p>
                    </div>
                  </div>
                  <p className='text-primary font-[800] text-[1.4vw] pe-[3.8vw] pt-[1.9vw] font-montserrat'>21 minutes ago</p>
                </div>
                <p className='font-[800] text-[2.5vw] leading-tight text-white px-[2.9vw] my-[2.9vw] font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
              </div>

              <div className='bg-[#111111] rounded-[1.9vw] '>
                <div className='items-center flex justify-between'>
                  <div className='flex items-center gap-[1.9vw]'>
                    <p className='font-[900] text-[2.5vw] text-[#111111] bg-white  py-[0.4vw] w-[20vw] text-center rounded-[2.4vw_0px]'> TNFv...6GVT</p>
                    
                    <div className='flex gap-[0.9vw] items-center'>
                      <div className='w-[2.1vw]'>
                        <Image src={pin} alt='' className='w-full'/>
                      </div>
                      <p className='font-[800] text-primary text-[2.1vw]'>DEV</p>
                    </div>
                  </div>
                  <p className='text-primary font-[800] text-[1.4vw] pe-[3.8vw] pt-[1.9vw] font-montserrat'>21 minutes ago</p>
                </div>
                <p className='font-[800] text-[2.5vw] leading-tight text-white px-[2.9vw] my-[2.9vw] font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
              </div>

              <div className='bg-[#111111] rounded-[1.9vw] '>
                <div className='items-center flex justify-between'>
                  <div className='flex items-center gap-[1.9vw]'>
                    <p className='font-[900] text-[2.5vw] text-[#111111] bg-white  py-[0.4vw] w-[20vw] text-center rounded-[2.4vw_0px]'> TNFv...6GVT</p>
                    
                    <div className='flex gap-[0.9vw] items-center'>
                      <div className='w-[2.1vw]'>
                        <Image src={pin} alt='' className='w-full'/>
                      </div>
                      <p className='font-[800] text-primary text-[2.1vw]'>DEV</p>
                    </div>
                  </div>
                  <p className='text-primary font-[800] text-[1.4vw] pe-[3.8vw] pt-[1.9vw] font-montserrat'>21 minutes ago</p>
                </div>
                <p className='font-[800] text-[2.5vw] leading-tight text-white px-[2.9vw] my-[2.9vw] font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
              </div> 
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
                  <p className='uppercase text-white  font-[800]  text-[2.1vw] '>Filter By Size</p>
                  <div onClick={()=>setToogle(!toogle)} className={`${toogle? "bg-primary justify-end" : "bg-[#18191B] justify-start" } tranis w-[6.5vw] flex items-center  rounded-[2.1vw] h-[2.1vw] `}>
                    <div className= {`${toogle?"bg-white":"bg-[#38383F]"} tranis w-[2.6vw] h-[2.6vw] rounded-full`}>

                    </div>
                  </div>
                </div>
                <div className='bg-[#111111] py-[1.4vw] px-[1.9vw] rounded-[1.82vw]  items-center flex gap-[1.6vw] shadow-[10px_10px_23px_0px_#0000004D]'>
                  <div className='flex items-center gap-[0.9vw]'>
                    <input type='number' className='uppercase text-white bg-transparent font-[800] w-[5.8vw] text-[2.1vw] ' placeholder='0' value={tradeVale} onChange={(e)=>{
                      setTradeVal(e.target.value)
                    }}/> 
                    <p className=' uppercase text-white bg-transparent font-[800] text-[2.1vw]'>
                    ETH
                    </p>
                  </div>
                  <div className='w-[3.6vw]'>
                    <Image src={eth} alt='' className='rounded-full w-full'/>
                  </div>
                </div>
                <div className='border-primary border-s-[3px] ps-[0.9vw]'>
                  <p className='font-bebasneue  text-[2.4vw] '>
                  <span className='text-white'>153 </span>
                    <span className='text-opacity-30 text-white'>trades of size greater lian 0.01 ETH</span>
                  </p>
                </div>
              </div>
              <div className='h-[60vw] rounded-[13px_13px_0px_0px] overflow-x-hidden'>
                <table className="w-full text-[2.1vw] font-montserrat font-[800] border-collapse border-spacing-0">
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
        initial={{ opacity: 1, y:500}}
      animate={{ y:tradeOpen?0:500}}
      
      transition={{ duration: 0.3 }}
      ref={modalRef} 
        className='absolute bottom-0 z-10 w-full  bg-[#1B1C1E] shadow-[-4px_-6px_12.52px_0px_#0000004F] rounded-[22px_22px_0_0]'>
            <div onClick={()=>setTradeOpen(false)} className='flex justify-center mt-5'>
              <div className='bg-white bg-opacity-20 h-[5px] rounded-full w-[50px]'>
              </div>
            </div>  
            <div className='bg-[#1B1C1E] text-white sm:w-[460px] w-full overflow-x-hidden relative sm:p-[32px] p-[23px] shadow-[12.7px_12.7px_44.02px_0px_#0000004F]sm:rounded-[40px] rounded-[16.8px]'>
              <TradeModel/>
            </div>
        </motion.div>
      </AnimatePresence>
    
    <div className='mt-[4vw] lg:hidden flex justify-center'>
      <button onClick={()=>setTradeOpen(true)} className={`${tradeOpen?"bg-[#666666] text-white":"bg-primary text-[#2C2D30]"} text-[3.6vw] py-[1vw] w-[28vw] font-montserrat font-[900] rounded-full`}>TRADE</button>
    </div>
    
    <div className='lg:flex hidden justify-around mt-[2.6vw] gap-[1.8vw]'>
  
    <div className='bg-[#1B1C1E] w-[37.5vw] rounded-[2vw] ' >
      <p className="bg-primary text-[#262626] font-[900]  text-[1.5vw] font-montserrat  py-[1vw]  w-[18.1vw]  text-center rounded-[2vw_0px]"> COMMENTS</p>
      
        <div className='mt-[3.1vw] h-[39.4vw] overflow-y-auto pb-[2vw] px-[1.5vw] flex flex-col gap-[1.6vw]'>
              
              <div className='bg-[#111111] rounded-[0.7vw]'>
                <p className='font-[900] text-[0.8vw] text-[#111111] bg-white  py-[0.2vw] w-[8.5vw] text-center rounded-[2.6vw_0px]'> Your ID</p>
              
                <textarea name="" id="" placeholder='WRITE YOUR COMMENTS' className='h-[5.2vw] w-full font-bebasneue font-[400] text-[1vw] p-[1.4vw] outline-none bg-transparent text-white opacity-30'></textarea>
                <div className='flex justify-between items-center px-[1.5vw] mb-[1vw]'>
                  <p className='font-bebasneue font-[400] text-[1vw] text-white opacity-30'>0/256</p>
                  <div className='flex gap-[0.8vw] items-center'>
                    <Image src={smile} alt='' width={24} height={24}/>
                    <button className='border-0 bg-primary font-montserrat text-[#262626] text-[0.7vw] font-[800] px-[0.8vw] py-[0.2vw] rounded-[1vw]'>SUBMIT</button>
                  </div>
                </div>
              </div>
      
              <div className='bg-[#111111] rounded-[1.2vw] pb-[0.8vw]'>
                <div className='items-center flex justify-between'>
                  <div className='flex items-center gap-[0.4vw]'>
                    <p className='font-[900] text-[0.7vw] text-[#111111] bg-white  py-[0.4vw] w-[9.3vw] text-center rounded-[2.6vw_0px]'> TNFv...6GVT</p>
                    
                    <div className='flex gap-[0.4vw] items-center'>
                      <div className='w-[0.4vw]'>
                        <Image src={pin} alt='' className='w-full'/>
                      </div>
                      <p className='font-[800] text-primary text-[0.4vw]'>DEV</p>
                    </div>
                  </div>
                  <p className='text-primary font-[800] text-[0.7vw] pe-[1.6vw] pt-[0.4vw] font-montserrat'>21 minutes ago</p>
                </div>
                <p className='font-[800] text-[0.6vw] leading-tight text-white px-[1.6vw] my-[1vw] font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
              </div>
              <div className='bg-[#111111] rounded-[1.2vw] pb-[0.8vw]'>
                <div className='items-center flex justify-between'>
                  <div className='flex items-center gap-[0.4vw]'>
                    <p className='font-[900] text-[0.7vw] text-[#111111] bg-white  py-[0.4vw] w-[9.3vw] text-center rounded-[2.6vw_0px]'> TNFv...6GVT</p>
                    
                    
                  </div>
                  <p className='text-primary font-[800] text-[0.7vw] pe-[1.6vw] pt-[0.4vw] font-montserrat'>21 minutes ago</p>
                </div>
                <p className='font-[800] text-[0.6vw] leading-tight text-white px-[1.6vw] my-[1vw] font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
              </div>

              <div className='bg-[#111111] rounded-[1.2vw] pb-[0.8vw]'>
                <div className='items-center flex justify-between'>
                  <div className='flex items-center gap-[0.4vw]'>
                    <p className='font-[900] text-[0.7vw] text-[#111111] bg-white  py-[0.4vw] w-[9.3vw] text-center rounded-[2.6vw_0px]'> TNFv...6GVT</p>
                    
                    
                  </div>
                  <p className='text-primary font-[800] text-[0.7vw] pe-[1.6vw] pt-[0.4vw] font-montserrat'>21 minutes ago</p>
                </div>
                <p className='font-[800] text-[0.6vw] leading-tight text-white px-[1.6vw] my-[1vw] font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
              </div>

              <div className='bg-[#111111] rounded-[1.2vw] pb-[0.8vw]'>
                <div className='items-center flex justify-between'>
                  <div className='flex items-center gap-[0.4vw]'>
                    <p className='font-[900] text-[0.7vw] text-[#111111] bg-white  py-[0.4vw] w-[9.3vw] text-center rounded-[2.6vw_0px]'> TNFv...6GVT</p>
                    
                    
                  </div>
                  <p className='text-primary font-[800] text-[0.7vw] pe-[1.6vw] pt-[0.4vw] font-montserrat'>21 minutes ago</p>
                </div>
                <p className='font-[800] text-[0.6vw] leading-tight text-white px-[1.6vw] my-[1vw] font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
              </div>

              <div className='bg-[#111111] rounded-[1.2vw] pb-[0.8vw]'>
                <div className='items-center flex justify-between'>
                  <div className='flex items-center gap-[0.4vw]'>
                    <p className='font-[900] text-[0.7vw] text-[#111111] bg-white  py-[0.4vw] w-[9.3vw] text-center rounded-[2.6vw_0px]'> TNFv...6GVT</p>
                    
                    
                  </div>
                  <p className='text-primary font-[800] text-[0.7vw] pe-[1.6vw] pt-[0.4vw] font-montserrat'>21 minutes ago</p>
                </div>
                <p className='font-[800] text-[0.6vw] leading-tight text-white px-[1.6vw] my-[1vw] font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
              </div>

              <div className='bg-[#111111] rounded-[1.2vw] pb-[0.8vw]'>
                <div className='items-center flex justify-between'>
                  <div className='flex items-center gap-[0.4vw]'>
                    <p className='font-[900] text-[0.7vw] text-[#111111] bg-white  py-[0.4vw] w-[9.3vw] text-center rounded-[2.6vw_0px]'> TNFv...6GVT</p>
                    
                    
                  </div>
                  <p className='text-primary font-[800] text-[0.7vw] pe-[1.6vw] pt-[0.4vw] font-montserrat'>21 minutes ago</p>
                </div>
                <p className='font-[800] text-[0.6vw] leading-tight text-white px-[1.6vw] my-[1vw] font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
              </div>
            
        </div>

        
    </div>

    <div className="bg-[#1B1C1E]   rounded-[2vw]">
      <p className={`bg-primary text-[#262626] font-[900] text-[1.5vw] font-montserrat py-[1vw] w-[21.8vw] text-center rounded-[2vw_0px]`}> TRADING HISTORY</p>
           
      <div className='mt-[3.1vw] h-[39vw] overflow-y-auto pb-[1px] px-[2vw] flex flex-col gap-[1.6vw]'>
              <div className='flex gap-[0.8vw] items-center justify-end'>
                <div className='bg-[#111111] px-[1.3vw] py-[0.7vw] rounded-[0.7vw] flex gap-[1.6vw] shadow-[10px_10px_23px_0px_#0000004D]'>
                  <p className='uppercase text-white  font-[800]  text-[0.6vw]'>Filter By Size</p>
                  <div onClick={()=>setToogle(!toogle)} className={`${toogle? "bg-primary justify-end" : "bg-[#18191B] justify-start" } tranis w-[2.6vw] flex items-center  rounded-[1.5vw] h-[0.9vw]`}>
                    <div className= {`${toogle?"bg-white":"bg-[#38383F]"} tranis w-[1.1vw] h-[1.1vw] rounded-full`}>

                    </div>
                  </div>
                </div>
                <div className='bg-[#111111] px-[1.3vw] py-[0.5vw] items-center rounded-[0.7vw] flex gap-[0.8vw] shadow-[10px_10px_23px_0px_#0000004D]'>
                  <div className='flex items-center gap-[0.2vw]'>
                    <input type='number' className='uppercase text-white bg-transparent font-[800] w-[1.3vw]  text-[0.6vw]' placeholder='0' value={tradeVale} onChange={(e)=>{
                      setTradeVal(e.target.value)
                    }}/>
                    <p className=' uppercase text-white bg-transparent font-[800] text-[0.6vw]'>
                    ETH
                    </p>
                  </div>
                  <Image src={eth} alt='' className='rounded-full w-[1.4vw]'/>
                </div>
                <div className='border-primary 2xl:border-s-[6px] border-s-[2px]  ps-[0.4vw]'>
                  <p className='font-bebasneue  text-[0.8vw]'>
                  <span className='text-white'>153 </span>
                    <span className='text-opacity-30 text-white'>trades of size greater lian 0.01 ETH</span>
                  </p>
                </div>
              </div>
              
              <div className=' rounded-[1vw_1vw_0px_0px] overflow-x-hidden'>
                <table className="w-full text-[0.9vw] font-montserrat font-[800] border-collapse border-spacing-0">
                <thead className="uppercase ">
                  <tr className="text-white text-opacity-40 bg-[#38383F] sticky top-[-1px] m-0 border-none shadow-none">
                    <th className=' w-[9.3vw]'>ACCOUNT</th>
                    <th className=' w-[6.7vw]'>TYPE</th>
                    <th className=' w-[7.8vw]'>ETH</th>
                    <th className='w-[9.8vw]'>PROMOTION</th>
                    <th className=' w-[7.8vw]'>DATE</th>
                    <th className='w-[11.9vw]'>TRANSACTION</th>
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
      </div>  
    </div>

    </div>
  

    </div>
  )
}

export default DetailedBottomView

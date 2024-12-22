"use client"
import React, { useState } from 'react'
import smile from "@/assets/smile.png"
import pin from "@/assets/pin.svg"
import eth from "@/assets/eth.svg"
import Image from 'next/image'

import { AnimatePresence, motion } from "framer-motion";
import { Anuphan } from 'next/font/google'
const DetailedBottomView = () => {

  const [tab,setTab] = useState("cmmt")
  const [toogle,setToogle] = useState(false)
  const [tradeVale,setTradeVal] = useState(0.01)


  return (

    // <div className='bg-[#1B1C1E] mt-[32px] rounded-t-[35px]'>
    //     <div className='flex justify-between'>
    //       <p onClick={()=>setTab("cmmt")} className={`${tab=="cmmt"? "bg-primary text-[#262626]":" bg-[#38383F] text-white"} font-[900] text-[30px] font-montserrat   py-5 w-[349px] text-center rounded-[40px_0px]`}> COMMENTS</p>
    //       <p onClick={()=>setTab("his")} className={`${tab=="his"? "bg-primary text-[#262626]":" bg-[#38383F] text-white"} font-[800] text-[30px]  font-montserrat  py-5 w-[420px] text-center rounded-[0px_40px]`}> TRADING HISTORY</p>
           
    //     </div>
    //     <div className='h-[818px]  overflow-hidden relative'>


      
          // <div className='mt-[60px] h-[758px] overflow-y-auto pb-[40px] px-[40px] flex flex-col gap-[32px]'>
              
          //     <div className='bg-[#111111] rounded-[40px]'>
          //       <p className='font-[900] text-[28px] text-[#111111] bg-white  py-2 w-[288px] text-center rounded-[50px_0px]'> Your ID</p>
              
          //       <textarea name="" id="" placeholder='WRITE YOUR COMMENTS' className='h-[240px] w-full font-bebasneue font-[400] text-[34px] p-8 bg-transparent text-white opacity-30'></textarea>
          //       <div className='flex justify-between items-center px-16 mb-10'>
          //         <p className='font-bebasneue font-[400] text-[34px] text-white opacity-30'>0/256</p>
          //         <div className='flex gap-8 items-center'>
          //           <Image src={smile} alt=''/>
          //           <button className='border-0 bg-primary font-montserrat text-[#262626] text-[28px] font-[800] px-8 py-1 rounded-[20px]'>SUBMIT</button>
          //         </div>
          //       </div>
          //     </div>
      
          //     <div className='bg-[#111111] rounded-[40px] pb-4'>
          //       <div className='items-center flex justify-between'>
          //         <div className='flex items-center gap-2'>
          //           <p className='font-[900] text-[28px] text-[#111111] bg-white  py-2 w-[288px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
                    
          //           <div className='flex gap-2 items-center'>
          //             <Image src={pin} alt=''/>
          //             <p className='font-[800] text-primary text-[15px]'>DEV</p>
          //           </div>
          //         </div>
          //         <p className='text-primary font-[800] text-[22px] pe-8 pt-2 font-montserrat'>21 minutes ago</p>
          //       </div>
          //       <p className='font-[800] text-[22px] leading-[26px] text-white px-10 my-8 font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
          //     </div>
      
          //     <div className='bg-[#111111] rounded-[40px] pb-4'>
          //       <div className='items-center flex justify-between'>
          //         <div className='flex items-center gap-2'>
          //           <p className='font-[900] text-[28px] text-[#111111] bg-white  py-2 w-[288px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
                    
                  
          //         </div>
          //         <p className='text-primary font-[800] text-[22px] pe-8 pt-2 font-montserrat' >21 minutes ago</p>
          //       </div>
          //       <p className='font-montserrat font-[800] text-[22px] leading-[26px] text-white px-10 my-8'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
          //     </div>
          //     <div className='bg-[#111111] rounded-[40px] pb-4'>
          //       <div className='items-center flex justify-between'>
          //         <div className='flex items-center gap-2'>
          //           <p className='font-[900] text-[28px] text-[#111111] bg-white  py-2 w-[288px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
                    
                  
          //         </div>
          //         <p className='text-primary font-[800] text-[22px] pe-8 pt-2 font-montserrat'>21 minutes ago</p>
          //       </div>
          //       <p className='font-montserrat font-[800] text-[22px] leading-[26px] text-white px-10 my-8'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
          //     </div>
          //     <div className='bg-[#111111] rounded-[40px] pb-4'>
          //       <div className='items-center flex justify-between'>
          //         <div className='flex items-center gap-2'>
          //           <p className='font-[900] text-[28px] text-[#111111] bg-white  py-2 w-[288px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
                    
                  
          //         </div>
          //         <p className='text-primary font-[800] text-[22px] pe-8 pt-2 font-montserrat'>21 minutes ago</p>
          //       </div>
          //       <p className='font-montserrat font-[800] text-[22px] leading-[26px] text-white px-10 my-8'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
          //     </div>
          //     <div className='bg-[#111111] rounded-[40px] pb-4'>
          //       <div className='items-center flex justify-between'>
          //         <div className='flex items-center gap-2'>
          //           <p className='font-[900] text-[28px] text-[#111111] bg-white  py-2 w-[288px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
                    
                  
          //         </div>
          //         <p className='text-primary font-[800] text-[22px] pe-8 pt-2 font-montserrat'>21 minutes ago</p>
          //       </div>
          //       <p className='font-montserrat font-[800] text-[22px] leading-[26px] text-white px-10 my-8'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
          //     </div>
            
          //   </div>

            
           
          
    //     </div>
    // </div>
    <div className='flex justify-around mt-[50px] gap-[36px]'>
  
    <div className='bg-[#1B1C1E] w-[720px] rounded-[40px] ' >
      <p className="bg-primary text-[#262626] font-[900] text-[30px] font-montserrat   py-5 w-[349px] text-center rounded-[40px_0px]"> COMMENTS</p>
      
      <div className='mt-[60px] h-[758px] overflow-y-auto pb-[40px] px-[30px] flex flex-col gap-[32px]'>
              
              <div className='bg-[#111111] rounded-[15px]'>
                <p className='font-[900] text-[16px] text-[#111111] bg-white  py-1 w-[165px] text-center rounded-[50px_0px]'> Your ID</p>
              
                <textarea name="" id="" placeholder='WRITE YOUR COMMENTS' className='h-[100px] w-full font-bebasneue font-[400] text-[20px] p-7 outline-none bg-transparent text-white opacity-30'></textarea>
                <div className='flex justify-between items-center px-[30px] mb-5'>
                  <p className='font-bebasneue font-[400] text-[20px] text-white opacity-30'>0/256</p>
                  <div className='flex gap-4 items-center'>
                    <Image src={smile} alt='' width={24} height={24}/>
                    <button className='border-0 bg-primary font-montserrat text-[#262626] text-[14px] font-[800] px-4 py-1 rounded-[20px]'>SUBMIT</button>
                  </div>
                </div>
              </div>
      
              <div className='bg-[#111111] rounded-[24px] pb-4'>
                <div className='items-center flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <p className='font-[900] text-[15px] text-[#111111] bg-white  py-2 w-[180px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
                    
                    <div className='flex gap-1 items-center'>
                      <Image src={pin} alt='' width={9}/>
                      <p className='font-[800] text-primary text-[9px]'>DEV</p>
                    </div>
                  </div>
                  <p className='text-primary font-[800] text-[14px] pe-8 pt-2 font-montserrat'>21 minutes ago</p>
                </div>
                <p className='font-[800] text-[15px] leading-[26px] text-white px-8 my-5 font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
              </div>
              <div className='bg-[#111111] rounded-[24px] pb-4'>
                <div className='items-center flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <p className='font-[900] text-[15px] text-[#111111] bg-white  py-2 w-[180px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
                    
                    
                  </div>
                  <p className='text-primary font-[800] text-[14px] pe-8 pt-2 font-montserrat'>21 minutes ago</p>
                </div>
                <p className='font-[800] text-[15px] leading-[26px] text-white px-8 my-5 font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
              </div>

              <div className='bg-[#111111] rounded-[24px] pb-4'>
                <div className='items-center flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <p className='font-[900] text-[15px] text-[#111111] bg-white  py-2 w-[180px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
                    
                    
                  </div>
                  <p className='text-primary font-[800] text-[14px] pe-8 pt-2 font-montserrat'>21 minutes ago</p>
                </div>
                <p className='font-[800] text-[15px] leading-[26px] text-white px-8 my-5 font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
              </div><div className='bg-[#111111] rounded-[24px] pb-4'>
                <div className='items-center flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <p className='font-[900] text-[15px] text-[#111111] bg-white  py-2 w-[180px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
                    
                    
                  </div>
                  <p className='text-primary font-[800] text-[14px] pe-8 pt-2 font-montserrat'>21 minutes ago</p>
                </div>
                <p className='font-[800] text-[15px] leading-[26px] text-white px-8 my-5 font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
              </div><div className='bg-[#111111] rounded-[24px] pb-4'>
                <div className='items-center flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <p className='font-[900] text-[15px] text-[#111111] bg-white  py-2 w-[180px] text-center rounded-[50px_0px]'> TNFv...6GVT</p>
                    
                    
                  </div>
                  <p className='text-primary font-[800] text-[14px] pe-8 pt-2 font-montserrat'>21 minutes ago</p>
                </div>
                <p className='font-[800] text-[15px] leading-[26px] text-white px-8 my-5 font-montserrat'>SOLANAFIGHTS ⚔️🥊 JOIN liE VERY FIRST TAP-SWAP GAME LIKE HAMSTER KOMBAT ON SOLANA 🔥 TELEGRAM GAME/BOT IS ALREADY LIVE ✅ FAIR LAUNCH IS COMING SOON, DONT MISS IT ➡️ https://t.me/solanafights</p>
                
              </div>
      
            
            </div>
    </div>

    <div className="bg-[#1B1C1E]   rounded-[40px]">
      <p className={`bg-primary text-[#262626] font-[900] text-[30px]  font-montserrat  py-5 w-[420px] text-center rounded-[40px_0px]`}> TRADING HISTORY</p>
           
      <div className='mt-[60px] h-[758px] overflow-y-auto pb-[1px] px-[40px] flex flex-col gap-[32px]'>
              <div className='flex gap-4 items-center justify-end'>
                <div className='bg-[#111111] px-[25px] py-[15px] rounded-[14px] flex gap-8 shadow-[10px_10px_23px_0px_#0000004D]'>
                  <p className='uppercase text-white  font-[800]  text-[13px] '>Filter By Size</p>
                  <div onClick={()=>setToogle(!toogle)} className={`${toogle? "bg-primary justify-end" : "bg-[#18191B] justify-start" } tranis w-[50px] flex items-center  rounded-[29px] h-[18px] `}>
                    <div className= {`${toogle?"bg-white":"bg-[#38383F]"} tranis w-[22px] h-[22px] rounded-full`}>

                    </div>
                  </div>
                </div>
                <div className='bg-[#111111] px-[25px] py-[10px]  items-center rounded-[14px] flex gap-4 shadow-[10px_10px_23px_0px_#0000004D]'>
                  <div className='flex items-center gap-1'>
                    <input type='number' className='uppercase text-white bg-transparent font-[800] w-[25px]  text-[13px] ' placeholder='0' value={tradeVale} onChange={(e)=>{
                      setTradeVal(e.target.value)
                    }}/> 
                    <p className=' uppercase text-white bg-transparent font-[800] text-[13px]'>
                    ETH
                    </p>
                  </div>
                  <Image src={eth} alt='' className='rounded-full w-[28px]'/>
                </div>
                <div className='border-primary border-s-[6px] ps-2'>
                  <p className='font-bebasneue  text-[18px] '>
                  <span className='text-white'>153 </span>
                    <span className='text-opacity-30 text-white'>trades of size greater lian 0.01 ETH</span>
                  </p>
                </div>
              </div>
              
              <div className=' rounded-[20px_20px_0px_0px] overflow-x-hidden'>
                <table className="w-full text-[18px] font-montserrat font-[800] border-collapse border-spacing-0">
                <thead className="uppercase ">
                  <tr className="text-white text-opacity-40 bg-[#38383F] sticky top-[-1px] m-0 border-none shadow-none">
                    <th className=' w-[180px]'>ACCOUNT</th>
                    <th className=' w-[130px]'>TYPE</th>
                    <th className=' w-[150px]'>ETH</th>
                    <th className='w-[190px]'>PROMOTION</th>
                    <th className=' w-[150px]'>DATE</th>
                    <th className='w-[230px]'>TRANSACTION</th>
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
  
    
  )
}

export default DetailedBottomView

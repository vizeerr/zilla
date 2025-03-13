"use client"
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import copybgblack from "@/assets/copybgblack.png"
import gotobgblack from "@/assets/gotobgblack.png"
import xlogo from "@/assets/xlogo.png"
import tlogo from "@/assets/tlogo.png"
import wlogo from "@/assets/wlogo.png"
import xblack from "@/assets/xblack.png"
import { getToken } from '@/helpers/api'
import { formatTime, imgUrl, shortId } from '@/helpers/helpers'
import Link from 'next/link'
import DetailedTrade from './DetailedTrade'
import HolderModel from './HolderModel'
import TradeModel from './TradeModel'

const DetailedLefView = ({token}) => {
  const [tokenData,setTokenData] = useState({});
  const [copiedText,setCopiedText] = useState("AWEBFSOIWGERGE....1423404599349");
  const fetchToken = useCallback(async () => {
    const data = await getToken(token);
    setTokenData(data);
  }, [token]);
  

  const handleCopy = async () => {
      await navigator.clipboard.writeText('AWEBFSOIWGERGE5566544551423404599349');
      setCopiedText('Link Copied !')
      setTimeout(()=>{
      setCopiedText('AWEBFSOIWGERGE....1423404599349')

      },2000)
    
  };
  
  
  useEffect(()=>{
    fetchToken();
  },[fetchToken])


  return (
    <div className='flex flex-col lg:gap-[1.6vw] md:gap-6 gap-[3.1vw] w-full'>
          
          <div className='bg-[#1B1C1E] 2xl:p-6 md:p-5 p-[1.6vw] flex flex-col justify-between shadow-[12.7px_12.7px_44.02px_0px_#0000004F] 2xl:rounded-[2rem] md:rounded-[1.5rem] rounded-[2.7vw]'>
              
              <div className='flex 2xl:gap-9 md:gap-6 gap-[2.1vw]'>
                <div className=' bg-[#0A0A0B] 2xl:rounded-[1.5rem] xl:rounded-[1.2rem] md:rounded-[0.8rem] rounded-[2vw] relative overflow-hidden 2xl:w-56 xl:w-48 md:w-40 2xl:h-56 xl:h-48 md:h-40 w-[20.8vw] h-[20.3vw]'>

                  <Image
                src={imgUrl(tokenData.image) || ""}
                alt=""
                layout="fill"
                objectFit="contain"
                className='object-contain w-full'
              />
                  
                  <div className='bg-[#0A0A0B] flex justify-evenly w-full md:py-2.5 py-[0.9vw] absolute bottom-0 z-10'>
                  <Link href={tokenData.website || ""} className='2xl:w-5 md:w-3.5 w-[2vw]'>
                    <Image src = {wlogo} alt=''/>
                  </Link>
                  <Link href={tokenData.twitter || ""} className='2xl:w-5 md:w-3.5 w-[2vw]'>
                    <Image src = {xlogo} alt=''/>
                  </Link>
                  <Link href={tokenData.telegram || ""} className='2xl:w-5 md:w-3.5 w-[2vw]'>
                    <Image src = {tlogo} alt=''/>
                  </Link>

                  </div>
                </div>
                <div className='lg:mt-4 mt-2 w-full 2xl:pe-7 md:pe-5 pe-[1.6vw]'>
                  <div className='flex md:gap-2 gap-[0.9vw] items-center'>
                    <h1 className='2xl:text-3xl md:text-2xl text-[2.9vw]  font-[400] font-bebasneue'>{tokenData.name} </h1>
                    <p className='2xl:text-2xl md:text-xl text-[3vw] font-montserrat font-[900] text-primary'>($ {tokenData.symbol})</p>
                  </div>
                    <div className='flex md:flex-row flex-col justify-between w-full mt-1.5'>
                      <p className='font-[700] tracking-wide 2xl:text-base md:text-xs text-[1.6vw] mb-[0.2vw] text-primary'><span className='text-white opacity-30 '>Created by</span> {shortId(tokenData.creator)}</p>
                      <div className='flex items-center md:gap-2 gap-[0.9vw] '>
                        <p className='font-[700] tracking-wide 2xl:text-base md:text-xs  text-[1.6vw] mb-[0.2vw] text-white'><span className='opacity-30 text-white '>Contract :</span> {shortId(tokenData.token_address)}</p>
                        <div className='2xl:w-7 md:w-6  w-[3.3vw]'>
                          <Image src={copybgblack} alt='' className='anim'/>
                        </div>
                        <div className='2xl:w-7 md:w-6  w-[3.3vw]'>
                          <Image src={gotobgblack} alt='' className='anim'/>
                        </div>
                      </div>
                    </div>
                    <p className='md:flex hidden font-[600] 2xl:h-28 xl:h-24 md:h-16 h-[3.8vh] 2xl:mt-4 md:mt-3 opacity-45 2xl:text-lg xl:text-sm md:text-xs text-[1.5vw] md:leading-tight leading-tight overflow-y-scroll'>
                      {tokenData.description}
                    </p>
                  
                  
                </div>

                
                
              </div>
              <p className='md:hidden flex font-[600] md:pe-0 pe-[1.6vw] 2xl:h-28 xl:h-24 md:h-16 h-[9.5vw] mt-[2.5vw] opacity-45 2xl:text-lg xl:text-sm md:text-xs text-[1.5vw] md:leading-tight leading-tight overflow-y-scroll'>
                      {tokenData.description}
                    </p>

            
            
            <div className='flex justify-evenly 2xl:mt-7 md:mt-6 mt-[2.5vw] 2xl:gap-5 md:gap-3 gap-[1.3vw] md:pe-0 pe-[1.6vw] '>
             
              <div className='bg-[#363A40] 2xl:w-[22rem] md:w-[12.5rem] w-[28.7vw] 2xl:rounded-[1.6rem] md:rounded-[1rem] rounded-[1.9vw] 2xl:px-7 md:px-5 2xl:py-4 md:py-2.5 p-[1.4vw] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] 2xl:text-3xl md:text-lg text-[3vw]'>Price</p>
                <p className='text-primary font-[800] 2xl:text-2xl md:text-sm text-[2vw]'>0.000000000025 ETH</p>
              </div>
              
              
             
              <div className='bg-[#363A40] 2xl:w-[22rem] md:w-[12.5rem] w-[28.7vw] 2xl:rounded-[1.6rem] md:rounded-[1rem] rounded-[1.9vw] 2xl:px-7 md:px-5 2xl:py-4 md:py-2.5 p-[1.4vw] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] 2xl:text-3xl md:text-lg text-[3vw]'>24H volume</p>
                <p className='text-primary font-[800] 2xl:text-2xl md:text-sm text-[2vw]'>$9,999,999.000</p>
              </div>
             
              <div className='bg-[#363A40] 2xl:w-[22rem] md:w-[12.5rem] w-[28.7vw] 2xl:rounded-[1.6rem] md:rounded-[1rem] rounded-[1.9vw] 2xl:px-7 md:px-5 2xl:py-4 md:py-2.5 p-[1.4vw] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] 2xl:text-3xl md:text-lg text-[3vw]'>Token created</p>
                <p className='text-primary font-[800] 2xl:text-2xl md:text-sm text-[2vw]'>{formatTime(tokenData.created_at)} <span className='text-white'>ago</span></p>
              </div>
            </div>

          </div>

         
          <div className='bg-[#1B1C1E]   shadow-[12.7px_12.7px_44.02px_0px_#0000004F] 2xl:rounded-[2.3rem] md:rounded-[1.7rem] rounded-[2.9vw]'>
              
              <div className='2xl:h-[55rem] md:h-[36.5rem] h-[70vw] 2xl:m-7 md:m-5 2xl:rounded-[1.4rem] rounded-[1.2rem] overflow-hidden'>
                  <iframe className='w-full h-full' src="https://dexscreener.com/ethereum/0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTimeframesToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=5"></iframe>
                </div>
          </div>

          <div className='lg:hidden block bg-[#1B1C1E] text-white w-full overflow-x-hidden relative p-[5.5vw] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[3.8vw]'>
            <DetailedTrade/>
           </div>
           
          <div className='bg-[#1B1C1E] shadow-[12.7px_12.7px_44.02px_0px_#0000004F]   pb-[2.4vw] 2xl:rounded-[2rem] md:rounded-[1.6rem] rounded-[2.9vw] overflow-hidden'>

            <div className='flex justify-between items-start '>
              <p className='text-[#000000] md:leading-relaxed font-montserrat font-[900] 2xl:py-2.5 md:py-0.5 2xl:text-4xl xl:text-2xl md:text-xl text-[2.6vw] uppercase md:ps-[1.6rem] md:pe-[2rem] md:mt-4 mt-[2.5vw] bg-primary 2xl:rounded-[0_1rem_1rem_0] md:rounded-[0_0.6rem_0.6rem_0] rounded-[0_1.4vw_1.4vw_0] px-[2vw]'>Share  &  Earn  with  PumpZilla</p>
              <p className='bg-[#303236] shadow-[6.35px_6.35px_39.15px_0px_#00000040] anim text-center md:mt-3 mt-[1.4vw] md:me-3 me-[1.4vw] text-primary font-[700] 2xl:text-2xl xl:text-base md:text-xs text-[2.2vw] md:py-2.5 py-[0.8vw] md:px-6 px-[1.9vw] 2xl:rounded-[1rem] md:rounded-[0.7rem] rounded-[1.4vw]'>REFERRAL DASHBOARD</p>
            </div>
            <div className='md:px-7 px-[2.1vw] 2xl:mt-12 md:mt-11 mt-[5vw] flex 2xl:gap-6 xl:gap-5 md:gap-3 gap-[1.4vw] items-center justify-center'>
              <div className=' 2xl:w-[67rem] xl:w-[37rem] md:w-[33rem] w-[85%] font-[400] anim bg-[#37393D] 2xl:px-8 md:px-5 2xl:py-3.5 xl:py-2.5 md:py-1.5 px-[1.6vw] py-[0.4vw] 2xl:rounded-[1.2rem] xl:rounded-[0.8rem] md:rounded-[0.6rem] rounded-[1.4vw] flex items-center md:gap-4 gap-[0.9vw]' onClick={handleCopy}>
                <p className='font-bebasneue 2xl:text-5xl xl:text-2xl md:text-xl text-[2.5vw] '> YOUR UNIQUE LINK : </p>   
                <p className='text-primary font-[700] 2xl:text-4xl xl:text-xl md:text-lg text-[2.7vw]'>{copiedText}</p> 
              </div>
              <div  className='bg-primary anim  2xl:w-20 xl:w-14 md:w-10 2xl:h-20 xl:h-14 md:h-10 w-[5vw] h-[5vw] 2xl:p-5 xl:p-3 md:p-2 p-[1.2vw] 2xl:rounded-[1.2rem] xl:rounded-[0.8rem] md:rounded-[0.6rem] rounded-[1.4vw]'>
                <Image src={xblack} alt=''  className='w-full'/>
              </div>
            </div>
            
          </div>

          <div className=' lg:hidden md:flex hidden gap-5'>
            <HolderModel/>
            <div className='bg-[#1B1C1E]  shadow-[12.7px_12.7px_44.02px_0px_#0000004F] w-full p-5 md:rounded-[1.6rem]'>
              <TradeModel/>
            </div>
          </div>

    </div>
  )
}

export default DetailedLefView

"use client"
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import copyWhite from "@/assets/copywhite.png"
import primcopy from "@/assets/primcopy.png"
import xlogo from "@/assets/xlogo.png"
import tlogo from "@/assets/tlogo.png"
import wlogo from "@/assets/wlogo.png"
import glogo from "@/assets/glogo.png"

import xblack from "@/assets/xblack.png"
import { getToken } from '@/helpers/api'
import { formatTime, imgUrl, shortId } from '@/helpers/helpers'
import Link from 'next/link'
import DetailedTrade from './DetailedTrade'
import HolderModel from './HolderModel'
import TradeModel from './TradeModel'

const DetailedLefView = ({token}) => {
  const [tokenData,setTokenData] = useState({});
  const [refCopiedText,setRefCopiedText] = useState("AWEBFSOIWGERGE....1423404599349");
  const [contCopiedText,setContCopiedText] = useState("0x96...3e72");

  const fetchToken = useCallback(async () => {
    const data = await getToken(token);
    console.log(token);
    
    setTokenData(data);
  }, [token]);
  

  const handleRefCopy = async () => {
      await navigator.clipboard.writeText('AWEBFSOIWGERGE5566544551423404599349');
      setRefCopiedText('Link Copied !')
      setTimeout(()=>{
      setRefCopiedText('AWEBFSOIWGERGE....1423404599349')

      },2000)
    
  };
  
  
  const handleContCopy = async () => {
    await navigator.clipboard.writeText('0x96...3e72');
    setContCopiedText('Link Copied !')
    setTimeout(()=>{
    setContCopiedText('0x96...3e72')

    },2000)
  
};
  
  useEffect(()=>{
    fetchToken();
  },[fetchToken])


  return (
    <div className='flex flex-col lg:gap-[1.6vw] md:gap-6 gap-[3.1vw] w-full'>
          
          <div className='bg-[#1B1C1E] 2xl:p-5 md:p-3 p-[1.6vw] flex flex-col justify-between shadow-[12.7px_12.7px_44.02px_0px_#0000004F] 2xl:rounded-[2rem] md:rounded-[1.5rem] rounded-[2.7vw]'>
              
              <div className='flex items-center md:gap-6 gap-[2.1vw]'>
                <div className=' bg-[#0A0A0B] 2xl:rounded-[1.2rem] xl:rounded-[0.8rem] md:rounded-[0.5rem] rounded-[2vw] relative overflow-hidden 2xl:w-52  md:w-36 2xl:h-56  md:h-36 w-[26vw] h-[24vw]'>

                  <Image
                src={imgUrl(tokenData.image) || ""}
                alt=""
                layout="fill"
                objectFit="contain"
                className='object-contain w-full'
              />
                  
                  <div className='bg-[#0A0A0B] flex justify-around w-full md:py-2.5 py-[0.9vw] absolute bottom-0 z-10'>
                  <Link href={tokenData.website || ""} className='2xl:w-4 md:w-3 w-[2vw]'>
                    <Image src = {wlogo} alt=''/>
                  </Link>
                  <Link href={tokenData.twitter || ""} className='2xl:w-4 md:w-3 w-[2vw]'>
                    <Image src = {xlogo} alt=''/>
                  </Link>
                  <Link href={tokenData.telegram || ""} className='2xl:w-4 md:w-3 w-[2vw]'>
                    <Image src = {tlogo} alt=''/>
                  </Link>

                  </div>
                </div>
                <div className=' w-full'>
                  <div className='md:flex justify-between items-center'>
                    <div className='flex 2xl:gap-2 md:gap-1 gap-[0.9vw] items-center'>
                      <h1 className='2xl:text-2xl md:text-base text-[2.9vw]  font-[400] font-bebasneue'>{tokenData.name} </h1>
                      <p className='2xl:text-lg md:text-xs text-[3vw] font-montserrat font-[700] text-primary'>({tokenData.symbol})</p>
                    </div>
                    <p className='font-[500] md:bg-[#363940] 2xl:py-1.5 md:py-1 2xl:rounded-lg md:rounded-md md:px-3 shadow-lg tracking-wide 2xl:text-xs md:text-[0.45rem] text-[1.6vw] mb-[0.2vw] text-primary'><span className='text-[#FFFFFF4D]'>Created by</span> {shortId(tokenData.creator)}</p>
                  </div>
                   
                    <p className='md:flex hidden font-[500] 2xl:h-20 md:h-14 h-[3.8vh] 2xl:mt-3 md:mt-1 opacity-45 2xl:text-xs  md:text-[0.55rem] text-[1.5vw] md:leading-tight leading-tight overflow-y-scroll'>
                      {tokenData.description}
                    </p>
                    <div className='flex justify-evenly  2xl:mt-5 md:mt-3 mt-[2.5vw] 2xl:gap-5 md:gap-3 gap-[1.3vw] md:pe-0 pe-[1.6vw] '>
                       
                      <div className='bg-primary w-full 2xl:rounded-xl md:rounded-[0.5rem] rounded-[1.9vw] 2xl:px-4 md:px-2.5 2xl:py-2 md:py-2 py-[1.2vw] px-[2.5vw] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                        <p className='capitalize text-[#1B1C1E] font-bebasneue font-[400] 2xl:text-lg md:text-xs text-[2.8vw]'>Market Cap</p>
                        <p className='text-[#1B1C1E] font-[800] 2xl:text-sm md:text-[0.55rem] text-[3vw]'>$99,999</p>
                      </div>

                      <div className='bg-[#363A40] md:block hidden w-full 2xl:rounded-xl md:rounded-[0.5rem] rounded-[1.9vw] 2xl:px-4 md:px-2.5 2xl:py-2 md:py-2 p-[1.4vw] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                        <p className='capitalize font-bebasneue font-[400] 2xl:text-lg md:text-xs text-[3vw]'>Price</p>
                        <p className='text-primary font-[800] 2xl:text-sm md:text-[0.55rem] text-[2vw]'>$0.0000000</p>
                      </div>
                      <div className='bg-[#363A40] md:block hidden w-full 2xl:rounded-xl md:rounded-[0.5rem] rounded-[1.9vw] 2xl:px-4 md:px-2.5 2xl:py-2 md:py-2 p-[1.4vw] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                        <p className='capitalize font-bebasneue font-[400] 2xl:text-lg md:text-xs text-[3vw]'>24H volume</p>
                        <p className='text-primary font-[800] 2xl:text-sm md:text-[0.55rem] text-[2vw]'>$9,999,999.000</p>
                      </div>
                      <div className='bg-[#363A40] md:block hidden w-full 2xl:rounded-xl md:rounded-[0.5rem] rounded-[1.9vw] 2xl:px-4 md:px-2.5 2xl:py-2 md:py-2 p-[1.4vw] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                        <p className='capitalize font-bebasneue font-[400] 2xl:text-lg md:text-xs text-[3vw]'>Token created</p>
                        <p className='text-primary font-[800] 2xl:text-sm md:text-[0.55rem] text-[2vw]'>{formatTime(tokenData.created_at)} <span className='text-white'>ago</span></p>
                      </div>

                      <div className='bg-[#363A40] w-full 2xl:rounded-xl md:rounded-[0.5rem] rounded-[1.9vw] 2xl:px-4 md:px-2.5 2xl:py-2 md:py-2 py-[1.2vw] px-[2.5vw] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                        <div className='flex justify-end float-end'>
                          <div className='2xl:w-5 md:w-3 w-[2.3vw]'>
                            <Image src={primcopy} alt=''/>
                          </div>
                        </div>
                        <div className='flex 2xl:gap-2 md:gap-1 gap-[0.9vw] items-center'>
                          <p className='capitalize font-bebasneue font-[400] 2xl:text-lg md:text-xs text-[2.8vw]'>CONTRACT</p>
                          <div className='2xl:w-4 w-3' onClick={handleContCopy}>
                            <Image src={copyWhite} alt=''/>
                          </div>
                        </div>
                        <p className='text-primary font-[800] 2xl:text-sm md:text-[0.55rem] text-[3vw]'>{contCopiedText}</p>
                      </div>
                
                    </div>
                  
                  
                </div>

                
                
              </div>
              <p className='md:hidden flex font-[600] md:pe-0 pe-[1.6vw] h-auto 2xl:max-h-28 xl:max-h-24 md:max-h-16 max-h-[9.5vw] mt-[2.5vw] opacity-45 2xl:text-lg xl:text-sm md:text-xs text-[1.5vw] md:leading-tight leading-tight overflow-y-scroll'>
                      {tokenData.description}
              </p>

            
            
           

          </div>

         
          <div className='bg-[#1B1C1E]   shadow-[12.7px_12.7px_44.02px_0px_#0000004F] 2xl:rounded-[2rem] md:rounded-[1.4rem] rounded-[2.9vw]'>
              
              <div className='2xl:h-[36rem] md:h-[28.5rem] h-[70vw] 2xl:m-5 md:m-3 2xl:rounded-[1.2rem] rounded-[1rem] overflow-hidden'>
                  <iframe className='w-full h-full' src="https://dexscreener.com/ethereum/0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTimeframesToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=5"></iframe>
                </div>
          </div>
          
          <div className='flex gap-4'>
            <div className='lg:hidden block bg-[#1B1C1E] text-white w-full overflow-x-hidden relative p-[2vw] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[2.4vw]'>
              <DetailedTrade/>
            </div>
            
            <div className='bg-[#1B1C1E] shadow-[12.7px_12.7px_44.02px_0px_#0000004F]  w-full 2xl:p-5 md:p-4 2xl:rounded-[2rem] md:rounded-[1.4rem] rounded-[2.9vw] overflow-hidden'>

              <div className='flex justify-between items-start '>
                <p className='text-primary w-full text-center bad 2xl:text-4xl  md:text-2xl text-[2.6vw] uppercase '>Share your link - get Zilla in sync!</p>
                <div className=' 2xl:w-10 md:w-6 rounded-full bg-primary p-1.5'>
                  <Image src={glogo} alt='' className='w-full invert'/>
                </div>
              </div>
              <div className='md:px-7 px-[2.1vw] 2xl:mt-5 md:mt-3  flex 2xl:gap-6 xl:gap-5 md:gap-3 gap-[1.4vw] items-center justify-center'>
                <div className=' font-[400] anim bg-[#37393D] 2xl:px-12 md:px-8 2xl:py-4  md:py-2.5 px-[1.6vw] py-[0.4vw] 2xl:rounded-[1.2rem] md:rounded-[0.8rem] rounded-[1.4vw] flex items-center 2xl:gap-4 md:gap-2 gap-[0.9vw]' onClick={handleRefCopy}>
                  <p className='font-bebasneue 2xl:text-2xl md:text-base text-[2.5vw] '> YOUR UNIQUE LINK : </p>   
                  <p className='text-primary font-[700] 2xl:text-xl md:text-[0.7rem] text-[2.7vw]'>{refCopiedText}</p> 
                </div>
                <div  className='bg-primary anim  2xl:w-16 md:w-10 2xl:h-16 md:h-10 w-[5vw] h-[5vw] 2xl:p-3  md:p-2 p-[1.2vw] 2xl:rounded-[0.9rem]  md:rounded-[0.6rem] rounded-[1.4vw]'>
                  <Image src={xblack} alt=''  className='w-full '/>
                </div>
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

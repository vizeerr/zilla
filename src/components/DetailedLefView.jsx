"use client"
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import copybgblack from "@/assets/copybgblack.png"
import gotobgblack from "@/assets/gotobgblack.png"
import xlogo from "@/assets/xlogo.png"
import tlogo from "@/assets/tlogo.png"
import wlogo from "@/assets/wlogo.png"
import xblack from "@/assets/xblack.svg"
import { getToken } from '@/helpers/api'
import { formatTime, imgUrl, shortId } from '@/helpers/helpers'
import Link from 'next/link'
import DetailedTrade from './DetailedTrade'
import HolderModel from './HolderModel'

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
    <div className='flex flex-col md:gap-[1.6vw] gap-[3.1vw] w-full'>
          
          <div className='bg-[#1B1C1E] md:ps-[1.5vw] md:pb-[1.5vw] ps-[1.6vw] pb-[1.6vw] flex flex-col justify-between shadow-[12.7px_12.7px_44.02px_0px_#0000004F] md:rounded-[2vw] rounded-[2.7vw]'>
              <div className='w-full flex justify-end'>
                <div className='bg-primary md:w-96 w-[19.6vw]  md:py-[0.7vw] md:ps-[2.6vw] py-[1.5vw] px-[2.2vw]  md:rounded-[0_2vw] rounded-[0_2.9vw] text-[#1B1C1E] shadow-[5.29px_5.29px_26.45px_0px_#00000080]'>
                  <p className='md:text-3xl text-[2.1vw] font-[800]'>MCap : 
                  <span className='font-[900] md:text-4xl text-[3vw]'> $ 54,124</span></p>
                </div>
              </div>    

              <div className='flex -mt-10 md:gap-9 gap-[2.1vw]'>
                <div className=' bg-[#0A0A0B] md:rounded-[0.9vw] rounded-[2vw] relative overflow-hidden md:w-56 md:h-56 w-[20.8vw] h-[20.3vw]'>

                  <Image
                src={imgUrl(tokenData.image) || ""}
                alt=""
                layout="fill"
                objectFit="contain"
                className='object-contain w-full'
              />
                  
                  <div className='bg-[#0A0A0B] flex justify-evenly w-full md:py-[0.4vw] py-[0.9vw] absolute bottom-0 z-20'>
                  <Link href={tokenData.website || ""} className='md:w-[1vw] w-[2vw]'>
                    <Image src = {wlogo} alt=''/>
                  </Link>
                  <Link href={tokenData.twitter || ""} className='md:w-[1vw] w-[2vw]'>
                    <Image src = {xlogo} alt=''/>
                  </Link>
                  <Link href={tokenData.telegram || ""} className='md:w-[1vw] w-[2vw]'>
                    <Image src = {tlogo} alt=''/>
                  </Link>

                  </div>
                </div>
                <div className='mt-4 w-full md:pe-[1.5vw] pe-[1.6vw]'>
                  <div className='flex md:gap-[0.4vw] gap-[0.9vw] items-center'>
                    <h1 className='md:text-3xl text-[2.9vw]  font-[400] font-bebasneue'>{tokenData.name} </h1>
                    <p className='md:text-2xl text-[3vw] font-montserrat font-[900] text-primary'>($ {tokenData.symbol})</p>
                  </div>
                    <div className='flex justify-between w-full mt-1.5'>
                      <p className='font-[700] tracking-wide md:text-base text-[1.6vw] mb-[0.2vw] text-primary'><span className='text-white opacity-30 '>Created by</span> {shortId(tokenData.creator)}</p>
                      <div className='flex items-center md:gap-[0.2vw] gap-[0.9vw] '>
                        <p className='font-[700] tracking-wide md:text-base text-[1.6vw] mb-[0.2vw] text-white'><span className='opacity-30 text-white '>Contract :</span> {shortId(tokenData.token_address)}</p>
                        <div className='md:w-[1.4vw]  w-[3.3vw]'>
                          <Image src={copybgblack} alt='' className='anim'/>
                        </div>
                        <div className='md:w-[1.4vw]  w-[3.3vw]'>
                          <Image src={gotobgblack} alt='' className='anim'/>
                        </div>
                      </div>
                    </div>
                    <p className='font-[600] md:h-[6vw] h-[12vh] mt-[0.8vw] opacity-45 md:text-lg text-[2.2vw] md:leading-tight leading-tight overflow-y-scroll'>
                      {tokenData.description}
                    </p>
                  
                  
                </div>
                
                
              </div>

            
            
            <div className='flex justify-evenly mt-[1.4vw] md:gap-[0.9vw] gap-[1.3vw] md:pe-[1.5vw] pe-[1.6vw]'>
             
              <div className='bg-[#363A40] md:w-[18vw] w-[28.7vw] md:rounded-[1.4vw] rounded-[1.9vw] md:px-[1.5vw] md:py-[0.8vw] p-[1.4vw] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] md:text-[1.5vw] text-[3vw]'>Price</p>
                <p className='text-primary font-[800] md:text-[1.3vw] text-[2vw]'>0.000000000025 ETH</p>
              </div>
              <div className='bg-[#363A40] md:w-[18vw] w-[28.7vw] md:rounded-[1.4vw] rounded-[1.9vw] md:px-[1.5vw] md:py-[0.8vw]  p-[1.4vw] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] md:text-[1.5vw] text-[3vw]'>24H volume</p>
                <p className='text-primary font-[800] md:text-[1.3vw] text-[2vw]'>$9,999,999.000</p>
              </div>
             
              <div className='bg-[#363A40] md:w-[18vw] w-[28.7vw] md:rounded-[1.4vw] rounded-[1.9vw] md:px-[1.5vw] md:py-[0.8vw] p-[1.4vw] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] md:text-[1.5vw] text-[3vw]'>Token created</p>
                <p className='text-primary font-[800]  md:text-[1.3vw] text-[2vw]'>{formatTime(tokenData.created_at)} <span className='text-white'>ago</span></p>
              </div>
            </div>

          </div>

         
          <div className='bg-[#1B1C1E]   shadow-[12.7px_12.7px_44.02px_0px_#0000004F] md:rounded-[2vw] rounded-[2.9vw]'>
              {/* <div className='bg-primary md:w-[18.1vw] w-[35.1vw] text-center md:py-[0.7vw] py-[8px] md:rounded-[2vw_0px] rounded-[20px_0] text-[#1B1C1E] shadow-[6.51px_6.51px_15.63px_0px_#0000005C]'>
                <p className='md:text-[1.3vw] text-[2.9vw] font-[800]'>GRAPHICAL VIEW</p>
                
              </div> */}
              <div className='h-[55rem] m-[1.4vw] rounded-[1.2vw] overflow-hidden'>
                  <iframe className='w-full h-full' src="https://dexscreener.com/ethereum/0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTimeframesToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=5"></iframe>
                </div>
          </div>

          <div className='md:hidden block bg-[#1B1C1E] text-white w-full overflow-x-hidden relative p-[5.5vw] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[3.8vw]'>
            <DetailedTrade/>
           </div>

          <div className='bg-[#1B1C1E] shadow-[12.7px_12.7px_44.02px_0px_#0000004F]  md:pb-[1.6vw] pb-[2.4vw] md:rounded-[2vw] rounded-[2.9vw] overflow-hidden'>

            <div className='flex justify-between items-start '>
              <p className='text-[#000000] md:leading-[3vw] font-montserrat font-[900] md:text-[1.8vw] text-[2.6vw] uppercase md:ps-[1vw] md:pe-[2vw] md:mt-[0.8vw] mt-[2.5vw] bg-primary md:rounded-[0_0.7vw_0.7vw_0] rounded-[0_1.4vw_1.4vw_0] px-[2vw]'>Share  &  Earn  with  PumpZilla</p>
              <p className='bg-[#303236] shadow-[6.35px_6.35px_39.15px_0px_#00000040] md:w-[18.2vw] w-[33vw] anim text-center md:mt-[0.8vw] mt-[1.4vw] md:me-[0.8vw] me-[1.4vw] text-primary font-[700] md:text-[1.2vw] text-[2.2vw] md:py-[0.6vw] py-[0.8vw] md:px-[0.9vw] px-[1.9vw] md:rounded-[0.9vw] rounded-[1.4vw]'>REFERRAL DASHBOARD</p>
            </div>
            <div className='md:px-[1.5vw] px-[2.1vw] md:mt-[2.6vw] mt-[5vw] flex md:gap-[1.5vw] gap-[1.4vw] items-center justify-center'>
              <div className=' w-[72%] font-[400] anim bg-[#37393D] md:px-[1.8vw] px-[1.6vw] py-[0.4vw] md:rounded-[1.1vw] rounded-[1.4vw] flex items-center md:gap-[0.4vw] gap-[0.9vw]' onClick={handleCopy}>
                <p className='font-bebasneue md:text-[2.1vw] text-[2.9vw] '> YOUR UNIQUE LINK : </p>   
                <p className='text-primary font-[700] md:text-[1.7vw] text-[2.9vw]'>{copiedText}</p> 
              </div>
              <div  className='bg-primary anim  md:w-[4vw] md:h-[4vw] w-[5vw] h-[5vw] md:p-[0.8vw] p-[1.2vw] md:rounded-[1.1vw] rounded-[1.4vw]'>

                <Image src={xblack} alt='' />
              </div>
            </div>
            {/* <p className='gradientText font-[500] md:text-[2.7vw] text-[4vw] round md:mt-[1.6vw] mt-[2.4vw] text-end md:pe-[2vw] pe-[3.6vw]'>Earn  weekly  PumpZilla  rewards  through  referrals !</p> */}

          </div>

          <div className='md:hidden block'>
            <HolderModel/>
          </div>

    </div>
  )
}

export default DetailedLefView

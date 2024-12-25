"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import coimg from "@/assets/coimg.svg"
import linkico from "@/assets/linkico.svg"
import xlogo from "@/assets/tlogo.svg"
import tlogo from "@/assets/xlogo.svg"
import wlogo from "@/assets/wlogo.svg"
import xblack from "@/assets/xblack.svg"
import { getToken } from '@/helpers/api'
import { formatTime, imgUrl, shortId } from '@/helpers/helpers'
import Link from 'next/link'
import toast from 'react-hot-toast'
import DetailedRightView from './DetailedRightView'
import DetailedTrade from './DetailedTrade'

const DetailedLefView = ({token}) => {
  const [tokenData,setTokenData] = useState({});
  const [copiedText,setCopiedText] = useState("AWEBFSOIWGERGE....1423404599349");

  const fetchToken = async() =>{
    const data = await getToken(token);
    setTokenData(data)
  }
  

  const handleCopy = async () => {
      await navigator.clipboard.writeText('AWEBFSOIWGERGE5566544551423404599349');
      setCopiedText('LINK COPIED')
      setTimeout(()=>{
      setCopiedText('AWEBFSOIWGERGE....1423404599349')

      },2000)
    
  };
  
  
  useEffect(()=>{
    fetchToken();
  },[])


  return (
    <div className='flex flex-col gap-[32px] w-full'>
          
          <div className='bg-[#1B1C1E] sm:ps-[30px] sm:pb-[30px] ps-[7px] pb-[7px] flex flex-col justify-between shadow-[12.7px_12.7px_44.02px_0px_#0000004F] sm:rounded-[40px] rounded-[11px]'>
            <div className='flex justify-between items-start'>
              <div className='flex items-center sm:gap-[33px] gap-[8.7px]'>
                <div className='sm:rounded-[21.16px] rounded-[8.5px] sm:mt-[30px] mt-[7px] relative overflow-hidden sm:w-[215px] sm:h-[210px] w-[20vw] h-[19.8vw]'>

                  <img src={imgUrl(tokenData.image) || ""} className='object-contain ' alt=''/>
                  
                  <div className='bg-[#0A0A0B] flex justify-around w-full sm:py-[8px] py-1 absolute bottom-0 z-20'>
                  <Link href={tokenData.website || ""} className='sm:w-full w-[8px]'>
                    <Image src = {wlogo} alt=''/>
                  </Link>
                  <Link href={tokenData.twitter || ""} className='sm:w-full w-[8px]'>
                    <Image src = {xlogo} alt=''/>
                  </Link>
                  <Link href={tokenData.telegram || ""} className='sm:w-full w-[8px]'>
                    <Image src = {tlogo} alt=''/>
                  </Link>

                  </div>
                </div>
                <div>
                  <div className='flex sm:gap-2 gap-1 items-center'>
                    <h1 className='sm:text-[37px] text-[3vw]  font-[400] font-bebasneue'>{tokenData.name} </h1>
                    <p className='sm:text-[26px]  text-[2.8vw] font-montserrat font-[900] text-primary'>($ {tokenData.symbol})</p>
                  </div>
                  <div className='flex items-center sm:gap-2 gap-1 sm:mt-4 mt-1.5'>
                    <p className='font-[700] tracking-wide sm:text-[16.5px] text-[1.5vw] mb-0.5'><span className='opacity-30 '>Created by</span> {shortId(tokenData.creator)}</p>
                    <div className='sm:w-full w-[13.8px]'>
                      <Image src={linkico} alt='' className='anim'/>
                    </div>
                  </div>
                  <div className='flex items-center sm:gap-2 '>
                    <p className='font-[700] tracking-wide sm:text-[16.5px] text-[1.5vw] text-primary mb-1'><span className='opacity-30 text-white '>Contract :</span> {shortId(tokenData.token_address)}</p>
                    <div className='sm:w-full w-[13.8px]'>
                      <Image src={linkico} alt='' className='anim'/>
                    </div>
                  </div>
                </div>
                
                
              </div>

              <div className='bg-primary float-end sm:w-[355px] w-[19vw]  sm:py-[15px] sm:ps-[50px] py-[10px] px-[8px]  sm:rounded-[0_40px] rounded-[0_12px] text-[#1B1C1E] shadow-[5.29px_5.29px_26.45px_0px_#00000080]'>
                <p className='sm:text-[32px] text-[2.1vw] font-[700]'>MCap</p>
                <p className='font-[800] sm:text-[46px] text-[3vw]'>$ 54,124</p>
              </div>
            </div>
            <p className='font-[600] sm:pe-[30px] pe-[7px] sm:h-[85px] h-[12vh] mt-4 opacity-45 sm:text-[19px] text-[2.2vw] sm:leading-[23px] leading-tight overflow-y-scroll'>
            {tokenData.description}
            </p>
            <div className='flex justify-evenly mt-5 sm:gap-[18px] gap-[1.3vw] sm:pe-[30px] pe-[7px]'>
             
              <div className='bg-[#363A40] sm:w-[340px] w-[28.7vw] sm:rounded-[28.5px] rounded-[8.2px] sm:p-[25px] p-[6px] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] sm:text-[30px] text-[3vw]'>Price</p>
                <p className='text-primary font-[800] sm:text-[25px] text-[2vw]'>0.000000000025 ETH</p>
              </div>
              <div className='bg-[#363A40] wsm:-[340px] w-[28.7vw] sm:rounded-[28.5px] rounded-[8.2px] sm:p-[25px] p-[6px] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] sm:text-[30px] text-[3vw]'>24H volume</p>
                <p className='text-primary font-[800] sm:text-[25px] text-[2vw]'>$9,999,999.000</p>
              </div>
              <div className='bg-[#363A40] sm:w-[340px] w-[28.7vw] sm:rounded-[28.5px] rounded-[8.2px] sm:p-[25px] p-[6px] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] sm:text-[30px] text-[3vw]'>Token created</p>
                <p className='text-primary font-[800] sm:text-[25px] text-[2vw]'>{formatTime(tokenData.created_at)} <span className='text-white'>ago</span></p>
              </div>
            </div>

          </div>

         
          <div className='bg-[#1B1C1E]  sm:h-[620px] h-[35vh] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] sm:rounded-[40px] rounded-[12px]'>
          <div className='bg-primary sm:w-[349px] w-[34vw] text-center sm:py-[15px] py-[8px] sm:rounded-[40px_0px] rounded-[20px_0] text-[#1B1C1E] shadow-[6.51px_6.51px_15.63px_0px_#0000005C]'>
                <p className='sm:text-[25px] text-[2.9vw] font-[800]'>GRAPHICAL VIEW</p>
                
              </div>
          </div>

          <div className='sm:hidden block bg-[#1B1C1E] text-white sm:w-[460px] w-full overflow-x-hidden relative sm:p-[32px] p-[23px] shadow-[12.7px_12.7px_44.02px_0px_#0000004F]sm:rounded-[40px] rounded-[16.8px]'>
            <DetailedTrade/>
           </div>

          <div className='bg-[#1B1C1E] shadow-[12.7px_12.7px_44.02px_0px_#0000004F]  sm:pb-8 pb-[10px] sm:rounded-[40px] rounded-[12px] overflow-hidden'>

            <div className='flex justify-between items-start '>
              <p className='text-[#000000] sm:leading-[58px] font-montserrat font-[900] sm:text-[36px] text-[2.5vw] uppercase sm:ps-[20px] sm:pe-[40px]   sm:pt-[5px] mt-5 bg-primary rounded-[0_21px_21px_0]'>Share  &  Earn  with  PumpZilla</p>
              <p className='bg-[#303236] shadow-[6.35px_6.35px_39.15px_0px_#00000040] sm:w-[350px] w-[36.5vw] anim text-center mt-[16px] me-[16px] text-primary font-[700] sm:text-[24px] text-[2.5vw] sm:py-[13px] sm:px-[18px] sm:rounded-[18px] rounded-[5.1px]'>REFERRAL DASHBOARD</p>
            </div>
            <div className='sm:px-[30px] px-[9px] sm:mt-[50px] mt-[21px] flex sm:gap-[31px] gap-[6px] items-center justify-center'>
              <div className=' font-[400] anim bg-[#37393D] sm:py-[10px] sm:px-[35px] px-[7px] py-[2px] sm:rounded-[22px] rounded-[6px] flex items-center sm:gap-2 gap-1' onClick={handleCopy}>
                <p className='font-bebasneue sm:text-[42px] text-[2.9vw] '> YOUR UNIQUE LINK : </p>   
                <p className='text-primary font-[700] sm:text-[33px] text-[2.9vw]'>{copiedText}</p> 
              </div>
              <div  className='bg-primary anim  sm:w-[78px] sm:h-[78px] w-[5vw] h-[5vw] sm:p-[16px] p-[5px] sm:rounded-[22px] rounded-[6px]'>

                <Image src={xblack} alt='' />
              </div>
            </div>
            <p className='gradientText font-[500] sm:text-[52px] text-[4vw] round sm:mt-8 mt-[10px] text-end sm:pe-10 pe-[15px]'>Earn  weekly  PumpZilla  rewards  through  referrals !</p>

          </div>

    </div>
  )
}

export default DetailedLefView

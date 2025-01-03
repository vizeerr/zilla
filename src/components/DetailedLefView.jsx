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
          
          <div className='bg-[#1B1C1E] 2xl:ps-[30px] lg:ps-[15px] 2xl:pb-[30px] lg:pb-[15px] ps-[7px] pb-[7px] flex flex-col justify-between shadow-[12.7px_12.7px_44.02px_0px_#0000004F] 2xl:rounded-[40px] lg:rounded-[25px] rounded-[11px]'>
            <div className='flex justify-between items-start'>
              <div className='flex items-center 2xl:gap-[33px] lg:gap-[20px] gap-[8.7px]'>
                <div className='2xl:rounded-[21.16px] rounded-[8.5px] lg:mt-[30px] mt-[7px] relative overflow-hidden 2xl:w-[215px] 2xl:h-[210px] lg:w-[150px] lg:h-[150px] w-[20vw] h-[19.8vw]'>

                  <img src={imgUrl(tokenData.image) || ""} className='object-contain ' alt=''/>
                  
                  <div className='bg-[#0A0A0B] flex justify-around w-full 2xl:py-[8px] lg:py-[8px] py-1 absolute bottom-0 z-20'>
                  <Link href={tokenData.website || ""} className='2xl:w-full lg:w-[20px] w-[8px]'>
                    <Image src = {wlogo} alt=''/>
                  </Link>
                  <Link href={tokenData.twitter || ""} className='2xl:w-full lg:w-[20px] w-[8px]'>
                    <Image src = {xlogo} alt=''/>
                  </Link>
                  <Link href={tokenData.telegram || ""} className='2xl:w-full lg:w-[20px] w-[8px]'>
                    <Image src = {tlogo} alt=''/>
                  </Link>

                  </div>
                </div>
                <div>
                  <div className='flex lg:gap-2 gap-1 items-center'>
                    <h1 className='2xl:text-[37px] lg:text-[25px] text-[3vw]  font-[400] font-bebasneue'>{tokenData.name} </h1>
                    <p className='2xl:text-[26px] lg:text-[19px] text-[2.8vw] font-montserrat font-[900] text-primary'>($ {tokenData.symbol})</p>
                  </div>
                  <div className='flex items-center 2xl:gap-2 gap-1 2xl:mt-4 mt-1.5'>
                    <p className='font-[700] tracking-wide 2xl:text-[16.5px] lg:text-[12px] text-[1.5vw] mb-0.5'><span className='opacity-30 '>Created by</span> {shortId(tokenData.creator)}</p>
                    <div className='lg:w-full w-[13.8px]'>
                      <Image src={linkico} alt='' className='anim'/>
                    </div>
                  </div>
                  <div className='flex items-center 2xl:gap-2 gap-1 '>
                    <p className='font-[700] tracking-wide 2xl:text-[16.5px] lg:text-[12px] text-[1.5vw] text-primary mb-1'><span className='opacity-30 text-white '>Contract :</span> {shortId(tokenData.token_address)}</p>
                    <div className='lg:w-full  w-[13.8px]'>
                      <Image src={linkico} alt='' className='anim'/>
                    </div>
                  </div>
                </div>
                
                
              </div>

              <div className='bg-primary float-end 2xl:w-[355px] lg:w-[150px] w-[19vw]  2xl:py-[15px] 2xl:ps-[50px] lg:py-[8px]  lg:px-[20px] py-[10px] px-[8px]  2xl:rounded-[0_40px] lg:rounded-[0_28px] rounded-[0_12px] text-[#1B1C1E] shadow-[5.29px_5.29px_26.45px_0px_#00000080]'>
                <p className='2xl:text-[32px] lg:text-[20px] text-[2.1vw] font-[700]'>MCap</p>
                <p className='font-[800] 2xl:text-[46px] lg:text-[24px] text-[3vw]'>$ 54,124</p>
              </div>
            </div>
            <p className='font-[600] lg:pe-[30px] pe-[7px] 2xl:h-[85px] lg:h-[160px] h-[12vh] mt-4 opacity-45 2xl:text-[19px] lg:text-[15px] text-[2.2vw] 2xl:leading-[23px] leading-tight overflow-y-scroll'>
            {tokenData.description}
            </p>
            <div className='flex justify-evenly mt-5 2xl:gap-[18px] gap-[1.3vw] lg:pe-[30px] pe-[7px]'>
             
              <div className='bg-[#363A40] 2xl:w-[340px] lg:w-[18vw] w-[28.7vw] 2xl:rounded-[28.5px] lg:rounded-[20px] rounded-[8.2px] 2xl:p-[25px] lg:p-[15px] p-[6px] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] 2xl:text-[30px] lg:text-[18px] text-[3vw]'>Price</p>
                <p className='text-primary font-[800] 2xl:text-[25px] lg:text-[12px] text-[2vw]'>0.000000000025 ETH</p>
              </div>
              <div className='bg-[#363A40] 2xl:w-[340px] lg:w-[18vw] w-[28.7vw] 2xl:rounded-[28.5px] lg:rounded-[20px] rounded-[8.2px] 2xl:p-[25px] lg:p-[15px] p-[6px] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] 2xl:text-[30px] lg:text-[18px] text-[3vw]'>24H volume</p>
                <p className='text-primary font-[800] 2xl:text-[25px] lg:text-[12px] text-[2vw]'>$9,999,999.000</p>
              </div>
             
              <div className='bg-[#363A40] 2xl:w-[340px] lg:w-[18vw] w-[28.7vw] 2xl:rounded-[28.5px] lg:rounded-[20px] rounded-[8.2px] 2xl:p-[25px] lg:p-[15px] p-[6px] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] 2xl:text-[30px] lg:text-[18px] text-[3vw]'>Token created</p>
                <p className='text-primary font-[800]  2xl:text-[25px] lg:text-[12px] text-[2vw]'>{formatTime(tokenData.created_at)} <span className='text-white'>ago</span></p>
              </div>
            </div>

          </div>

         
          <div className='bg-[#1B1C1E]  2xl:h-[620px] lg:h-[455px] h-[35vh] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] 2xl:rounded-[40px] lg:rounded-[20px] rounded-[12px]'>
          <div className='bg-primary 2xl:w-[349px] lg:w-[240px] w-[34vw] text-center 2xl:py-[15px] py-[8px] 2xl:rounded-[40px_0px] rounded-[20px_0] text-[#1B1C1E] shadow-[6.51px_6.51px_15.63px_0px_#0000005C]'>
                <p className='2xl:text-[25px] lg:text-[20px] text-[2.9vw] font-[800]'>GRAPHICAL VIEW</p>
                
              </div>
          </div>

          <div className='lg:hidden block bg-[#1B1C1E] text-white lg:w-[460px] w-full overflow-x-hidden relative lg:p-[32px] p-[23px] shadow-[12.7px_12.7px_44.02px_0px_#0000004F]lg:rounded-[40px] rounded-[16.8px]'>
            <DetailedTrade/>
           </div>

          <div className='bg-[#1B1C1E] shadow-[12.7px_12.7px_44.02px_0px_#0000004F]  2xl:pb-8 pb-[10px] 2xl:rounded-[40px] lg:rounded-[20px] rounded-[12px] overflow-hidden'>

            <div className='flex justify-between items-start '>
              <p className='text-[#000000] 2xl:leading-[58px] lg:leading-[40px] font-montserrat font-[900] 2xl:text-[36px] lg:text-[20px] text-[2.5vw] uppercase lg:ps-[20px] 2xl:pe-[40px] lg:pe-[20px]   lg:pt-[5px] mt-5 bg-primary lg:rounded-[0_15px_15px_0] rounded-[0_21px_21px_0]'>Share  &  Earn  with  PumpZilla</p>
              <p className='bg-[#303236] shadow-[6.35px_6.35px_39.15px_0px_#00000040] 2xl:w-[350px] lg:w-[220px] w-[36.5vw] anim text-center mt-[16px] me-[16px] text-primary font-[700] 2xl:text-[24px] lg:text-[14px] text-[2.5vw] 2xl:py-[13px] lg:py-[5px] 2x:px-[18px] px-[10px] 2xl:rounded-[18px] lg:rounded-[10px] rounded-[5.1px]'>REFERRAL DASHBOARD</p>
            </div>
            <div className='2xl:px-[30px] lg:px-[15px] px-[9px] 2xl:mt-[50px] mt-[21px] flex 2xl:gap-[31px] gap-[6px] items-center justify-center'>
              <div className=' font-[400] anim bg-[#37393D] lg:py-[10px] 2xl:px-[35px] lg:px-[15px] px-[7px] py-[2px] 2xl:rounded-[22px] lg:rounded-[10px] rounded-[6px] flex items-center lg:gap-2 gap-1' onClick={handleCopy}>
                <p className='font-bebasneue 2xl:text-[42px] lg:text-[20px] text-[2.9vw] '> YOUR UNIQUE LINK : </p>   
                <p className='text-primary font-[700] 2xl:text-[33px] lg:text-[18px] text-[2.9vw]'>{copiedText}</p> 
              </div>
              <div  className='bg-primary anim  2xl:w-[78px] 2xl:h-[78px] lg:w-[50px] lg:h-[50px] w-[5vw] h-[5vw] lg:p-[16px] p-[5px] 2xl:rounded-[22px] lg:rounded-[10px] rounded-[6px]'>

                <Image src={xblack} alt='' />
              </div>
            </div>
            <p className='gradientText font-[500] 2xl:text-[52px] lg:text-[25px] text-[4vw] round lg:mt-8 mt-[10px] text-end lg:pe-10 pe-[15px]'>Earn  weekly  PumpZilla  rewards  through  referrals !</p>

          </div>

    </div>
  )
}

export default DetailedLefView

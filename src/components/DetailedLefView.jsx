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
          
          <div className='bg-[#1B1C1E]  p-[30px]  flex flex-col justify-between shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[40px]'>
            <div className='flex justify-between items-start'>
              <div className='flex items-center gap-[33px]'>
                <div className='rounded-[21.16px] relative overflow-hidden'>
                  <Image src={imgUrl(tokenData.image) || ""} unoptimized={true} width={216} height={210} alt="" />
                  <div className='bg-[#0A0A0B] flex justify-around w-full py-[8px] absolute bottom-0 z-20'>
                  <Link href={tokenData.website || ""}>
                    <Image src = {wlogo} alt=''/>
                  </Link>
                  <Link href={tokenData.twitter || ""}>
                    <Image src = {xlogo} alt=''/>
                  </Link>
                  <Link href={tokenData.telegram || ""}>
                    <Image src = {tlogo} alt=''/>
                  </Link>

                  </div>
                </div>
                <div>
                  <div className='flex gap-2 items-center'>
                    <h1 className='text-[37px]  font-[400] font-bebasneue'>{tokenData.name} </h1>
                    <p className='text-[26px] font-montserrat font-[900] text-primary'>($ {tokenData.symbol})</p>
                  </div>
                  <div className='flex items-center gap-2 mt-4'>
                    <p className='font-[700] tracking-wide text-[16.5px] mb-1'><span className='opacity-30 '>Created by</span> {shortId(tokenData.creator)}</p>
                    <Image src={linkico} alt='' className='anim'/>
                  </div>
                  <div className='flex items-center gap-2'>
                    <p className='font-[700] tracking-wide text-[16.5px] text-primary mb-1'><span className='opacity-30 text-white '>Contract :</span> {tokenData.token_address}</p>
                    <Image src={linkico} alt='' className='anim'/>
                  </div>
                </div>
                
                
              </div>

              <div className='bg-primary w-[355px] py-[15px] ps-[50px] rounded-[0_40px] text-[#1B1C1E] shadow-[5.29px_5.29px_26.45px_0px_#00000080]'>
                <p className='text-[32px] font-[700]'>MCap</p>
                <p className='font-[800] text-[46px]'>$ 54,124</p>
              </div>
            </div>
            <p className='font-[600] h-[85px] mt-4 opacity-45 text-[19px] leading-[23px] overflow-y-scroll'>
            {tokenData.description}
            </p>
            <div className='flex justify-evenly mt-5 gap-[18px]'>
             
              <div className='bg-[#363A40] w-[340px] rounded-[28.5px] p-[25px] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] text-[30px]'>Price</p>
                <p className='text-primary font-[800] text-[25px]'>0.000000000025 ETH</p>
              </div>
              <div className='bg-[#363A40] w-[340px] rounded-[28.5px] p-[25px] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] text-[30px]'>24H volume</p>
                <p className='text-primary font-[800] text-[25px]'>$9,999,999.000</p>
              </div>
              <div className='bg-[#363A40] w-[340px] rounded-[28.5px] p-[25px] shadow-[7.41px_7.41px_26.45px_0px_#00000040]'>
                <p className='capitalize font-bebasneue font-[400] text-[30px]'>Token created</p>
                <p className='text-primary font-[800] text-[25px]'>{formatTime(tokenData.created_at)} <span className='text-white'>ago</span></p>
              </div>
            </div>

          </div>

         
          <div className='bg-[#1B1C1E]  h-[620px] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] rounded-[40px]'>
          <div className='bg-primary w-[349px] text-center py-[15px] rounded-[40px_0px] text-[#1B1C1E] shadow-[6.51px_6.51px_15.63px_0px_#0000005C]'>
                <p className='text-[25px] font-[800]'>GRAPHICAL VIEW</p>
                
              </div>
          </div>

          <div className='bg-[#1B1C1E] shadow-[12.7px_12.7px_44.02px_0px_#0000004F]  pb-8 rounded-[40px] overflow-hidden'>

            <div className='flex justify-between items-start '>
              <p className='text-[#000000] leading-[58px] font-montserrat font-[900] text-[36px] uppercase ps-[20px] pe-[40px]   pt-[5px] mt-5 bg-primary rounded-[0_21px_21px_0]'>Share  &  Earn  with  PumpZilla</p>
              <p className='bg-[#303236] shadow-[6.35px_6.35px_39.15px_0px_#00000040] w-[350px] anim text-center mt-[16px] me-[16px] text-primary font-[700] text-[24px] py-[13px] px-[18px] rounded-[18px]'>REFERRAL DASHBOARD</p>
            </div>
            <div className='px-[30px] mt-[50px] flex gap-[31px] items-center justify-center'>
              <div className=' font-[400] anim bg-[#37393D] py-[10px] px-[35px] rounded-[22px] flex items-center gap-2' onClick={handleCopy}>
                <p className='font-bebasneue text-[42px] '> YOUR UNIQUE LINK : </p>   
                <p className='text-primary font-[700] text-[33px]'>{copiedText}</p> 
              </div>
              <div  className='bg-primary anim  w-[78px] h-[78px] p-[16px] rounded-[22px]'>

                <Image src={xblack} alt='' />
              </div>
            </div>
            <p className='gradientText font-[500] text-[52px] round mt-8 text-end pe-10'>Earn  weekly  PumpZilla  rewards  through  referrals !</p>

          </div>

    </div>
  )
}

export default DetailedLefView

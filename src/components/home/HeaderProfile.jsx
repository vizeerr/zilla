
"use client"
import React, { useCallback, useEffect, useState } from 'react'
import pif from "@/assets/pif.png"
import pifico from "@/assets/pifico.jpg"
import xlogo from "@/assets/xlogo.png"
import tlogo from "@/assets/tlogo.png"
import wlogo from "@/assets/wlogo.png"
import clock from "@/assets/clock2.png"
import Image from "next/image"
import Link from 'next/link'
import { getToken } from '@/helpers/api'
import { formatTime, shortenString } from '@/helpers/helpers'
import { useRouter } from 'next/navigation'

const HeaderProfile = () => {
    const [tokenData,setTokenData] = useState({});
    
      const router = useRouter();
        
      const fetchToken = useCallback(async () => {
          const data = await getToken("0xdAC17F958D2ee523a2206206994597C13D831ec0");
        
          
          setTokenData(data);
        }, []);

          useEffect(()=>{
            fetchToken();
          },[fetchToken])
        
        const redirect = () =>{
            router.push(`/details/${tokenData.token_address}`)
        }

  return (
    <div role='button' onClick={redirect} className="2xl:w-[24rem] lg:w-[18rem] md:w-[15rem] w-[72.5vw] lg:rounded-[1rem] md:rounded-[0.8rem] rounded-[4.4vw] relative bg-[#2E2F37] shadow-[7.41px_8.65px_11.79px_0px_#00000040] mx-auto  ">
            <div className="md:w-14 w-[10.2vw] md:h-14 h-[10.2vw] absolute md:top-[-1.5rem] top-[-5vw] md:end-[-1.5rem] end-[-5vw]">
                <Image src={pif} className="w-full" alt=""/>
            </div>
            <div>
                <div className="flex items-center  md:gap-[0.5vw] gap-[1vw] 2xl:px-2.5 md:px-1.5 px-[2vw] 2xl:pt-2.5 md:pt-1 pt-[1.5vw]">
                    <div className="md:py-1 py-[0.6vw] md:px-1.5 px-[1.6vw] flex md:gap-1 gap-[1vw] items-center bg-[#1B1B21] rounded-full">
                        <div className='lg:w-3.5 md:w-3 w-[3vw]'>
                            <Image src={clock} className='w-full' alt=''/>
                        </div>
                        <p className="font-montserrat font-[800] 2xl:text-[0.5rem] lg:text-[0.45rem] md:text-[0.38rem] mt-0.5  text-[1.4vw] text-white">{formatTime(tokenData.created_at)} ago</p>
                    </div>
                    <Link href ={"https://x.com/"}  target="_blank" rel="noopener noreferrer"  className="md:w-5 anim  w-[5vw] md:h-5 h-[5vw] bg-[#1B1B21] rounded-full md:p-[4px] p-[4px]">
                        <Image src={wlogo} className="w-full" alt=""/>
                    </Link>
                    <Link href ={"https://x.com/"}  target="_blank" rel="noopener noreferrer"  className="md:w-5 anim w-[5vw] md:h-5 h-[5vw] bg-[#1B1B21] rounded-full md:p-[5px] p-[5px]">
                        <Image src={xlogo} className="w-full" alt=""/>
                    </Link>
                    <Link href ={"https://x.com/"}  target="_blank" rel="noopener noreferrer"  className="md:w-5 anim w-[5vw] md:h-5 h-[5vw] bg-[#1B1B21] rounded-full md:p-[5px] p-[5px]">
                        <Image src={tlogo} className="w-full" alt=""/>
                    </Link>
                </div>
                <div className="md:mt-2.5 mt-[1.8vw] flex items-center 2xl:gap-3.5 lg:gap-2.5 md:gap-2 gap-[3vw] 2xl:px-4 md:px-2.5 px-[3.3vw]">
                    <div className="2xl:w-32 lg:w-24 md:w-20 w-[27vw] 2xl:h-24 lg:h-[4.3rem] md:h-14 h-[18vw] 2xl:rounded-[0.6rem] lg:rounded-[0.5rem] md:rounded-[0.4rem] rounded-[2.1vw] overflow-hidden">
                        <Image src={pifico} className="w-full" alt=""/>
                    </div>
                    <div className='w-full'>
                        <p className="font-bebasneue font-[400] 2xl:text-base lg:text-xs md:text-xs text-[2.8vw] text-nowrap text-white leading-none">{tokenData.name} <span className="text-primary font-montserrat font-[800] 2xl:text-[0.9rem] lg:text-[0.7rem] md:text-[0.6rem] text-[2.4vw]">({tokenData.symbol})</span></p>
                        <p className="font-[800] font-montserrat text-[#6D6D73] 2xl:text-[0.6rem] md:text-[0.5rem] text-[1.9vw] leading-none lg:mt-[0.3rem] md:mt-[0.2rem] mt-[0.8vw]">Created by {shortenString(tokenData.creator || "",4)}</p>
                        <div className="bg-[#1B1B21] shadow-[5.2px_5.2px_11.96px_0px_#000000C9] lg:py-2 md:py-1.5 py-[0.8vw] w-[90%] text-center md:rounded-[0.6rem] rounded-[2vw] lg:mt-2.5 md:mt-2 mt-[1.6vw]">
                            <p className="text-primary 2xl:text-xs font-montserrat lg:text-[0.6rem] md:text-[0.5rem] text-[2.2vw] font-[800] md:mt-0 leading-none mt-[0.45vw]">MARKET CAP : 19.99K</p>
                        </div>
                    </div>                    
                </div>
            </div>
            <div className="bg-primary py-[0.15vw] text-center md:mt-2.5 mt-[2vw] lg:rounded-b-[1rem] md:rounded-b-[0.8rem] rounded-b-[4.4vw]">
                <p className="font-montserrat font-[900] 2xl:text-base lg:text-sm md:text-xs  text-[3.1vw] text-[#262626]">KING OF THE MONSTERS</p>
            </div>
        </div>
  )
}

export default HeaderProfile
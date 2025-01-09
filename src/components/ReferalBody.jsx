"use client"
import React, { useEffect, useState } from 'react'
import info from '@/assets/info.svg'
import Image from 'next/image';
const ReferalBody = () => {
  const [targetDay, setTargetDay] = useState('2025-01-15'); // Set default target date
  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date(targetDay);
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDay]);

  const handleDateChange = (e) => {
    setTargetDay(e.target.value);
  };
  return (
    <div className='flex justify-center gap-[3.9vw] mt-[1vw]'>
      <div className='bg-[#1B1C1E] rounded-[2.5vw] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] w-[39vw] p-[1.4vw]'>
        <div className='bg-[#111111] shadow-[15.76px_15.76px_54.63px_0px_#0000004F] rounded-[1.7vw] p-[1.5vw]'>
          <div className='w-[0.8vw] h-[0.8vw] float-end'>
            <Image src={info} className='w-full'/>
          </div>
          <div className='flex gap-[2vw] justify-center items-end my-[1vw]'>
            <div>
              <p className='text-[#494949] font-bebasneue text-[1.7vw]'>DAYS</p>
              <p className='text-white font-montserrat text-[2.7vw] font-[800]'>{timeLeft.days}</p>
            </div>
            <p className='text-white font-montserrat text-[2.7vw] font-[500]'>:</p>
            <div>
              <p className='text-[#494949] font-bebasneue text-[1.7vw]'>HRS</p>
              <p className='text-white font-montserrat text-[2.7vw] font-[800]'>{timeLeft.hours}</p>
            </div>
            <p className='text-white font-montserrat text-[2.7vw] font-[500]'>:</p>
            <div>
              <p className='text-[#494949] font-bebasneue text-[1.7vw]'>MINS</p>
              <p className='text-white font-montserrat text-[2.7vw] font-[800]'>{timeLeft.minutes}</p>
            </div>

          </div>

        </div>
        <div className='flex items-center gap-[1vw] w-full mt-[1.4vw]'>
          <div className='bg-[#111111] shadow-[13.13px_13.13px_45.5px_0px_#0000004F] w-full  rounded-[0.9vw] py-[0.7vw] px-[1.2vw] flex justify-between items-center'>
            <div className='flex items-start gap-[0.4vw]'>
              <p className='font-bebasneue text-primary text-[1.4vw] '>claimable zilla   </p>
              <div className='w-[0.65vw] h-[0.65vw] float-end'>
                <Image src={info} className='w-full'/>
              </div>
            </div>
            <p className='text-[1.5vw] text-white font-montserrat font-[800]'>123,456,789</p>
          </div>
          <p className='round text-[#262626] bg-primary text-[2vw] px-[1.9vw] rounded-full leading-none pt-[0.7vw] pb-[0.2vw]'>CLAIM</p>
        </div>
      </div>
      <div className='bg-[#1B1C1E] rounded-[2.5vw] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] w-[39vw] p-[1.4vw] flex flex-col gap-[1vw]'>
        <div className='bg-[#111111] shadow-[23.71px_23.71px_82.18px_0px_#0000004F] rounded-[1vw] w-full py-[1.3vw] px-[3vw] flex justify-between items-center'>
          <div className='flex items-start gap-[0.4vw]'>
              <p className='font-bebasneue text-primary text-[1.4vw] '>claimable zilla   </p>
              <div className='w-[0.65vw] h-[0.65vw] float-end'>
                <Image src={info} className='w-full'/>
              </div>
          </div>
          <p className='text-[1.5vw] text-white font-montserrat font-[800]'>123,456,789</p>
        </div>
        <div className='bg-[#111111] shadow-[23.71px_23.71px_82.18px_0px_#0000004F] rounded-[1vw] w-full py-[1.3vw] px-[3vw] flex justify-between items-center'>
          <div className='flex items-start gap-[0.4vw]'>
              <p className='font-bebasneue text-primary text-[1.4vw] '>claimable zilla   </p>
              <div className='w-[0.65vw] h-[0.65vw] float-end'>
                <Image src={info} className='w-full'/>
              </div>
          </div>
          <p className='text-[1.5vw] text-white font-montserrat font-[800]'>123,456,789</p>
        </div>
        <div className='bg-[#111111] shadow-[23.71px_23.71px_82.18px_0px_#0000004F] rounded-[1vw] w-full py-[1.3vw] px-[3vw] flex justify-between items-center'>
          <div className='flex items-start gap-[0.4vw]'>
              <p className='font-bebasneue text-primary text-[1.4vw] '>claimable zilla   </p>
              <div className='w-[0.65vw] h-[0.65vw] float-end'>
                <Image src={info} className='w-full'/>
              </div>
          </div>
          <p className='text-[1.5vw] text-white font-montserrat font-[800]'>123,456,789</p>
        </div>
      </div>
    </div>
  )
}

export default ReferalBody

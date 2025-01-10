"use client"
import React, { useEffect, useState } from 'react'
import info from '@/assets/info.svg'
import Image from 'next/image';
import { motion } from 'framer-motion';

const ReferalBody = () => {
  const [targetDay, setTargetDay] = useState('2025-01-15'); // Set default target date
  const [timeLeft, setTimeLeft] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  
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
    <div className='flex justify-center gap-[3.9vw] mt-[1vw] sm:flex-row flex-col'>
      
      <div className='bg-[#1B1C1E] sm:rounded-[2.5vw] rounded-[5vw] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] sm:w-[39vw] w-[95%] sm:mx-none mx-auto sm:p-[1.4vw] p-[4.2vw]'>
        <motion.div 
          key="1"
          initial={{ rotateX: 0 }}
          animate={hoveredCard === 1 ? { rotateX: 180 } : { rotateX: 0 }}
          transition={{ duration: 0.6 }}
          className='bg-[#111111] card shadow-[15.76px_15.76px_54.63px_0px_#0000004F] sm:rounded-[1.7vw] rounded-[4.1vw] sm:p-[1.4vw] p-[4vw]' onMouseLeave={() => setHoveredCard(null)}>
          <div className='card-front' >
            <div className='sm:w-[0.8vw] sm:h-[0.8vw] w-[2.5vw] h-[2.5vw] float-end' onMouseOver={() => setHoveredCard(1)}>
              <Image src={info} className='w-full'/>
            </div>
            <div className='flex sm:gap-[2vw] gap-[4vw] justify-center items-end my-[1vw]'>
              <div>
                <p className='text-[#494949] font-bebasneue sm:text-[1.7vw] text-[4.1vw]'>DAYS</p>
                <p className='text-white font-montserrat sm:text-[2.7vw] text-[6.3vw] font-[800]'>{timeLeft.days==null?"00":timeLeft.days}</p>
              </div>
              <p className='text-white font-montserrat sm:text-[2.7vw] text-[6.3vw] font-[500]'>:</p>
              <div>
                <p className='text-[#494949] font-bebasneue sm:text-[1.7vw] text-[4.1vw]'>HRS</p>
                <p className='text-white font-montserrat sm:text-[2.7vw] text-[6.3vw] font-[800]'>{timeLeft.hours==null?"00":timeLeft.hours}</p>
              </div>
              <p className='text-white font-montserrat sm:text-[2.7vw] text-[6.3vw] font-[500]'>:</p>
              <div>
                <p className='text-[#494949] font-bebasneue sm:text-[1.7vw] text-[4.1vw]'>MINS</p>
                <p className='text-white font-montserrat sm:text-[2.7vw] text-[6.3vw] font-[800]'>{timeLeft.minutes==null?"00":timeLeft.minutes}</p>
              </div>

            </div>
          </div>
          <div className="card-back w-[90%] mx-auto h-full" >
            <p className='font-montserrat text-white font-[800] text-center sm:text-[1.1vw] text-[2.5vw]'>The countdown until your referral rewards are calculated and reset for the next cycle.</p>
          </div>
        </motion.div>
        <div className='flex items-center sm:gap-[1vw] gap-[2.5vw] w-full sm:mt-[1.4vw] mt-[2.6vw]'>
          <div className='bg-[#111111] shadow-[13.13px_13.13px_45.5px_0px_#0000004F] w-full  sm:rounded-[0.9vw] rounded-[2.6vw] sm:py-[0.8vw] py-[1.9vw] sm:px-[1.8vw] px-[4.8vw] flex justify-between items-center'>
            <div className='flex items-start gap-[0.4vw]'>
              <p className='font-bebasneue text-primary sm:sm:text-[1.4vw] text-[4.3vw] text-[3.3vw] '>claimable zilla   </p>
              {/* <div className='sm:w-[0.65vw] sm:h-[0.65vw] w-[1.9vw] h-[1.9vw] float-end'>
                <Image src={info} className='w-full'/>
              </div> */}
            </div>
            <p className='sm:sm:text-[1.4vw] text-[4.3vw] text-[3.3vw] text-white font-montserrat font-[800]'>123,456,789</p>
          </div>
          <p className='round  anim text-[#262626] bg-primary sm:text-[2vw] text-[4.9vw] sm:px-[1.9vw] px-[5vw] rounded-full leading-none sm:pt-[0.7vw] pt-[1.5vw] pb-[0.2vw]'>CLAIM</p>
        </div>
      </div>

      <div className='bg-[#1B1C1E] sm:rounded-[2.5vw] rounded-[5vw] shadow-[16.21px_16.21px_56.21px_0px_#0000004F] sm:w-[39vw] w-[95%] sm:mx-none mx-auto sm:p-[1.4vw] p-[4.2vw] flex flex-col sm:gap-[1vw] gap-[3vw]'>
        <div className='bg-[#111111] shadow-[23.71px_23.71px_82.18px_0px_#0000004F] sm:rounded-[1vw]  rounded-[3vw] w-full sm:py-[1.3vw] py-[2.6vw] sm:px-[3vw] px-[7.2vw] flex justify-between items-center'>
          <div className='flex items-start gap-[0.4vw]'>
              <p className='font-bebasneue text-primary sm:text-[1.4vw] text-[4.3vw] '>referral uses </p>
              {/* <div className='sm:w-[0.65vw] sm:h-[0.65vw] w-[1.9vw] h-[1.9vw] float-end'>
                <Image src={info} className='w-full'/>
              </div> */}
          </div>
          <p className='sm:text-[1.5vw] text-[5vw] text-white font-montserrat font-[800]'>123,456,789</p>
        </div>
        <motion.div 
        key="2"
        initial={{ rotateX: 0 }}
        animate={hoveredCard === 2 ? { rotateX: 180 } : { rotateX: 0 }}
        transition={{ duration: 0.6 }}
        className='bg-[#111111] card shadow-[23.71px_23.71px_82.18px_0px_#0000004F] sm:rounded-[1vw]  rounded-[3vw] w-full sm:py-[1.3vw] py-[2.6vw]  ' onMouseLeave={()=> setHoveredCard(null)}>
          <div className="card-front flex justify-between items-center sm:px-[3vw] px-[7.2vw]">
            <div className='flex items-start sm:gap-[0.6vw] gap-[1.5vw]'>
                <p className='font-bebasneue text-primary sm:text-[1.4vw] text-[4.3vw] '>ETH GENERATED   </p>
                <div className='sm:w-[0.65vw] sm:h-[0.65vw] w-[1.9vw] h-[1.9vw] float-end' onMouseOver={()=>{setHoveredCard(2)}}>
                  <Image src={info} className='w-full'/>
                </div>
            </div>
            <p className='sm:text-[1.5vw] text-[5vw] text-white font-montserrat font-[800]'>123,456,789</p>
          </div>
          <div className="card-back w-full">
            <p className='font-montserrat text-white font-[800] text-center sm:text-[0.8vw] text-[1.8vw] w-[80%] mx-auto' >This is the total ETH spent by people using your referral links. Keep sharing and watch it grow!</p>
          </div>
        </motion.div>
        <motion.div
        key="3"
        initial={{ rotateX: 0 }}
        animate={hoveredCard === 3 ? { rotateX: 180 } : { rotateX: 0 }}
        transition={{ duration: 0.6 }}
        className='card bg-[#111111] shadow-[23.71px_23.71px_82.18px_0px_#0000004F] sm:rounded-[1vw]  rounded-[3vw] w-full sm:py-[1.3vw] py-[2.6vw]  ' onMouseLeave={()=> setHoveredCard(null)}>
          <div className="card-front sm:px-[3vw] px-[7.2vw] flex justify-between items-center">
            <div className='flex items-start sm:gap-[0.6vw] gap-[1.5vw]'>
                <p className='font-bebasneue text-primary sm:text-[1.4vw] text-[4.3vw] '>ETH SPENT   </p>
                <div className='sm:w-[0.65vw] sm:h-[0.65vw] w-[1.9vw] h-[1.9vw] float-end' onMouseOver={()=>{setHoveredCard(3)}}>
                  <Image src={info} className='w-full'/>
                </div>
           </div>
            <p className='sm:text-[1.5vw] text-[5vw] text-white font-montserrat font-[800]'>123,456,789</p>
          </div>
          <div className="card-back w-full">
            <p className='font-montserrat text-white font-[800] text-center sm:text-[0.8vw] text-[1.8vw] w-[100%]' >This is how much ETH youve spent using other users referral links!</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ReferalBody

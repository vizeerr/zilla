"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import eth from "@/assets/eth.png"
import info from "@/assets/info.svg"
import pizz from "@/assets/zillaswap.png"
import pizz2 from "@/assets/pizz.png"
import setico from "@/assets/sett.png"
import arrow from "@/assets/arrowdown.png"
import arrowdown from "@/assets/arrow2.png"
import { motion } from 'framer-motion';
import SettingModel from '../SettingModel'
import ZillaBottomView from './ZillaBottomView'

const ZillaRightView = () => {
    const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card
    const [openSet,setOpenSet] = useState(false)
    const [swap,setSwap] = useState(false);
    const [swapCoin,setSwapCoin] = useState({
      name:"ETH",
      img:eth
    });
    const [exchangeCoin,setExchangeCoin] = useState({
      name:"ZILLA",
      img:pizz
    });


    const [minutes, setMinutes] = useState(15);
    const [seconds, setSeconds] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      // Timer logic - counts down every second
      const interval = setInterval(() => {
        if (seconds === 0 && minutes === 0) {
          clearInterval(interval); // Timer ends when 00:00 is reached
        } else {
          if (seconds === 0) {
            setMinutes(prevMinutes => prevMinutes - 1);
            setSeconds(59);
          } else {
            setSeconds(prevSeconds => prevSeconds - 1);
          }
        }
      }, 1000);
  
      return () => clearInterval(interval); // Cleanup on component unmount
    }, [seconds, minutes]);
  
    // Update progress bar based on remaining time
    useEffect(() => {
      const totalTime = 15 * 60; // 15 minutes in seconds
      const elapsedTime = (15 * 60) - (minutes * 60 + seconds);
      const newProgress = 100- ((elapsedTime / totalTime) * 100);
      setProgress(newProgress);
    }, [minutes, seconds]);

    const handleSwap = () =>{
        setSwap(!swap);
        setExchangeCoin(swapCoin)
        setSwapCoin(exchangeCoin)
    }

    const handleMouseEnter = (cardId) => setHoveredCard(cardId);
    const handleMouseLeave = () => setHoveredCard(null);
    

  return (
    <div className='flex xl:flex-col  md:flex-row flex-col 2xl:gap-14 xl:gap-8 md:gap-6 gap-[4.3vw] 2xl:w-[35rem] xl:w-[25rem] w-full'>

        <div className='bg-[#1B1C1E]  w-full shadow-[16.21px_16.21px_56.21px_0px_#0000004F] 2xl:rounded-[2.8rem] md:rounded-[2rem] rounded-[3.8vw] 2xl:p-7 md:p-5 p-[2.7vw]'>
          <div className='w-full  flex justify-end 2xl:mb-6 md:mb-3 mb-3'>
            <div>
              <div className='2xl:w-6 md:w-4 w-[5vw]'>
                <Image  onClick={()=>{setOpenSet(true)}} src={setico} alt=''/>
              </div>
            </div>
            <SettingModel openSet={openSet} setOpenSet = {setOpenSet} />

          </div>
          <div className='bg-[#111111]  relative 2xl:rounded-[1.8rem] md:rounded-[1.2rem] rounded-[2.5vw]  2xl:py-5 md:py-3 py-[2.8vw] 2xl:px-6 md:px-4 px-[4vw] shadow-[12.7px_12.7px_14.6px_0px_#00000040]'>
              <p className='text-primary font-montserrat font-[800] 2xl:text-2xl md:text-lg text-[3.3vw]'>Sell</p>
              <div className='flex justify-between items-center 2xl:my-2 md:my-1 my-0 gap-6 '>
                <input type="number" name="" id="" className='bg-transparent font-bebasneue 2xl:text-7xl md:text-5xl text-[7vw] w-full border-none outline-none'placeholder='0' />
                {/* <p className='font-bebasneue 2xl:text-7xl md:text-5xl text-[7vw] '>0</p> */}
                <div className='bg-[#252729] w-auto 2xl:px-3 md:px-2 px-[1.3vw] 2xl:py-1.5 md:py-1 py-[0.6vw] flex 2xl:gap-2 md:gap-1.5 gap-[0.8vw] items-center rounded-full'>
                  <div className='2xl:w-7 md:w-4 w-[3.2vw]'>  
                    <Image src={swapCoin.img} className='w-full' alt=''/>
                  </div>
                  <p className='2xl:text-lg md:text-xs text-[2.4vw] font-[800]'>{swapCoin.name}</p>
                  {
                    !swap&&
                    <div className='2xl:w-5 md:w-3 w-[2.5vw]'>
                      <Image src={arrowdown} alt=''/>
                    </div>
                  }
                </div>
              </div>
              <div className='flex justify-between items-center '>
                <p className='font-bebasneue text-[#4E4F54] 2xl:text-lg md:text-base text-[2.9vw]'>$0</p>
                <div className='flex gap-2'>
                  <p className='font-bebasneue text-[#4E4F54] 2xl:text-base md:text-sm  text-[2.4vw]'>0 {swapCoin.name}</p>
                  <div className='bg-[#3F3F3F] 2xl:px-2.5 md:px-1.5 px-1.5 rounded-full flex justify-center items-center'>
                    <p className='font-montserrat text-[#FFFFFF47] font-[800] leading-none 2xl:text-xs md:text-[0.5rem] text-[1.6vw]'>MAX</p>
                  </div>
                </div>
              </div>

            <div className='2xl:bottom-[-3rem] md:bottom-[-2.3rem] bottom-[-5.5vw] absolute flex justify-center w-[90%]'>
              <div className='bg-[#1B1C1E] shadow-lg 2xl:w-[4.8rem] md:w-[3.5rem] 2xl:h-[4.8rem] md:h-[3.5rem] rounded-full 2xl:p-2.5 md:p-1.5 p-1 w-[9vw] h-[9vw]'>
              <div onClick={handleSwap} className='bg-primary w-full h-full md:p-4 p-[2.5vw] rounded-full flex justify-center items-center'>
                <Image src={arrow} className='w-full' alt=''/>
              </div>
              </div>
            </div>
          
          </div>

          <div className='bg-[#111111]  2xl:rounded-[1.8rem] md:rounded-[1.2rem] rounded-[2.5vw]  2xl:py-5 md:py-3 py-[2.8vw] 2xl:px-6 md:px-4 px-[4vw] shadow-[12.7px_12.7px_14.6px_0px_#00000040] 2xl:mt-6 md:mt-4 mt-3'>
              <p className='text-primary font-montserrat font-[800]   2xl:text-2xl md:text-lg text-[3.3vw]'>Buy</p>
              <div className='flex justify-between items-center 2xl:my-2 md:my-1 my-0'>
              <input type="number" name="" id="" className='bg-transparent font-bebasneue 2xl:text-7xl md:text-5xl text-[7vw] w-full border-none outline-none'placeholder='0' />{
                /* <p className='font-bebasneue 2xl:text-7xl md:text-5xl text-[7vw] '>0</p> */}
                <div className='bg-[#252729] w-auto 2xl:px-3 md:px-2 px-[1.3vw] 2xl:py-1.5 md:py-1 py-[0.6vw] flex 2xl:gap-2 md:gap-1.5 gap-[0.8vw] items-center rounded-full'>
                  <div className='2xl:w-7 md:w-4 w-[3.2vw]'>  
                    <Image src={exchangeCoin.img} className='w-full' alt=''/>
                  </div>
                  <p className='2xl:text-lg md:text-xs text-[2.4vw] font-[800]'>{exchangeCoin.name}</p>
                  {
                    swap&&
                    <div className='2xl:w-5 md:w-3 w-[2.5vw]'>
                      <Image src={arrowdown} alt=''/>
                    </div>
                  }
                </div>
              </div>
            <div className='flex justify-between items-center '>
                <p className='font-bebasneue text-[#4E4F54] 2xl:text-lg md:text-base text-[2.9vw]'>$0</p>
                <div className='flex gap-2'>
                  <p className={ `${swap?"":"opacity-0"} font-bebasneue text-[#4E4F54] 2xl:text-base md:text-sm  text-[2.4vw]`}> 00.000 {exchangeCoin.name}</p>
                  
                </div>
              </div>
          </div>

          <p className='2xl:w-36 md:w-24  w-[26vw] mx-auto md:mt-6 mt-[3.6vw] round anim bg-primary md:leading-none leading-[6vw] 2xl:pt-3 md:pt-1.5 pt-[2.5vw] text-[#262626] 2xl:text-5xl md:text-3xl  text-[10vw] text-center  2xl:rounded-[0.9rem] md:rounded-[0.7rem] rounded-[2.4vw] shadow-[5.21px_5.21px_7.76px_0px_#00000040]'>
            SWAP
          </p>

         
        </div>

        <div className='bg-[#1B1C1E] w-full overflow-hidden relative 2xl:p-7 md:p-5  p-[3vw] shadow-[12.7px_12.7px_44.02px_0px_#0000004F] md:rounded-[2rem]  rounded-[3.8vw]'>
            <p className='font-[900]  md:pb-5 pb-[3vw]  font-montserrat 2xl:text-3xl md:text-xl  text-[3.3vw] text-white'><span className='text-primary'>Tax</span> Mechanism </p>
            <div className='flex flex-col 2xl:gap-6 md:gap-3  gap-[1.4vw]'>
            {[
            {
              id: 1,
              title: "CURRENT SELL TAX RATE",
              value: "0%",
              description: "Tax starts at 0% and only activates if the price drops over 5%. The tax rate matches the drop percentage (up to 15%) and distributes collected tax to buyers during the stage.",
            },
            {
              id: 2,
              title: "BASE PRICE",
              value: "$0.0000150",
              description: "Token price before the latest drop, serving as a benchmark for recovery.",
            },
            
          ].map((card) => (
            <motion.div
              key={card.id}
              initial={{ rotateX: 0 }}
              animate={hoveredCard === card.id ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-[#111111] card w-full shadow-[16.21px_16.21px_56.21px_0px_#0000004F] 2xl:rounded-[1.3rem] md:rounded-[0.9rem] rounded-[2vw]'
            >
              <div className='card-front w-full 2xl:ps-8 md:ps-5 ps-[4vw] 2xl:pe-6 md:pe-3 pe-[2vw] 2xl:py-4 md:py-3 py-[1vw] md:pb-1.5 pb-[2.4vw] '>
                  <div className='2xl:w-3 md:w-2.5 2xl:h-3 md:h-2.5 w-[2.5vw] h-[2.5vw] float-end' onMouseOver={() => handleMouseEnter(card.id)}>

                  <Image
                    src={info}
                    alt=''
                    className='w-full'
                    />
                  </div>
                <div className='md:block flex justify-between w-full items-center md:pe-0 pe-[5vw]'>
                  <p className='font-bebasneue font-[400] 2xl:text-lg md:text-xs md:w-auto w-[16vw] text-[3.6vw] text-primary leading-tight'>{card.title}</p>
                  <p className='font-montserrat font-[800] 2xl:text-2xl md:text-lg text-[4.8vw] text-white'>{card.value}</p>
                </div>
                
              </div>
              <div onMouseLeave={handleMouseLeave} className='card-back 2xl:px-6 md:px-4 2xl:py-5 md:py-2 text-center px-[1.9vw]'>
                <p className='font-montserrat md:leading-tight font-[700] 2xl:text-sm md:text-[0.5rem] text-[1.8vw]'>{card.description}</p>
              </div>
            </motion.div>
          ))}

            <motion.div
              key={3}
              initial={{ rotateX: 0 }}
              animate={hoveredCard === 3 ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-[#111111] card w-full shadow-[16.21px_16.21px_56.21px_0px_#0000004F] 2xl:rounded-[1.3rem] md:rounded-[0.9rem] rounded-[2vw]'
            >
              <div className='card-front   2xl:ps-8 md:ps-5 ps-[4vw] 2xl:pe-6 md:pe-3 pe-[2vw] 2xl:py-4 md:py-3 py-[1vw] md:pb-1.5 pb-[2.4vw] '>
                <div className='2xl:w-3 md:w-2.5 2xl:h-3 md:h-2.5 w-[2.5vw] h-[2.5vw] float-end'>

                <Image
                  src={info}
                  alt=''
                  onMouseOver={() => handleMouseEnter(3)}
                  className='w-full'
                  />
                </div>
                <div className='flex justify-between items-center md:w-[95%] w-full'>

                  <div className='md:block flex justify-between  items-center w-full md:pe-0 pe-[5vw]'>
                    <p className='font-bebasneue font-[400] 2xl:text-lg md:text-xs md:w-auto w-[16vw] text-[3.6vw] text-primary leading-tight'>current Reward Pool</p>
                    
                    <div className='flex items-center '>

                    <p className='font-montserrat font-[800] 2xl:text-2xl md:text-lg text-[4.8vw] text-white'>0</p>
                    <div className='md:hidden block w-[5.5vw] ps-1.5'>
                        <Image src={pizz2} alt='' unoptimized={true} className='w-full'/>
                      </div>
                    </div>
                  </div>
                  <div className='2xl:md:w-12 md:w-8 w-[16px] md:block hidden'>
                    <Image src={pizz2} alt='' unoptimized={true} className='w-full'/>
                  </div>
                </div>
                
              
              </div>
              <div onMouseLeave={handleMouseLeave} className='card-back 2xl:px-6 md:px-4 2xl:py-5 md:py-2 text-center px-[1.9vw]'>
                <p className='font-montserrat md:leading-tight font-[700] 2xl:text-sm md:text-[0.5rem] text-[1.8vw]'>Shows total tokens collected from the sell tax during the current stage, distributed as rewards to buyers participating in this period.</p>
              </div>
            </motion.div>
            <motion.div
              key={4}
              initial={{ rotateX: 0 }}
              animate={hoveredCard === 4 ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-[#111111] card w-full  shadow-[16.21px_16.21px_56.21px_0px_#0000004F] 2xl:rounded-[1.3rem] md:rounded-[0.9rem] rounded-[2vw]'
            >
              <div className=' card-front w-full 2xl:ps-8 md:ps-5 ps-[4vw] 2xl:pe-6 md:pe-3 pe-[2vw] 2xl:py-4 md:py-3 py-[1vw] md:pb-1.5 pb-[2.4vw]'>
                <div className='2xl:w-3 md:w-2.5 2xl:h-3 md:h-2.5 w-[2.5vw] h-[2.5vw] float-end'>
                  <Image
                    src={info}
                    alt=''
                    onMouseOver={() => handleMouseEnter(4)}
                    className='w-full'
                    />
                </div>
                <div className="flex justify-center md:gap-16 gap-8 w-full items-center">
                  <p className="font-bebasneue font-[400] 2xl:text-lg md:text-xs md:w-auto w-28 text-[3.6vw] text-primary">TAX STAGE TIMER</p>
                  <div className="2xl:w-48 md:w-40 w-36 md:rounded-[1rem] rounded-[0.7rem] 2xl:py-4 md:py-3 py-3 2xl:px-4 md:px-3 px-3 bg-[#252729] flex flex-col justify-center items-center shadow-[8.59px_8.59px_29.78px_0px_#0000004F]">
                    <div className="flex items-center gap-3">
                      <div className='2xl:w-12 w-7 '>
                        <p className="font-bebasneue text-primary text-center 2xl:text-lg text-xs">MIN</p>
                        <p className="font-montserrat text-center font-[800] text-white 2xl:text-3xl text-xl">{String(minutes).padStart(2, '0')}</p>
                      </div>
                      <p className="font-montserrat text-white font-[500] 2xl:mt-[24px] mt-[13px] 2xl:text-3xl text-xl">:</p>
                      <div className='2xl:w-12 w-7 '>
                        <p className="font-bebasneue text-primary text-center 2xl:text-lg text-xs">SEC</p>
                        <p className="font-montserrat text-center text-white font-[800] 2xl:text-3xl text-xl">{String(seconds).padStart(2, '0')}</p>
                      </div>
                    </div>
                    <div className="w-full md:h-1.5 h-1 bg-[#FFFFFF24] rounded-full md:mt-4 mt-2.5">
                      <div className="w-[90%] h-full bg-primary rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div onMouseLeave={handleMouseLeave} className='card-back   2xl:px-6 md:px-4 2xl:py-5 md:py-2 text-center px-[1.9vw]'>
                <p className='font-montserrat md:leading-tight font-[700] 2xl:text-sm md:text-[0.5rem] text-[1.8vw]'>Displays remaining time in the active tax stage, ending if the price recovers to the base or after 30 minutes, whichever comes first.</p>
              </div>
            </motion.div>

            </div>
            
        </div>

        <div className='xl:block hidden'>
          <ZillaBottomView/>
        </div>
    
      
    </div>
  )
}

export default ZillaRightView

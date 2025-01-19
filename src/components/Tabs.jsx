"use client"
import { useState } from "react"
import searchIco from "@/assets/search.svg"
import sort from "@/assets/sort.svg"
import cross from "@/assets/cross.svg"
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image"
const Tabs = () => {
  const [open,setOpen] = useState(false);
  const [selected,setSelected] = useState(0);
  const [toogle,setToogle] = useState(false)
  const selectTab = (id) =>{
      setSelected(id)
  }

  const [btn,setBtn] = useState(0);
  const [btnS,setBtns] = useState(false);

  return (
    <div className='bg-[#30313AE0] mt-[1vw] flex md:flex-row md:gap-0  gap-[3vw] flex-col justify-between items-center md:py-[0.6vw] py-[2.1vw] md:px-[1vw] px-[3.3vw]'>
        <div className='flex md:gap-[0.6vw] gap-[2.4vw]'>
          <button onClick={()=>selectTab(0)} className={`${selected==0? 'bg-primary  text-[#3F3F41]': 'bg-[#4C4C5A] text-white'} anim md:px-[1vw] px-[2vw] font-[400]  rounded-full font-bebasneue  md:text-[1.1vw] text-[2.5vw] md:pt-[0.2vw] md:pb-[0.1vw] pt-[0.5vw]`}>LAUNCHED TIME</button>
          <button onClick={()=>selectTab(1)} className= {`${selected==1?'bg-primary text-[#3F3F41]': 'bg-[#4C4C5A] text-white'}  anim md:px-[1vw] px-[2vw] font-[400]  rounded-full font-bebasneue  md:text-[1.1vw] text-[2.5vw] md:pt-[0.2vw] md:pb-[0.1vw] pt-[0.5vw]`}>TRADING VOLUME</button>
          <button onClick={()=>selectTab(2)} className={`${selected==2?'bg-primary text-[#3F3F41]': 'bg-[#4C4C5A] text-white'}  anim md:px-[1vw] px-[2vw] font-[400]  rounded-full font-bebasneue  md:text-[1.1vw] text-[2.5vw] md:pt-[0.2vw] md:pb-[0.1vw] pt-[0.5vw]`}>MARKET CAP</button>
          <button onClick={()=>selectTab(3)} className={`${selected==3?'bg-primary text-[#3F3F41]': 'bg-[#4C4C5A] text-white'}  anim md:px-[1vw] px-[2vw] font-[400]  rounded-full font-bebasneue  md:text-[1.1vw] text-[2.5vw] md:pt-[0.2vw] md:pb-[0.1vw] pt-[0.5vw]`}>24H PRICE INC.</button>
          <button onClick={()=>selectTab(4)} className={`${selected==4?'bg-primary text-[#3F3F41]': 'bg-[#4C4C5A] text-white'}  anim md:px-[1vw] px-[2vw] font-[400]  uppercase  rounded-full font-bebasneue  md:text-[1.1vw] text-[2.5vw] md:pt-[0.2vw] md:pb-[0.1vw] pt-[0.5vw]`}>graduating soon.</button>
        </div>
        <div className=" flex items-center md:gap-[1.2vw] gap-[2vw] relative">
            <div className="bg-white flex justify-between md:gap-[0.2vw] md:pt-[0.1vw] md:pb-[0.4vw] pt-[0.6vw] pb-[0.8vw] md:w-[24vw] w-[44vw] rounded-full items-center md:ps-[1vw] md:pe-[0.6vw] ps-[1.5vw] pe-[1.5vw] overflow-hidden ">
                <div className="md:w-[2vw] w-[4.6vw]">
                  <Image src={searchIco} alt="" className="w-full" />
                </div>
                <input type="text" placeholder='SEARCH TOKENS' className="focus:border-0 active:border-0 md:text-[0.8vw] text-[2.1vw] font-[800] font-montserrat w-full text-center border-0 outline-none " />
            </div>

            <div className="md:w-[11.8vw] w-[28vw] bg-[#1E1E25] shadow-[5px_4px_9.8px_0px_#00000040] rounded-full flex md:gap-[0.4vw] gap-[2.5vw] items-center justify-center md:py-[0.6vw] py-[1.5vw]">

              <p className="font-bebasneue md:text-[0.99vw] text-[2.3vw] text-white leading-none md:pt-[0.2vw] pt-[0.4vw]">listed on uniswap</p>
              <div onClick={()=>setToogle(!toogle)} className={`${toogle? "bg-primary justify-end" : "bg-[#18191B] justify-start" } tranis md:w-[2.6vw] w-[6.4vw] flex items-center  rounded-[2.1vw] md:h-[0.88vw] h-[2.1vw] `}>
                    <div className= {`${toogle?"bg-white":"bg-[#38383F]"} tranis md:w-[1vw] w-[2.6vw] md:h-[1vw] h-[2.6vw] rounded-full`}>

                    </div>
              
              </div>
            </div>
            <div>
              <div onClick={()=>setBtn(0)} className="flex items-center md:gap-[0.4vw] gap-[1vw]">
                <div className="md:w-[0.7vw] w-[1.65vw] md:h-[0.72vw] h-[1.7vw] md:border-[0.1vw] border-[0.2vw] md:p-[0.1vw] p-[0.2vw] rounded-full border-white bg-transparent flex justify-center items-center">
                  <div className={`${btn==0?'bg-primary':'bg-transparent'} w-full h-full rounded-full`}>                    
                  </div>
                </div>
                <p className={`${btn==0?'opacity-100':'opacity-30'}  text-white font-bebasneue font-[400] md:text-[0.8vw] text-[2.3vw]`} >ASCENDING</p>

              </div>
              <div onClick={()=>setBtn(1)} className="flex items-center md:gap-[0.4vw] gap-[1vw]">
                <div className="md:w-[0.7vw] w-[1.65vw] md:h-[0.72vw] h-[1.7vw] md:border-[0.1vw] border-[0.2vw] md:p-[0.1vw] p-[0.2vw] rounded-full border-white bg-transparent flex justify-center items-center">
                  <div className={`${btn==1?'bg-primary':'bg-transparent'} w-full h-full rounded-full`}>                    
                  </div>
                </div>
                <p className={`${btn==1?'opacity-100':'opacity-30'}  text-white font-bebasneue font-[400] md:text-[0.8vw] text-[2.3vw]`} >DESCENDING</p>

              </div>
            </div>
            
            {/* <button onMouseOver={()=>setOpen(true)} className="md:px-[1.3vw] px-[4.3vw] anim flex items-center md:gap-[1vw] gap-[1.8vw] font-[400] rounded-full font-bebasneue bg-[#4C4C5A] text-white  md:text-[1.1rem]  text-[3vw] md:pt-[0.2vw]  py-[0.4vw] ">
                <div className="md:w-[1.4vw] w-[4.1vw]">

                <Image src={sort} className="w-full" alt=""/>
                </div>
                SORT BY
            </button>
            <AnimatePresence>
            <motion.div
            onMouseLeave={()=>setOpen(false)}
            initial={{ opacity: 0}}
            animate={{ opacity: open ? 1 : 0}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.3 }}
            className={`${open?'block':'hidden'} absolute bg-[#35363D] rounded-[27px] w-[190px] px-1 py-1 end-[0px]`}>
              <div onClick={()=>setBtns(!btnS)} className="flex items-center gap-2 mt-3 ps-3">
                <div className="w-[13.5px] mb-[1.5px] h-[14px] border-[2px] rounded-full border-white bg-transparent flex justify-center items-center">
                  <div className={`${btnS?'bg-primary':'bg-transparent'} w-[7px] h-[7px] rounded-full`}>                    
                  </div>
                </div>
                <p className="text-white font-bebasneue font-[400] text-[17px]">LISTED ON <span className="text-primary">UNISWAP</span></p>

              </div>
              <div onClick={()=>setBtn(0)} className="flex items-center gap-2 mt-1 ps-3">
                <div className="w-[13.5px] mb-[1.5px] h-[14px] border-[2px] rounded-full border-white bg-transparent flex justify-center items-center">
                  <div className={`${btn==0?'bg-white':'bg-transparent'} w-[7px] h-[7px] rounded-full`}>                    
                  </div>
                </div>
                <p className={`${btn==0?'opacity-100':'opacity-30'}  text-white font-bebasneue font-[400] text-[17px]`} >ASCENDING</p>

              </div>
              <div  onClick={()=>setBtn(1)} className="flex items-center gap-2 my-1 ps-3">
                <div className="w-[13.5px] mb-[1.5px] h-[14px] border-[2px] rounded-full border-white bg-transparent flex justify-center items-center">
                <div className={`${btn==1?'bg-white':'bg-transparent'} w-[7px] h-[7px] rounded-full`}>                    
                </div>
                </div>
                <p className={`${btn==1?'opacity-100':'opacity-30'} text-white font-bebasneue font-[400] text-[17px]`}>DESCENDING</p>
              </div>


            </motion.div>
            </AnimatePresence> */}


        </div>
      
    </div>
  )
}

export default Tabs

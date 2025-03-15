"use client"
import { useState } from "react"
import searchIco from "@/assets/search.png"
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
    <div className='bg-[#30313AE0] mt-4 flex lg:flex-row lg:gap-0  gap-[3vw] flex-col justify-between items-center lg:py-2.5 py-[2.1vw] md:px-[2.1vw] px-[4.1vw]'>
        <div className='flex 2xl:gap-3 lg:gap-2 gap-[2.4vw]'>
          <button onClick={()=>selectTab(0)} className={`${selected==0? 'bg-primary  text-[#3F3F41]': 'bg-[#4C4C5A] text-white'} anim lg:px-4 px-[2vw] font-[400]  rounded-full font-bebasneue  2xl:text-xl lg:text-sm text-[2.5vw] lg:pt-1 lg:pb-0.5 pt-[0.5vw]`}>LAUNCHED TIME</button>
          <button onClick={()=>selectTab(1)} className= {`${selected==1?'bg-primary text-[#3F3F41]': 'bg-[#4C4C5A] text-white'}  anim lg:px-4 px-[2vw] font-[400]  rounded-full font-bebasneue  2xl:text-xl lg:text-sm text-[2.5vw] lg:pt-1 lg:pb-0.5 pt-[0.5vw]`}>TRADING VOLUME</button>
          <button onClick={()=>selectTab(2)} className={`${selected==2?'bg-primary text-[#3F3F41]': 'bg-[#4C4C5A] text-white'}  anim lg:px-4 px-[2vw] font-[400]  rounded-full font-bebasneue  2xl:text-xl lg:text-sm text-[2.5vw] lg:pt-1 lg:pb-0.5 pt-[0.5vw]`}>MARKET CAP</button>
          <button onClick={()=>selectTab(3)} className={`${selected==3?'bg-primary text-[#3F3F41]': 'bg-[#4C4C5A] text-white'}  anim lg:px-4 px-[2vw] font-[400]  rounded-full font-bebasneue  2xl:text-xl lg:text-sm text-[2.5vw] lg:pt-1 lg:pb-0.5 pt-[0.5vw]`}>24H PRICE INC.</button>
          <button onClick={()=>selectTab(4)} className={`${selected==4?'bg-primary text-[#3F3F41]': 'bg-[#4C4C5A] text-white'}  anim lg:px-4 px-[2vw] font-[400]  rounded-full font-bebasneue  2xl:text-xl lg:text-sm text-[2.5vw] lg:pt-1 lg:pb-0.5 pt-[0.5vw]`}>graduating soon</button>
        </div>
        <div className=" flex items-center 2xl:gap-4 lg:gap-3 gap-[2vw] relative">
            <div className="bg-white flex justify-between lg:gap-1 lg:pt-0.5 lg:pb-1.5 pt-[0.5vw] pb-[0.8vw] 2xl:w-[28rem] xl:w-[18rem] lg:w-[14rem] w-[44vw] rounded-full items-center lg:ps-4 lg:pe-2.5 ps-[1.5vw] pe-[1.5vw] overflow-hidden ">
                <div className="2xl:w-9 lg:w-5 w-[4.2vw]">
                  <Image src={searchIco} alt="" className="w-full" />
                </div>
                <input type="text" placeholder='SEARCH TOKENS' className="focus:border-0 active:border-0 2xl:text-sm lg:text-[0.6rem] text-[2vw] font-[800] font-montserrat w-full text-center border-0 outline-none " />
            </div>

            <div className="lg:w-auto 2xl:px-6 lg:px-4 w-[28vw] bg-[#1E1E25] shadow-[5px_4px_9.8px_0px_#00000040] rounded-full flex lg:gap-2.5  gap-[2.5vw] items-center justify-center lg:py-1.5 py-[1.5vw]">
              <p className="font-bebasneue 2xl:text-lg lg:text-xs text-[2.3vw] text-white leading-none lg:pt-1 pt-[0.4vw]">listed on uniswap</p>
              <div onClick={()=>setToogle(!toogle)} className={`${toogle? "bg-primary justify-end" : "bg-[#595959E8] justify-start" }  2xl:w-12 lg:w-9 w-[6.4vw] flex items-center  rounded-full 2xl:h-4 lg:h-3 h-[2.1vw] `}>
                    <div className= {`${toogle?"bg-white":"bg-[#8A8A98]"} tranis 2xl:w-5 lg:w-4 w-[2.6vw] 2xl:h-5 lg:h-4 h-[2.6vw] rounded-full`}>

                    </div>
              
              </div>
            </div>
            <div>
              <div onClick={()=>setBtn(0)} className="flex items-center lg:gap-1.5 gap-[1vw]">
                <div className="lg:w-3 w-[1.65vw] lg:h-3 h-[1.7vw] lg:border-[0.1rem] border-[0.2vw] lg:p-0.5 p-[0.2vw] rounded-full border-white bg-transparent flex justify-center items-center">
                  <div className={`${btn==0?'bg-primary':'bg-transparent'} w-full h-full rounded-full`}>                    
                  </div>
                </div>
                <p className={`${btn==0?'opacity-100':'opacity-30'}  text-white font-bebasneue font-[400] 2xl:text-sm lg:text-xs text-[2vw]`} >ASCENDING</p>

              </div>
              <div onClick={()=>setBtn(1)} className="flex items-center lg:gap-1.5 gap-[1vw]">
                <div className="lg:w-3 w-[1.65vw] lg:h-3 h-[1.7vw] lg:border-[0.1rem] border-[0.2vw] lg:p-0.5 p-[0.2vw] rounded-full border-white bg-transparent flex justify-center items-center">
                  <div className={`${btn==1?'bg-primary':'bg-transparent'} w-full h-full rounded-full`}>                    
                  </div>
                </div>
                <p className={`${btn==1?'opacity-100':'opacity-30'}  text-white font-bebasneue font-[400] 2xl:text-sm lg:text-xs text-[2vw]`} >DESCENDING</p>

              </div>
            </div>
            
            {/* <button onMouseOver={()=>setOpen(true)} className="lg:px-[1.3vw] px-[4.3vw] anim flex items-center lg:gap-[1vw] gap-[1.8vw] font-[400] rounded-full font-bebasneue bg-[#4C4C5A] text-white  lg:text-[1.1rem]  text-[3vw] lg:pt-[0.2vw]  py-[0.4vw] ">
                <div className="lg:w-[1.4vw] w-[4.1vw]">

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
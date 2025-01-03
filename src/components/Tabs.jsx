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

  const selectTab = (id) =>{
      setSelected(id)
  
  }

  const [btn,setBtn] = useState(0);
  const [btnS,setBtns] = useState(false);



  return (
    <div className='bg-[#30313AE0] mt-5 flex md:flex-row md:gap-0  gap-[24px] flex-col justify-between items-center py-2 md:px-4 2xl:px-20 px-[15px]'>
        <div className='flex md:gap-3 gap-[6px]'>
          <button onClick={()=>selectTab(0)} className={`${selected==0? 'bg-primary  text-[#3F3F41]': 'bg-[#4C4C5A] text-white'} anim 2xl:px-[30px] md:px-[14px]  px-[15px] font-[400]  rounded-full font-bebasneue  2xl:text-[22px] md:text-[18px] text-[3vw] pt-1 pb-0.5`}>LAUNCHED TIME</button>
          <button onClick={()=>selectTab(1)} className= {`${selected==1?'bg-primary text-[#3F3F41]': 'bg-[#4C4C5A] text-white'}  anim 2xl:px-[30px] md:px-[14px]  px-[15px] font-[400]  rounded-full font-bebasneue  2xl:text-[22px] md:text-[18px] text-[3vw] pt-1 pb-0.5`}>TRADING VOLUME</button>
          <button onClick={()=>selectTab(2)} className={`${selected==2?'bg-primary text-[#3F3F41]': 'bg-[#4C4C5A] text-white'}  anim 2xl:px-[30px] md:px-[14px]  px-[15px] font-[400]  rounded-full font-bebasneue  2xl:text-[22px] md:text-[18px] text-[3vw] pt-1 pb-0.5`}>MARKET CAP</button>
          <button onClick={()=>selectTab(3)} className={`${selected==3?'bg-primary text-[#3F3F41]': 'bg-[#4C4C5A] text-white'}  anim 2xl:px-[30px] md:px-[14px]  px-[15px] font-[400]  rounded-full font-bebasneue  2xl:text-[22px] md:text-[18px] text-[3vw] pt-1 pb-0.5`}>24H PRICE INC.</button>
          
        </div>
        <div className=" flex items-center md:gap-2 2xl:gap-6 relative">
            <div className="bg-white flex justify-between gap-1 pt-0.5 pb-1 2xl:w-[476px] md:w-[24vw] w-[60vw] rounded-full items-center md:ps-3 ps-7 pe-5 md:pe-3 overflow-hidden ">
                
                <div className="2xl:w-auto md:w-[24px] w-[16px]">
                  <Image src={searchIco} alt="" />
                </div>
                <input type="text" placeholder='SEARCH TOKENS' className="focus:border-0 active:border-0 2xl:text-[17px] md:text-[15px] text-[2vw] font-[800] font-montserrat w-full text-center border-0 outline-none " />
            </div>
            
            <button onMouseOver={()=>setOpen(true)} className="2xl:px-[25px] md:px-[14px] px-[19px] anim flex items-center 2xl:gap-5 md:gap-2 gap-[8px] font-[400] rounded-full font-bebasneue bg-[#4C4C5A] text-white  md:text-[18px] 2xl:text-[22px]  text-[3vw] md:pt-1 md:pb-0.5 py-[2px] ">
                <div className="2xl:w-auto w-[19px]">

                <Image src={sort} alt=""/>
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
            className={`${open?'block':'hidden'} absolute bg-[#35363D] rounded-[27px] w-[190px] px-1 py-1 end-[-30px]`}>
              {/* <Image src={cross}  className="w-[15px] mt-1 me-2 float-end h-[15px]" onClick={() =>setOpen(false)} alt="" /> */}
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
                <p className={`${btn==0?'opacity-100':'opacity-30'} text-white font-bebasneue font-[400] text-[17px]`}>ASCENDING</p>

              </div>
              <div  onClick={()=>setBtn(1)} className="flex items-center gap-2 my-1 ps-3">
                <div className="w-[13.5px] mb-[1.5px] h-[14px] border-[2px] rounded-full border-white bg-transparent flex justify-center items-center">
                <div className={`${btn==1?'bg-white':'bg-transparent'} w-[7px] h-[7px] rounded-full`}>                    
                </div>
                </div>
                <p className={`${btn==1?'opacity-100':'opacity-30'} text-white font-bebasneue font-[400] text-[17px]`}>DESCENDING</p>

              </div>


            </motion.div>
            </AnimatePresence>
        </div>
      
    </div>
  )
}

export default Tabs

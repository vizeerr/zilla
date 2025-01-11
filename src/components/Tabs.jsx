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
    <div className='bg-[#30313AE0] mt-[1vw] flex md:flex-row md:gap-0  gap-[3vw] flex-col justify-between items-center md:py-[0.6vw] py-[2.1vw] md:px-[1vw] px-[3.3vw]'>
        <div className='flex md:gap-[0.6vw] gap-[2.4vw]'>
          <button onClick={()=>selectTab(0)} className={`${selected==0? 'bg-primary  text-[#3F3F41]': 'bg-[#4C4C5A] text-white'} anim md:px-[1.5vw] px-[3.4vw] font-[400]  rounded-full font-bebasneue  md:text-[1.1vw] text-[3.1vw] md:pt-[0.2vw] md:pb-[0.1vw] pt-[0.5vw]`}>LAUNCHED TIME</button>
          <button onClick={()=>selectTab(1)} className= {`${selected==1?'bg-primary text-[#3F3F41]': 'bg-[#4C4C5A] text-white'}  anim md:px-[1.5vw] px-[3.4vw] font-[400]  rounded-full font-bebasneue  md:text-[1.1vw] text-[3.1vw] md:pt-[0.2vw] md:pb-[0.1vw] pt-[0.5vw]`}>TRADING VOLUME</button>
          <button onClick={()=>selectTab(2)} className={`${selected==2?'bg-primary text-[#3F3F41]': 'bg-[#4C4C5A] text-white'}  anim md:px-[1.5vw] px-[3.4vw] font-[400]  rounded-full font-bebasneue  md:text-[1.1vw] text-[3.1vw] md:pt-[0.2vw] md:pb-[0.1vw] pt-[0.5vw]`}>MARKET CAP</button>
          <button onClick={()=>selectTab(3)} className={`${selected==3?'bg-primary text-[#3F3F41]': 'bg-[#4C4C5A] text-white'}  anim md:px-[1.5vw] px-[3.4vw] font-[400]  rounded-full font-bebasneue  md:text-[1.1vw] text-[3.1vw] md:pt-[0.2vw] md:pb-[0.1vw] pt-[0.5vw]`}>24H PRICE INC.</button>
          
        </div>
        <div className=" flex items-center md:gap-[1.2vw] gap-[2vw] relative">
            <div className="bg-white flex justify-between md:gap-[0.2vw] md:pt-[0.1vw] md:pb-[0.2vw] pt-[0.6vw] pb-[0.8vw] md:w-[24vw] w-[62vw] rounded-full items-center md:ps-[0.7vw] md:pe-[0.6vw] ps-[1.5vw] pe-[1.5vw] overflow-hidden ">
                
                <div className="md:w-[2.4vw] w-[4.6vw]">
                  <Image src={searchIco} alt="" className="w-full" />
                </div>
                <input type="text" placeholder='SEARCH TOKENS' className="focus:border-0 active:border-0 md:text-[0.8vw] text-[2.1vw] font-[800] font-montserrat w-full text-center border-0 outline-none " />
            </div>
            
            <button onMouseOver={()=>setOpen(true)} className="md:px-[1.3vw] px-[4.3vw] anim flex items-center md:gap-[1vw] gap-[1.8vw] font-[400] rounded-full font-bebasneue bg-[#4C4C5A] text-white  md:text-[1.1vw]  text-[3vw] md:pt-[0.2vw]  py-[0.4vw] ">
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
            </AnimatePresence>
        </div>
      
    </div>
  )
}

export default Tabs

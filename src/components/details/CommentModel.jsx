import { motion } from "framer-motion";
import React from 'react';
import cross from "@/assets/cross.png";
import cam from "@/assets/cam.png"
import Image from "next/image";
const CommentModel = ({openCmt,setOpenCmt}) => {
    const handleClose = (e) => {
        if (e.target.id === "background") {
          setOpenCmt(false);
        }
      }
      
  return (
    <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`${
            openCmt ? "flex " : "hidden"
          } bg-[#00000080] fixed z-20  justify-center items-center w-full h-screen  top-0`}
          onClick={(e) => handleClose(e)}
          id="background">
            
            <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: openCmt ? 1 : 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                    id="box"
                    className={`${
                        openCmt ? "block" : "hidden"
                    } bg-[#1B1C1E] 2xl:w-[70rem] lg:w-[50rem] md:w-[40rem] w-[90vw] h-min md:rounded-[2.8rem] rounded-[6vw]`}>

                    <div className="w-full flex justify-end md:pt-7 pt-3 md:pe-6 pe-3">
                        <div className="2xl:w-9 md:w-7 w-[6vw] cursor-pointer anim">
                
                            <Image
                                src={cross}
                                className=" w-full "
                                onClick={() => setOpenCmt(false)}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="2xl:px-20 md:px-10 px-5">
                        <div>
                            <p className="font-montserrat font-[700] text-white border-s-primary md:border-s-[6px] border-s-[3px] md:py-1.5 ps-3 2xl:text-3xl text-2xl text-[3vw]">Post <span className="text-primary">Reply</span></p>
                            <div className="bg-[#111111] 2xl:p-10 md:p-6 p-3 md:rounded-2xl rounded-[2vw] overflow-hidden mt-5">
                                <input type="text" placeholder="ENTER TEXT" className="w-full text-white outline-none border-none bg-transparent md:text-lg text-xs font-bebasneue" />
                            </div>
                        </div>

                        <div className="mt-5">
                            <p className="font-montserrat font-[700] text-white border-s-primary md:border-s-[6px] border-s-[3px] md:py-1.5 ps-3 2xl:text-3xl text-2xl text-[3vw]">Upload <span className="text-primary">Image</span> <span className="font-bebasneue text-[#868686] font-[400]">(Optional)</span></p>
                            <div className="bg-[#111111] p-10 rounded-[2rem] mx-auto overflow-hidden mt-5 flex flex-col items-center justify-center  2xl:w-[30rem] md:w-[20rem] w-[80vw]">
                                <div className="2xl:w-28 md:w-20 w-[17vw]">
                                    <Image src={cam} className="w-full"/>
                                </div>
                                <p className="2xl:text-base lg:text-xs text-[2vw] font-montserrat font-[700] text-[#3F4247] text-center my-4">Drop image here <br/> or</p>
                                <button className="text-[#1B1C1E] bg-primary px-7 font-montserrat anim font-[800] rounded-lg py-2 2xl:text-lg md:text-sm text-[2.5vw]"> Browse Files </button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-[#1B1C1E] anim bg-primary round 2xl:text-7xl md:text-5xl text-[8vw] leading-none pt-3 text-center mx-auto 2xl:w-[30rem] md:w-[20rem] w-[80vw] 2xl:my-12 my-7 md:rounded-2xl rounded-[3vw]">POST</p>
                    </div>

            </motion.div>
            
      
    </motion.div>
  )
}

export default CommentModel

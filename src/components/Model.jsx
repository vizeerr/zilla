"use client"
import cross from "@/assets/cross.png";
import modelmg from "@/assets/modelmg.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const Model = ({ open, setOpen }) => {
    const handleClose = (e)=>{
        if (e.target.id === "background") {
            setOpen(false);
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: open ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`${
                open ? "flex" : "hidden"
            } bg-[#000000A3] fixed z-30 justify-end w-full h-screen  px-[1.6vw] top-0`}
             onClick={(e)=>handleClose(e)}
            id="background"
             
        >
            <motion.div
                initial={{ opacity: 0,}}
                animate={{ opacity: open ? 1 : 0}}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                id="box"
                className={`${
                    open ? "block" : "hidden"
                } bg-[rgb(30,30,37)] md:w-[40vw] w-[85vw] h-min md:rounded-[2.4vw] rounded-[3.54vw] md:pt-[0.8vw] pt-[2vw] relative md:top-[4.4vw] top-[6vw] overflow-hidden`}
            >
                <div className="w-full flex justify-end md:pe-[0.6vw] pe-[1vw] md:pt-[0.2vw] ">
                    <div className="md:w-[2vw] w-[6vw] cursor-pointer anim">

                    <Image
                        src={cross}
                        className=" w-full "
                        onClick={() => setOpen(false)}
                        alt=""
                        />
                    </div>
                </div>
                <h1 className="round  font-[500] text-center md:text-[3.3vw] text-[8vw] leading-none text-white">
                    Pump, <span className="text-primary">Profit</span>, Repeat!
                </h1>
                <p className="text-white font-montserrat md:text-[0.9vw] text-[2.5vw] font-[700] md:mt-[1vw] mt-[1vw] leading-tight md:w-[72%] w-[85%] mx-auto text-center">
                    Each token is a fair launch with no presale and no team allocation —
                    <span className="text-primary"> making it all about the community.</span>
                </p>
                <Image src={modelmg} className="md:mt-[1.6vw] mt-[4vw] md:w-[70vw] w-[90vw] mx-auto" alt="" />
                <p className="bg-[#2B2C36] md:py-[1vw] py-[1.5vw] w-full text-primary font-montserrat font-[700] md:text-[0.9vw] text-[2.5vw] leading-tight mx-auto text-center md:mt-[3.3vw] mt-[5vw]">
                    Want more details?{" "}
                    <span className="text-white font-[700]">Dive into our </span> 
                    <button className="text-[#2B2C36]  py-[0.2vw] md:px-[0.7vw] px-[1.4vw] rounded-full bg-primary font-[900] anim">
                        Documentation
                    </button>
                </p>
                {/* <p className="bg-[#2B2C36] text-white text-center md:text-[1.4vw] text-[2.4vw] md:py-[0.2vw] py-[0.8vw] font-montserrat font-[800] mt-[2vw]">
                    Explore <span className="text-primary">PumpZilla Token</span>
                </p>
                <p className="font-montserrat text-white font-[700] md:text-[0.8vw] text-[1.3vw] text-center mx-auto leading-tight mt-[1.6vw]">
                    Learn more about our exciting PumpZilla Token and how it powers the ecosystem.
                </p>
                <div className="flex justify-center my-[1.6vw] anim">
                    <button className="font-montserrat font-[900] md:text-[0.8vw] text-[1.7vw] text-[#2B2C36] bg-primary py-[0.3vw] md:px-[0.8vw] px-[1.6vw] rounded-full">
                        GO TO ZILLA TOKEN
                    </button>
                </div> */}
            </motion.div>
        </motion.div>
    );
};

export default Model;

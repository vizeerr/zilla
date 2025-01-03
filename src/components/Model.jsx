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
            } bg-[#000000A3] fixed z-30 justify-end w-full h-screen  px-8 top-0`}
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
                } bg-[rgb(30,30,37)] w-[782px] h-min 2xl:rounded-[47px] rounded-[6vw] py-4 relative top-[85px]`}
            >
                <Image
                    src={cross}
                    className="float-end me-3 mt-1 cursor-pointer anim w-[4vw] "
                    onClick={() => setOpen(false)}
                    alt=""
                />
                <h1 className="round ms-12 font-[500] text-center 2xl:text-[64.23px] text-[5vw] text-white">
                    Pump, <span className="text-primary">Profit</span>, Repeat!
                </h1>
                <p className="text-white font-montserrat 2xl:text-[17.53px] text-[2vw] font-[700] leading-[20.81px] w-[72%] mx-auto text-center">
                    Each token is a fair launch with no presale and no team allocation —
                    <span className="text-primary"> making it all about the community.</span>
                </p>
                <Image src={modelmg} className="mt-8 w-[70vw] mx-auto" alt="" />
                <p className="text-primary font-montserrat font-[700] 2xl:text-[17.53px] text-[2.5vw] leading-[20.81px] w-[78%] mx-auto text-center mt-16">
                    Want more details?{" "}
                    <span className="text-white font-[700]">Dive into our </span>
                    <button className="text-[#2B2C36]  py-1 px-1.5 rounded-full bg-primary font-[900] anim">
                        Documentation
                    </button>
                </p>
                <p className="bg-[#2B2C36] text-white text-center 2xl:text-[27px] text-[3.5vw] py-1 font-montserrat font-[800] mt-10">
                    Explore <span className="text-primary">PumpZilla Token</span>
                </p>
                <p className="font-montserrat text-white font-[700] 2xl:text-[16px] text-[2vw] text-center mx-auto leading-[22px] mt-8">
                    Learn more about our exciting PumpZilla Token and how it powers the ecosystem.
                </p>
                <div className="flex justify-center my-8 anim">
                    <button className="font-montserrat font-[900] 2xl:text-[16px] text-[2vw] text-[#2B2C36] bg-primary py-1.5 px-4 rounded-full">
                        GO TO ZILLA TOKEN
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Model;

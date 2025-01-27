import clock2 from "@/assets/clock2.png"
import xlogo from "@/assets/tlogo.svg"
import tlogo from "@/assets/xlogo.svg"
import wlogo from "@/assets/wlogo.svg"
import pifico from "@/assets/pifico.jpg"
import Image from "next/image"
import { formatTime, imgUrl, shortId } from "@/helpers/helpers"
import Link from "next/link"

const Card = ({data}) => {

  return (
    <Link href={`/details/${data.token_address}`}>
    
    <div className="bg-white anim md:rounded-[1.5vw] rounded-[4.8vw] py-[2.6vw] 2xl:px-3 lg:px-1.5 md:px-1 2xl:py-2.5 lg:py-1 md:py-1 px-[2.6vw] 2xl:w-[19.2rem] lg:w-[12rem] md:w-[10rem] w-[90vw] shadow-[8.55px_9.98px_13.61px_0px_#00000040]">
        <div className="flex items-center justify-between">

            <div className="flex gap-[1vw] lg:gap-1.5 md:gap-0.5 2xl:w-28 lg:w-20 md:w-14 w-[20vw] bg-[#262626] rounded-full 2xl:py-1 md:py-0.5 py-[0.6vw] justify-center items-center">
                <div className=" 2xl:w-5 lg:w-3 md:w-2 w-[2.1vw]">
                    <Image src={clock2} alt="" className="w-full" />
                </div>
                <p className="font-[800] font-montserrat 2xl:text-[0.6rem] lg:text-[0.4rem] md:text-[0.3rem] text-[1.6vw] text-white">{formatTime(data.created_at)} ago </p>
            </div>
            <div className="flex 2xl:gap-1 lg:gap-1 md:gap-1 gap-[1vw] items-start">
                <Link href={data.website}>
                <div className="bg-[#262626] anim 2xl:w-6 lg:w-4 md:w-3 w-[3.8vw] 2xl:h-6 lg:h-4 md:h-3 h-[3.8vw] flex justify-center items-center rounded-full 2xl:p-1.5 lg:p-1 md:p-0.5 p-[0.8vw]">
                    <Image src={wlogo}  className="" alt="" />
                </div>
                </Link>
                <Link href={data.twitter}>
                <div className="bg-[#262626] anim 2xl:w-6 lg:w-4 md:w-3 w-[3.8vw] 2xl:h-6 lg:h-4 md:h-3 h-[3.8vw] flex justify-center items-center rounded-full 2xl:p-1.5 lg:p-1 md:p-0.5 p-[0.8vw]">
                    <Image src={xlogo}  className="" alt="" />
                </div>
                </Link>
                <Link href={data.telegram}>
                <div className="bg-[#262626] anim 2xl:w-6 lg:w-4 md:w-3 w-[3.8vw] 2xl:h-6 lg:h-4 md:h-3 h-[3.8vw] flex justify-center items-center rounded-full 2xl:p-1.5 lg:p-1 md:p-0.5 p-[0.8vw]">
                    <Image src={tlogo}  alt="" />
                </div>
                </Link>
            </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-0 gap-[10px] mt-[2.1vw] md:mt-0">

        
            <div className="2xl:h-48 lg:h-28 md:h-20 md:w-full w-[33vw] h-[33vw] overflow-hidden md:rounded-[1.2vw] rounded-[4.1vw] md:mt-[0.6vw]">
                <Image src={imgUrl(data.image)} unoptimized={true} className="w-full" width={400} height={400} alt=""/>
            </div>
        
            <div className="md:w-full w-[48vw]">
                <div className="md:mt-2 mt-[0.6vw]">
                    <p className="font-bebasneue 2xl:text-xl lg:text-xs md:text-[0.6rem] text-[3.8vw] font-[400] text-[#262626]">{data.name} <span className=" font-[800] font-montserrat ">({data.symbol})</span></p>
                    <p className="font-montserrat text-[#262626B5] font-[700] 2xl:text-xs lg:text-[0.4rem] md:text-[0.4rem] text-[2.2vw]">Created by {shortId(data.creator)}</p>
                </div>
                <div className="2xl:mt-2.5 lg:mt-1.5 mt-[1vw]">
                    <div className="bg-[#D9D9D9] md:rounded-[1vw_1vw_0px_0px] rounded-[2.4vw] 2xl:p-2.5 lg:p-1.5 md:p-1.5 p-[2vw]">
                        <p className="text-[#262626C2] font-montserrat font-[800] 2xl:text-[0.5rem] lg:text-[0.4rem] md:text-[0.3rem] text-[1.7vw] leading-tight 2xl:h-12 lg:h-8 md:h-5 h-[8vw] overflow-hidden">{data.description.slice(0,295)}...</p>

                    </div>
                    <div className="bg-[#262626] 2xl:pt-2 lg:mt-1.5 md:mt-1 mt-[1.5vw] md:py-0 py-[1.8vw] md:rounded-[0px_0px_1.3vw_1.3vw] rounded-[2.4vw] md:p-2 shadow-[6px_6px_13.8px_0px_#000000C9]">
                        <p className="font-montserrat font-[900] text-primary text-center 2xl:text-lg lg:text-[0.6rem] md:text-[0.4rem] 2xl:py-2 lg:py-1.5 md:py-1.5 text-[2.4vw]">MARKET CAP : 19.99K</p>

                    </div>
                </div>
            </div>
            </div>
      
    </div>
    </Link>
  )

}

export default Card

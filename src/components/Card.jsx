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
    
    <div className="bg-white anim lg:rounded-[1.3rem] rounded-[4.8vw] py-[2.6vw] 2xl:px-2.5 lg:px-2 2xl:py-2 lg:py-1 px-[2.6vw] 2xl:w-[19rem] lg:w-[15rem] w-[90vw] shadow-[8.55px_9.98px_13.61px_0px_#00000040]">
        <div className="flex items-center justify-between">

            <div className="flex gap-1.5 lg:w-auto w-[20vw] bg-[#262626] rounded-full lg:px-2 lg:py-1 py-[0.6vw] justify-center items-center">
                <div className=" 2xl:w-3.5 lg:w-2.5 w-[2.9vw]">
                    <Image src={clock2} alt="" className="w-full" />
                </div>
                <p className="font-[800] font-montserrat 2xl:text-[0.5rem] lg:text-[0.35rem] text-[1.6vw] text-white">{formatTime(data.created_at)} ago </p>
            </div>
            <div className="flex 2xl:gap-1.5 lg:gap-1 gap-[1vw] items-start">
                <Link href={data.website}>
                <div className="bg-[#262626] anim 2xl:w-6 lg:w-5  w-[3.8vw] 2xl:h-6 lg:h-5 h-[3.8vw] flex justify-center items-center rounded-full 2xl:p-1.5 lg:p-[0.3rem] p-[0.8vw]">
                    <Image src={wlogo}  className="" alt="" />
                </div>
                </Link>
                <Link href={data.twitter}>
                <div className="bg-[#262626] anim 2xl:w-6 lg:w-5  w-[3.8vw] 2xl:h-6 lg:h-5 h-[3.8vw] flex justify-center items-center rounded-full 2xl:p-1.5 lg:p-1.5 p-[0.8vw]">
                    <Image src={xlogo}  className="" alt="" />
                </div>
                </Link>
                <Link href={data.telegram}>
                <div className="bg-[#262626] anim 2xl:w-6 lg:w-5  w-[3.8vw] 2xl:h-6 lg:h-5 h-[3.8vw] flex justify-center items-center rounded-full 2xl:p-1.5 lg:p-1.5 p-[0.8vw]">
                    <Image src={tlogo}  alt="" />
                </div>
                </Link>
            </div>
        </div>
        <div className="flex lg:flex-col flex-row lg:gap-0 gap-[1.6rem] mt-[2.1vw] lg:mt-0">

        
            <div className="2xl:h-48 lg:h-36  lg:w-full w-[33vw] h-[33vw] overflow-hidden lg:rounded-[1.2vw] rounded-[4.1vw] lg:mt-[0.6vw]">
                <Image src={imgUrl(data.image)} unoptimized={true} className="w-full" width={400} height={400} alt=""/>
            </div>
        
            <div className="lg:w-full w-[48vw]">
                <div className="lg:mt-2.5 mt-[0.6vw]">
                    <p className="font-bebasneue 2xl:text-base lg:text-sm text-[3.8vw] font-[400] text-[#262626]">{data.name} <span className=" font-[800] font-montserrat ">({data.symbol})</span></p>
                    <p className="font-montserrat text-[#262626B5] font-[700] 2xl:text-[0.6rem] lg:text-[0.45rem] text-[2.2vw]">Created by {shortId(data.creator)}</p>
                </div>
                <div className="lg:mt-2.5 mt-[1vw]">
                    <div className="bg-[#D9D9D9] lg:rounded-[1vw_1vw_0px_0px] rounded-[2.4vw] 2xl:p-2.5 lg:p-1.5 p-[2vw]">
                        <p className="text-[#262626C2] font-montserrat font-[800] 2xl:text-[0.52rem] lg:text-[0.4rem] text-[1.7vw] leading-tight 2xl:h-[3.2rem] lg:h-10 h-[8vw] overflow-hidden">{data.description.slice(0,250)}...</p>

                    </div>
                    <div className="bg-[#262626] mt-2 lg:py-0 py-[1.8vw] lg:rounded-[0px_0px_1rem_1rem] rounded-[2.4vw] 2xl:p-3 lg:p-2 shadow-[6px_6px_13.8px_0px_#000000C9]">
                        <p className="font-montserrat font-[900] text-primary text-center 2xl:text-[1rem] lg:text-xs 2xl:py-2 lg:py-2.5 text-[2.4vw]">MARKET CAP : 19.99K</p>

                    </div>
                </div>
            </div>
            </div>
      
    </div>
    </Link>
  )

}

export default Card
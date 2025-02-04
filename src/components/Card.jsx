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
    
    <div className="bg-white anim md:rounded-[1.3rem] rounded-[4.8vw] py-[2.6vw] md:px-2.5 md:py-2 px-[2.6vw] md:w-[19rem]  w-[90vw] shadow-[8.55px_9.98px_13.61px_0px_#00000040]">
        <div className="flex items-center justify-between">

            <div className="flex gap-1.5 md:w-auto w-[20vw] bg-[#262626] rounded-full md:px-2 md:py-1 py-[0.6vw] justify-center items-center">
                <div className=" md:w-3.5  w-[2.9vw]">
                    <Image src={clock2} alt="" className="w-full" />
                </div>
                <p className="font-[800] font-montserrat md:text-[0.5rem]  text-[1.6vw] text-white">{formatTime(data.created_at)} ago </p>
            </div>
            <div className="flex md:gap-1.5  gap-[1vw] items-start">
                <Link href={data.website}>
                <div className="bg-[#262626] anim md:w-6   w-[3.8vw] md:h-6  h-[3.8vw] flex justify-center items-center rounded-full md:p-1.5  p-[0.8vw]">
                    <Image src={wlogo}  className="" alt="" />
                </div>
                </Link>
                <Link href={data.twitter}>
                <div className="bg-[#262626] anim md:w-6   w-[3.8vw] md:h-6  h-[3.8vw] flex justify-center items-center rounded-full md:p-1.5  p-[0.8vw]">
                    <Image src={xlogo}  className="" alt="" />
                </div>
                </Link>
                <Link href={data.telegram}>
                <div className="bg-[#262626] anim md:w-6   w-[3.8vw] md:h-6  h-[3.8vw] flex justify-center items-center rounded-full md:p-1.5  p-[0.8vw]">
                    <Image src={tlogo}  alt="" />
                </div>
                </Link>
            </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-0 gap-[1.6rem] mt-[2.1vw] md:mt-0">

        
            <div className="md:h-48  md:w-full w-[33vw] h-[33vw] overflow-hidden md:rounded-[1.2rem] rounded-[4.1vw] md:mt-2.5">
                <Image src={imgUrl(data.image)} unoptimized={true} className="w-full" width={400} height={400} alt=""/>
            </div>
        
            <div className="md:w-full w-[48vw]">
                <div className="md:mt-2.5 mt-[0.6vw]">
                    <p className="font-bebasneue md:text-base  text-[3.8vw] font-[400] text-[#262626]">{data.name} <span className=" font-[800] font-montserrat ">({data.symbol})</span></p>
                    <p className="font-montserrat text-[#262626B5] font-[700] md:text-[0.6rem]  text-[2.2vw]">Created by {shortId(data.creator)}</p>
                </div>
                <div className="md:mt-2.5 mt-[1vw]">
                    <div className="bg-[#D9D9D9] md:rounded-[1rem_1rem_0px_0px] rounded-[2.4vw] md:p-2.5  p-[2vw]">
                        <p className="text-[#262626C2] font-montserrat font-[800] md:text-[0.52rem] text-[1.7vw] leading-tight md:h-[3.2rem] h-[8vw] overflow-hidden">{data.description.slice(0,250)}...</p>

                    </div>
                    <div className="bg-[#262626] mt-2 md:py-0 py-[1.8vw] md:rounded-[0px_0px_1rem_1rem] rounded-[2.4vw] md:p-3 shadow-[6px_6px_13.8px_0px_#000000C9]">
                        <p className="font-montserrat font-[900] text-primary text-center md:text-[1rem]  md:py-2  text-[2.4vw]">MARKET CAP : 19.99K</p>

                    </div>
                </div>
            </div>
            </div>
      
    </div>
    </Link>
  )

}

export default Card
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
    
    <div className="bg-white anim xl:rounded-[1.3rem] md:rounded-[1.5vw] rounded-[4.8vw] py-[2.6vw] xl:px-2 lg:px-1.5 md:px-1 xl:py-2 lg:py-1 md:py-1 px-[2.6vw] 2xl:w-[15rem] xl:w-[14rem] lg:w-[12rem] md:w-[10rem] w-[90vw] shadow-[8.55px_9.98px_13.61px_0px_#00000040]">
        <div className="flex items-center justify-between">

            <div className="flex gap-[0.6vw] lg:gap-1.5 md:gap-0.5 xl:w-[5.5rem] lg:w-20 md:w-14 w-[20vw] bg-[#262626] rounded-full xl:py-1 md:py-0.5 py-[0.6vw] justify-center items-center">
                <div className=" xl:w-3 lg:w-3 md:w-2 w-[2.9vw]">
                    <Image src={clock2} alt="" className="w-full" />
                </div>
                <p className="font-[800] font-montserrat xl:text-[0.41rem] lg:text-[0.4rem] md:text-[0.3rem] text-[1.6vw] text-white">{formatTime(data.created_at)} ago </p>
            </div>
            <div className="flex xl:gap-1 lg:gap-1 md:gap-1 gap-[1vw] items-start">
                <Link href={data.website}>
                <div className="bg-[#262626] anim xl:w-4 lg:w-4 md:w-3 w-[3.8vw] xl:h-4 lg:h-4 md:h-3 h-[3.8vw] flex justify-center items-center rounded-full xl:p-1 lg:p-1 md:p-0.5 p-[0.8vw]">
                    <Image src={wlogo}  className="" alt="" />
                </div>
                </Link>
                <Link href={data.twitter}>
                <div className="bg-[#262626] anim xl:w-4 lg:w-4 md:w-3 w-[3.8vw] xl:h-4 lg:h-4 md:h-3 h-[3.8vw] flex justify-center items-center rounded-full xl:p-1 lg:p-1 md:p-0.5 p-[0.8vw]">
                    <Image src={xlogo}  className="" alt="" />
                </div>
                </Link>
                <Link href={data.telegram}>
                <div className="bg-[#262626] anim xl:w-4 lg:w-4 md:w-3 w-[3.8vw] xl:h-4 lg:h-4 md:h-3 h-[3.8vw] flex justify-center items-center rounded-full xl:p-1 lg:p-1 md:p-0.5 p-[0.8vw]">
                    <Image src={tlogo}  alt="" />
                </div>
                </Link>
            </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-0 gap-[10px] mt-[2.1vw] md:mt-0">

        
            <div className="xl:h-36  lg:h-28 md:h-20 md:w-full w-[33vw] h-[33vw] overflow-hidden xl:rounded-[1rem] md:rounded-[1.2vw] rounded-[4.1vw] md:mt-[0.6vw]">
                <Image src={imgUrl(data.image)} unoptimized={true} className="w-full" width={400} height={400} alt=""/>
            </div>
        
            <div className="md:w-full w-[48vw]">
                <div className="md:mt-2 mt-[0.6vw]">
                    <p className="font-bebasneue xl:text-[0.9rem] lg:text-xs md:text-[0.6rem] text-[3.8vw] font-[400] text-[#262626]">{data.name} <span className=" font-[800] font-montserrat ">({data.symbol})</span></p>
                    <p className="font-montserrat text-[#262626B5] font-[700] xl:text-[0.5rem] lg:text-[0.4rem] md:text-[0.4rem] text-[2.2vw]">Created by {shortId(data.creator)}</p>
                </div>
                <div className="xl:mt-1.5 lg:mt-1.5 mt-[1vw]">
                    <div className="bg-[#D9D9D9] xl:rounded-[0.6rem_0.6rem_0_0] md:rounded-[1vw_1vw_0px_0px] rounded-[2.4vw] xl:p-1.5 lg:p-1.5 md:p-1.5 p-[2vw]">
                        <p className="text-[#262626C2] font-montserrat font-[800] xl:text-[0.4rem] lg:text-[0.4rem] md:text-[0.3rem] text-[1.7vw] leading-tight xl:h-10 lg:h-8 md:h-5 h-[8vw] overflow-hidden">{data.description.slice(0,260)}...</p>

                    </div>
                    <div className="bg-[#262626] xl:mt-2 lg:mt-1.5 md:mt-1 mt-[1.5vw] md:py-0 py-[1.8vw] xl:rounded-[0_0_0.9rem_0.9rem] md:rounded-[0px_0px_1.3vw_1.3vw] rounded-[2.4vw] md:p-2 shadow-[6px_6px_13.8px_0px_#000000C9]">
                        <p className="font-montserrat font-[900] text-primary text-center xl:text-[0.8rem] lg:text-[0.6rem] md:text-[0.4rem] xl:py-2.5 lg:py-1.5 md:py-1.5 text-[2.4vw]">MARKET CAP : 19.99K</p>

                    </div>
                </div>
            </div>
            </div>
      
    </div>
    </Link>
  )

}

export default Card

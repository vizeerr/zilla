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
    
    <div className="bg-white anim md:rounded-[30px] rounded-[20px] py-3 2xl:px-3 2xl:py-2 md:px-2 px-3 md:w-[240px] 2xl:w-[316px] w-[90vw] shadow-[8.55px_9.98px_13.61px_0px_#00000040]">
        <div className="flex items-center justify-between">

            <div className="flex gap-1 2xl:w-[105px] md:w-[7.5vw] w-[20vw] bg-[#262626] rounded-full md:py-1 py-0.5 justify-center items-center">
                <div className="2xl:w-auto md:w-[15px] w-[12px]">
                    <Image src={clock2} alt="" />
                </div>
                <p className="font-[800] font-montserrat md:text-[8px] text-[7px] text-white">{formatTime(data.created_at)} ago </p>
            </div>
            <div className="flex 2xl:gap-2 md:gap-1 items-start">
                <Link href={data.website}>
                <div className="bg-[#262626] anim 2xl:w-[26px] md:w-[22px] w-[14px] md:h-[22px] 2xl:h-[26px] h-[14px] flex justify-center items-center rounded-full md:p-1 2xl:p-1.5 p-[3px]">
                    <Image src={wlogo}  className="" alt="" />
                </div>
                </Link>
                <Link href={data.twitter}>
                <div className="bg-[#262626] anim 2xl:w-[26px] md:w-[22px] w-[14px] md:h-[22px] 2xl:h-[26px] h-[14px]flex justify-center items-center rounded-full md:p-1.5 p-[3px]">
                    <Image src={xlogo}  className="" alt="" />
                </div>
                </Link>
                <Link href={data.telegram}>
                <div className="bg-[#262626] anim 2xl:w-[26px] md:w-[22px] w-[14px] md:h-[22px] 2xl:h-[26px] h-[14px]flex justify-center items-center rounded-full md:p-1.5 p-[3px]">
                    <Image src={tlogo}  alt="" />
                </div>
                </Link>
            </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-0 gap-[10px]">

        
            <div className="2xl:h-[195px]  2xl:w-[293px] md:w-full md:h-[160px] w-[33vw] h-[33vw] overflow-hidden md:rounded-3xl rounded-2xl mt-3">
                <Image src={imgUrl(data.image)} unoptimized={true} width={293} height ={195} alt=""/>
            </div>
        
            <div className="md:w-full w-[48vw]">
                <div className="md:mt-3 mt-1">
                    <p className="font-bebasneue md:text-[20px] text-[3.3vwpx] font-[400] text-[#262626]">{data.name} <span className=" font-[800] font-montserrat ">({data.symbol})</span></p>
                    <p className="font-montserrat text-[#262626B5] font-[700] md:text-[12px] text-[10px]">Created by {shortId(data.creator)}</p>
                </div>
                <div className="md:mt-3 mt-1">
                    <div className="bg-[#D9D9D9] md:rounded-[20px_20px_0px_0px] rounded-[10px] md:p-3 p-2">
                        <p className="text-[#262626C2] font-montserrat font-[800] text-[7.5px] leading-[9.2px] md:h-[30px] h-[35px] overflow-hidden">{data.description.slice(0,198)}...</p>

                    </div>
                    <div className="bg-[#262626] mt-1.5 md:py-0 py-[8px] md:rounded-[0px_0px_25px_25px] rounded-[10px] md:p-4 shadow-[6px_6px_13.8px_0px_#000000C9]">
                        <p className="font-montserrat font-[900] text-primary text-center 2xl:text-[20px] md:text-[14px] md:py-[8px] text-[10px]">MARKET CAP : 19.99K</p>

                    </div>
                </div>
            </div>
            </div>
      
    </div>
    </Link>
  )

}

export default Card

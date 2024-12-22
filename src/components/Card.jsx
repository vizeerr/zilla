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
    
    <div className="bg-white anim rounded-[30px] py-3 px-3 w-[316px] shadow-[8.55px_9.98px_13.61px_0px_#00000040]">
        <div className="flex items-center justify-between">

            <div className="flex gap-1 w-[105px] bg-[#262626] rounded-full py-1 justify-center items-center">
                <Image src={clock2} alt="" />
                <p className="font-[800] font-montserrat text-[8px] text-white">{formatTime(data.created_at)} ago </p>
            </div>
            <div className="flex gap-2 items-start">
                <Link href={data.website}>
                <div className="bg-[#262626] anim w-[26px] h-[26px] flex justify-center items-center rounded-full">
                    <Image src={wlogo} width={15} className="" alt="" />
                </div>
                </Link>
                <Link href={data.twitter}>
                <div className="bg-[#262626] anim w-[26px] h-[26px] flex justify-center items-center rounded-full">
                    <Image src={xlogo} width={15} className="" alt="" />
                </div>
                </Link>
                <Link href={data.telegram}>
                <div className="bg-[#262626] anim w-[26px] h-[26px] flex justify-center items-center rounded-full">
                    <Image src={tlogo} width={15} alt="" />
                </div>
                </Link>
            </div>
        </div>
        <div className="h-[195px] w-[293px] overflow-hidden rounded-3xl mt-3">
            <Image src={imgUrl(data.image)} unoptimized={true} width={293} height ={195} alt=""/>
        </div>
        <div className="mt-3">
            <p className="font-bebasneue text-[20px] font-[400] text-[#262626]">{data.name} <span className=" font-[800] font-montserrat ">({data.symbol})</span></p>
           <p className="font-montserrat text-[#262626B5] font-[700] text-[12px]">Created by {shortId(data.creator)}</p>
        </div>
        <div className="mt-3">
            <div className="bg-[#D9D9D9] rounded-[20px_20px_0px_0px] p-3">
                <p className="text-[#262626C2] font-montserrat font-[800] text-[7.5px] leading-[9.2px] h-[25px]">{data.description.slice(0,198)}...</p>

            </div>
            <div className="bg-[#262626] mt-1.5 rounded-[0px_0px_25px_25px] p-4 shadow-[6px_6px_13.8px_0px_#000000C9]">
                <p className="font-montserrat font-[900] text-primary text-center text-[20px]">MARKET CAP : 19.99K</p>

            </div>
        </div>
      
    </div>
    </Link>
  )

}

export default Card

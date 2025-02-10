import clock2 from "@/assets/clock2.png"
import xlogo from "@/assets/xlogo.png"
import tlogo from "@/assets/tlogo.png"
import wlogo from "@/assets/wlogo.png"
import pifico from "@/assets/pifico.jpg"
import Image from "next/image"
import { formatTime, imgUrl, shortId } from "@/helpers/helpers"
import Link from "next/link"

const Card = ({data}) => {

  return (
    <Link href={`/details/${data.token_address}`}>
    
    <div className="bg-white anim md:rounded-[1.3rem] rounded-[4.8vw] py-[2.4vw] 2xl:px-2.5 md:px-2 2xl:py-2 md:py-1 px-[2.5vw] 2xl:w-[19rem] md:w-[15rem] w-[92vw] shadow-[8.55px_9.98px_13.61px_0px_#00000040]">
        <div className="flex items-center justify-between">

            <div className="flex gap-1.5 md:w-auto w-[21vw] bg-[#262626] rounded-full md:px-2 md:py-1 py-[0.6vw] justify-center items-center">
                <div className=" 2xl:w-3.5 md:w-2.5 w-[3.6vw]">
                    <Image src={clock2} alt="" className="w-full" unoptimized={true} />
                </div>
                <p className="font-[800] font-montserrat 2xl:text-[0.5rem] md:text-[0.35rem] text-[1.6vw] text-white">{formatTime(data.created_at)} ago </p>
            </div>
            <div className="flex 2xl:gap-2 md:gap-1 gap-[1vw] items-start">
                <Link href={data.website}>
                <div className="bg-[#262626] anim 2xl:w-6 md:w-5  w-[5vw] 2xl:h-6 md:h-5 h-[5vw] flex justify-center items-center rounded-full 2xl:p-1.5 md:p-1 p-[4px]">
                    <Image src={wlogo}  className="" alt="" unoptimized={true}/>
                </div>
                </Link>
                <Link href={data.twitter}>
                <div className="bg-[#262626] anim 2xl:w-6 md:w-5  w-[5vw] 2xl:h-6 md:h-5 h-[5vw] flex justify-center items-center rounded-full 2xl:p-1.5 md:p-1.5 p-[5px]">
                    <Image src={xlogo}  className="" alt="" unoptimized={true}/>
                </div>
                </Link>
                <Link href={data.telegram}>
                <div className="bg-[#262626] anim 2xl:w-[1.55rem] md:w-5  w-[5vw] 2xl:h-6 md:h-5 h-[5vw] flex justify-center items-center rounded-full 2xl:p-1.5 md:p-1.5 p-[5px]">
                    <Image src={tlogo}  alt="" unoptimized={true}/>
                </div>
                </Link>
            </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-0 gap-[0.7rem] mt-[2.1vw] md:mt-0">

        
            <div className="2xl:h-48 md:h-36  md:w-full w-[35vw] h-[35vw] overflow-hidden md:rounded-[1.2vw] rounded-[4.1vw] md:mt-[0.6vw]">
                <Image src={pifico} unoptimized={true} className="w-full" width={400} height={400} alt=""/>
            </div>
        
            <div className="md:w-full w-[48vw]">
                <div className="md:mt-2.5 mt-[0.6vw]">
                    <p className="font-bebasneue  2xl:text-base md:text-sm text-[3.3vw] font-[400] text-[#262626]">{data.name} <span className=" font-[800] font-montserrat ">(${data.symbol})</span></p>
                    <p className="font-montserrat  text-[#303030b5] font-[700] 2xl:text-[0.6rem] md:text-[0.45rem] text-[1.9vw]">Created by {shortId(data.creator)}</p>
                </div>
                <div className="md:mt-2.5 mt-[1vw] font-montserrat ">
                    <div className="bg-[#D9D9D9] md:rounded-[1vw_1vw_0px_0px] rounded-[2.4vw] 2xl:p-2.5 md:p-1.5 p-[2vw]">
                        <p className="text-[#303030c2]  font-montserrat line-clamp-6  font-[800] 2xl:text-[0.52rem] md:text-[0.4rem] text-[1.7vw] leading-tight 2xl:h-[3.2rem] md:h-10 h-[12.4vw] overflow-hidden">{data.description}</p>

                    </div>
                    <div className="bg-[#262626] mt-2 md:py-0 py-[1.5vw] md:rounded-[0px_0px_1rem_1rem] rounded-[2.4vw] 2xl:p-3 md:p-2 shadow-[6px_6px_13.8px_0px_#000000C9]">
                        <p className="font-montserrat font-[900] text-primary text-center 2xl:text-[1rem] md:text-xs 2xl:py-2 md:py-2.5 text-[2.4vw]">MARKET CAP : 19.99K</p>

                    </div>
                </div>
            </div>
            </div>
      
    </div>
    </Link>
  )

}

export default Card
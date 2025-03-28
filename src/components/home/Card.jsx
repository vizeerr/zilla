import clock2 from "@/assets/clock2.png"
import xlogo from "@/assets/xlogo.png"
import tlogo from "@/assets/tlogo.png"
import wlogo from "@/assets/wlogo.png"
import wlogoprim from "@/assets/wlogoprim.png"
import pifico from "@/assets/pifico.jpg"
import unicornblack from "@/assets/unicornblack.png"
import komblack from "@/assets/komblack.png"
import Image from "next/image"
import { formatTime, imgUrl, shortenString, shortId } from "@/helpers/helpers"
import Link from "next/link"

const Card = ({data}) => {

  return (
    <Link href={`/details/${data.token_address}`}>
    
    <div className="bg-white anim md:rounded-[1.3rem] rounded-[4.8vw] py-[2.4vw] 2xl:px-2.5 md:px-2 2xl:py-2 md:py-1.5 px-[2.5vw] 2xl:w-[19rem] md:w-[15rem] w-[92vw] shadow-[8.55px_9.98px_13.61px_0px_#00000040]">
        <div className="flex items-center justify-between">
            
            <div className="flex items-center md:justify-between md:gap-0 gap-2 w-full">
                <div className="flex gap-1.5 md:w-auto w-[21vw] bg-[#262626] rounded-full md:px-2 md:py-1 py-[0.6vw] justify-center items-center">
                    <div className=" 2xl:w-3.5 md:w-2.5 w-[3.6vw]">
                        <Image src={clock2} alt="" className="w-full" unoptimized={true} />
                    </div>
                    <p className="font-[800] font-montserrat 2xl:text-[0.7rem] md:text-[0.6rem] text-[1.6vw] text-white">{formatTime(data.created_at)} ago </p>
                </div>
                <div className="flex 2xl:gap-2 md:gap-1 gap-[1vw] items-start">
                    <Link href={data.website}>
                        <div className="bg-primary border-2 border-sec anim 2xl:w-7 md:w-7  w-[6vw] 2xl:h-7 md:h-7 h-[6vw] flex justify-center items-center rounded-full 2xl:p-1 md:p-1 p-[3px]">
                            <Image src={unicornblack}  className="" alt="" unoptimized={true}/>
                        </div>
                    </Link>
                    <Link href={data.twitter}>
                    <div className="bg-primary border-2 border-sec anim 2xl:w-7 md:w-7  w-[6vw] 2xl:h-7 md:h-7 h-[6vw] flex justify-center items-center rounded-full 2xl:p-1 md:p-1 p-[3px]">
                        <Image src={komblack}  className="" alt="" unoptimized={true}/>
                    </div>
                    </Link>
                
                </div>
            </div>
           
            <div className="md:hidden flex  gap-2 ">
                    <Link href={data.website}>
                            <div className="bg-[#262626] anim 2xl:w-6 md:w-5  w-[5vw] 2xl:h-6 md:h-5 h-[5vw] flex justify-center items-center rounded-full 2xl:p-1.5 md:p-1 p-[4px]">
                                <Image src={wlogoprim}  className="" alt="" unoptimized={true}/>
                            </div>
                        </Link>
                        <Link href={data.twitter}>
                        <div className="bg-[#262626] brightness-75 anim 2xl:w-6 md:w-5  w-[5vw] 2xl:h-6 md:h-5 h-[5vw] flex justify-center items-center rounded-full 2xl:p-1.5 md:p-1.5 p-[5px]">
                            <Image src={xlogo}  className="" alt="" unoptimized={true}/>
                        </div>
                        </Link>
                        <Link href={data.telegram}>
                        <div className="bg-[#262626] brightness-50 anim 2xl:w-6 md:w-5  w-[5vw] 2xl:h-6 md:h-5 h-[5vw] flex justify-center items-center rounded-full 2xl:p-1.5 md:p-1.5 p-[5px]">
                            <Image src={tlogo}  alt="" className="me-[0.03rem]" unoptimized={true}/>
                        </div>
                        </Link>
            </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-0 gap-[0.7rem] mt-[2.1vw] md:mt-0">
            <div className="flex justify-end items-center md:mt-[0.6vw] md:gap-5 md:w-[98%]">
                    <div className="2xl:h-48 md:h-36  md:w-36 2xl:w-48 w-[35vw] h-[35vw] overflow-hidden md:rounded-[1.2vw] rounded-[4.1vw] ">
                        <Image src={pifico} unoptimized={true} className="w-full" width={400} height={400} alt=""/>
                    </div>
                    <div className="md:flex hidden flex-col gap-2 ">
                    <Link href={data.website}>
                            <div className="bg-[#262626] anim 2xl:w-6 md:w-5  w-[5vw] 2xl:h-6 md:h-5 h-[5vw] flex justify-center items-center rounded-full 2xl:p-1.5 md:p-1 p-[4px]">
                                <Image src={wlogoprim}  className="" alt="" unoptimized={true}/>
                            </div>
                        </Link>
                        <Link href={data.twitter}>
                        <div className="bg-[#262626] brightness-75 anim 2xl:w-6 md:w-5  w-[5vw]  flex justify-center items-center rounded-full 2xl:p-1.5 md:p-1.5 p-[5px]">
                            <Image src={xlogo}  className="" alt="" unoptimized={true}/>
                        </div>
                        </Link>
                        <Link href={data.telegram}>
                        <div className="bg-[#262626] brightness-50 anim 2xl:w-6 md:w-5  w-[5vw] 2xl:h-6 md:h-5 h-[5vw] flex justify-center items-center rounded-full 2xl:p-1.5 md:p-1.5 p-[5px]">
                            <Image src={tlogo}  alt="" className="me-[0.03rem]" unoptimized={true}/>
                        </div>
                        </Link>
                </div>

            </div>
            
        
            <div className="md:w-full w-[48vw]">
                <div className="md:mt-2.5 mt-[0.6vw]">
                    <p className="font-bebasneue  2xl:text-base md:text-sm text-[3.3vw] font-[400] text-[#262626]">{data.name} <span className=" font-[800] font-montserrat ">({data.symbol})</span></p>
                    <p className="font-montserrat  text-[#303030b5] font-[700] 2xl:text-[0.6rem] md:text-[0.45rem] text-[1.9vw]">Created by {shortenString(data.creator,4)}</p>
                </div>
                <div className="md:mt-2.5 mt-[1vw] font-montserrat ">
                    <div className="bg-[#D9D9D9] 2xl:rounded-[1rem_1rem_0px_0px] md:rounded-[0.8rem_0.8rem_0px_0px] rounded-[2.4vw] 2xl:p-2.5 md:p-2 p-[2vw]">
                        <p className="text-[#303030c2]  font-montserrat line-clamp-6  font-[800] 2xl:text-[0.52rem] md:text-[0.4rem] text-[1.7vw] leading-tight 2xl:h-[3.2rem] md:h-10 h-[12.4vw] overflow-hidden">{data.description}</p>

                    </div>
                    <div className="bg-[#262626] mt-2 md:py-0 py-[1.5vw] 2xl:rounded-[0px_0px_1rem_1rem] md:rounded-[0px_0px_0.8rem_0.8rem] rounded-[2.4vw] 2xl:p-2 md:p-2 shadow-[6px_6px_13.8px_0px_#000000C9]">
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
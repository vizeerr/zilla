import ReferalBottomView from '@/components/ReferalBottomView'
import ReferalUse from '@/components/ReferalUse'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'

const page = () => {
  return (
    <>
     
    <div className='py-[70px] 2xl:px-[79px] bg-[#111111] px-[5.5vw] '>
      <div>
        <p className='font-montserrat font-[900] 2xl:text-[59px] lg:text-[40px] text-[6vw] text-white w-[70%]'>Earn Together, <span className='text-primary'>Grow Together !</span></p>
        <p className='text-white text-opacity-40 font-montserrat font-[700] mt-4 2xl:text-[32px] lg:text-[28px]  text-[4vw]'>Welcome to the Referral Dashboard! Sharing PumpZilla isn’t just rewarding for you—it’s a win-win for your friends too! Here’s how it works:</p>
      </div>
      <div className='flex justify-center 2xl:gap-[61px] gap-[4.5vw] 2xl:mt-[60px]  mt-[30px] items-end'>
        <div className='bg-[#1B1C1E] relative  w-[502px] lg:pt-[20px] lg:pb-[40px] lg:px-[40px] py-[18px] px-[10px] 2xl:rounded-[45px] lg:rounded-[25px] rounded-[15px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F]'>
          <div className='absolute top-0 left-0 bg-primary 2xl:w-[77px] w-[6vw] text-center lg:rounded-[20px] rounded-[7px]'>
            <p className='font-montserrat font-[900] 2xl:text-[48px] text-[4vw]'>1</p>
            
          </div>
          <div>
              <p className='round text-white text-end 2xl:text-[68px] lg:text-[40px] text-[5.5vw]'><span className='text-primary'>Points</span> for You</p>
              <p className='text-white text-opacity-45 text-end  font-montserrat 2xl:text-[19px] lg:text-[15px] text-[2.5vw] font-[600]'>Every time someone uses your referral link to purchase a token, you earn points based on the total ETH they spent.</p>
            </div>
        </div>

        <div className='bg-[#1B1C1E] relative  w-[571px] lg:pt-[20px] lg:pb-[40px] lg:px-[40px] py-[18px] px-[10px] 2xl:rounded-[45px]  lg:rounded-[25px] rounded-[15px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F]'>
          <div className='absolute top-0 left-0 bg-primary 2xl:w-[77px] w-[6vw] text-center lg:rounded-[20px] rounded-[7px]'>
            <p className='font-montserrat font-[900] 2xl:text-[48px] text-[4vw]'>2</p>
            
          </div>
          <div>
              <p className='round text-white text-end  2xl:text-[68px] lg:text-[40px] text-[5.5vw]'><span className='text-primary'>Bonus Boost</span> for Them</p>
              <p className='text-white text-opacity-45 text-end  font-montserrat 2xl:text-[19px] lg:text-[15px] text-[2.5vw] font-[600]'>Each friend who uses your link gets a 50% bonus in points! They’ll see their points accumulate as a reward for joining through you, making everyone a part of the PumpZilla ecosystem.</p>
            </div>
        </div>
      </div>
      <div className='flex justify-center items-center  2xl:gap-[60px] gap-[30px] mt-[30px] lg:flex-row flex-col'>
      <ReferalUse/>
      <ReferalBottomView/>
      </div>
    </div>
    </>
  )
}

export default page

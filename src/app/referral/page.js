import ReferalBottomView from '@/components/ReferalBottomView'
import ReferalUse from '@/components/ReferalUse'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'

const page = () => {
  return (
    <>
     {/* <div className='sticky top-0 z-40'>
      <TopNavbar/>
    </div> */}
    <div className='py-[70px] sm:px-[79px] bg-[#111111] px-[5.5vw] '>
      <div>
        <p className='font-montserrat font-[900] sm:text-[59px] text-[6vw] text-white w-[70%]'>Earn Together, <span className='text-primary'>Grow Together !</span></p>
        <p className='text-white text-opacity-40 font-montserrat font-[700] mt-4 sm:text-[32px] text-[4vw]'>Welcome to the Referral Dashboard! Sharing PumpZilla isn’t just rewarding for you—it’s a win-win for your friends too! Here’s how it works:</p>
      </div>
      <div className='flex justify-center sm:gap-[61px] gap-[4.5vw] mt-[60px] items-end'>
        <div className='bg-[#1B1C1E] relative  w-[502px] sm:pt-[20px] sm:pb-[40px] sm:px-[40px] py-[18px] px-[10px] sm:rounded-[45px]  rounded-[15px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F]'>
          <div className='absolute top-0 left-0 bg-primary sm:w-[77px] w-[6vw] text-center sm:rounded-[20px] rounded-[7px]'>
            <p className='font-montserrat font-[900] sm:text-[48px] text-[4vw]'>1</p>
            
          </div>
          <div>
              <p className='round text-white text-end sm:text-[68px] text-[5.5vw]'><span className='text-primary'>Points</span> for You</p>
              <p className='text-white text-opacity-45 text-end  font-montserrat sm:text-[19px] text-[2.5vw] font-[600]'>Every time someone uses your referral link to purchase a token, you earn points based on the total ETH they spent.</p>
            </div>
        </div>

        <div className='bg-[#1B1C1E] relative  w-[571px] sm:pt-[20px] sm:pb-[40px] sm:px-[40px] py-[18px] px-[10px] sm:rounded-[45px]  rounded-[15px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F]'>
          <div className='absolute top-0 left-0 bg-primary sm:w-[77px] w-[6vw] text-center sm:rounded-[20px] rounded-[7px]'>
            <p className='font-montserrat font-[900] sm:text-[48px] text-[4vw]'>2</p>
            
          </div>
          <div>
              <p className='round text-white text-end  sm:text-[68px] text-[5.5vw]'><span className='text-primary'>Bonus Boost</span> for Them</p>
              <p className='text-white text-opacity-45 text-end  font-montserrat sm:text-[19px] text-[2.5vw] font-[600]'>Each friend who uses your link gets a 50% bonus in points! They’ll see their points accumulate as a reward for joining through you, making everyone a part of the PumpZilla ecosystem.</p>
            </div>
        </div>
      </div>
      <div className='flex justify-center items-center gap-[60px] mt-[30px] lg:flex-row flex-col'>
      <ReferalUse/>
      <ReferalBottomView/>
      </div>
    </div>
    </>
  )
}

export default page

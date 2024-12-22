import ReferalBottomView from '@/components/ReferalBottomView'
import ReferalUse from '@/components/ReferalUse'
import TopNavbar from '@/components/TopNavbar'
import React from 'react'

const page = () => {
  return (
    <>
     <div className='sticky top-0 z-40'>
      <TopNavbar/>
    </div>
    <div className='py-[70px] px-[79px] bg-[#111111]'>
      <div>
        <p className='font-montserrat font-[900] text-[59px] text-white'>Earn Together, <span className='text-primary'>Grow Together !</span></p>
        <p className='text-white text-opacity-40 font-montserrat font-[700] mt-4 text-[32px]'>Welcome to the Referral Dashboard! Sharing PumpZilla isn’t just rewarding for you—it’s a win-win for your friends too! Here’s how it works:</p>
      </div>
      <div className='flex justify-center gap-[61px] mt-[60px]'>
        <div className='bg-[#1B1C1E] relative  w-[502px] pt-[20px] pb-[40px] px-[40px] rounded-[45px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F]'>
          <div className='absolute top-0 left-0 bg-primary w-[77px] text-center rounded-[20px]'>
            <p className='font-montserrat font-[900] text-[48px]'>1</p>
            
          </div>
          <div>
              <p className='round text-white text-end text-[68px]'><span className='text-primary'>Points</span> for You</p>
              <p className='text-white text-opacity-45 text-end  font-montserrat text-[19px] font-[600]'>Every time someone uses your referral link to purchase a token, you earn points based on the total ETH they spent.</p>
            </div>
        </div>

        <div className='bg-[#1B1C1E] relative  w-[571px] pt-[20px] pb-[40px] px-[40px] rounded-[45px] shadow-[16.21px_16.21px_56.21px_0px_#0000004F]'>
          <div className='absolute top-0 left-0 bg-primary w-[77px] text-center rounded-[20px]'>
            <p className='font-montserrat font-[900] text-[48px]'>2</p>
            
          </div>
          <div>
              <p className='round text-white text-end text-[68px]'><span className='text-primary'>Bonus Boost</span> for Them</p>
              <p className='text-white text-opacity-45 text-end  font-montserrat text-[19px] font-[600]'>Each friend who uses your link gets a 50% bonus in points! They’ll see their points accumulate as a reward for joining through you, making everyone a part of the PumpZilla ecosystem.</p>
            </div>
        </div>
      </div>
      <div className='flex justify-center items-center gap-[60px] mt-[30px]'>
      <ReferalUse/>
      <ReferalBottomView/>
      </div>
    </div>
    </>
  )
}

export default page

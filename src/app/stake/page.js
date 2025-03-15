
import StakeGrid from '@/components/stake/StakeGrid'
import StakeTop from '@/components/stake/StakeTop'

const page = () => {
  return (
    <div className='bg-[#111111]'>
        <p className='xl:px-20 md:px-12 px-[5vw] my-10 font-montserrat font-[900] 2xl:text-4xl md:text-3xl text-[6vw] text-white'> Your Gateway to <span className='text-primary'>PumpZilla Rewards !</span></p>
          <StakeTop/>
        <div className='md:flex justify-center md:mt-12 hidden'>
            <div className='bg-white 2xl:w-52 lg:w-36 md:w-24 2xl:h-2 lg:h-1.5 md:h-1 rounded-full'>
            </div>
        </div>
        <div className='xl:px-20 md:px-12  px-[5vw] flex items-center 2xl:gap-8 lg:gap-6 md:gap-4 gap-[2.5vw] md:my-10 my-[8vw]'>
            <div className='bg-primary 2xl:w-2.5 lg:w-2 md:w-1 w-[2vw] rounded-full  2xl:h-20 lg:h-16 md:h-12 h-[13vw]'>
            </div>
            <div className='text-white font-montserrat 2xl:text-2xl lg:text-lg md:text-sm text-[3vw] font-[900] leading-tight'>
                <p>Turn your staked points into rewards with our exclusive <span className='text-primary'>Launchpool</span>.<br/> 
                Read the <span className='text-primary italic'>Documentation</span> for more details.</p>
            </div>
        </div>
        <StakeGrid/>
    </div>
  )
}

export default page


import StakeGrid from '@/components/StakeGrid'
import StakeTop from '@/components/StakeTop'

const page = () => {
  return (
    <div className='bg-[#111111]'>
        <p className='p-[4.6vw] font-montserrat font-[900] sm:text-[2.6vw] text-[6vw] text-white'> Your Gateway to <br/> <span className='text-primary'>PumpZilla Rewards !</span></p>
        
        <StakeTop/>
        <div className='sm:flex justify-center hidden'>
            <div className='bg-white w-[10vw] h-[0.4vw] rounded-full'>
            </div>
        </div>
        <div className='px-[4.6vw] flex items-center sm:gap-[1.2vw] gap-[2.5vw] sm:my-[3.3vw] my-[8vw]'>
            <div className='bg-primary sm:w-[0.6vw] w-[2vw] rounded-full  sm:h-[5.5vw] h-[13vw]'>
            </div>
            <div className='text-white font-montserrat sm:text-[1.8vw] text-[3vw] font-[900] leading-tight'>
                <p>Turn your staked points into rewards with our exclusive <span className='text-primary'>Launchpool</span>.<br/> 
                Read the <span className='text-primary'>Documentation</span> for more details.</p>
            </div>
        </div>
        <StakeGrid/>
    </div>
  )
}

export default page


import StakeGrid from '@/components/StakeGrid'
import StakeTop from '@/components/StakeTop'

const page = () => {
  return (
    <div className='bg-[#111111]'>
        <p className='p-[4.6vw] font-montserrat font-[900] text-[2.6vw] text-white'> Your Gateway to <br/> <span className='text-primary'>PumpZilla Rewards !</span></p>
        
        <StakeTop/>
        <div className='flex justify-center'>
            <div className='bg-white w-[10vw] h-[0.4vw] rounded-full'>
            </div>
        </div>
        <div className='px-[4.6vw] flex items-center gap-6 my-16'>
            <div className='bg-primary w-[0.6vw] rounded-full  h-[5.5vw]'>
            </div>
            <div className='text-white font-montserrat text-[1.8vw] font-[900] leading-tight'>
                <p>Turn your staked points into rewards with our exclusive <span className='text-primary'>Launchpool</span>.<br/> 
                Read the <span className='text-primary'>Documentation</span> for more details.</p>
            </div>
        </div>
        <StakeGrid/>
    </div>
  )
}

export default page

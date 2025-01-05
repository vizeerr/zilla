
import StakeGrid from '@/components/StakeGrid'
import StakeTop from '@/components/StakeTop'

const page = () => {
  return (
    <div className='bg-[#111111] p-[90px]'>
        <p className='font-montserrat font-[900] text-[50px] text-white'> Your Gateway to <br/> <span className='text-primary'>PumpZilla Rewards !</span></p>
        
        <StakeTop/>
        <div className='flex justify-center'>
            <div className='bg-white w-[200px] h-[8px] rounded-full'>
            </div>
        </div>
        <div className='flex items-center gap-6 my-16'>
            <div className='bg-primary w-[12px] rounded-full  h-[5.5vw]'>
            </div>
            <div className='text-white font-montserrat text-[35px] font-[900] leading-tight'>
                <p>Turn your staked points into rewards with our exclusive <span className='text-primary'>Launchpool</span>.<br/> 
                Read the <span className='text-primary'>Documentation</span> for more details.</p>
            </div>
        </div>
        <StakeGrid/>
    </div>
  )
}

export default page

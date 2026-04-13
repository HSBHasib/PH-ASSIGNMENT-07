import { FiPlus } from 'react-icons/fi'

const Banner = () => {

  return (
    <div className='space-y-5 w-3/4 mx-auto'>
      {/* Header */}
      <div className='flex flex-col justify-center items-center text-center space-y-5 pt-14 pb-4'>
        <h1 className='text-[#1F2937] text-4xl font-bold'>Friends to keep close in your life</h1>
        <p className='text-[#64748B] text-[14px] w-[55%] leading-5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <button className='flex items-center gap-0.5 active:scale-95 cursor-pointer px-4 py-2.5 rounded-sm bg-[#244D3F] text-[14px] font-medium text-white'><FiPlus size={21} /> Add a Friend</button>
      </div>

      {/* Cards */}
      <div className='flex justify-center gap-5 pb-5'>
        <div className='h-[106px] w-53 bg-white transition-all duration-200 hover:scale-105 flex flex-col items-center justify-center rounded-lg space-y-[2px] shadow-sm'>
          <h1 className='text-2xl font-bold text-[#244D3F]'>10</h1>
          <p className='text-[#64748B] text-[15px]'>Total Friends</p>
        </div>
        <div className='h-[106px] w-53 bg-white transition-all duration-200 hover:scale-105 flex flex-col items-center justify-center rounded-lg space-y-[2px] shadow-sm'>
          <h1 className='text-2xl font-bold text-[#244D3F]'>3</h1>
          <p className='text-[#64748B] text-[15px]'>On Track</p>
        </div>
        <div className='h-[106px] w-53 bg-white transition-all duration-200 hover:scale-105 flex flex-col items-center justify-center rounded-lg space-y-[2px] shadow-sm'>
          <h1 className='text-2xl font-bold text-[#244D3F]'>6</h1>
          <p className='text-[#64748B] text-[15px]'>Need Attention</p>
        </div>
        <div className='h-[106px] w-53 bg-white transition-all duration-200 hover:scale-105 flex flex-col items-center justify-center rounded-lg space-y-[2px] shadow-sm'>
          <h1 className='text-2xl font-bold text-[#244D3F]'>12</h1>
          <p className='text-[#64748B] text-[15px]'>Interactions This Month</p>
        </div>
      </div>
      
      <hr className='text-gray-200' />
    </div>
  )
}

export default Banner

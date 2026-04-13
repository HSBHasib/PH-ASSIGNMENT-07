import { FiPlus } from 'react-icons/fi'

const Banner = () => {

  return (
    <div className='flex justify-center'>
      {/* Header */}
      <div className='flex flex-col justify-center items-center text-center space-y-4 mt-14 mb-4'>
        <h1 className='text-[#1F2937] text-4xl font-bold'>Friends to keep close in your life</h1>
        <p className='text-[#64748B] text-[14px] w-[80%] leading-5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <button className='flex items-center gap-0.5 active:scale-95 cursor-pointer px-4 py-2.5 rounded-sm bg-[#244D3F] text-[14px] font-medium text-white'><FiPlus size={21} /> Add a Friend</button>
      </div>

      <div></div>
      
    </div>
  )
}

export default Banner

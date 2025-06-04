
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

const Buttons = () => {
  return (
    <div className='md:flex items-center gap-2 hidden'>
        <button className='size-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center'>
            <FaArrowLeftLong />
        </button>
        <button className='size-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center'>
            <FaArrowRightLong />
        </button>
    </div>
  )
}

export default Buttons

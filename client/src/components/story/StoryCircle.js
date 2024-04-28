import React from 'react'

const StoryCircle = () => {
  return (
    <div>
        <button className='w-[64px] flex flex-col justify-items-center items-center'>
            <div className='mt-[4px] mb-[8px] relative'>
                <canvas height={132} width={132} className='border-[2px] border-[green] rounded-full box-content w-[66px] h-[66px] absolute top-[-7px] left-[-7px]'></canvas>
                <span className='w-[56px] h-[56px] block rounded-full overflow-hidden relative bg-[black]'>
                    <img className='w-[100%] object-cover' src='https://images.pexels.com/photos/995978/pexels-photo-995978.jpeg?auto=compress&cs=tinysrgb&w=800' alt='img'/>
                </span>
            </div>
            <div className='text-black'>
                <div className='w-[74px] text-ellipsis overflow-hidden whitespace-nowrap tracking-tighter relative pr-[2px] text-xs leading-3'>Story Line to display</div>
            </div>
        </button>
    </div>
  )
}

export default StoryCircle
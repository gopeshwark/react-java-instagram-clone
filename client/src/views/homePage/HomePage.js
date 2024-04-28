import React from 'react';
import './HomePage.scss';
import StoryCircle from '../../components/story/StoryCircle';

const HomePage = () => {
  return (
    <div>
        <div className='w-[100%] flex justify-center'>
            <div className='max-w-[630px] w-full'>
                <div className='mt-4'>
                    <div className='flex gap-3'>
                    {[1,1,1,1,1,1]?.map(el => <StoryCircle/>)}
                    </div>
                    {/* Posts */}
                    <div></div>
                </div>
            </div>
            <div className='pl-[64px]'></div>
        </div>
    </div>
  )
}

export default HomePage
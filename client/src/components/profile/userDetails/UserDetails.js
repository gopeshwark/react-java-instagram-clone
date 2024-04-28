import React from 'react';
import { Link } from 'react-router-dom';
import { TiStarburstOutline } from "react-icons/ti";


const UserDetails = () => {
  return (
    <div>
        <div className='flex mb-10'>
            <div className='flex-[1] mr-5'>
                <img className='w-40 h-40 rounded-full mx-auto' src='https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381__340.jpg' alt='img'/>
            </div>
            <section className='flex-[2]'>
                <div className='flex justify-center items-start gap-y-3 flex-col flex-wrap h-full my-auto mx-0'>
                <div className='flex items-center'>
                    <div className='text-2xl font-normal mr-5'>username</div>
                    <div className='flex gap-3 items-center mr-2'>
                        <Link to={"/"} className='bg-[#363636] text-sm font-bold text-white hover:bg-[#262626] rounded-lg px-4 py-[6px]'>Edit Profile</Link>
                        <Link to={"/"} className='bg-[#363636] text-sm font-bold text-white hover:bg-[#262626] rounded-lg px-4 py-[6px]'>View archive</Link>
                    </div>
                    <div><TiStarburstOutline className='text-3xl'/></div>
                </div>
                <div className='flex items-center space-x-8'>
                    <div className=''><span className='font-bold'>3</span> posts</div>
                    <div className=''><span className='font-bold'>3</span> followers</div>
                    <div className=''><span className='font-bold'>3</span> following</div>
                </div>
                <div>
                    <div className='text-sm font-semibold'>
                    Full Name
                    </div>
                <div className='font-thin text-sm'>Bio</div>
                </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default UserDetails
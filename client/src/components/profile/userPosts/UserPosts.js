import React, { useState } from 'react'
import { postTabData } from './UserPosts.data'
import { AiFillHeart } from 'react-icons/ai';
import {FaComment} from 'react-icons/fa';
import './UserPosts.scss';

const UserPosts = () => {
    const [activeTab, setActiveTab] = useState(postTabData[0]?.id);
    
    const _handleTabClick = (tab) => {
        setActiveTab(tab?.id);
    }
    
    const _isActive = (id) => {
        return id === activeTab;
    }
    const activeClass = 'flex items-center gap-1.5 uppercase py-4 font-bold text-sm cursor-pointer border-t-2 border-gray-900 -m-0.5';
    const inactiveClass = 'flex items-center text-gray-600 gap-1.5 uppercase py-4 font-bold border-t-2 text-sm cursor-pointer -m-0.5'; 

  return (
    <div>
        <div className='w-full border-t-2 border-gray-200'>
            <ul className='flex items-center justify-center gap-12'>
            {postTabData?.map(tab => <li key={tab?.id} onClick={() => _handleTabClick(tab)} className={_isActive(tab?.id) ? activeClass : inactiveClass}>{tab?.icon} {tab?.label}</li>)}
            </ul>
        </div>
        <div>
            {activeTab === 'posts' && <div className='flex flex-wrap gap-[4px]'>{Array.from(Array(7)?.keys())?.map(post => <Posts/>)}</div>}
            {activeTab === 'saved' && <div className='flex flex-wrap gap-[4px]'>{Array.from(Array(7)?.keys())?.map(post => <Saved/>)}</div>}
            {activeTab === 'tagged' && <div className='flex flex-wrap gap-[4px]'>{Array.from(Array(7)?.keys())?.map(post => <Tagged/>)}</div>}
        </div>
    </div>
  )
}

const Posts = () => {
    return(
        <div className='post w-[296px] h-[296px] cursor-pointer'>
            <img className='h-full w-full bg-cover' src='https://cdn.pixabay.com/photo/2017/02/21/16/30/mexico-2086549_1280.jpg' alt='post img'/>
            <div className='post-overlay'>
                <div className='post-overlay__text flex items-center justify-center gap-6'>
                    

            <div className='flex items-center gap-1 font-bold text-xl'>
                <AiFillHeart/>
                <span>30</span>
            </div>
            <div className='flex items-center gap-1 font-bold text-xl'>
                <FaComment/>
                <span>30</span>
            </div>
                </div>
            </div>
        </div>
    )
}

const Saved = () => {
    return(
        <div>Saved</div>
    )
}

const Tagged = () => {
    return(
        <div>Saved</div>
    )
}

export default UserPosts
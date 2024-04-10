import React, { useState } from 'react'
import { postTabData } from './UserPosts.data'

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
        <div></div>
    </div>
  )
}

export default UserPosts
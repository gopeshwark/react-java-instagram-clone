import React, { useState } from 'react'
import './Sidebar.scss';
import {IoReorderThreeOutline} from 'react-icons/io5';
import { menuItem } from './Sidebar.data';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState(null);

    const _handleMenuClick = (item) => {
        setActiveItem(item?.id);
        navigate(item?.path);
    }

    const _isActive = (id) => {
        return id === activeItem;
    }
  return (
    <div className='sticky top-0 flex flex-col content-between h-[100vh] p-2 pl-5'>
        <div className='h-full'>
            <div>
                <img width={'w-40'} src='https://i.imgur.com/zqpwkLQ.png' alt='logo'/>
            </div>
            <div>
                {menuItem?.map(item => <div onClick={() => _handleMenuClick(item)} className='flex gap-4 items-center p-3 cursor-pointer'>
                    {_isActive(item?.id) ? item.activeIcon: item.icon}
                    <p className={_isActive(item?.id) ? 'font-bold' : 'font-semibold'}>{item?.label}</p>
                </div>)}
            </div>
        </div>
        <div className='flex gap-4 items-center cursor-pointer p-3'>
            <IoReorderThreeOutline className='text-2xl'/>
            <p className=''>More</p>
        </div>
    </div>
  )
}

export default Sidebar;
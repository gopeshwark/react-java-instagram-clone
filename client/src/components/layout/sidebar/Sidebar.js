import React, { useState } from 'react'
import './Sidebar.scss';
import {IoReorderThreeOutline} from 'react-icons/io5';
import { menuItem } from './Sidebar.data';
import { useNavigate } from 'react-router-dom';
import { InstaLogo } from '../../appIcons/appIcons';
import { RiMenuLine } from "react-icons/ri";


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
    <div className='fixed top-0 flex flex-col content-between h-[100vh] w-[244px] p-2 pl-2'>
        <div className='h-full'>
            <div>
                <div className='mt-2 p-3'>
                {/* <img width={'w-40'} src='https://i.imgur.com/zqpwkLQ.png' alt='logo'/> */}
                    <InstaLogo/>
                </div>
            </div>
            <div className='mt-4'>
                {menuItem?.map(item => <div onClick={() => _handleMenuClick(item)} className='flex gap-4 items-center p-3 cursor-pointer'>
                    {_isActive(item?.id) ? item.activeIcon: item.icon}
                    <p className={`${_isActive(item?.id) ? 'font-bold' : 'font-semibold'} text-md`}>{item?.label}</p>
                </div>)}
            </div>
        </div>
        <div className='flex gap-4 items-center cursor-pointer p-3'>
            <RiMenuLine className='text-3xl'/>
            <p className=''>More</p>
        </div>
    </div>
  )
}

export default Sidebar;
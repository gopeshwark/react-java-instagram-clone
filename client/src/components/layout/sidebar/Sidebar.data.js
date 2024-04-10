import {AiOutlineHome, AiFillHome, AiOutlineSearch, AiOutlineCompass, AiFillCompass, AiOutlineMessage, AiFillMessage, AiOutlineHeart, AiFillHeart, AiOutlinePlusCircle, AiFillPlusCircle} from 'react-icons/ai';
import {RiVideoFill, RiVideoLine} from 'react-icons/ri';
import {CgProfile} from 'react-icons/cg';

export const menuItem = [
    {
        id:"home",
        label:"Home",
        icon:<AiOutlineHome className="text-2xl"/>,
        activeIcon: <AiFillHome className="text-2xl"/>,
        path:"/"
    },
    {
        id:"search",
        label:"Search",
        icon:<AiOutlineSearch className="text-2xl"/>,
        activeIcon: <AiOutlineSearch className="text-2xl"/>,
        path:"/search"
    },
    {
        id:"explore",
        label:"Explore",
        icon:<AiOutlineCompass className="text-2xl"/>,
        activeIcon: <AiFillCompass className="text-2xl"/>,
        path:"/explore"
    },
    {
        id:"reels",
        label:"Reels",
        icon:<RiVideoLine className="text-2xl"/>,
        activeIcon: <RiVideoFill className="text-2xl"/>,
        path:"/reels"
    },
    {
        id:"message",
        label:"Message",
        icon:<AiOutlineMessage className="text-2xl"/>,
        activeIcon: <AiFillMessage className="text-2xl"/>,
        path:"/message"
    },
    {
        id:"notification",
        label:"Notification",
        icon:<AiOutlineHeart className="text-2xl"/>,
        activeIcon: <AiFillHeart className="text-2xl"/>,
        path:"/notification"
    },
    {
        id:"create",
        label:"Create",
        icon:<AiOutlinePlusCircle className="text-2xl"/>,
        activeIcon: <AiFillPlusCircle className="text-2xl"/>,
        path:"/create"
    },
    {
        id:"profile",
        label:"Profile",
        icon:<CgProfile className="text-2xl"/>,
        activeIcon: <CgProfile className="text-2xl"/>,
        path:"/profile"
    }
]
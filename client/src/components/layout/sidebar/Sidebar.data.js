import {AiOutlineHome, AiFillHome, AiOutlineSearch, AiOutlineCompass, AiFillCompass, AiOutlineMessage, AiFillMessage, AiOutlineHeart, AiFillHeart, AiOutlinePlusCircle, AiFillPlusCircle} from 'react-icons/ai';
import {RiVideoFill, RiVideoLine} from 'react-icons/ri';
import {CgProfile} from 'react-icons/cg';

export const menuItem = [
    {
        id:"home",
        label:"Home",
        icon:<AiOutlineHome className="text-3xl"/>,
        activeIcon: <AiFillHome className="text-3xl"/>,
        path:"/"
    },
    {
        id:"search",
        label:"Search",
        icon:<AiOutlineSearch className="text-3xl"/>,
        activeIcon: <AiOutlineSearch className="text-3xl"/>,
        path:"/search"
    },
    {
        id:"explore",
        label:"Explore",
        icon:<AiOutlineCompass className="text-3xl"/>,
        activeIcon: <AiFillCompass className="text-3xl"/>,
        path:"/explore"
    },
    {
        id:"reels",
        label:"Reels",
        icon:<RiVideoLine className="text-3xl"/>,
        activeIcon: <RiVideoFill className="text-3xl"/>,
        path:"/reels"
    },
    {
        id:"message",
        label:"Message",
        icon:<AiOutlineMessage className="text-3xl"/>,
        activeIcon: <AiFillMessage className="text-3xl"/>,
        path:"/message"
    },
    {
        id:"notification",
        label:"Notification",
        icon:<AiOutlineHeart className="text-3xl"/>,
        activeIcon: <AiFillHeart className="text-3xl"/>,
        path:"/notification"
    },
    {
        id:"create",
        label:"Create",
        icon:<AiOutlinePlusCircle className="text-3xl"/>,
        activeIcon: <AiFillPlusCircle className="text-3xl"/>,
        path:"/create"
    },
    {
        id:"profile",
        label:"Profile",
        icon:<CgProfile className="text-3xl"/>,
        activeIcon: <CgProfile className="text-3xl"/>,
        path:"/profile"
    }
]
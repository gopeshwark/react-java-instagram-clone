import { IoMdGrid } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import { BsPersonVideo } from "react-icons/bs";

export const postTabData = [
    {
        id:"posts",
        label:"Posts",
        icon:<IoMdGrid/>
    },
    {
        id:"saved",
        label:"Saved",
        icon:<IoBookmarkOutline/>
    },
    {
        id:"tagged",
        label:"Tagged",
        icon:<BsPersonVideo/>
    }
]
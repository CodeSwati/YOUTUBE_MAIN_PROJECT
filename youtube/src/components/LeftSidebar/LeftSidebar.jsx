import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import {MdOutlineExplore, MdOutlineSubscriptions} from "react-icons/md";
import './LeftSidebar.css';

function LeftSidebar() {
  return (
    <div className='container_leftsidebar'>
        <div className='icon_sidebar_div'>
            <AiOutlineHome size={22} className='icon_sidebar'/>
            <div className="text_sidebar_icon">Home</div>
        </div>
        <div className='icon_sidebar_div'>
            <MdOutlineExplore size={22} className='icon_sidebar'/>
            <div className="text_sidebar_icon">Explore</div>
        </div>
        <div className='icon_sidebar_div'>
            <MdOutlineSubscriptions size={22} className='icon_sidebar'/>
            <div className="text_sidebar_icon">Subscriptions</div>
        </div>
    </div>
  )
}

export default LeftSidebar
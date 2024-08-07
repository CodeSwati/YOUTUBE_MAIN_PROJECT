import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import {MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdVideoCall} from "react-icons/md";
import './LeftSidebar.css';
import {NavLink} from "react-router-dom"

function LeftSidebar() {
  return (
    <div className='container_leftsidebar'>
        <NavLink to={'/'} className='icon_sidebar_div'>
            <AiOutlineHome size={22} className='icon_sidebar'/>
            <div className="text_sidebar_icon">Home</div>
        </NavLink>
        <div className='icon_sidebar_div'>
            <MdOutlineExplore size={22} className='icon_sidebar'/>
            <div className="text_sidebar_icon">Explore</div>
        </div>
        <div className='icon_sidebar_div'>
            <MdOutlineSubscriptions size={22} className='icon_sidebar'/>
            <div className="text_sidebar_icon">Subscriptions</div>
        </div>
        <NavLink to={'/library'} className='icon_sidebar_div'>
            <MdOutlineVideoLibrary size={22} className='icon_sidebar'/>
            <div className="text_sidebar_icon">Library</div>
        </NavLink>
        <NavLink to={'/videocall'} className='icon_sidebar_div'>
            <MdVideoCall size={22} className="icon_sidebar" />
            <div className="text_sidebar_icon">Videocall</div>
       </NavLink>
    </div>
  )
}

export default LeftSidebar
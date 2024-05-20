import React from 'react'
import './Navbar.css'
import SearchBar from '../SearchBar/SearchBar'
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

function Navbar() {

  //const currentUser=null;
  const currentUser={
    result:{
      email:"xyz@mail.com",
      joinedOn:"2222-07-15T09:57:23.432"
    },
  };
  return (
    <div className='container_navbar'>
       <div className="burger_logo_navbar">
           <div className='burger'>
             <p></p>
             <p></p>
             <p></p>
           </div>
            <NavLink to={'/'} className='logo'>
                <img src='https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png'/>
                <p className='logo_title'>YouTube</p>
            </NavLink>
       </div>
       
       <SearchBar/>
       <RiVideoAddLine size={22} className='video_icon' />
       <div className='apps_boxes'>
         <p className='app_box'></p>
         <p className='app_box'></p>
         <p className='app_box'></p>
         <p className='app_box'></p>
         <p className='app_box'></p>
         <p className='app_box'></p>
         <p className='app_box'></p>
         <p className='app_box'></p>
         <p className='app_box'></p>
       </div>
       <IoMdNotificationsOutline size={22} className='bell_icon'/>
       <div className="auth_cont_navbar">
         {currentUser ?(
            <>
            <div className='channel_logo'>
              <p className='fstchar_logo'>
                {
                  currentUser?.result.name?(
                    <>
                    {currentUser?.result.name.charAt(0).toUpperCase()}
                    </>
                  ):(<>
                  {currentUser?.result.email.charAt(0).toUpperCase()}
                  </>)
                }
              </p>
            </div> 
            </>
          ):(
            <>
                <p className="auth_btn">
                  <BiUserCircle size={22}/>
                  <b>Sign in</b>
                </p>
            </>
          )}
        
       </div>
    </div>
  )
}

export default Navbar
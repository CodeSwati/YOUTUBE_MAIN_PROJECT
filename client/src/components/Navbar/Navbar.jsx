import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Navbar.css'
import SearchBar from '../SearchBar/SearchBar'
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import {gapi} from 'gapi-script'
import {login} from '../../actions/auth'
import Auth from '../../pages/Auth/Auth';
import { useState } from 'react';



function Navbar({toggleDrawer, setEditcreatebtn}) {
  const [AuthBtn, setAuthBtn] = useState(false);

  // const currentUser=null;
  // const currentUser={
  //   result:{
  //     email:"xyz@mail.com",
  //     joinedOn:"2222-07-15T09:57:23.432"
  //   },
  // };
    
  
  
   const currentUser = useSelector(state => state.currentUserReducer) ;
  console.log(currentUser);  
  
  
  
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId : 
          "48369460539-r8qlj8hkps6v9ms81tj1tho33b5e7uun.apps.googleusercontent.com"
        ,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const dispatch = useDispatch();
 
   const onSuccess = (response)=>{
     const Email = response?.profileObj.email;
     console.log(response);
     dispatch(login({email : Email}))
   }

   const onFailure =(res)=>{
       console.log("failed response",res);
   }

  return (
    <>
    <div className='container_navbar'>
       <div className="burger_logo_navbar">
           <div className='burger' onClick={()=>toggleDrawer()}>
             <p></p>
             <p></p>
             <p></p>
           </div>
            <Link to={'/'} className='logo'>
                <img src='https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png'/>
                <p className='logo_title'>YouTube</p>
            </Link>
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
         {currentUser ? (
            <>
            <div className='channel_logo' onClick={()=> setAuthBtn(true)}>
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
                      <GoogleLogin  
                        clientId = {
                        "48369460539-r8qlj8hkps6v9ms81tj1tho33b5e7uun.apps.googleusercontent.com"
                        }
                        onSuccess= {onSuccess}
                        onFailure= {onFailure}
                        render={(renderProps)=>(
                          <p className="auth_btn"  onClick={renderProps.onClick}>
                          <BiUserCircle  size={22}/>
                          <b>Sign in</b>
                          </p>
                          )}
                      />
                     

                      
            </>
          )}
        
       </div>
    </div>
    {
      AuthBtn &&  
      <Auth
      setEditcreatebtn={setEditcreatebtn}
      setAuthBtn ={setAuthBtn}
      user= {currentUser}
      />
    }
    </>
  )
}

export default Navbar
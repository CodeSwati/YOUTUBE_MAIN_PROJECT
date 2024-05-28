import React from 'react'
import './Auth.css'
import { GoogleLogout } from 'react-google-login';
import { BiLogOut } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../actions/currentUser';

function Auth({user, setAuthBtn, setEditcreateChannelbtn}) {
    const dispatch = useDispatch();
    const onLogoutSuccess= ()=>{
        dispatch(setCurrentUser(null))
        alert ("log out sucessfully")
    }
    
  return (
    <div className='auth_container' onClick={()=> setAuthBtn(false)}>
        <div className='auth_container2'>
            <p className="user_details">
                <div className="channel_logo">
                    <p className="fstchar_logo">
                        { user?.result.name?(
                             <> {
                              user?.result.name.charAt(0).toUpperCase()
                             }</>
                             ) : ( <>
                                { user?.result.email.charAt(0).toUpperCase()
                                } </>
                            )}
                            </p>
                        </div>
                     <div className="email_auth">
                        {user?.result.email}
                     </div>
                    </p>

                    <div className='btns_auth'>
                        {
                        user?.result.name?(
                            <> 
                            <input type="submit" className='btn_auth' value=" your channel"
                            onClick={()=> setEditcreateChannelbtn(true)}/>
                            </>
                            ) : ( 
                            <>
                            <input type="submit" className='btn_auth' value="create your channel"
                             onClick={()=> setEditcreateChannelbtn(true)}/>
                            </>
                            )
                        }
                    </div>

                <div>
                    <GoogleLogout
                      clientId = {
                        "48369460539-r8qlj8hkps6v9ms81tj1tho33b5e7uun.apps.googleusercontent.com"
                    }

                    onLogoutSuccess = {onLogoutSuccess}   

                    render={(renderProps) =>(
                        <div onClick={renderProps.onClick} className='btn_auth'>
                            <BiLogOut/>
                            logout  
                        </div>
                    )}
                        
                    />
                </div>
        </div>
    </div>
  )
}

export default Auth
import React, { useEffect } from 'react'
import {FaEdit, FaUpload} from 'react-icons/fa'
import './DescribeChannel.css'
import { useDispatch,useSelector} from 'react-redux'
import { updateChannelData } from "../../actions/channelUser";

function DescribeChannel({setEditcreateChannelbtn , Cid, setViduploadpage}) {

  const dispatch = useDispatch();
    const channels = useSelector(state => state?.channelReducers);

    const currentChannel = channels.filter((c)=> c._id === Cid)[0];
    const currentUser = useSelector(state => state?.currentUserReducer);
    useEffect(() => {
      if (currentUser) {
        dispatch(updateChannelData(currentUser?.result._id,{points:currentUser?.result.points})); // Fetch updated user data
      }
    }, [dispatch, currentUser]);

  return (
    <div className='container3_channel'>
        <div className="channel_logo_channel">
            <b>
                {currentChannel?.name.charAt(0).toUpperCase()}
            </b>
        </div>
        <div className="description_channel">
            <b>{currentChannel?.name}</b>
            <p>{currentChannel?.desc}</p>
        </div>
       { currentUser?.result._id === currentChannel?._id &&(
        <>
          
        <p className='editbtn_channel' onClick={()=> {setEditcreateChannelbtn(true)}}>
            <FaEdit />
            <b>Edit Channel</b>
        </p>
        <p className='uploadbtn_channel' onClick={()=>setViduploadpage(true)}>
            <FaUpload />
            <b>Upload Channel</b>
        </p>

        <div className="user_points">
            <b> Total Points: {currentUser?.result.points} </b>
            (Relogin to update points.)
          </div>

        </>)
       }
        
    </div>
  )
}

export default DescribeChannel
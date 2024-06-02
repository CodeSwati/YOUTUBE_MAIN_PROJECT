import React from 'react'
import {FaEdit, FaUpload} from 'react-icons/fa'
import './DescribeChannel.css'
import {useSelector} from 'react-redux'
function DescribeChannel({setEditcreateChannelbtn , Cid, setViduploadpage}) {

    const channels = useSelector(state => state?.channelReducers);

    const currentChannel = channels.filter((c)=> c._id === Cid)[0];
    const currentUser = useSelector(state => state?.currentUserReducer)
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
       { currentUser?.result._id === currentChannel?._id &&
        <>
          
        <p className='editbtn_channel' onClick={()=> {setEditcreateChannelbtn(true)}}>
            <FaEdit />
            <b>Edit Channel</b>
        </p>
        <p className='uploadbtn_channel' onClick={()=>setViduploadpage(true)}>
            <FaUpload />
            <b>Upload Channel</b>
        </p>

        </>
       }
        
    </div>
  )
}

export default DescribeChannel
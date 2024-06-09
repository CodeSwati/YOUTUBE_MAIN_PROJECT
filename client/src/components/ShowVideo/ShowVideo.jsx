import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment' 
import './ShowVideo.css'
function ShowVideo({vid}) {
    // console.log(vid);
  return (
    <>
        <Link to= {`/videopage/${vid?._id}`}>
            <video 
            // src={`http://localhost:5500/${vid.filePath}`}
            src={`https://youtube-main-project.onrender.com/${vid.filePath}`}
             className='video_ShowVideo'
            />   
        </Link>
        <div className="video_description">
            <div className="channel_logo">
                <div className="fstchar_logo">
                    <>{vid?.Uploder?.charAt(0).toUpperCase()}</>
                </div>
            </div>
            <div className="video_details">
                <p className="title_vid_showvideo"> {vid?.videoTitle}</p>
                <p className="vid_views_uploadtime">{vid?.Uploder}</p>
                <p className="vid_views_uploadtime">{vid?.Views} views
                <div className="dot"></div> {vid.Uploder} {moment(vid?.createdAt).fromNow()}</p>
            </div>
        </div>
    </>
    
  )
}

export default ShowVideo
import React from 'react'
import {Link} from 'react-router-dom'
import './ShowVideo.css'
function ShowVideo({vid}) {
  return (
    <>
        <Link to={`/videopage/${vid?._id}`}>
            <video src={`${vid.video_src}`}
             className='video_ShowVideo'
            />   
        </Link>
        <div className="video_description">
            <div className="channel_logo">
                <div className="fstchar_logo">
                    <>{vid?.uploader?.charAt(0).toUpperCase()}</>
                </div>
            </div>
            <div className="video_details">
                <p className="title_vid_showvideo"> title</p>
                <p className="vid_views_uploadtime">1-1-2001</p>
                <p className="vid_views_uploadtime">5 views 
                <div className="dot"></div> video uploaded 1 year</p>
            </div>
        </div>
    </>
    
  )
}

export default ShowVideo
import React from 'react'
import vid from '../../components/Video/vid.mp4'
import './VideoPage.css'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns'
import Comments from '../../components/Comments/Comments'
function VideoPage() {
  return (
    <>
     <div className='container_videopage'>
        <div className='container2_videopage'>
           <div className="video_display_screen_videopage">
               <video src={vid} className={"video_showvideo_videopage"}
               controls autoPlay
               >
               </video>
               <div className="video_details_videopage">
                  <div className="video_btns_title_videopage_cont">
                    <p className="video_title_videopage">Title</p>
                    <div className="views_date_btns_videopage">
                        <div className="views_videopage">
                                 5 views <div className="dot"></div> uploaded 1 year ago
                        </div>  
                        <LikeWatchLaterSaveBtns/>
                    </div>
                  </div>
                  
                  <div className="chanel_details_videopage">
                    <b className='chanel_logo_videopage'>
                        <p>C</p>
                    </b>
                    <p className="chanel_name_videopage">Channel name</p>
                  </div>
                  <div className="comments_videopage">
                    <h2>
                        <u>Comments</u>
                    </h2>
                  <Comments/>
                    
                  </div>
               </div>
           </div>
           <div className="morevideobar">
              More Video
           </div>
        </div>
     </div>
    </>
   
  )
}

export default VideoPage
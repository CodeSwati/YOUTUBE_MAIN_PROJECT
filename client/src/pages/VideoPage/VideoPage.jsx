import React, { useEffect } from 'react'
import vid from '../../components/Video/vid.mp4'
import moment from 'moment'
import './VideoPage.css'
import {useDispatch, useSelector} from 'react-redux'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns'
import Comments from '../../components/Comments/Comments'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { addToHistory } from '../../actions/History'
import { viewVideo } from '../../actions/video'
function VideoPage() {
  const {vid} = useParams();
  
  // const channels = useSelector(state => state?.channelReducers);
    // const currentChannel = channels.filter(c=>c._id === vid)[0];
  const vids = useSelector(state => state.videoReducer);
  // console.log(vids);
  const vv = vids.data?.filter(q=> q._id=== vid)[0];
  console.log(vv);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state?.currentUserReducer);
  const handleHistory =()=> {
     dispatch(
      addToHistory(
        {
          videoId : vid,
          Viewer : currentUser?.result._id,
        }
      )
     );
    
  };

  const handleViews = ()=>{
      dispatch(viewVideo({
        id: vid
      }))
  }

  useEffect(()=>{
    if(currentUser){
    handleHistory();
    }
    handleViews();
  } , []);
  
  return (
    <>
     <div className='container_videopage'>
        <div className='container2_videopage'>
           <div className="video_display_screen_videopage">
               <video src={`http://localhost:5500/${vv?.filePath}` }
               className={"video_showvideo_videopage"}
               controls autoPlay
               >
               </video>
               <div className="video_details_videopage">
                  <div className="video_btns_title_videopage_cont">
                    <p className="video_title_videopage">{vv?.videoTitle}</p>
                    <div className="views_date_btns_videopage">
                        <div className="views_videopage">
                                 {vv?.Views} views <div className="dot"></div> 
                                  {moment(vv?.createdAt).fromNow()}

                        </div>  
                        <LikeWatchLaterSaveBtns vv={vv} vid={vid}/>
                    </div>
                  </div>
                  
                  <Link to={`/channel/${vv?.videoChannel}`} className="chanel_details_videopage">
                    <b className='chanel_logo_videopage'>
                        <p>{vv?.fileName.charAt(0).toUpperCase()}</p>
                    </b>
                    <p className="chanel_name_videopage">{vv?.Uploder}</p>
                  </Link>
                  <div className="comments_videopage">
                    <h2>
                        <u>Comments</u>
                    </h2>
                  <Comments  videoId={vv._id}/>
                    
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
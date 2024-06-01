import React, { useEffect, useState } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {MdPlaylistAddCheck} from 'react-icons/md'
import {AiFillLike, AiOutlineLike ,AiFillDislike,  AiOutlineDislike} from 'react-icons/ai'
import {RiPlayListAddFill, RiHeartAddFill, RiShareForwardLine} from 'react-icons/ri'
import './LikeWatchLaterSaveBtns.css'
import { useDispatch, useSelector } from 'react-redux'
import { likeVideo } from '../../actions/video'
import { addTolikedVideo, deletelikedVideo } from '../../actions/likedVideo'
import { addTowatchLater, deleteWatchLater } from '../../actions/watchLater'


function LikeWatchLaterSaveBtns({vv, vid}) {

  const currentUser = useSelector(state => state?.currentUserReducer);
  const dispatch =useDispatch();
  const [savevideo, setSavevideo]= useState(false);
  const [dislikebtn, setDislikebtn] = useState(false);
  const [likebtn, setLikebtn] = useState(false);

  const likedVideoList = useSelector(state => state.likedVideoReducer);
  const watchLaterList = useSelector(state => state.watchLaterReducer);

  useEffect(()=>{
    likedVideoList?.data.filter(q=> q?.videoId === vid && q?.Viewer === currentUser?.result._id)
    .map(m=> setLikebtn(true) );

    watchLaterList?.data.filter(q=> q?.videoId === vid && q?.Viewer === currentUser?.result._id)
    .map(m=> setSavevideo(true) );
  }, []);

  const toggleSavedVideo = ()=>{

    if (currentUser) {
      if(savevideo){
        setSavevideo(false);
        dispatch(deleteWatchLater({
          videoId : vid,
          Viewer : currentUser?.result._id,
        })
      );


      }else{
        setSavevideo(true);
        dispatch(addTowatchLater({
          videoId : vid,
          Viewer : currentUser?.result._id,
        }))
      }
    }else {
      alert ("plz login to save the video!")
    }
    
  };
  const toggleLikeBtn =(e, lk)=>{
    if (currentUser) {
      if(likebtn){
        setLikebtn(false);
        dispatch(likeVideo({
          id: vid, 
          Like: lk - 1,
        })
      );

      dispatch(deletelikedVideo({
        videoId : vid,
        Viewer : currentUser?.result._id,
      }))
      }else{
        setLikebtn(true);
        dispatch(likeVideo({
          id: vid, 
          Like: lk + 1,
        })
      );
      dispatch(addTolikedVideo({
        videoId : vid,
        Viewer : currentUser?.result._id,
      }))
      setDislikebtn(false);
    }
    } else{
      alert("plz login to give a like")
    }
  }
  const toggleDislikeBtn =(e, lk)=>{

    if (currentUser) {
      if(dislikebtn){
        setDislikebtn(false);
      }else{
        setDislikebtn(true);
        if (likebtn) {
          dispatch(likeVideo({
            id: vid, 
            Like: lk - 1,
          })
        );
        dispatch(deletelikedVideo({
          videoId : vid,
          Viewer : currentUser?.result._id,
        }))
        }
        setLikebtn(false);
    }
    } else{
      alert("plz login to give a dislike")
    }
  }

  return (
    <div className='btns_cont_videopage'>
       <div className="btn_videopage">
           <BsThreeDots/>
       </div>

       <div className="btn_videopage">
         <div className="like_videopage" onClick={(e)=>toggleLikeBtn(e,vv?.Like)}>
          {
            likebtn ?
            ( <>
            <AiFillLike size={22} className='btns_videopage'/>
            </> ) :
            ( <>
            <AiOutlineLike size={22} className='btns_videopage'/>
            </> )
          } 
          <b>{vv?.Like}</b>       
        </div>

        <div className="like_videopage" onClick={(e)=> toggleDislikeBtn(e, vv?.Like)}>
          {
            dislikebtn ?
            ( <>
            <AiFillDislike size={22} className='btns_videopage'/>
            </> ) :
            ( <>
            <AiOutlineDislike size={22} className='btns_videopage'/>
            </> )
          } 
          <b>Dislike</b>       
        </div>

        <div className="like_videopage" onClick={()=> toggleSavedVideo()}>
          {
            savevideo ?
            ( <>
            <MdPlaylistAddCheck size={22} className='btns_videopage'/>
            <b>Saved</b>
            </> ) :
            ( <>   
            <RiPlayListAddFill size={22} className='btns_videopage'/>
            <b>Save</b>
            </> )
          }        
        </div>

        <div className="like_videopage">
          <>
            <RiHeartAddFill size={22} className='btns_videopage'/>
            <b>Thanks</b>   
          </>        
        </div>

        <div className="like_videopage">
          <>
            <RiShareForwardLine size={22} className='btns_videopage'/>
            <b>Share</b>   
          </>        
        </div>

       </div>
    </div>
  )
}

export default LikeWatchLaterSaveBtns
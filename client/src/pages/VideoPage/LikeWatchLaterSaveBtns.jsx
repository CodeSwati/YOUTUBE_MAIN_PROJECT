import React, { useState } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {MdPlaylistAddCheck} from 'react-icons/md'
import {AiFillLike, AiOutlineLike ,AiFillDislike,  AiOutlineDislike} from 'react-icons/ai'
import {RiPlayListAddFill, RiHeartAddFill, RiShareForwardLine} from 'react-icons/ri'
import './LikeWatchLaterSaveBtns.css'
function LikeWatchLaterSaveBtns() {

  const [savevideo, setSavevideo]= useState(true);
  const [dislikebtn, setDislikebtn] = useState(false);
  const [likebtn, setLikebtn] = useState(false);

  const toggleSavedVideo = ()=>{
    if(savevideo){
      setSavevideo(false);
    }else{
      setSavevideo(true);
    }
  }
  const toggleLikeBtn =()=>{
    if(likebtn){
      setLikebtn(false);
    }else{
      setLikebtn(true);
    }
  }
  const toggleDislikeBtn =()=>{
    if(dislikebtn){
      setDislikebtn(false);
    }else{
      setDislikebtn(true);
    }
  }

  return (
    <div className='btns_cont_videopage'>
       <div className="btn_videopage">
           <BsThreeDots/>
       </div>

       <div className="btn_videopage">
         <div className="like_videopage" onClick={()=>toggleLikeBtn()}>
          {
            likebtn ?
            ( <>
            <AiFillLike size={22} className='btns_videopage'/>
            </> ) :
            ( <>
            <AiOutlineLike size={22} className='btns_videopage'/>
            </> )
          } 
          <b>1</b>       
        </div>

        <div className="like_videopage" onClick={()=> toggleDislikeBtn()}>
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
            <RiPlayListAddFill size={22} className='btns_videopage'/>
            <b>Save</b>
            </> ) :
            ( <>
            <MdPlaylistAddCheck size={22} className='btns_videopage'/>
            <b>Saved</b>
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
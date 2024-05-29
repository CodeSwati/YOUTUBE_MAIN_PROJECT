import React, {useState} from 'react'
import './VideoUpload.css'
import { useDispatch, useSelector } from 'react-redux';
import { uploadvideo } from '../../actions/video';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar'
function VideoUpload({setViduploadpage}) {

  const currentUser = useSelector(state => state.currentUserReducer) ;
  const dispatch = useDispatch();

  const [title, setTitle] = useState(" ");
  const [videofile, setVideofile] = useState(" ");
  
  const handleSetVideofile=(e)=>{
    setVideofile(e.target.files[0]);
  }

  const [progress, setProgress] = useState(0);

  const fileoptions = {
     onUploadProgress : (progressEvent)=>{
      const {loaded, total} = progressEvent;
      const percentage = Math.floor(((loaded/1000)*100)/(total/1000));
      setProgress(percentage);
      if(percentage=== 100){
        setTimeout(function() {
          
        }, 3000);
      }
     }
  }

  const uploadVideofile =()=>{
    if (!title) {
      alert("plz enter a title of the video");
    }else if (!videofile) {
      alert("plz attach a video file")
    }else if (videofile.size > 1000000) {
      alert("plz attach video file less than 1kb")
    }else{
      const filedata = new FormData();
      filedata.append("file", videofile);
      filedata.append("title", title);
      filedata.append("uploader", currentUser?.result.name);
      filedata.append("channel", currentUser?.result._id);
      console.log(filedata);

      dispatch(
        uploadvideo({
        filedata: filedata,
        fileoptions: fileoptions,
      })
    );
   }
  };
  return (
    <div className='container_VidUpload'>
      <input type='submit'
      onClick={()=> setViduploadpage(false)}
        name='text'
        value={"X"} 
        className='ibtn_x' 
      />
      <div className='container2_VidUpload'>
        <div className="ibox_div_vidupload">
          <input type='text' 
          onChange={(e)=> {setTitle(e.target.value)}}
            maxLength={30}
            placeholder='Enter title of your video'
            className='ibox_vidupload' 
          />
       

      <label htmlFor='file' className='ibox_vidupload btn_vidUpload'>
        <input type='file' name='file' 
        onChange={e => {handleSetVideofile(e)}}
        className='ibox_vidupload' 
        style={{fontSize : "1rem"}}
        />       
      </label>
      
     </div>
     <div className="ibox_div_vidupload">
         <input  type='submit'
         onClick={(e)=>{uploadVideofile(e)}} 
         value='upload' 
         className='ibox_vidupload btn_vidUpload'
         />
     </div>
     <div className='loader ibox_div_vidupload'>
      <CircularProgressbar 
      value={progress}
      text = {`${progress}`}
      styles = {buildStyles({
          rotation:0.25,
          strokeLinecap: "butt",
            textSize : "20px",
            pathTransitionDuration:0.5,
            pathColor : `rgba(255,255,255,${progress/100})`,
            textColor: "#f88",
            trailColor :"#adff2f",
            backgroundColor: "#3e98c7"

        })
      }
      />
     </div>
     </div>
    </div>
  
  )
}

export default VideoUpload
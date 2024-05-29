import React from 'react'
import Home from '../pages/Home/Home'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Library from '../pages/Library/Library';
import YourVideo from '../pages/YourVideo/YourVideo';
import WatchHistory from '../pages/WatchHistory/WatchHistory';
import WatchLater from '../pages/WatchLater/WatchLater';
import LikedVideo from '../pages/LikedVideo/LikedVideo'
import VideoPage from '../pages/VideoPage/VideoPage';
import Channel from '../pages/Channel/Channel';

function AllRoutes({setEditcreateChannelbtn,setViduploadpage}) {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/library' element={<Library/>} />
        <Route path='/yourvideos' element={<YourVideo/>} />
        <Route path='/watchhistory' element={<WatchHistory/>} />
        <Route path='/watchlater' element={<WatchLater/>} />
        <Route path='/likedvideo' element={<LikedVideo/>} />
        <Route path='/videopage/:vid' element={<VideoPage/>} />
        <Route path='/channel/:Cid'
         element={<Channel 
          setViduploadpage={setViduploadpage}
         setEditcreateChannelbtn={setEditcreateChannelbtn} />}/>
        

    </Routes>
  )
}

export default AllRoutes
import React from 'react'
import vid from '../../components/Video/vid.mp4'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
import './YourVideo.css'

function YourVideo() {
  const vids =[
    {
      _id : 1,
      video_src: vid,
      chanel: "cdd",
      uploader: "abc",
      title: "video 1",
      description: "discription of video 1"
    },
    {
      _id : 2,
      video_src: vid,
      chanel: "cdd",
      uploader: "abc",
      title: "video 2",
      description: "discription of video 2"
    },
    {
      _id : 3,
      video_src: vid,
      chanel: "add",
      uploader: "abc",
      title: "video 3",
      description: "discription of video 3"
    },
    {
      _id : 4,
      video_src: vid,
      chanel: "add",
      uploader: "abc",
      title: "video 4",
      description: "discription of video 4"
    },
  ];
  return (
    <div className='container_pages_app'>
      <LeftSidebar/>
        <div className='container2_pages_app'> 
        <div className="container_yourvideo">
          <h1>Your Videos</h1>
          <ShowVideoGrid vids={vids}/>
        </div>
        
        </div>
    </div>
  )
}

export default YourVideo
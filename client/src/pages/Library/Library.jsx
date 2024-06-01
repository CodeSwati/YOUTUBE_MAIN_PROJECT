import React from 'react'
import './Library.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import vid from '../../components/Video/vid.mp4'
import {FaHistory} from 'react-icons/fa'
import WHLVideolist from '../../components/WHL/WHLVideolist'
import { MdOutlineWatchLater } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
import { useSelector } from 'react-redux'

function Library() {

  const watchLaterList = useSelector(state => state.watchLaterReducer);
  const historyList = useSelector(state => state.HistoryReducer);
  const likedVideoList = useSelector(state => state.likedVideoReducer);
  const currentUser = useSelector(state => state?.currentUserReducer);


  // const vids =[
  //   {
  //     _id : 1,
  //     video_src: vid,
  //     channel: "cdd",
  //     Uploder: "abc",
  //     title: "video 1",
  //     description: "discription of video 1"
  //   },
  //   {
  //     _id : 2,
  //     video_src: vid,
  //     channel: "cdd",
  //     Uploder: "abc",
  //     title: "video 2",
  //     description: "discription of video 2"
  //   },
  //   {
  //     _id : 3,
  //     video_src: vid,
  //     channel: "add",
  //     Uploder: "abc",
  //     title: "video 3",
  //     description: "discription of video 3"
  //   },
  //   {
  //     _id : 4,
  //     video_src: vid,
  //     channel: "add",
  //     Uploder: "abc",
  //     title: "video 4",
  //     description: "discription of video 4"
  //   },
  // ];
  
  return (
    <div className='container_pages_app'>
      <LeftSidebar/>
        <div className='container2_pages_app'> 
           <div className="container_librarypage">
               <div className="container2_librarypage">
                <h1 className="title_container_librarypage">
                  <b>
                    <FaHistory/>
                  </b>
                  <b>History</b>
                </h1>
                <div className="container_videolist_librarypage">
                  <WHLVideolist
                  page={"history"}
                  currentUser ={currentUser?.result._id}
                   VideoList={historyList}/>
                </div>
               </div>
           </div>
           <div className="container_librarypage">
               <div className="container2_librarypage">
                <h1 className="title_container_librarypage">
                  <b>
                    <MdOutlineWatchLater/>
                  </b>
                  <b>Watch Later</b>
                </h1>
                <div className="container_videolist_librarypage">
                  <WHLVideolist
                  page={"watchlater"}
                  currentUser ={currentUser?.result._id}
                  VideoList={watchLaterList}/>
                </div>
               </div>
           </div>
           <div className="container_librarypage">
               <div className="container2_librarypage">
                <h1 className="title_container_librarypage">
                  <b>
                    <AiOutlineLike/>
                  </b>
                  <b>Liked Videos</b>
                </h1>
                <div className="container_videolist_librarypage">
                  <WHLVideolist
                  page={"likedvideos"}
                  currentUser ={currentUser?.result._id}
                  VideoList={likedVideoList}/>
                </div>
               </div>
           </div>
            
        </div>
    </div>
  )
}

export default Library
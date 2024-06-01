import './App.css'
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './components/AllRoutes'
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import DrawerSidebar from './components/LeftSidebar/DrawerSidebar';
import CreateEditChannel from './pages/Channel/CreateEditChannel';
import { useDispatch } from 'react-redux';
import { fetchAllChannel } from './actions/channelUser';
import VideoUpload from './pages/VideoUpload/VideoUpload';
import { getAllVideo } from './actions/video';
import { getAllLikedVideo } from './actions/likedVideo';
import { getAllwatchLater } from './actions/watchLater';
import { getAllHistory } from './actions/History';


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllChannel());
    dispatch(getAllVideo());
    dispatch(getAllLikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
  },[dispatch]);

   const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
   });

   const toggleDrawer=()=>{
        if(toggleDrawerSidebar.display==="none"){
          setToggleDrawerSidebar({
            display: "flex"
          })
        }else{
          setToggleDrawerSidebar({
            display: "none"
          })
        }
   }

   const [viduploadpage, setViduploadpage] = useState(false);
   
  const [editcreateChannelbtn , setEditcreateChannelbtn] = useState(false);

  return (
    <Router >
      {
        viduploadpage && <VideoUpload setViduploadpage={setViduploadpage}/>
      }
      {
        editcreateChannelbtn && <CreateEditChannel setEditcreateChannelbtn={setEditcreateChannelbtn}/>
      }
      
      <Navbar 
      setEditcreateChannelbtn={setEditcreateChannelbtn}
      toggleDrawer={toggleDrawer}
      />
      {
        <DrawerSidebar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
        />
      }
     <AllRoutes setViduploadpage={setViduploadpage} setEditcreateChannelbtn={setEditcreateChannelbtn}/>
    </Router>
  );
}

export default App

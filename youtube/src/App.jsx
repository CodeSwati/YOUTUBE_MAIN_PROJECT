import './App.css'
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './components/AllRoutes'
import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import DrawerSidebar from './components/LeftSidebar/DrawerSidebar';


function App() {

  return (
    <Router >
      <Navbar/>
      {
        <DrawerSidebar/>
      }
     <AllRoutes/>
    </Router>
  );
}

export default App

import React from 'react'
import Home from '../pages/Home/Home'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Library from '../pages/Library/Library';

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/library' element={<Library/>} />
    </Routes>
  )
}

export default AllRoutes
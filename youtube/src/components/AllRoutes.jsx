import React from 'react'
import Home from '../pages/Home/Home'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />

    </Routes>
  )
}

export default AllRoutes
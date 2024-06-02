import React from 'react'
// import './Search.css'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

function Search() {


    const {searchQuery} = useParams();
  const vids = useSelector(state => state.videoReducer)?.data?.filter(q=> 
    q?.videoTitle.toUpperCase().include(searchQuery.toUpperCase())).reverse();
 
 
    
  return (
    <div className='container_pages_app'>
      <LeftSidebar/>
        <div className='container2_pages_app'>
            <h2 style={{color:"white"}}>Search Results for {searchQuery}.......</h2> 
          <ShowVideoGrid vids={vids}/>
        </div>
        
    </div>
  )
}

export default Search